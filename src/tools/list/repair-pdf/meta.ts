import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'repair-pdf',
  title: 'Repair PDF',
  description: 'Fix and repair damaged, corrupted, or unreadable PDF files. Recover content and rebuild the PDF structure locally in your browser.',
  category: 'pdf',
  keywords: ['repair pdf', 'fix corrupted pdf', 'recover pdf file', 'damaged pdf recovery', 'client side pdf repair', 'unreadable pdf fixer'],
  icon: 'FileText',
  faqs: [
    {
      question: 'How does client-side PDF repair work?',
      answer: 'This tool has two repair modes: Standard and Deep. Standard Repair processes the PDF stream using pdf-lib to re-serialize the structure, fixing broken indexing tables (XREFs) and headers. Deep Repair uses PDF.js to extract page-by-page visual data and reconstructs a brand-new PDF document from scratch.'
    },
    {
      question: 'Can this tool repair password-protected PDFs?',
      answer: 'Password-protected PDFs must be unlocked first before they can be repaired. You can use our Unlock PDF tool to remove the password if you know it, and then run the repair process.'
    },
    {
      question: 'Is it safe to repair confidential PDFs here?',
      answer: 'Absolutely. The repair process is executed entirely on your device using JavaScript. Your files are never uploaded to any remote server, maintaining maximum privacy.'
    }
  ],
  educationalContent: {
    whatIsIt: 'Repair PDF is a client-side recovery utility designed to solve common issues with corrupted PDFs (e.g. files that won\'t open, show blank pages, or have header errors). It attempts to rebuild structural components, correcting encoding offsets and cross-reference records.',
    howToUse: '1. Upload the corrupted PDF file.\n2. Select your recovery mode: Standard Repair (recommended for minor metadata/xref corruptions) or Deep Repair (recommended for files that fail to load entirely).\n3. Click "Start Repair" and wait for the recovery logic to complete.\n4. Download the repaired PDF file and verify its contents.',
    proTips: [
      'If Standard Repair doesn\'t make the pages readable, try Deep Repair which visually reconstructs each page.',
      'Deep Repair will flatten the PDF into high-quality images, meaning selectable text will be rasterized. Use OCR PDF on the repaired file afterwards to make the text selectable again!'
    ]
  }
};
