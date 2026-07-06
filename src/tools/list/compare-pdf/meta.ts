import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'compare-pdf',
  title: 'Compare PDF',
  description: 'Compare two PDF documents side-by-side. View visual rendering differences and run character-by-character text diff analysis locally in your browser.',
  category: 'pdf',
  keywords: ['compare pdf', 'compare pdf files side by side', 'pdf diff online', 'visual pdf comparison', 'textual pdf diff', 'client side pdf diff'],
  icon: 'FileText',
  faqs: [
    {
      question: 'How do I compare two PDF files?',
      answer: 'Upload PDF Document A and PDF Document B. The tool will render both documents side-by-side. You can choose "Visual Mode" to inspect rendering pages side-by-side, or "Text Diff Mode" to view a highlighted character-by-character difference report between their text contents.'
    },
    {
      question: 'How is the text diff calculated?',
      answer: 'The tool extracts text from both PDFs using PDF.js text layer capabilities and calculates standard line and character diffs using the jsdiff library. Added text is highlighted in green, and removed text is highlighted in red.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes. Both files are loaded, parsed, rendered, and compared 100% locally in your browser. No document content is ever sent to a server.'
    }
  ],
  educationalContent: {
    whatIsIt: 'Compare PDF is a document comparison utility. It provides a dual-pane renderer for comparing layout changes and a differential engine that parses text structures to find literal differences in copy.',
    howToUse: '1. Select and upload PDF A (original) and PDF B (revised).\n2. Toggle between "Visual side-by-side" and "Text Diff" views.\n3. Navigate page-by-page to inspect visual deviations.\n4. Scroll through the color-coded text diff pane to see added and removed words.',
    proTips: [
      'Text comparison is ideal for contracts, agreements, or drafts to make sure no sneaky clauses were added.',
      'Visual mode works great for verifying design alignment, fonts, and grid spacing modifications.'
    ]
  }
};
