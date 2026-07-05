import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'nanoid-generator',
  title: 'Nano ID Generator',
  description: 'Generate secure, URL-friendly unique identifiers (Nano IDs) in bulk online. Customize length, alphabets, and quantity.',
  category: 'generators',
  icon: 'Fingerprint',
  keywords: ['nanoid generator', 'secure id generator', 'url friendly unique id', 'generate nanoid', 'nano id creator'],
  faqs: [
    {
      question: 'What is a Nano ID?',
      answer: 'Nano ID is a tiny, secure, URL-friendly, unique string ID generator for JavaScript. It is safer than UUID v4 in terms of collision rate and is faster to generate.'
    },
    {
      question: 'Can I use a custom alphabet?',
      answer: 'Yes! You can specify your own set of characters (e.g. only numbers, only uppercase letters, or custom symbol sets) to generate unique IDs custom-suited for your application.'
    }
  ],
  educationalContent: {
    whatIsIt: 'A Nano ID Generator creates unique identifiers that are more compact and URL-friendly than traditional UUIDs, while keeping identical collision safety.',
    howToUse: '1. Set the character length (default is 21).\n2. Optionally define a custom alphabet of characters to draw from.\n3. Choose the quantity to generate.\n4. Click "Generate" and copy the IDs.'
  }
};
