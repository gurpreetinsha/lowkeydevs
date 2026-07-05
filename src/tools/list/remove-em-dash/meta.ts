import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'remove-em-dash',
  title: 'Remove Em Dash / En Dash Tool',
  description: 'Remove em dashes (—) and en dashes (–) from text online instantly. Replace dashes with standard hyphens, double hyphens, spaces, or strip them.',
  category: 'text',
  icon: 'Eraser',
  keywords: ['remove em dash', 'replace en dash', 'dash remover', 'clean typography', 'em dash replacement'],
  faqs: [
    {
      question: 'What is the difference between Em Dash and En Dash?',
      answer: 'An em dash (—) is long and typically indicates a break in thought or parenthesis. An en dash (–) is shorter and commonly indicates a range of numbers or dates.'
    },
    {
      question: 'Why should I remove or replace them?',
      answer: 'Some legacy systems, database columns, SMS networks, or command-line parsers do not support Unicode dash characters. Replacing them with standard ASCII hyphens prevents decoding or formatting issues.'
    }
  ],
  educationalContent: {
    whatIsIt: 'A Remove Em Dash / En Dash Tool replaces typographic dash characters (`—` and `–`) with safe ASCII equivalents like a standard hyphen `-` or space.',
    howToUse: '1. Paste your text in the input box.\n2. Choose what to replace em/en dashes with (Hyphens, Double Hyphens, Spaces, Custom or Strip).\n3. Copy the clean text.'
  }
};
