import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'jpg-to-png',
  title: 'JPG to PNG Converter',
  description: 'Convert JPG/JPEG images to PNG format instantly. High quality conversion running entirely inside your browser for complete privacy.',
  category: 'image',
  keywords: ['jpg to png', 'jpeg to png converter', 'convert jpg to png online', 'transparency converter', 'image converter', 'client side converter'],
  icon: 'image',
  faqs: [
    {
      question: 'Is my image uploaded to any server?',
      answer: 'No. The conversion is performed locally in your browser using HTML5 Canvas. Your image files never leave your device, ensuring maximum privacy and security.'
    },
    {
      question: 'Will I lose image quality during conversion?',
      answer: 'PNG is a lossless compression format, meaning it preserves all pixel data. However, since the source JPG is already lossy, converting it to PNG will not restore lost data, but it will prevent any further compression artifacts.'
    },
    {
      question: 'What is the file size limit?',
      answer: 'Since the conversion runs client-side in your browser, there is no strict server limit. It can handle images up to 50MB or more depending on your device\'s system memory.'
    }
  ],
  educationalContent: {
    whatIsIt: 'JPG to PNG Converter translates JPEG compression maps into standard portable network graphics (PNG) lossless pixel grids, retaining pixel-perfect color depth.',
    howToUse: '1. Select or drag and drop a JPG image.\n2. Preview the original image details.\n3. Click "Convert to PNG" to process the file.\n4. Click "Download" to save your high-quality PNG image.',
    proTips: [
      'Use PNG format if you plan to edit the image further, as it prevents generation loss when re-saving.',
      'PNG files are generally larger than JPGs because they are lossless. For web optimization, check the output file sizes.'
    ]
  }
};
