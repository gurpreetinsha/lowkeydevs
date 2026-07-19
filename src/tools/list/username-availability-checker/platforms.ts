export interface Platform {
  id: string;
  name: string;
  category: 'social' | 'developer' | 'gaming' | 'streaming' | 'community' | 'design' | 'business' | 'domain';
  url: string;
  checkUrl?: string;
  strategy: 'status' | 'body_excludes' | 'body_includes' | 'dns' | 'api';
  matchString?: string;
  statusMatch?: {
    available?: number[];
    taken?: number[];
  };
}

export const platforms: Platform[] = [
  // ================= SOCIAL MEDIA =================
  {
    id: 'instagram',
    name: 'Instagram',
    category: 'social',
    url: 'https://instagram.com/{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'twitter',
    name: 'X (Twitter)',
    category: 'social',
    url: 'https://x.com/{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'facebook',
    name: 'Facebook',
    category: 'social',
    url: 'https://facebook.com/{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'threads',
    name: 'Threads',
    category: 'social',
    url: 'https://threads.net/@{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    category: 'social',
    url: 'https://tiktok.com/@{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'snapchat',
    name: 'Snapchat',
    category: 'social',
    url: 'https://snapchat.com/add/{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'youtube',
    name: 'YouTube',
    category: 'social',
    url: 'https://youtube.com/@{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'pinterest',
    name: 'Pinterest',
    category: 'social',
    url: 'https://pinterest.com/{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'reddit',
    name: 'Reddit',
    category: 'social',
    url: 'https://reddit.com/user/{username}',
    checkUrl: 'https://www.reddit.com/api/username_available.json?user={username}',
    strategy: 'api'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    category: 'social',
    url: 'https://linkedin.com/in/{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'discord',
    name: 'Discord',
    category: 'social',
    url: 'https://discord.com',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'telegram',
    name: 'Telegram',
    category: 'social',
    url: 'https://t.me/{username}',
    strategy: 'body_excludes',
    matchString: 'tgme_page_extra'
  },
  {
    id: 'whatsapp-channels',
    name: 'WhatsApp Channels',
    category: 'social',
    url: 'https://whatsapp.com/channel/{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'tumblr',
    name: 'Tumblr',
    category: 'social',
    url: 'https://{username}.tumblr.com',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'mastodon',
    name: 'Mastodon',
    category: 'social',
    url: 'https://mastodon.social/@{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'bluesky',
    name: 'Bluesky',
    category: 'social',
    url: 'https://bsky.app/profile/{username}.bsky.social',
    checkUrl: 'https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile?actor={username}.bsky.social',
    strategy: 'api'
  },
  {
    id: 'bereal',
    name: 'BeReal',
    category: 'social',
    url: 'https://bereal.com/{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'lemon8',
    name: 'Lemon8',
    category: 'social',
    url: 'https://lemon8-app.com/{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'twitch',
    name: 'Twitch',
    category: 'social',
    url: 'https://twitch.tv/{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'kick',
    name: 'Kick',
    category: 'social',
    url: 'https://kick.com/{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },

  // ================= DEVELOPER PLATFORMS =================
  {
    id: 'github',
    name: 'GitHub',
    category: 'developer',
    url: 'https://github.com/{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'gitlab',
    name: 'GitLab',
    category: 'developer',
    url: 'https://gitlab.com/{username}',
    checkUrl: 'https://gitlab.com/api/v4/users?username={username}',
    strategy: 'api'
  },
  {
    id: 'bitbucket',
    name: 'Bitbucket',
    category: 'developer',
    url: 'https://bitbucket.org/{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'stackoverflow',
    name: 'Stack Overflow',
    category: 'developer',
    url: 'https://stackoverflow.com/users/{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'hackerrank',
    name: 'HackerRank',
    category: 'developer',
    url: 'https://hackerrank.com/{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'leetcode',
    name: 'LeetCode',
    category: 'developer',
    url: 'https://leetcode.com/{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'codepen',
    name: 'CodePen',
    category: 'developer',
    url: 'https://codepen.io/{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'replit',
    name: 'Replit',
    category: 'developer',
    url: 'https://replit.com/@{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'devto',
    name: 'Dev.to',
    category: 'developer',
    url: 'https://dev.to/{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'kaggle',
    name: 'Kaggle',
    category: 'developer',
    url: 'https://kaggle.com/{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'dockerhub',
    name: 'Docker Hub',
    category: 'developer',
    url: 'https://hub.docker.com/u/{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'npm',
    name: 'npm',
    category: 'developer',
    url: 'https://www.npmjs.com/~{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'pypi',
    name: 'PyPI',
    category: 'developer',
    url: 'https://pypi.org/user/{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'huggingface',
    name: 'Hugging Face',
    category: 'developer',
    url: 'https://huggingface.co/{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'vercel',
    name: 'Vercel',
    category: 'developer',
    url: 'https://vercel.com/{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'netlify',
    name: 'Netlify',
    category: 'developer',
    url: 'https://{username}.netlify.app',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'glitch',
    name: 'Glitch',
    category: 'developer',
    url: 'https://glitch.com/@{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },

  // ================= GAMING =================
  {
    id: 'steam',
    name: 'Steam',
    category: 'gaming',
    url: 'https://steamcommunity.com/id/{username}',
    strategy: 'body_excludes',
    matchString: 'The Specified Profile Could Not Be Found'
  },
  {
    id: 'epicgames',
    name: 'Epic Games',
    category: 'gaming',
    url: 'https://epicgames.com',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'xbox',
    name: 'Xbox',
    category: 'gaming',
    url: 'https://xboxgamertag.com/search/{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'playstation',
    name: 'PlayStation Network',
    category: 'gaming',
    url: 'https://psnprofiles.com/{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'nintendo',
    name: 'Nintendo',
    category: 'gaming',
    url: 'https://nintendo.com',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'roblox',
    name: 'Roblox',
    category: 'gaming',
    url: 'https://www.roblox.com/user.aspx?username={username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'minecraft',
    name: 'Minecraft',
    category: 'gaming',
    url: 'https://minecraft.net',
    checkUrl: 'https://api.mojang.com/users/profiles/minecraft/{username}',
    strategy: 'api'
  },
  {
    id: 'riotgames',
    name: 'Riot Games',
    category: 'gaming',
    url: 'https://riotgames.com',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'ea',
    name: 'EA',
    category: 'gaming',
    url: 'https://ea.com',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'battlenet',
    name: 'Battle.net',
    category: 'gaming',
    url: 'https://battle.net',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'chess',
    name: 'Chess.com',
    category: 'gaming',
    url: 'https://www.chess.com/member/{username}',
    checkUrl: 'https://api.chess.com/pub/player/{username}',
    strategy: 'api'
  },

  // ================= STREAMING & ENTERTAINMENT =================
  {
    id: 'spotify',
    name: 'Spotify',
    category: 'streaming',
    url: 'https://open.spotify.com/user/{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'soundcloud',
    name: 'SoundCloud',
    category: 'streaming',
    url: 'https://soundcloud.com/{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'vimeo',
    name: 'Vimeo',
    category: 'streaming',
    url: 'https://vimeo.com/{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'dailymotion',
    name: 'Dailymotion',
    category: 'streaming',
    url: 'https://dailymotion.com/{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'letterboxd',
    name: 'Letterboxd',
    category: 'streaming',
    url: 'https://letterboxd.com/{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'imdb',
    name: 'IMDb',
    category: 'streaming',
    url: 'https://imdb.com',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },

  // ================= COMMUNITY & FORUMS =================
  {
    id: 'quora',
    name: 'Quora',
    category: 'community',
    url: 'https://quora.com/profile/{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'medium',
    name: 'Medium',
    category: 'community',
    url: 'https://medium.com/@{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'substack',
    name: 'Substack',
    category: 'community',
    url: 'https://{username}.substack.com',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'patreon',
    name: 'Patreon',
    category: 'community',
    url: 'https://patreon.com/{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'buymeacoffee',
    name: 'Buy Me a Coffee',
    category: 'community',
    url: 'https://buymeacoffee.com/{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'producthunt',
    name: 'Product Hunt',
    category: 'community',
    url: 'https://producthunt.com/@{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'hackernews',
    name: 'Hacker News',
    category: 'community',
    url: 'https://news.ycombinator.com/user?id={username}',
    checkUrl: 'https://hacker-news.firebaseio.com/v0/user/{username}.json',
    strategy: 'api'
  },

  // ================= DESIGN & CREATIVE =================
  {
    id: 'dribbble',
    name: 'Dribbble',
    category: 'design',
    url: 'https://dribbble.com/{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'behance',
    name: 'Behance',
    category: 'design',
    url: 'https://behance.net/{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'figma',
    name: 'Figma Community',
    category: 'design',
    url: 'https://figma.com/@{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'deviantart',
    name: 'DeviantArt',
    category: 'design',
    url: 'https://deviantart.com/{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'adobeportfolio',
    name: 'Adobe Portfolio',
    category: 'design',
    url: 'https://{username}.myportfolio.com',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },

  // ================= BUSINESS & PRODUCTIVITY =================
  {
    id: 'notion',
    name: 'Notion',
    category: 'business',
    url: 'https://notion.so/{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'slack',
    name: 'Slack',
    category: 'business',
    url: 'https://slack.com',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'trello',
    name: 'Trello',
    category: 'business',
    url: 'https://trello.com/{username}',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'asana',
    name: 'Asana',
    category: 'business',
    url: 'https://asana.com',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'airtable',
    name: 'Airtable',
    category: 'business',
    url: 'https://airtable.com',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },
  {
    id: 'clickup',
    name: 'ClickUp',
    category: 'business',
    url: 'https://clickup.com',
    strategy: 'status',
    statusMatch: { available: [404], taken: [200] }
  },

  // ================= DOMAINS =================
  {
    id: 'namecheap',
    name: 'Namecheap Domain (.com)',
    category: 'domain',
    url: 'https://www.namecheap.com/domains/registration/results/?domain={username}.com',
    checkUrl: '{username}.com',
    strategy: 'dns'
  },
  {
    id: 'godaddy',
    name: 'GoDaddy Domain (.com)',
    category: 'domain',
    url: 'https://www.godaddy.com/domainsearch/find?domainToCheck={username}.com',
    checkUrl: '{username}.com',
    strategy: 'dns'
  },
  {
    id: 'com-domain',
    name: '.com Domain',
    category: 'domain',
    url: 'https://{username}.com',
    checkUrl: '{username}.com',
    strategy: 'dns'
  },
  {
    id: 'io-domain',
    name: '.io Domain',
    category: 'domain',
    url: 'https://{username}.io',
    checkUrl: '{username}.io',
    strategy: 'dns'
  },
  {
    id: 'dev-domain',
    name: '.dev Domain',
    category: 'domain',
    url: 'https://{username}.dev',
    checkUrl: '{username}.dev',
    strategy: 'dns'
  },
  {
    id: 'ai-domain',
    name: '.ai Domain',
    category: 'domain',
    url: 'https://{username}.ai',
    checkUrl: '{username}.ai',
    strategy: 'dns'
  },
  {
    id: 'app-domain',
    name: '.app Domain',
    category: 'domain',
    url: 'https://{username}.app',
    checkUrl: '{username}.app',
    strategy: 'dns'
  }
];
