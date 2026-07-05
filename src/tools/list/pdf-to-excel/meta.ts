import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'pdf-to-excel',
  title: 'PDF to Excel Converter',
  description: 'Extract tabular data from PDF files and convert them into Microsoft Excel (.xlsx) spreadsheets locally. 100% private.',
  category: 'pdf',
  keywords: ['pdf to excel', 'convert pdf to excel', 'extract tables from pdf', 'pdf to xlsx', 'convert pdf to spreadsheet', 'offline pdf to excel'],
  icon: 'FileText',
  faqs: [
    {
      question: 'How does the table extraction work?',
      answer: 'The converter parses the coordinate positions of text elements within each PDF page. It groups elements aligning on the same horizontal rows and splits them into Excel columns based on spacing gaps, recreating the table structure.'
    },
    {
      question: 'Will my formatting and formulas be kept?',
      answer: 'Since PDFs are static documents, they do not contain calculations or formulas. The converter extracts numerical and textual data as values. Basic tabular structure (rows and columns) is preserved, but formulas must be added in Excel.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, completely. The extraction and spreadsheet assembly happen locally in your browser. No files are uploaded to any external server.'
    }
  ],
  educationalContent: {
    whatIsIt: 'PDF to Excel parses PDF text structures, groups elements aligning vertically and horizontally to isolate table blocks, and writes them into standard OpenXML Excel spreadsheet (.xlsx) sheets using SheetJS.',
    howToUse: '1. Select and upload your PDF file.\n2. Choose layout settings (e.g. column spacing sensitivity).\n3. Click "Convert to Excel".\n4. Download the generated spreadsheet (.xlsx) directly to your device.',
    proTips: [
      'This tool works best on PDFs that contain digital tables. Scanned PDFs containing flat tables should be processed with OCR first.',
      'Adjust the column separation sensitivity if table cells are merging incorrectly.'
    ]
  }
};
