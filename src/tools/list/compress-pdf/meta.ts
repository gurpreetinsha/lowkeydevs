import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'compress-pdf',
  title: 'Compress PDF',
  description: 'Reduce the file size of your PDF documents locally. Choose between structural and image rasterization compression levels.',
  category: 'pdf',
  keywords: ['compress pdf', 'reduce pdf size', 'shrink pdf document', 'pdf size reducer', 'local pdf compressor', 'compress pdf online'],
  icon: 'FileText',
  faqs: [
    {
      question: 'What is the difference between standard and maximum compression?',
      answer: 'Standard compression recreates the PDF structure (using copyPages), stripping redundant metadata, unused fonts, and duplicate resource mappings while keeping vector graphic and text sharpness. Maximum compression converts PDF pages into compressed JPEG images at a selected resolution, which works incredibly well for large, scanned, or image-heavy PDFs.'
    },
    {
      question: 'Will text remain selectable after maximum compression?',
      answer: 'No, maximum compression rasterizes the pages into images. If you need text search and selection to work, use the Standard compression option.'
    },
    {
      question: 'Are my PDF documents uploaded to any external server?',
      answer: 'No. The compression happens entirely client-side using JavaScript. Your files never leave your computer, ensuring absolute security and privacy.'
    }
  ],
  educationalContent: {
    whatIsIt: 'Compress PDF decreases file size using structural cleanup (standard) or page rasterization at reduced DPI and JPEG quality (maximum). All calculations run inside the browser context.',
    howToUse: '1. Drag and drop your PDF file into the dropzone.\n2. Choose a compression level: Standard (ideal for text PDFs, keeps vector quality) or Maximum (ideal for scanned/image-heavy PDFs, downsamples pages).\n3. Click "Compress PDF" to start optimization.\n4. View the original vs. compressed file sizes and download your optimized PDF.',
    proTips: [
      'For presentation slides containing lots of large images, Standard compression can often halve the file size without any pixelation.',
      'If you choose Maximum compression, 150 DPI is generally the sweet spot for print quality, while 96 DPI is optimal for sharing on mobile/web.'
    ]
  }
};
