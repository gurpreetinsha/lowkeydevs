import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'pdf-to-word',
  title: 'PDF to Word Converter',
  description: 'Convert PDF files to editable Microsoft Word documents (.doc) locally in your browser. Extracts text while preserving formatting.',
  category: 'pdf',
  keywords: ['pdf to word', 'convert pdf to word', 'pdf to doc', 'pdf to docx', 'convert pdf to word online', 'client side pdf to word'],
  icon: 'FileText',
  faqs: [
    {
      question: 'How is the formatting preserved in the converted Word document?',
      answer: 'The converter extracts text runs along with their fonts, weights, and sizes. It reconstructs paragraphs, headings, and page boundaries, packaging them into a Microsoft Word compatible format that retains readability and clean layouts.'
    },
    {
      question: 'Can scanned PDFs be converted into Word documents?',
      answer: 'This tool extracts text characters embedded in the PDF document. If the PDF is scanned (images only), it will not contain embedded text characters. For scanned PDFs, first use an OCR tool to convert the pages to text.'
    },
    {
      question: 'Is my document uploaded to a server?',
      answer: 'No. The conversion processes locally on your system using your browser\'s execution engine. Your files never leave your device.'
    }
  ],
  educationalContent: {
    whatIsIt: 'PDF to Word is an offline client-side utility that converts PDF page contents into editable Microsoft Word (.doc) formats. It parses text lines using PDF.js and structures them in HTML formats, which word processors import natively.',
    howToUse: '1. Drag and drop a PDF document into the upload area.\n2. Choose layout settings (e.g. page breaks, headings detection).\n3. Click "Convert to Word".\n4. Download the editable Word (.doc) document to your system.',
    proTips: [
      'For complex multi-column layouts, the converter processes paragraphs from left to right, top to bottom. It works best on standard reports, articles, and documentation.',
      'Saving as a Word document lets you easily correct spellings, change fonts, and adjust paragraph spacings.'
    ]
  }
};
