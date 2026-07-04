import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'fancy-text-generator',
  title: 'Fancy Text Generator',
  description: 'Convert plain text into styled Unicode fonts (cursive, gothic, bubble, bold, italic) that you can copy and paste on Instagram, Twitter, Facebook, or Discord.',
  category: 'text',
  keywords: ['fancy text generator', 'cool text', 'instagram fonts', 'twitter fonts', 'font changer', 'unicode text converter', 'cursive generator', 'gothic fonts copy paste'],
  icon: 'Brush',
  faqs: [
    {
      question: 'How do fancy text generators work?',
      answer: 'They map standard ASCII characters (A-Z, a-z, 0-9) to alternative mathematical and decorative symbols in the Unicode standard. Because these characters are built-in symbols, they can be copied and pasted anywhere that supports Unicode, without needing font styling CSS.'
    },
    {
      question: 'Will these fonts work on Instagram, TikTok, and Twitter?',
      answer: 'Yes! They work on almost all major social platforms, bios, usernames, and chat apps (like Discord, Telegram, and WhatsApp) because they are standard Unicode characters rather than proprietary styling fonts.'
    },
    {
      question: 'Why do some letters look like boxes or question marks?',
      answer: 'This happens if the device or web browser you are viewing the text on does not have a font installed that supports those specific Unicode mathematical or script ranges. Modern operating systems and mobile devices have near-complete support.'
    }
  ],
  educationalContent: {
    whatIsIt: 'The Fancy Text Generator is a utility to style your text with over 20 unique text decorations. It works entirely client-side using native Unicode mappings, meaning you do not need external CSS styling or special fonts to copy-paste the text across the web.',
    howToUse: '1. Enter the text you wish to format into the "Input Text" textarea.\n2. Scroll through the generated list of styles (such as Cursive, Bold Sans, Gothic, or Bubble).\n3. Click the "Copy" button next to any style to copy it to your clipboard instantly, or click "Load Sample" to see how it looks.',
    proTips: [
      'Use Cursive or Gothic text in your social media bios to stand out from other standard font profiles.',
      'Combine styled fonts with emojis to create eye-catching headings or separator lines in messages.'
    ]
  }
};
