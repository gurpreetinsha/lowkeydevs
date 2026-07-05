import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'gothic-text-generator',
  title: 'Gothic Text Generator',
  description: 'Convert plain text into medieval Fraktur or Gothic letters online. Copy and paste old english gothic fonts to bios, titles, and usernames.',
  category: 'text',
  keywords: ['gothic text generator', 'fraktur generator', 'old english font copy paste', 'medieval text generator', 'gothic letters', 'blackletter font maker'],
  icon: 'Type',
  faqs: [
    {
      question: 'What is Fraktur or Gothic text?',
      answer: 'Fraktur is a blackletter style of the Latin alphabet. The Gothic Text Generator maps standard letters to Gothic/Fraktur mathematical symbols defined in Unicode, meaning they can be displayed without loading any font files.'
    },
    {
      question: 'Why are some Gothic letters not standard sizes?',
      answer: 'Unicode defines separate blocks for Fraktur symbols. A few capital letters (like C, H, I, R, Z) belong to the earlier "Letterlike Symbols" Unicode block, which makes them render slightly differently on older devices.'
    }
  ],
  educationalContent: {
    whatIsIt: 'The Gothic Text Generator converts plain English characters into medieval-style Fraktur or Old English letters using Unicode blackletter character equivalents.',
    howToUse: '1. Paste your text in the input area.\n2. Instantly see the text rendered in Normal Fraktur and Bold Fraktur.\n3. Click "Copy" next to the gothic style you want to use.',
    proTips: [
      'Gothic characters are popular for heavy metal band names, dark aesthetic social posts, and stylized game handles.',
      'Bold Gothic is extremely visible and can be used to emphasize titles or section headers in plain text.'
    ]
  }
};
