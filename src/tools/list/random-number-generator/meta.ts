import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'random-number-generator',
  title: 'Random Number Generator',
  description: 'Generate lists of secure random numbers online. Set range limits, quantities, uniqueness constraints, and sort order.',
  category: 'generators',
  keywords: ['random number generator', 'rng tool', 'random integer generator', 'pick random numbers', 'secure rng'],
  faqs: [
    {
      question: 'Is this random number generator secure?',
      answer: 'Yes, it uses the Web Crypto API (`crypto.getRandomValues`) supported in modern browsers to generate cryptographically secure pseudo-random values.'
    },
    {
      question: 'Can I generate unique numbers without duplicates?',
      answer: 'Absolutely. Check the "Unique numbers" option to ensure all generated numbers in the list are distinct.'
    }
  ],
  educationalContent: {
    whatIsIt: 'A Random Number Generator (RNG) generates sequences of numbers within a specified range, useful for statistical sampling, giveaways, gaming, and simulation.',
    howToUse: '1. Enter the Minimum and Maximum values of the range.\n2. Choose the quantity of numbers to generate.\n3. Configure uniqueness, sorting, and separator options.\n4. Click "Generate" and copy the results.'
  }
};
