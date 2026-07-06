import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase';

export const prerender = false;

// Simple sanitization helper to escape HTML tags to prevent XSS in the admin panel
function sanitizeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

export const POST: APIRoute = async ({ request }) => {
  try {
    if (!supabase) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'Database client is not configured. Please ensure SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set in your environment variables.' 
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const body = await request.json().catch(() => null);

    if (!body) {
      return new Response(
        JSON.stringify({ success: false, message: 'Invalid JSON body.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const {
      suggestion,
      email,
      page_url,
      page_title,
      route,
      tool_slug,
      tool_category,
      browser,
      browser_version,
      os,
      device_type,
      screen_width,
      screen_height,
      language,
      timezone,
      theme,
      referrer,
      user_agent,
      time_on_page,
      scroll_percent,
      anonymous_id,
      session_id,
    } = body;

    // 1. Validation
    if (!suggestion || typeof suggestion !== 'string' || suggestion.length < 20 || suggestion.length > 1000) {
      return new Response(
        JSON.stringify({ success: false, message: 'Suggestion must be between 20 and 1000 characters.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (email && (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
      return new Response(
        JSON.stringify({ success: false, message: 'Please provide a valid email address.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!anonymous_id || typeof anonymous_id !== 'string') {
      return new Response(
        JSON.stringify({ success: false, message: 'Missing tracking identifier.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 2. Rate Limiting (Prevent submissions from same anonymous_id within last 30 seconds)
    const { data: recentSubmissions, error: rateLimitError } = await supabase
      .from('suggestions')
      .select('created_at')
      .eq('anonymous_id', anonymous_id)
      .order('created_at', { ascending: false })
      .limit(1);

    if (rateLimitError) {
      console.error('Supabase rate-limit check failed:', rateLimitError.message);
    } else if (recentSubmissions && recentSubmissions.length > 0) {
      const lastTime = new Date(recentSubmissions[0].created_at).getTime();
      const diffSeconds = (Date.now() - lastTime) / 1000;
      if (diffSeconds < 30) {
        return new Response(
          JSON.stringify({ 
            success: false, 
            message: `You are submitting suggestions too quickly. Please wait ${Math.ceil(30 - diffSeconds)} seconds.` 
          }),
          { status: 429, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }

    // 3. Sanitization
    const sanitizedSuggestion = sanitizeHtml(suggestion.trim());
    const sanitizedEmail = email ? sanitizeHtml(email.trim()) : null;

    // 4. DB Insertion
    const { error: insertError } = await supabase
      .from('suggestions')
      .insert({
        suggestion: sanitizedSuggestion,
        email: sanitizedEmail,
        page_url: page_url ? String(page_url) : null,
        page_title: page_title ? String(page_title) : null,
        route: route ? String(route) : null,
        tool_slug: tool_slug ? String(tool_slug) : null,
        tool_category: tool_category ? String(tool_category) : null,
        browser: browser ? String(browser) : null,
        browser_version: browser_version ? String(browser_version) : null,
        os: os ? String(os) : null,
        device_type: device_type ? String(device_type) : null,
        screen_width: screen_width ? Number(screen_width) : null,
        screen_height: screen_height ? Number(screen_height) : null,
        language: language ? String(language) : null,
        timezone: timezone ? String(timezone) : null,
        theme: theme ? String(theme) : null,
        referrer: referrer ? String(referrer) : null,
        user_agent: user_agent ? String(user_agent) : null,
        time_on_page: time_on_page ? Number(time_on_page) : 0,
        scroll_percent: scroll_percent ? Number(scroll_percent) : 0,
        anonymous_id,
        session_id: session_id ? String(session_id) : null,
      });

    if (insertError) {
      console.error('Supabase insert failed:', insertError.message);
      return new Response(
        JSON.stringify({ success: false, message: 'Failed to save suggestion to the database.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Suggestion sent successfully!' }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (err: any) {
    console.error('API Error in suggestions:', err);
    return new Response(
      JSON.stringify({ success: false, message: 'An unexpected server error occurred.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
