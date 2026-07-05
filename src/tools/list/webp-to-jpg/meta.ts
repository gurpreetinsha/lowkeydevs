import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'webp-to-jpg',
  title: 'WebP to JPG Converter',
  description: 'Convert WebP images to JPG format instantly. Perfect for compatibility issues when uploading files to legacy platforms that do not yet support modern formats.',
  category: 'image',
  keywords: ['webp to jpg', 'convert webp to jpeg', 'change webp to jpg online', 'webp compatibility', 'image converter', 'client side webp converter'],
  icon: 'image',
  faqs: [
    {
      question: 'Why should I convert WebP to JPG?',
      answer: 'While WebP offers superior compression, some older email clients, content management systems (CMS), or legacy printing services do not support the WebP format. Converting it to JPG makes it globally compatible.'
    },
    {
      question: 'Will the image size change?',
      answer: 'Usually, yes. WebP has better compression, so when you convert it back to JPG, the file size will often increase even though the visual quality remains the same or slightly lower due to JPG compression loss.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes! The conversion happens entirely locally inside your browser.'
    }
  ],
  educationalContent: {
    whatIsIt: 'WebP to JPG Converter translates WebP predictive frame streams back into the classic joint photographic experts group (JPG) compression format, applying standard white background overlays.',
    howToUse: '1. Select a WebP image.\n2. Click "Convert to JPG".\n3. Click "Download" to save your high-quality JPG image.',
    proTips: [
      'If your WebP image has transparent parts, keep in mind they will be replaced with a solid white background in the resulting JPG.',
      'To maintain transparency, consider converting WebP to PNG instead.'
    ]
  }
};
