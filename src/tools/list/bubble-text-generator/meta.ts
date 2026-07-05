import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'bubble-text-generator',
  title: 'Bubble Text Generator',
  description: 'Convert regular text into circled bubble letters (white/black circles) or squared fonts. Easy copy and paste bubble fonts.',
  category: 'text',
  keywords: ['bubble text generator', 'circled letters', 'bubble font copy paste', 'circle text generator', 'squared text', 'black bubble text', 'cool text bubbles'],
  icon: 'Type',
  faqs: [
    {
      question: 'What is bubble text?',
      answer: 'Bubble text is text generated using circled Unicode symbols. Instead of rendering standard letters, it maps them to specific code points that display enclosing circles or squares.'
    },
    {
      question: 'Does bubble text support numbers?',
      answer: 'Yes! Our bubble text generator supports numbers 0-9 by mapping them to their corresponding circled number symbols (e.g., ① or ❶).'
    }
  ],
  educationalContent: {
    whatIsIt: 'The Bubble Text Generator is a decorative font tool that encloses letters and numbers in circles or squares. It uses standard Unicode characters, so you can copy and paste the styled bubbles into social media or chats.',
    howToUse: '1. Paste your message in the input text area.\n2. Choose a bubble style (e.g., Circled White, Circled Black, Squared White, Squared Black).\n3. Copy the bubble-styled text output.',
    proTips: [
      'Circled black (solid) bubbles are highly visible and look great for highlighting short words or tags in bios.',
      'Use circled letters to write standout bullet lists: Ⓐ, Ⓑ, Ⓒ instead of standard bullets.'
    ]
  }
};
