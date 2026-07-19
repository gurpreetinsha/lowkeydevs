import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'username-availability-checker',
  title: 'Username Availability Checker',
  description: 'Check username availability across 80+ social media, developer, gaming, design, and domain platforms instantly from a single search.',
  category: 'dev-utils',
  keywords: [
    'username availability',
    'check username',
    'username checker',
    'social media username check',
    'handle availability',
    'domain checker',
    'username search',
    'github username availability',
    'instagram name checker'
  ],
  icon: 'Terminal',
  faqs: [
    {
      question: 'Is it safe to check usernames here?',
      answer: 'Yes. We only perform real-time lookups and do not save, store, or log any usernames you check. Your ideas and brand handles remain entirely private.'
    },
    {
      question: 'How does the tool check availability?',
      answer: 'Since browsers block direct requests to external websites due to security policies (CORS), we route the checks through our server. The server performs HTTP requests, official API calls, or DNS record checks depending on the target platform.'
    },
    {
      question: 'Why do some platforms show "Unknown"?',
      answer: 'Some websites employ aggressive DDoS protection (like Cloudflare Turnstile) or block automated server-side requests. When a check is blocked or times out, we return "Unknown" instead of failing the entire search.'
    },
    {
      question: 'Can I check domain names too?',
      answer: 'Yes! We perform live DNS lookups for popular domains (.com, .io, .dev, .ai, .app) using Cloudflare DNS-over-HTTPS. If no DNS records exist, the domain is marked as Available.'
    }
  ],
  educationalContent: {
    whatIsIt: 'A Username Availability Checker is a utility that checks if a specific handle or name is available to register across various online platforms, from social media (Instagram, X, TikTok) to developer platforms (GitHub, npm, PyPI) and domain registries (.com, .io, .ai). This allows creators, developers, and brands to secure a consistent identity across the web.',
    howToUse: '1. Enter the username you want to check in the search input.\n2. Click "Check Availability" or press Enter to run parallel lookups.\n3. Browse the platform cards, filter results by status, or view profile links if taken.\n4. Save your findings by copying the username, sharing search results, or downloading the full scan as a JSON report.',
    proTips: [
      'Save usernames you plan to use to your Favorites for quick retrieval.',
      'Check Domain results to see if the matching .com, .dev, or .ai domains are free for your website.',
      'Review the Recently Checked list to recall usernames you queried in earlier sessions.'
    ]
  }
};
