import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'roman-numeral-dates',
  title: 'Roman Numeral Dates Converter',
  description: 'Convert standard dates to Roman numerals and vice-versa online instantly. Customize formatting and separators.',
  category: 'converters',
  keywords: ['roman numeral dates', 'date to roman numerals', 'roman date converter', 'roman numeral date generator', 'convert date to roman'],
  faqs: [
    {
      question: 'How do you write dates in Roman numerals?',
      answer: 'Standard date components (month, day, year) are converted individually into Roman numerals and joined by separators. For example, July 5, 2026 is VII.V.MMXXVI (Month 7 = VII, Day 5 = V, Year 2026 = MMXXVI).'
    },
    {
      question: 'What separators can I use?',
      answer: 'You can use dots (.), slashes (/), hyphens (-), or spaces ( ) to separate the month, day, and year.'
    }
  ],
  educationalContent: {
    whatIsIt: 'A Roman Numeral Dates Converter translates standard dates into classical Roman numeral notation, commonly used for monuments, cornerstones, tattoos, and formal invitations.',
    howToUse: '1. Select the conversion direction (Standard to Roman or Roman to Standard).\n2. Set the separator and date format (MDY, DMY, YMD).\n3. Input the date to convert.\n4. Copy the result.'
  }
};
