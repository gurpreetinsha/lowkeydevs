import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'italic-text-generator',
  title: 'Italic Text Generator',
  description: 'Convert standard text into various italic Unicode font styles. Copy and paste serif italic, sans-serif italic, and bold italic fonts.',
  category: 'text',
  keywords: ['italic text generator', 'italic text copy paste', 'italic font converter', 'how to italic text', 'slanted text generator', 'instagram italic generator', 'unicode italic'],
  icon: 'Type',
  faqs: [
    {
      question: 'How does the Italic Text Generator work?',
      answer: 'It replaces normal alphabetic characters with corresponding slanted mathematical italic symbols defined in Unicode. No CSS is required to render these italics, making them fully copy-pasteable.'
    },
    {
      question: 'Will italic text show up on mobile devices?',
      answer: 'Yes! Android and iOS operating systems natively support mathematical Unicode character blocks, so the text will show up slanted on most mobile browsers and social apps.'
    }
  ],
  educationalContent: {
    whatIsIt: 'The Italic Text Generator converts standard alphanumeric text into different slanted Unicode styles. Perfect for adding emphasis, citations, or stylized headers on platforms that do not support standard rich-text markdown.',
    howToUse: '1. Type or paste your text into the left pane.\n2. Instantly see the text transformed into multiple slanted styles.\n3. Click "Copy" next to your preferred style to save it to your clipboard.',
    proTips: [
      'Use Serif Italic for titles or academic quotations, and Sans-Serif Italic for modern, clean emphasis in text posts.',
      'Bold Italic combines both bold and italic weights for maximum emphasis on headings.'
    ]
  }
};
