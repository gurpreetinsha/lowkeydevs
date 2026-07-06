import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'extract-pdf-pages',
  title: 'Extract PDF Pages',
  description: 'Extract specific pages from your PDF file. Select pages visually via thumbnails or type page numbers to create a new PDF document in your browser.',
  category: 'pdf',
  keywords: ['extract pdf pages', 'extract pages from pdf', 'pdf page extractor', 'online pdf page splitter', 'client side pdf parser'],
  icon: 'FileText',
  faqs: [
    {
      question: 'How do I extract pages from a PDF?',
      answer: 'Simply upload your PDF document. The tool will render interactive page thumbnails. Select the pages you want to extract by clicking on them, or write page numbers in the text box (e.g. 1-3, 5). When ready, click "Extract Pages" and download your newly compiled PDF containing only the selected pages.'
    },
    {
      question: 'Does this keep the quality and form features of original pages?',
      answer: 'Yes. The extraction logic uses pdf-lib copyPages mechanism, which preserves the original vector geometries, embedded fonts, image compressions, and resource references.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. The extraction process is done completely client-side in Javascript, so your documents never leave your computer.'
    }
  ],
  educationalContent: {
    whatIsIt: 'Extract PDF Pages is a direct document compiler. It loads a source PDF file stream, identifies user-selected page references, copies them into a brand-new PDF context catalog, and compiles a streamlined file.',
    howToUse: '1. Select and upload your PDF document.\n2. Click page thumbnails to highlight and select them for extraction.\n3. Alternatively, type specific ranges (e.g. "1-2, 5") to select them.\n4. Click "Extract Selected Pages" to run the compilation.\n5. Download the new PDF document.',
    proTips: [
      'Hover over a thumbnail to see its page number.',
      'Double check your selection before extracting, as only the selected pages will be included in the downloaded document.'
    ]
  }
};
