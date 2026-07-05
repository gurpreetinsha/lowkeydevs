import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'mirror-text-generator',
  title: 'Mirror Text Generator',
  description: 'Flip, rotate, reverse, or mirror text characters. Copy and paste upside-down and mirrored text online.',
  category: 'text',
  keywords: ['mirror text generator', 'upside down text', 'flip text generator', 'reverse text copy paste', 'backwards text generator', 'mirrored writing maker'],
  icon: 'Reverse',
  faqs: [
    {
      question: 'What is mirror text?',
      answer: 'Mirror text is text generated using character glyphs that look like horizontal or vertical reflections of standard Latin characters (e.g., ɒ for a, d for b).'
    },
    {
      question: 'What is the difference between Reverse and Mirror?',
      answer: 'Reverse text simply prints the character sequence backwards (e.g., "abc" -> "cba"). Mirror text flips the individual character glyphs horizontally so they look like they are viewed in a mirror.'
    }
  ],
  educationalContent: {
    whatIsIt: 'The Mirror Text Generator allows you to distort text in multiple ways: reversing the spelling, flipping letters upside-down (vertical reflection), mirroring characters (horizontal reflection), or rotating it 180 degrees.',
    howToUse: '1. Enter the text you wish to flip or mirror.\n2. Choose a transformation mode (Mirror, Upside Down, Reverse, or Rotate Both).\n3. Copy the mirrored output text.',
    proTips: [
      'Use horizontal mirror writing to write hidden texts that can only be read easily when held up to a real mirror!',
      'Upside-down text is popular for creating funny status updates or hard-to-guess, memorable passwords.'
    ]
  }
};
