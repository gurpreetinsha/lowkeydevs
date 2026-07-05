import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'wide-text-generator',
  title: 'Wide Text Generator',
  description: 'Convert regular text into wide, fullwidth text (ａｅｓｔｈｅｔｉｃ) or custom-spaced text. Perfect for vaporwave, memes, and eye-catching headers.',
  category: 'text',
  keywords: ['wide text generator', 'fullwidth text converter', 'vaporwave text generator', 'aesthetic text generator', 'spaced text generator', 'l o w k e y'],
  icon: 'sparkles',
  faqs: [
    {
      question: 'What is Fullwidth (Wide) text?',
      answer: 'Fullwidth text uses character codes from the Halfwidth and Fullwidth Forms Unicode block. In CJK (Chinese, Japanese, Korean) typography, characters are written inside square cells. To make Latin characters match this grid, fullwidth versions were created with wider horizontal spacing.'
    },
    {
      question: 'Where can I use vaporwave wide text?',
      answer: 'It is highly popular in Tumblr posts, vaporwave music titles, YouTube descriptions, Twitter/X captions, and gaming usernames.'
    },
    {
      question: 'Does this generator just add spaces?',
      answer: 'It depends on the selected mode. The "Fullwidth (Unicode)" mode actually changes the character code of each letter to its native wide equivalent (e.g. ａ instead of a), while other modes like "Custom Spaced" insert actual space characters between standard letters.'
    }
  ],
  educationalContent: {
    whatIsIt: 'Wide Text Generator is a dual-method formatting utility. It can either convert standard characters to fullwidth CJK forms or insert custom-sized spacers between letters to yield the classic aesthetic spread look.',
    howToUse: '1. Enter your text in the input box.\n2. Choose a widening method (e.g. Fullwidth Unicode, double-spaced, or custom spacer).\n3. Adjust the slider to set the spacing width for custom spacers.\n4. Click "Copy" to copy your stylized text.',
    proTips: [
      'Use Fullwidth Unicode (ａｅｓｔｈｅｔｉｃ) for profiles and names where regular spaces are collapsed or stripped by the platform.',
      'Use standard spaced text with a custom bullet spacer (e.g. l・o・w・k・e・y) for elegant menu tabs.'
    ]
  }
};
