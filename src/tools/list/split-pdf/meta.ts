import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'split-pdf',
  title: 'Split PDF',
  description: 'Split PDF files into separate pages or extract specific page ranges instantly. 100% secure client-side splitting.',
  category: 'pdf',
  keywords: ['split pdf', 'extract pdf pages', 'cut pdf pages online', 'pdf splitter', 'client side pdf splitter', 'separate pdf pages'],
  icon: 'FileText',
  faqs: [
    {
      question: 'How does the page range extraction work?',
      answer: 'You can extract specific pages by entering ranges like "1-3, 5, 8-10". This would extract pages 1, 2, 3, 5, 8, 9, and 10 into a new PDF document.'
    },
    {
      question: 'Can I extract all pages as individual PDFs?',
      answer: 'Yes! Select the "Extract all pages" option. It will generate individual PDF files for each page and pack them into a single, easy-to-download ZIP file.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes. The splitting is processed locally in your browser. Your PDF document is never sent to any external servers, maintaining absolute data privacy.'
    }
  ],
  educationalContent: {
    whatIsIt: 'Split PDF isolates specific page collections from a source document and compiles them into new standalone PDF files. This is executed inside the browser using pdf-lib.',
    howToUse: '1. Select or drag & drop a PDF file into the dropzone.\n2. Choose a split option: "Extract all pages", "Extract specific range" (e.g., 1-5, 8), or "Split every N pages".\n3. Click "Split PDF" to process the request.\n4. Click "Download" to save the resulting PDF or ZIP file containing the split files.',
    proTips: [
      'Enter page numbers carefully. The page numbering is 1-indexed (starting from 1 up to the total page count).',
      'For batch processing, "Extract all pages" creates a ZIP archive automatically so you don\'t have to save dozens of files individually.'
    ]
  }
};
