import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'unicode-text-converter',
  title: 'Unicode Text Converter',
  description: 'Convert standard text into various styling glyphs using the full range of Unicode mathematical alphanumeric symbols. Generate bold, italic, script, gothic, and bubble styles.',
  category: 'text',
  keywords: ['unicode text converter', 'unicode translator', 'convert text to unicode', 'fancy unicode text', 'mathematical alphanumeric symbols', 'unicode fonts'],
  icon: 'sparkles',
  faqs: [
    {
      question: 'What is a Unicode Text Converter?',
      answer: 'Unicode Text Converter maps ASCII letters (A-Z, a-z, 0-9) to specific block ranges in Unicode designed for mathematical equations, scripts, and alternative lettering systems. This renders as styled text across websites without stylesheet changes.'
    },
    {
      question: 'Where can I paste these Unicode styles?',
      answer: 'You can paste them into social media posts (Facebook, Twitter, Instagram), chat clients (Discord, WhatsApp, Telegram, Slack), forums, online games, and emails.'
    },
    {
      question: 'Why are some symbols displayed as rectangles/question marks?',
      answer: 'If you or your viewers see empty boxes or question marks (known as "tofu"), it means the operating system or browser font does not have support for those specific Unicode blocks. Modern devices on iOS, Android, macOS, and Windows 10/11 have near-complete support.'
    }
  ],
  educationalContent: {
    whatIsIt: 'Unicode Text Converter is a developer and creator tool that maps ordinary text into unique mathematical alphanumeric font ranges defined in standard Unicode. It produces true text styles that don\'t require stylesheets or custom font files to render.',
    howToUse: '1. Type or paste your alphanumeric text into the input field.\n2. Preview the converted Unicode strings instantly.\n3. Browse the extensive collection of output styles.\n4. Click "Copy" next to any style to copy it to your clipboard.',
    proTips: [
      'Use Double-Struck (Blackboard Bold) fonts (e.g. 𝔾𝕠) to style names in code documentation or headings.',
      'Use Unicode strike-throughs or underlines to simulate formatting on websites that only accept plain text.'
    ]
  }
};
