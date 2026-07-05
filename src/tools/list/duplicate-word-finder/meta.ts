import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'duplicate-word-finder',
  title: 'Duplicate Word Finder',
  description: 'Identify, count, highlight, and remove duplicate words or repetitive phrases in your text documents automatically.',
  category: 'text',
  keywords: ['duplicate word finder', 'remove duplicate words', 'find repetitive words', 'word frequency', 'clean repetitive text', 'text redundancy checker'],
  icon: 'ListFilter',
  faqs: [
    {
      question: 'How are duplicate words counted?',
      answer: 'The tool splits your text into words using spaces and punctuation boundaries. It groups matching words, counts their frequency, and displays all words with 2 or more occurrences.'
    },
    {
      question: 'What is the difference between Keep First and Remove All?',
      answer: 'Keep First keeps the first occurrence of a duplicate word and deletes subsequent ones. Remove All completely removes the word from the text wherever it occurs.'
    },
    {
      question: 'Does it ignore punctuation or line breaks?',
      answer: 'Yes. With the "Ignore Punctuation" option checked, punctuation marks next to words (e.g. "word," vs "word") are ignored so they match as duplicates.'
    }
  ],
  educationalContent: {
    whatIsIt: 'The Duplicate Word Finder scans text for redundant vocabulary and repeating words. This utility helps writers, editors, and coders find accidental repetitions (like "the the" or "and and") and clean up vocabulary to improve readability.',
    howToUse: '1. Paste your article, email, or text document in the Input field.\n2. Choose processing parameters: Ignore Case (case-insensitive search) and Ignore Punctuation.\n3. View duplicate word frequency stats on the right.\n4. Click "Remove Duplicates" to strip repetitive words, and copy the clean output.',
    proTips: [
      'Toggle case sensitivity if you want to distinguish capitalized words at the start of sentences.',
      'Check the duplicate words table to see exactly which words are most repeated in your writing.'
    ]
  }
};
