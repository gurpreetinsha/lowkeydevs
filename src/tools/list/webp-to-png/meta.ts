import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'webp-to-png',
  title: 'WebP to PNG Converter',
  description: 'Convert WebP images to PNG format instantly while preserving transparency. Best for viewing WebP images on older software.',
  category: 'image',
  keywords: ['webp to png', 'convert webp to png', 'transparency converter', 'image converter', 'client side converter'],
  icon: 'image',
  faqs: [
    {
      question: 'Will transparency be lost when converting WebP to PNG?',
      answer: 'No. Both WebP and PNG formats fully support transparency. The converter preserves the transparency details (alpha channel) from your source WebP image.'
    },
    {
      question: 'Why does the PNG output file sometimes look larger than the WebP?',
      answer: 'PNG uses lossless compression (DEFLATE), whereas WebP can use highly efficient lossy compression. When converting from lossy WebP to lossless PNG, the PNG encoder must define every exact pixel explicitly without losing any details, which often results in a larger file size.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes! The conversion happens entirely locally inside your browser.'
    }
  ],
  educationalContent: {
    whatIsIt: 'WebP to PNG Converter translates WebP pixels into portable network graphics (PNG) lossless compression arrays, carrying over transparency elements.',
    howToUse: '1. Select a WebP file.\n2. Click "Convert to PNG".\n3. Click "Download" to save your high-quality transparent PNG image.',
    proTips: [
      'Use PNG format if you need to open the image in legacy graphics editors like older versions of Photoshop that don\'t support WebP.',
      'Check the final file sizes if storage space is critical.'
    ]
  }
};
