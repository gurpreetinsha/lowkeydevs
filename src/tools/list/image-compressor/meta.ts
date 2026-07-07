import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'image-compressor',
  title: 'Image Compressor',
  description: 'Compress PNG, JPEG, and WebP images locally in your browser. Reduce file size without losing visible quality using customizable compression and scaling.',
  category: 'image',
  icon: 'sliders',
  keywords: ['image compressor', 'compress png', 'compress jpeg', 'reduce image size', 'webp compressor', 'resize image online', 'squoosh alternative', 'local image compression'],
  faqs: [
    {
      question: 'Is my image uploaded to any server for compression?',
      answer: 'No. The compression is performed entirely client-side inside your browser using HTML5 Canvas. Your images never leave your computer, ensuring 100% privacy.'
    },
    {
      question: 'Which formats are supported for compression?',
      answer: 'This tool supports PNG, JPEG, and WebP formats. You can also convert between these formats during the compression process.'
    },
    {
      question: 'How does the quality slider affect my image?',
      answer: 'For lossy formats like JPEG and WebP, the quality slider controls the compression level (from 10% to 100%). Lower values yield smaller file sizes but may introduce compression artifacts. A value of 80% is usually the sweet spot for web use.'
    },
    {
      question: 'Can I resize the dimensions of the image?',
      answer: 'Yes. You can scale down the image by a percentage (e.g., 50%) or enter custom width and height dimensions. By default, the aspect ratio is maintained to avoid stretching.'
    }
  ],
  educationalContent: {
    whatIsIt: 'Image Compressor is a browser-based optimization tool designed to reduce the storage size of digital images (JPEG, PNG, WebP) by utilizing lossy canvas encoding and resolution adjustments.',
    howToUse: '1. Drag and drop or browse to select your image.\n2. Adjust the Quality slider to balance file size and visual clarity.\n3. Optionally adjust the Scale slider or enter custom Width/Height to resize the resolution.\n4. Slide the side-by-side divider to compare the original vs. compressed image.\n5. Click "Download Compressed Image" to save the optimized file.',
    proTips: [
      'For the best balance of file size and visual quality, convert PNG screenshots to WebP with 80% quality. This often reduces file size by over 80%.',
      'Use the side-by-side comparison slider to zoom in or slide back and forth to inspect fine text and details for compression artifacts.'
    ]
  }
};
