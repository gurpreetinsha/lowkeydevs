import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'strikethrough-text-generator',
  title: 'Strikethrough Text Generator',
  description: 'Generate strikethrough text styles (long strike, short strike, slash, tilde) online using Unicode combining characters. Copy and paste strikethrough words anywhere.',
  category: 'text',
  keywords: ['strikethrough text generator', 'strikethrough copy paste', 'cross out text', 'how to cross out text', 'slash text generator', 'tilde strikethrough'],
  icon: 'Type',
  faqs: [
    {
      question: 'How does strikethrough Unicode work?',
      answer: 'It combines standard ASCII characters with overlay diacritical marks like the combining long stroke overlay (\\u0336). When rendered, the system overlay draws a line directly through the middle of the preceding character.'
    },
    {
      question: 'Where can I use strikethrough text?',
      answer: 'Strikethrough text works on YouTube comments, Instagram bios, Twitter posts, email titles, Reddit, and forums that do not support markdown syntax like ~~text~~.'
    }
  ],
  educationalContent: {
    whatIsIt: 'The Strikethrough Text Generator is an online utility to cross out text using standard Unicode overlays. It offers standard, short, slash-through, and tilde overlays that work across web applications.',
    howToUse: '1. Enter the text you want to cross out.\n2. Choose a strikethrough style from the dropdown list (e.g., Slash-through, Tilde, Standard long line).\n3. Copy the crossed-out text from the output field.',
    proTips: [
      'Strikethrough is often used in social media or chat messaging to indicate humor, sarcasm, or editing correction.',
      'Slash-through (solidus overlay) can be used to style coding variables or create unique usernames.'
    ]
  }
};
