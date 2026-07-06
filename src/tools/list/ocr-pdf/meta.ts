import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'ocr-pdf',
  title: 'OCR PDF',
  description: 'Convert scanned PDF documents into searchable PDFs or extract their text directly in your browser. Fast, free, and completely private.',
  category: 'pdf',
  keywords: ['ocr pdf', 'extract text from pdf', 'scanned pdf to text', 'searchable pdf converter', 'online ocr', 'browser ocr', 'tesseract pdf ocr'],
  icon: 'FileText',
  faqs: [
    {
      question: 'How does client-side PDF OCR work?',
      answer: 'This tool renders each page of your PDF into an image inside your browser, then uses Tesseract.js (an OCR engine running via WebAssembly) to detect and extract characters. All processing is local, and no files are sent to any server.'
    },
    {
      question: 'What is a searchable PDF?',
      answer: 'A searchable PDF contains an invisible layer of digital text placed exactly over the scanned images. This allows you to select, highlight, and search (using Ctrl+F) text within the scanned document while keeping its original visual design.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes. Because all operations are executed in your browser locally, your documents never leave your computer. It is 100% private and secure.'
    }
  ],
  educationalContent: {
    whatIsIt: 'OCR (Optical Character Recognition) PDF is a utility that analyzes scanned or image-based PDF documents and identifies text content. It allows you to download the extracted text as a plain text file or re-compile the document as a searchable PDF with invisible text overlays.',
    howToUse: '1. Select and upload your scanned PDF file.\n2. Click "Perform OCR" to begin the extraction process.\n3. Monitor the progress page-by-page.\n4. Copy the extracted text, download the text (.txt), or save the document as a Searchable PDF.',
    proTips: [
      'For best results, ensure the scanned document has high contrast and is right-side up.',
      'Larger files with many pages may take a few minutes to process as OCR is a CPU-intensive operation.'
    ]
  }
};
