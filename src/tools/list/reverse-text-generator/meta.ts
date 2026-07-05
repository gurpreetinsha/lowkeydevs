import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'reverse-text-generator',
  title: 'Reverse Text Generator',
  description: 'Reverse text characters, reverse words, reverse entire lines, or flip your letters upside down instantly. Includes mirror writing options.',
  category: 'generators',
  keywords: ['reverse text', 'backwards text generator', 'flip text', 'upside down text', 'mirror text generator', 'text reverser', 'reverse words', 'reverse lines'],
  icon: 'Reverse',
  faqs: [
    {
      question: 'What is the "Upside Down" mode?',
      answer: 'It uses special Unicode character replacements that resemble standard alphabet letters rotated 180 degrees (e.g., "a" becomes "ɐ"). This lets you create upside-down text blocks for passwords, social media, or fun formatting.'
    },
    {
      question: 'What is the difference between "Reverse Characters" and "Reverse Words"?',
      answer: '"Reverse Characters" flips every single letter backwards (e.g., "Hello World" to "dlroW olleH"). "Reverse Words" preserves individual word spellings but swaps the sequence of the words (e.g., "Hello World" to "World Hello").'
    },
    {
      question: 'Does this tool support reversing paragraphs line-by-line?',
      answer: 'Yes! Select the "Reverse Lines" mode. It will reverse the vertical sequence of the lines, meaning your last line becomes your first line, and your first becomes the last.'
    }
  ],
  educationalContent: {
    whatIsIt: 'The Reverse Text Generator is a text manipulation utility that flips characters, word sequences, lines, or character structures. Writers, developers, and social media managers use it for security challenges, palindrome exploration, coding string tests, or decorative formatting.',
    howToUse: '1. Type or paste your text in the Input panel.\n2. Select your desired reversal mode: Reverse Characters, Reverse Words, Reverse Lines, or Flip Upside Down.\n3. The result is calculated and displayed instantly in the output window.\n4. Copy the reversed text to your clipboard.',
    proTips: [
      'Select "Flip Upside Down" to create secure, hard-to-guess password hints that are still readable by you.',
      'Reverse Words is highly useful for cleaning up formatted data columns or reading reverse-notated logs.'
    ]
  }
};
