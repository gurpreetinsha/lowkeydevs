import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'random-date-generator',
  title: 'Random Date Generator',
  description: 'Generate secure random dates within a custom date range online. Choose output formats and quantity easily.',
  category: 'generators',
  keywords: ['random date generator', 'generate random dates', 'date picker tool', 'random birthdays generator', 'mock date generator'],
  faqs: [
    {
      question: 'Can I generate dates in a specific format?',
      answer: 'Yes, we support YYYY-MM-DD, MM/DD/YYYY, DD/MM/YYYY, and full ISO 8601 strings.'
    },
    {
      question: 'What range of years can I use?',
      answer: 'You can generate dates across any range supported by standard Date objects (typically years 100 to 9999).'
    }
  ],
  educationalContent: {
    whatIsIt: 'A Random Date Generator creates list of dates within a range, useful for mock datasets, software testing, database seeds, and scheduling examples.',
    howToUse: '1. Select the start and end dates of the range.\n2. Choose the quantity of dates to generate.\n3. Select the preferred date format.\n4. Click "Generate" and copy the list.'
  }
};
