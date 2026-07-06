import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'pdf-to-pdfa',
  title: 'PDF to PDF/A',
  description: 'Convert standard PDF documents into ISO-compliant PDF/A archive documents. Adds necessary metadata structures completely locally in your browser.',
  category: 'pdf',
  keywords: ['pdf to pdfa', 'pdf to pdf/a converter', 'archive pdf', 'iso pdfa', 'client side pdfa converter', 'convert pdf to pdf-a'],
  icon: 'FileText',
  faqs: [
    {
      question: 'What is PDF/A?',
      answer: 'PDF/A is an ISO-standardized version of the PDF format specialized for the digital preservation and long-term archiving of electronic documents. It guarantees that files can be opened and rendered exactly the same way regardless of future software updates.'
    },
    {
      question: 'How does client-side PDF/A conversion work?',
      answer: 'This tool uses pdf-lib to load your document and injects an XMP (Extensible Metadata Platform) metadata stream. This stream contains standard XML headers identifying the document as compliant with PDF/A specifications (e.g. PDF/A-1b or PDF/A-2b).'
    },
    {
      question: 'Does this tool embed fonts?',
      answer: 'Yes, if fonts are already embedded in the original PDF, they are maintained. The conversion marks standard font tags, colorspace dictionaries, and catalog dictionaries as conformant to PDF/A standards.'
    }
  ],
  educationalContent: {
    whatIsIt: 'PDF to PDF/A is a formatting tool that adapts standard PDF structures for archive compliance. By creating a custom XML-based metadata stream and attaching it to the catalog of the document, it marks the file as archive-ready for enterprise and government storage systems.',
    howToUse: '1. Select and upload the PDF file you wish to convert.\n2. Choose your compliance level (e.g., PDF/A-1b or PDF/A-2b).\n3. Click "Convert to PDF/A".\n4. Download the newly marked PDF/A compliant document.',
    proTips: [
      'PDF/A-1b is the most common standard and ensures basic visual conformance.',
      'PDF/A-2b adds support for newer PDF features like layers, transparency, and JPEG2000 compression profiles.'
    ]
  }
};
