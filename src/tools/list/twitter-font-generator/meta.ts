import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'twitter-font-generator',
  title: 'Twitter Font Generator',
  description: 'Generate fancy unicode fonts for Twitter (X) tweets, bios, and handles. Stand out on the timeline with bold, italic, gothic, and cursive styles.',
  category: 'text',
  keywords: ['twitter font generator', 'twitter bio fonts', 'x font changer', 'cool twitter fonts', 'copy paste twitter fonts', 'bold text on twitter'],
  icon: 'twitter',
  faqs: [
    {
      question: 'How do I bold text in a Tweet or Twitter Bio?',
      answer: 'Since Twitter (X) does not offer a rich text markdown editor in standard tweets, you can paste text into this generator, convert it to mathematical bold characters, copy it, and paste it directly into your tweet or bio.'
    },
    {
      question: 'Will these fonts look good on mobile phones?',
      answer: 'Yes! They are encoded as standard Unicode glyphs which are fully supported by the official Twitter mobile apps on both iOS and Android.'
    },
    {
      question: 'Do these fonts affect Twitter search indexability?',
      answer: 'Yes. Because search engines and Twitter\'s internal algorithms look for standard ASCII letters, searching for "lowkey devs" might not match "𝐥𝐨𝐰𝐤𝐞𝐲 𝐝𝐞𝐯𝐬" in a tweet. It is best to use styled fonts for visual aesthetics and emphasis on key adjectives, rather than indexable hashtags or search-critical terms.'
    }
  ],
  educationalContent: {
    whatIsIt: 'Twitter Font Generator is a browser-based text styling helper that transforms standard text into unicode-based styling variations. It makes it easy to format tweets, bios, and user handles with cursive script, gothic blackletter, bold face, bubble text, and mini superscript.',
    howToUse: '1. Input your tweet text.\n2. Preview how it fits inside the simulated Twitter/X Post card mockup.\n3. Scroll down and look through the generated fonts.\n4. Click "Copy" on the styled text and paste it into your tweet box.',
    proTips: [
      'Use bold serif characters to highlight key statistics or numbers in your tweets.',
      'Use cursive/script text in your Twitter name/handle to give your profile a unique, stylish touch.'
    ]
  }
};
