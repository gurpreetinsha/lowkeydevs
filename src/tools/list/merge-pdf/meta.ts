import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'merge-pdf',
  title: 'Merge PDF',
  description: 'Combine multiple PDF files into one document quickly and securely. 100% private conversion running entirely in your browser.',
  category: 'pdf',
  keywords: ['merge pdf', 'combine pdf files', 'join pdfs online', 'pdf merger', 'client side pdf merger', 'combine multiple pdfs'],
  icon: 'FileText',
  faqs: [
    {
      question: 'Is there a limit on how many PDF files I can merge?',
      answer: 'Since the merging process runs entirely inside your browser, there is no strict upload limit. You can merge as many files as your device\'s memory (RAM) can support, typically dozens of files up to 100MB+ in total.'
    },
    {
      question: 'Will my merged PDFs have any watermarks?',
      answer: 'No. This tool is completely free and does not add any watermarks or modifications to your documents.'
    },
    {
      question: 'Is it safe to merge confidential documents here?',
      answer: 'Yes, absolutely. The merging process runs locally on your computer using JavaScript. Your files are never uploaded to any server, meaning your private data remains completely secure and confidential.'
    }
  ],
  educationalContent: {
    whatIsIt: 'Merge PDF is a client-side utility that joins multiple PDF documents together into a single continuous file. It uses pdf-lib to merge the page streams without re-compressing them, preserving the original formatting, fonts, and quality.',
    howToUse: '1. Drag and drop multiple PDF files into the dropzone.\n2. Reorder the files by using the "Move Up" and "Move Down" buttons.\n3. Remove any unwanted files by clicking the "✕" button.\n4. Click "Merge PDFs" to compile them.\n5. Click the "Download" button to save your merged PDF document.',
    proTips: [
      'Make sure to arrange the files in the correct sequence before clicking merge.',
      'Merging works best on standard PDFs. If any file is password-protected, unlock it first using our Unlock PDF tool.'
    ]
  }
};
