import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'character-remover',
  title: 'Character Remover',
  description: 'Remove specific characters, numbers, letters, symbols, punctuation, or custom text patterns from your blocks of text instantly.',
  category: 'text',
  keywords: ['character remover', 'strip text', 'remove characters', 'remove numbers', 'remove spaces', 'clean text', 'remove punctuation'],
  icon: 'Eraser',
  faqs: [
    {
      question: 'Is my text sent to a server?',
      answer: 'No. All processing is completed locally inside your browser using JavaScript. Your input text never leaves your device.'
    },
    {
      question: 'How do I remove specific custom characters?',
      answer: 'Type the exact characters you want to strip (e.g. "@#$") into the "Custom characters" input field, and make sure the custom option is checked.'
    },
    {
      question: 'Does this support case-insensitive custom character removal?',
      answer: 'Yes, there is a toggle for "Case Sensitive" which applies to custom characters.'
    }
  ],
  educationalContent: {
    whatIsIt: 'The Character Remover is a text cleaning utility designed to strip unwanted characters from documents, CSVs, logs, or code. It lets you select pre-defined filters (like removing all digits or punctuation) or write custom sequences to strip matching characters from your text.',
    howToUse: '1. Paste your raw text into the input field.\n2. Choose which character types to remove using the checkboxes (Letters, Numbers, Punctuation, Whitespace, Newlines).\n3. Optionally type a list of custom characters to delete.\n4. Copy the cleaned output text instantly.',
    proTips: [
      'Checking "Whitespace" removes spaces and tab characters, while "Newlines" collapses line breaks.',
      'Use this tool to sanitize messy inputs, clean CSV separator conflicts, or strip formatting tags.'
    ]
  }
};
