import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'powerpoint-to-pdf',
  title: 'PowerPoint to PDF Converter',
  description: 'Convert PowerPoint presentations (.pptx) to PDF format instantly. Processes entirely inside your browser for total security.',
  category: 'pdf',
  keywords: ['powerpoint to pdf', 'convert pptx to pdf', 'ppt to pdf converter', 'convert slides to pdf', 'client side pptx converter'],
  icon: 'FileText',
  faqs: [
    {
      question: 'Which presentation formats are supported?',
      answer: 'This converter supports modern PowerPoint XML slideshows with the ".pptx" extension. Legacy ".ppt" binary formats are not supported directly; re-save them as pptx first.'
    },
    {
      question: 'How is the layout preserved in the output PDF?',
      answer: 'The converter extracts text lines and layouts from the slide XML nodes, maps them onto widescreen slide previews, and compiles them into landscape PDF pages.'
    },
    {
      question: 'Is my document private?',
      answer: 'Yes, absolutely. The presentation parsing and PDF assembly are executed entirely client-side. No files are uploaded to any external server.'
    }
  ],
  educationalContent: {
    whatIsIt: 'PowerPoint to PDF reads slide nodes from OpenXML presentation .pptx archives, converts their text nodes into widescreen presentation mockups, and prints them to landscape PDFs using html2canvas & jsPDF.',
    howToUse: '1. Select and upload your PowerPoint (.pptx) file.\n2. Preview the parsed slides in the browser.\n3. Click "Convert to PDF".\n4. Download the generated PDF document.',
    proTips: [
      'For best results, use standard fonts and layouts in your slides.',
      'Check the slide previews before generating the final PDF.'
    ]
  }
};
