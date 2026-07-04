import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'remove-duplicate-lines',
  title: 'Remove Duplicate Lines',
  description: 'Clean your text files and lists by removing duplicate lines. Support options to keep first or last occurrence, remove all duplicates, and ignore case.',
  category: 'text',
  keywords: ['remove duplicate lines', 'dedupe lines', 'strip duplicate lines', 'unique lines finder', 'remove repeating lines', 'clean lists', 'dedupe tool'],
  icon: 'ListFilter',
  faqs: [
    {
      question: 'What is the difference between "Keep First" and "Keep Last"?',
      answer: '"Keep First" retains the first time a duplicate line appears in the text and deletes any subsequent occurrences. "Keep Last" does the opposite, keeping the very last occurrence and deleting previous duplicates. This is useful when the ordering of your lines carries timeline or version relevance.'
    },
    {
      question: 'What does "Remove All Duplicates" do?',
      answer: 'It completely deletes any line that appears more than once. For example, if "Apple" appears three times, all three "Apple" lines are deleted, leaving only lines that were completely unique from the start.'
    },
    {
      question: 'Can I preserve empty lines in my text?',
      answer: 'Yes. Check the "Ignore Empty Lines" option. Empty lines or whitespace-only lines will be ignored by the duplicate-checking logic and will remain in their original positions.'
    }
  ],
  educationalContent: {
    whatIsIt: 'Remove Duplicate Lines is a text cleaning utility that scans your lists, logs, or documents line-by-line, identifying and removing repeating duplicate values. It is highly effective for sanitizing data outputs, organizing code components, cleaning list directories, or removing repetitive items.',
    howToUse: '1. Paste your list or text into the Input panel.\n2. Choose options like Case Sensitivity, Ignore Empty Lines, and the duplicate line behavior (Keep First, Keep Last, Remove All).\n3. Optionally, check "Sort Output" to automatically sort the cleaned list alphabetically.\n4. Copy the deduplicated list from the Result panel.',
    proTips: [
      'Use this tool to clean up newsletter subscriber lists, SQL query inputs, CSV records, or server access log files.',
      'Checking "Sort Output" organizes the unique lines alphabetically, making it easier to scan and verify the clean data.'
    ]
  }
};
