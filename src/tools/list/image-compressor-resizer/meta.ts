import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'image-compressor-resizer',
  title: 'Image Compressor & Resizer',
  description: 'Compress and resize JPG, PNG, and WebP images client-side. Optimize file sizes and adjust dimensions instantly with complete privacy.',
  category: 'image',
  keywords: ['image compressor', 'image resizer', 'compress jpg', 'resize png', 'webp compression', 'optimize image', 'client side image resizer'],
  icon: 'Image',
  faqs: [
    {
      question: 'How does the image compressor work?',
      answer: 'It uses HTML5 Canvas APIs in the browser to resize images and adjust compression quality settings (lossy format encoding). All processing occurs entirely locally inside your browser.'
    },
    {
      question: 'Are my images uploaded to a server?',
      answer: 'No. Your images never leave your computer. Everything is processed locally in memory via client-side JavaScript, ensuring 100% privacy.'
    },
    {
      question: 'Which formats are supported for compression?',
      answer: 'You can upload JPG, JPEG, PNG, and WebP formats. Compression settings (quality adjustment) are highly effective for lossy formats like JPG and WebP. For PNGs, you can resize dimensions or convert them to WebP/JPG for smaller sizes.'
    }
  ],
  educationalContent: {
    whatIsIt: 'The Image Compressor & Resizer is an optimization utility designed to speed up page loads and save storage space. By scaling pixel dimensions and adjusting output quality, you can significantly reduce file sizes without noticeable visual degradation.',
    howToUse: '1. Drag and drop or browse to select your image (JPG, PNG, WebP).\n2. Use the quality slider to adjust compression, or type in target width/height dimensions (toggle lock to keep aspect ratio).\n3. Choose your desired output format (same, JPG, PNG, or WebP).\n4. Click "Compress & Resize" to generate the optimized image.\n5. Review the new file size and download your compressed file.',
    proTips: [
      'Converting large PNG screenshots or layout designs to WebP with 80% quality can reduce file sizes by over 80% with minimal loss in clarity.',
      'Check the "Constrain Proportions" option when resizing to prevent horizontal or vertical stretching.'
    ]
  }
};
