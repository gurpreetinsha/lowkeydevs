import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'underline-text-generator',
  title: 'Underline Text Generator',
  description: 'Generate underlined text styles (single, double, wave, dotted) online using Unicode combining characters. Copy and paste underlined words anywhere.',
  category: 'text',
  keywords: ['underline text generator', 'underlined text copy paste', 'underlined words', 'how to underline text', 'double underline generator', 'wavy underline text'],
  icon: 'Type',
  faqs: [
    {
      question: 'How does combining underline Unicode work?',
      answer: 'It appends special Unicode diacritical marks (e.g., low lines, double low lines, wave marks) to each individual letter. Devices and browsers parse these characters and display them with an underline drawn underneath the base glyph.'
    },
    {
      question: 'Will underlined text show up correctly on social media?',
      answer: 'Yes! Most modern apps like Instagram, Facebook, and Twitter support Unicode combining marks, though double or wave underlines might render slightly differently depending on the device\'s font engine.'
    }
  ],
  educationalContent: {
    whatIsIt: 'The Underline Text Generator uses Unicode combining low line diacritics to draw lines under your characters without using HTML CSS styling, making it compatible with chat clients and social posts.',
    howToUse: '1. Enter your text in the input area.\n2. Select an underline style (Single, Double, Wave, Dotted, or Under-bar).\n3. Copy the underlined result directly from the output box.',
    proTips: [
      'Use wave (tilde) underlines for a playful or error-like emphasis in drafts.',
      'Dotted underlines are great for indicating abbreviations or hover terms in plain text documents.'
    ]
  }
};
