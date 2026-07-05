import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'excel-to-pdf',
  title: 'Excel to PDF Converter',
  description: 'Convert Excel spreadsheets (.xlsx, .xls, .csv) into PDF format locally. High quality offline conversion running entirely in your browser.',
  category: 'pdf',
  keywords: ['excel to pdf', 'convert xlsx to pdf', 'csv to pdf', 'convert spreadsheet to pdf', 'local excel converter', 'client side excel to pdf'],
  icon: 'FileText',
  faqs: [
    {
      question: 'Which spreadsheet formats can I convert?',
      answer: 'You can convert modern Excel spreadsheets (.xlsx), legacy spreadsheets (.xls), and comma-separated text values (.csv).'
    },
    {
      question: 'Will all sheets in the workbook be converted?',
      answer: 'Yes! The tool parses all sheets in your Excel file, formats them into structured pages, and combines them sequentially into the final PDF.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. The spreadsheet parsing and PDF compilation happen entirely inside your web browser. No details are uploaded to any external server.'
    }
  ],
  educationalContent: {
    whatIsIt: 'Excel to PDF is an offline conversion tool that parses Excel tabular grid cells (via mammoth/SheetJS), structures them in styled responsive HTML table blocks, and writes them into A4 documents using html2canvas & jsPDF.',
    howToUse: '1. Select and upload your Excel (.xlsx, .xls, or .csv) file.\n2. Preview the worksheets in the browser frame.\n3. Click "Convert to PDF".\n4. Download the print-ready PDF file instantly.',
    proTips: [
      'For wide sheets containing dozens of columns, the table preview fits columns to the page width. Set printing orientations to landscape to avoid columns being squished.',
      'Check all sheet tabs in the preview block before saving the PDF.'
    ]
  }
};
