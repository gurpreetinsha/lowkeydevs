import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'sort-words-alphabetically',
  title: 'Sort Words Alphabetically',
  description: 'Sort list of words or text items alphabetically. Customize sort order, delimiters, case sensitivity, and duplicate removal instantly.',
  category: 'text',
  keywords: ['sort words', 'alphabetical sort', 'sort list alphabetically', 'sort words list', 'alphabetize text', 'a-z sort', 'words sorter', 'text line sorter'],
  icon: 'SortAsc',
  faqs: [
    {
      question: 'How do I sort words separated by commas or tabs?',
      answer: 'Change the "Separator" dropdown setting to matches your input (e.g. "Comma" or "Tab"). The tool will split the text using that separator, sort the items, and join them back using the same separator.'
    },
    {
      question: 'Can I sort entire lines instead of words?',
      answer: 'Yes! Select the "Newline" separator option, and the tool will treat each line as a single item and sort your entire list line-by-line.'
    },
    {
      question: 'Does this tool support natural number sorting?',
      answer: 'Yes. Word items containing numbers will be sorted numerically/naturally (e.g. "Item 2" will come before "Item 10") rather than strictly alphabetically.'
    }
  ],
  educationalContent: {
    whatIsIt: 'Sort Words Alphabetically is a utility that splits text into individual tokens (words, lines, or items) and arranges them in alphabetical (A-Z) or reverse-alphabetical (Z-A) order. It is ideal for cleaning up lists, organizing keywords, formatting tags, or preparing CSV data.',
    howToUse: '1. Paste your list or text into the Input pane.\n2. Choose your separating character (Newlines, Comma, Space, Tab, or Custom).\n3. Adjust the sorting options: Case Sensitivity, Remove Duplicates, or Ignore Punctuation.\n4. Click "Sort Words" or check the real-time sorted result in the right-hand editor.',
    proTips: [
      'Use the "Remove Duplicates" filter combined with sorting to clean keyword lists and remove repetitive terms.',
      'Check the "Ignore Punctuation" box if your text contains punctuation marks (like trailing periods or commas) that you do not want to interfere with alphabetical order.'
    ]
  }
};
