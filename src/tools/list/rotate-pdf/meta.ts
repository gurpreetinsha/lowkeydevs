import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'rotate-pdf',
  title: 'Rotate PDF Pages',
  description: 'Rotate individual, all, or specific ranges of pages in a PDF document (90° CW, 90° CCW, or 180°) locally in your browser.',
  category: 'pdf',
  keywords: ['rotate pdf', 'turn pdf pages', 'pdf page rotator', 'change pdf orientation', 'local pdf rotator', 'offline pdf page turner'],
  icon: 'FileText',
  faqs: [
    {
      question: 'Can I rotate only specific pages rather than the whole document?',
      answer: 'Yes! You can choose to rotate all pages, odd pages only, even pages only, or enter a custom range (e.g., "1-3, 5") to change orientations selectively.'
    },
    {
      question: 'What angles can I rotate my PDF by?',
      answer: 'You can rotate pages by 90° Clockwise, 90° Counter-Clockwise, or 180° (upside down).'
    },
    {
      question: 'Is it safe to upload confidential files here?',
      answer: 'Yes, absolutely. The document loading, page modifications, rotation calculation, and saving are executed client-side in your browser. No files are uploaded to any server.'
    }
  ],
  educationalContent: {
    whatIsIt: 'Rotate PDF parses document structures, calculates current page angle metrics, applies target rotation degrees, and re-saves the updated PDF using pdf-lib.',
    howToUse: '1. Select and upload your PDF file.\n2. Choose rotation angle (90° CW, 90° CCW, 180°).\n3. Choose page selection (All, Odd, Even, Custom Range).\n4. Click "Rotate & Save PDF" to download the updated document.',
    proTips: [
      'PDF coordinates and content are automatically re-aligned to the new orientation. Text remains copyable and selectable.',
      'If you have scanned landscape documents showing up vertically, rotate them 90° CW or CCW to make them readable.'
    ]
  }
};
