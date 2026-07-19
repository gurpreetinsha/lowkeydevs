import type { APIRoute } from 'astro';
import { platforms } from '../../tools/list/username-availability-checker/platforms';

export const prerender = false;

// Real browser headers to avoid blocking
const HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
  'Accept-Language': 'en-US,en;q=0.9',
  'Cache-Control': 'no-cache',
  'Pragma': 'no-cache',
};

export const GET: APIRoute = async ({ url }) => {
  const username = url.searchParams.get('username')?.trim();
  const platformId = url.searchParams.get('platform')?.trim();

  if (!username) {
    return new Response(
      JSON.stringify({ success: false, error: 'Username is required.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // Basic validation of username format
  if (username.length < 1 || username.length > 50 || /[^a-zA-Z0-9_\-\.]/.test(username)) {
    return new Response(
      JSON.stringify({ success: false, error: 'Invalid username format.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const platform = platforms.find(p => p.id === platformId);
  if (!platform) {
    return new Response(
      JSON.stringify({ success: false, error: 'Invalid platform.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const timeout = platform.timeout || 5000; // default 5s timeout
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    let status: 'Available' | 'Taken' | 'Unknown' = 'Unknown';
    const profileUrl = platform.url.replace('{username}', encodeURIComponent(username));
    const checkTargetUrl = (platform.checkUrl || platform.url).replace('{username}', encodeURIComponent(username));

    if (platform.strategy === 'dns') {
      // DNS-over-HTTPS check via Cloudflare
      const dnsUrl = `https://cloudflare-dns.com/dns-query?name=${checkTargetUrl}&type=A`;
      const dnsRes = await fetch(dnsUrl, {
        method: 'GET',
        headers: { 'Accept': 'application/dns-json' },
        signal: controller.signal
      });

      if (dnsRes.ok) {
        const dnsData = await dnsRes.json();
        // Cloudflare DNS JSON format: Status 3 is NXDOMAIN (available), Status 0 is NOERROR (usually taken)
        if (dnsData.Status === 3) {
          status = 'Available';
        } else if (dnsData.Status === 0 && dnsData.Answer && dnsData.Answer.length > 0) {
          status = 'Taken';
        } else {
          status = 'Available'; // No DNS record exists, likely available
        }
      } else {
        status = 'Unknown';
      }
    } else if (platform.strategy === 'api') {
      // Custom APIs
      if (platform.id === 'reddit') {
        const res = await fetch(checkTargetUrl, { headers: HEADERS, signal: controller.signal });
        if (res.ok) {
          const data = await res.json();
          // Reddit returns true if username_available is true (meaning it is Available)
          status = data === true ? 'Available' : 'Taken';
        } else {
          status = 'Unknown';
        }
      } else if (platform.id === 'bluesky') {
        const res = await fetch(checkTargetUrl, { headers: HEADERS, signal: controller.signal });
        if (res.status === 400 || res.status === 404) {
          // Actor not found error
          status = 'Available';
        } else if (res.ok) {
          status = 'Taken';
        } else {
          status = 'Unknown';
        }
      } else if (platform.id === 'gitlab') {
        const res = await fetch(checkTargetUrl, { headers: HEADERS, signal: controller.signal });
        if (res.ok) {
          const users = await res.json();
          status = Array.isArray(users) && users.length === 0 ? 'Available' : 'Taken';
        } else {
          status = 'Unknown';
        }
      } else if (platform.id === 'minecraft') {
        const res = await fetch(checkTargetUrl, { headers: HEADERS, signal: controller.signal });
        if (res.status === 204 || res.status === 404) {
          status = 'Available';
        } else if (res.status === 200) {
          status = 'Taken';
        } else {
          status = 'Unknown';
        }
      } else if (platform.id === 'chess') {
        const res = await fetch(checkTargetUrl, { headers: HEADERS, signal: controller.signal });
        if (res.status === 404) {
          status = 'Available';
        } else if (res.ok) {
          status = 'Taken';
        } else {
          status = 'Unknown';
        }
      } else if (platform.id === 'hackernews') {
        const res = await fetch(checkTargetUrl, { headers: HEADERS, signal: controller.signal });
        if (res.ok) {
          const user = await res.json();
          status = user === null ? 'Available' : 'Taken';
        } else {
          status = 'Unknown';
        }
      }
    } else if (platform.strategy === 'body_excludes') {
      const res = await fetch(checkTargetUrl, { headers: HEADERS, signal: controller.signal });
      if (res.ok) {
        const bodyText = await res.text();
        if (platform.matchString && bodyText.includes(platform.matchString)) {
          status = 'Available';
        } else {
          status = 'Taken';
        }
      } else if (res.status === 404) {
        status = 'Available';
      } else {
        status = 'Unknown';
      }
    } else {
      // Default: status check (200 Taken, 404 Available)
      const res = await fetch(checkTargetUrl, {
        method: 'GET',
        headers: HEADERS,
        signal: controller.signal
      });

      if (res.status === 404) {
        status = 'Available';
      } else if (res.ok) {
        status = 'Taken';
      } else if (res.status === 403 || res.status === 429) {
        status = 'Unknown'; // Aggressive bot protection
      } else {
        status = 'Unknown';
      }
    }

    // Set cache control for 5 minutes browser/CDN cache on successful lookups
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    if (status !== 'Unknown') {
      headers['Cache-Control'] = 'public, max-age=300';
    } else {
      headers['Cache-Control'] = 'no-store';
    }

    return new Response(
      JSON.stringify({
        success: true,
        platformId: platform.id,
        platformName: platform.name,
        status,
        profileUrl
      }),
      { status: 200, headers }
    );
  } catch (err: any) {
    const isAbort = err.name === 'AbortError';
    console.error(`Check failed for ${platform.name}: ${isAbort ? 'Timeout' : err.message}`);
    return new Response(
      JSON.stringify({
        success: true,
        platformId: platform.id,
        platformName: platform.name,
        status: 'Unknown',
        profileUrl: platform.url.replace('{username}', encodeURIComponent(username))
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store'
        }
      }
    );
  } finally {
    clearTimeout(timeoutId);
  }
};
