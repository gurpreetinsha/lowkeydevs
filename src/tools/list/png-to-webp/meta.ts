import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'png-to-webp',
  title: 'PNG to WebP Converter',
  description: 'Convert PNG images to WebP format instantly while preserving transparency. Shrink image files sizes without sacrificing details.',
  category: 'image',
  keywords: ['png to webp', 'convert png to webp', 'transparency webp', 'transparent image converter', 'image compression', 'client side webp'],
  icon: 'image',
  faqs: [
    {
      question: 'Will my converted WebP image preserve transparency?',
      answer: 'Yes! WebP fully supports transparency (alpha channel) in both lossy and lossless modes. Converting your transparent PNG to WebP will keep all transparent details perfectly intact.'
    },
    {
      question: 'How much smaller will the WebP file be compared to PNG?',
      answer: 'For transparent graphics, WebP images are typically 25% to 30% smaller than standard PNGs. This is extremely valuable for reducing page weight on websites that feature layered graphic elements.'
    },
    {
      question: 'Are my images processed securely?',
      answer: 'Yes, absolutely. The conversion operates strictly within your local browser context.'
    }
  ],
  educationalContent: {
    whatIsIt: 'PNG to WebP Converter maps the lossless portable network graphics (PNG) data into standard WebP format, carrying over transparency layers seamlessly.',
    howToUse: '1. Choose a PNG file.\n2. Click "Convert to WebP".\n3. Click "Download" to fetch your highly compressed transparent WebP file.',
    proTips: [
      'Use WebP format for transparent logos and UI icons to save bandwidth.',
      'Check the size comparison display to confirm your file optimization.'
    ]
  }
};
