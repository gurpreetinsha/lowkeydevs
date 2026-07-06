import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'remove-pdf-pages',
  title: 'Remove PDF Pages',
  description: 'Delete unwanted pages from your PDF file. Select pages visually via thumbnails or type page numbers to compile a new PDF in your browser.',
  category: 'pdf',
  keywords: ['remove pdf pages', 'delete pages from pdf', 'pdf page remover', 'online pdf page deleter', 'client side pdf editor'],
  icon: 'FileText',
  faqs: [
    {
      question: 'How do I remove pages from a PDF?',
      answer: 'Simply upload your PDF document. The tool will render interactive page thumbnails. Select the pages you want to remove by clicking on them, or write page numbers in the text box (e.g. 1-3, 5). When ready, click "Remove Pages" and download your clean PDF.'
    },
    {
      question: 'Does this re-compress my PDF or lower quality?',
      answer: 'No. The deletion logic uses pdf-lib, which deletes the page nodes directly from the internal PDF document catalog structure without editing page images or text content, ensuring 100% original quality is preserved.'
    },
    {
      question: 'Is there a page or size limit?',
      answer: 'Since the removal runs entirely locally on your device, there are no upload limits. It easily handles large documents up to dozens of pages and 100MB+ in size.'
    }
  ],
  educationalContent: {
    whatIsIt: 'Remove PDF Pages is a direct document compiler. It loads a PDF file stream, identifies page descriptors, and removes reference branches for selected pages, generating a new streamlined PDF document.',
    howToUse: '1. Select and upload your PDF document.\n2. Click page thumbnails to highlight and select them for deletion.\n3. Alternatively, type specific ranges (e.g. "1-2, 5") to select them.\n4. Click "Delete Selected Pages" to run the modification.\n5. Download the new PDF document.',
    proTips: [
      'Hover over a thumbnail to see its page number.',
      'Double check your selection before deleting, as the deleted pages cannot be recovered after you click compile (you would have to upload the file again).'
    ]
  }
};
