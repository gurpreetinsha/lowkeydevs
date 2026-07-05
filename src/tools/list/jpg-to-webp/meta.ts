import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'jpg-to-webp',
  title: 'JPG to WebP Converter',
  description: 'Convert JPG/JPEG images to WebP format instantly. Speed up your website loading times by converting images to Google\'s modern, highly optimized WebP format.',
  category: 'image',
  keywords: ['jpg to webp', 'convert jpeg to webp', 'modern image format', 'compress jpg to webp', 'seo image optimizer', 'client side webp converter'],
  icon: 'image',
  faqs: [
    {
      question: 'Why should I convert my JPGs to WebP?',
      answer: 'WebP is a modern image format developed by Google that provides superior lossy and lossless compression. WebP images are typically 25-35% smaller in file size compared to JPGs at equivalent quality, leading to faster web downloads and improved page speeds.'
    },
    {
      question: 'Is WebP widely supported by browsers?',
      answer: 'Yes! WebP is fully supported by all modern web browsers, including Google Chrome, Apple Safari, Mozilla Firefox, Microsoft Edge, and Opera on both desktop and mobile platforms.'
    },
    {
      question: 'How secure is this conversion tool?',
      answer: 'Completely secure. The translation takes place inside your browser context. No servers are involved.'
    }
  ],
  educationalContent: {
    whatIsIt: 'JPG to WebP Converter translates joint photographic experts group (JPG) compression tables into WebP predictive encoding structures, delivering smaller file sizes for web delivery.',
    howToUse: '1. Select a JPG image.\n2. Click "Convert to WebP".\n3. View the compression size savings instantly.\n4. Download your new WebP image.',
    proTips: [
      'Use WebP format for all background images and article covers on your website to improve Google PageSpeed Insights scores.',
      'Check the size comparison table to see how many kilobytes were saved during conversion.'
    ]
  }
};
