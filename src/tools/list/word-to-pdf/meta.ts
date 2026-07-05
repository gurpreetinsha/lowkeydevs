import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'word-to-pdf',
  title: 'Word to PDF Converter',
  description: 'Convert Microsoft Word (.docx) documents to PDF format instantly. High quality offline conversion running entirely in your browser.',
  category: 'pdf',
  keywords: ['word to pdf', 'convert docx to pdf', 'convert word to pdf online', 'docx to pdf converter', 'client side docx converter'],
  icon: 'FileText',
  faqs: [
    {
      question: 'Which Word formats are supported?',
      answer: 'This converter supports modern Word XML documents with the ".docx" extension. Legacy binary ".doc" files are not supported directly; you can resave them as docx in word processors first.'
    },
    {
      question: 'How is the document layout preserved?',
      answer: 'The converter parses docx structure elements (including lists, bold/italics, font structures, tables, and spacing margins), builds a page-mapped HTML mockup, and draws a print-ready PDF using canvas vectorization.'
    },
    {
      question: 'Is my document private?',
      answer: 'Yes. The parsing, HTML rendering, and PDF compilation are executed entirely inside your web browser locally. Your documents are never sent to external servers.'
    }
  ],
  educationalContent: {
    whatIsIt: 'Word to PDF is a client-side conversion utility that reads Word .docx files, converts their structured XML nodes into HTML styling elements (via mammoth.js), and outputs a vector PDF using html2canvas & jsPDF.',
    howToUse: '1. Select or drag & drop a Word (.docx) document.\n2. Preview the parsed document text to ensure readability.\n3. Click "Convert to PDF".\n4. Download your high-quality PDF document instantly.',
    proTips: [
      'Docx layouts containing tables and structured paragraphs convert with high accuracy. Ensure standard fonts are used for optimal layout matching.',
      'Check the page preview before generating the final PDF to ensure table cells align correctly.'
    ]
  }
};
