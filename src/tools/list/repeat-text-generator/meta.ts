import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'repeat-text-generator',
  title: 'Repeat Text Generator',
  description: 'Multiply and repeat a word, phrase, or line of text multiple times. Choose custom delimiters, add numbering indexes, and copy output instantly.',
  category: 'generators',
  keywords: ['repeat text', 'text multiplier', 'word repeater', 'text repeater', 'duplicate text generator', 'spam text generator', 'multiply words list', 'line repeater'],
  icon: 'Repeat',
  faqs: [
    {
      question: 'What is the limit for repeating text?',
      answer: 'The tool supports repeating your input text up to 10,000 times. Going beyond this limit is capped to prevent browser tabs from freezing due to memory constraints.'
    },
    {
      question: 'How do I add list numbering to each repeated item?',
      answer: 'Check the "Prepend index numbers" option. The generator will automatically prefix each repeated item with its index (e.g. "1. Item", "2. Item").'
    },
    {
      question: 'Which separators can I use between repeated text blocks?',
      answer: 'You can separate repeated blocks with spaces, commas, newlines, tabs, or a completely custom text string (such as " | " or " AND ").'
    }
  ],
  educationalContent: {
    whatIsIt: 'The Repeat Text Generator is a convenience utility that replicates any input string or phrase a specified number of times. It is ideal for developers testing buffer limits, creating mock database entries, generating design placeholder strings, or creating repetitive formatting lists.',
    howToUse: '1. Enter the word or sentence you want to repeat in the Input field.\n2. Enter the repeat count (e.g., 50).\n3. Pick your separator (like a newline or comma) and decide if you want line numbering.\n4. Copy the generated block from the Result pane.',
    proTips: [
      'Use the Custom Separator option to create repeated separators like markdown lines or boundary walls (e.g., repeat "=-=" with no spacing to create lines).',
      'Use index numbers and newline separator to create a quick template lists for spreadsheets or document outlines.'
    ]
  }
};
