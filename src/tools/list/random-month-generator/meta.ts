import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'random-month-generator',
  title: 'Random Month Generator',
  description: 'Generate sequences of random months online. Choose between full names, abbreviated names, or numeric representations.',
  category: 'generators',
  icon: 'Clock',
  keywords: ['random month generator', 'generate random months', 'month picker', 'month selector', 'mock month generator'],
  faqs: [
    {
      question: 'Which month formats are supported?',
      answer: 'We support full names (e.g. "January"), abbreviated names (e.g. "Jan"), and standard 2-digit numbers (e.g. "01").'
    },
    {
      question: 'Can I generate unique months without duplicates?',
      answer: 'Yes. Checking "Unique Months" prevents repeats, capping output at a maximum of 12 months.'
    }
  ],
  educationalContent: {
    whatIsIt: 'A Random Month Generator generates random month lists, helpful for software testing, date simulation, statistical distributions, and scheduling practice.',
    howToUse: '1. Select the month formatting (Full, Short, or Numeric).\n2. Set the quantity to generate.\n3. Toggle duplicates uniqueness.\n4. Click "Generate" and copy results.'
  }
};
