import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'camelcase-converter',
  title: 'camelCase Converter',
  description: 'Convert any text, phrase, or lists of variable names to camelCase format online instantly. Ideal for developers and programmers.',
  category: 'text',
  icon: 'Type',
  keywords: ['camelcase converter', 'convert to camelcase', 'camel case text generator', 'casing converter', 'variable naming tool'],
  faqs: [
    {
      question: 'What is camelCase?',
      answer: 'camelCase is a casing convention where the first word starts with a lowercase letter, and all subsequent words start with an uppercase letter, with no spaces or punctuation between them.'
    },
    {
      question: 'Why is it called camelCase?',
      answer: 'It is named after camels because the uppercase letters resemble the humps on a camel\'s back (e.g. "myCamelHumps").'
    }
  ],
  educationalContent: {
    whatIsIt: 'A camelCase Converter converts input strings into camelCase, which is the standard variable naming convention in languages like JavaScript, Java, and TypeScript.',
    howToUse: 'Enter your text in the input box, select if you want line-by-line conversion or full block conversion, and copy the formatted camelCase text.'
  }
};
