import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'remove-underscores',
  title: 'Remove Underscores Tool',
  description: 'Remove underscores from text or code online instantly. Replace underscores with spaces, hyphens, or custom text characters.',
  category: 'text',
  icon: 'Eraser',
  keywords: ['remove underscores', 'replace underscore with space', 'underscore remover', 'strip underscores', 'text cleaner'],
  faqs: [
    {
      question: 'Can I replace underscores with custom text?',
      answer: 'Yes, you can choose to replace all underscores with spaces, hyphens, remove them completely, or replace them with any custom character/string.'
    },
    {
      question: 'Is this tool safe for source code?',
      answer: 'Yes, but be aware that it will replace ALL underscores. If you paste programming code, variable names using snake_case (like user_id) will be modified.'
    }
  ],
  educationalContent: {
    whatIsIt: 'A Remove Underscores Tool strips underscores (`_`) from text strings or replaces them with an alternative delimiter like a space or a dash.',
    howToUse: '1. Paste your text in the input box.\n2. Choose what to replace underscores with (Spaces, Hyphens, Custom or Strip).\n3. Copy the processed text.'
  }
};
