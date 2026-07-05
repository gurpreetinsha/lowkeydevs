import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'png-to-jpg',
  title: 'PNG to JPG Converter',
  description: 'Convert PNG images to JPG format online. Reduce file sizes, adjust quality levels, and process everything locally in your browser.',
  category: 'image',
  keywords: ['png to jpg', 'convert png to jpg', 'png to jpeg converter', 'compress image', 'browser conversion', 'privacy image tool'],
  icon: 'image',
  faqs: [
    {
      question: 'Will transparent areas remain transparent in JPG?',
      answer: 'No. The JPG format does not support transparency. Any transparent or semi-transparent regions in your source PNG will be filled with a solid white background color.'
    },
    {
      question: 'How does this tool help optimize my website images?',
      answer: 'PNG files containing photos or complex gradients are often unnecessarily large. Converting them to JPG significantly reduces file size (often by 70-80%), making your web pages load much faster.'
    },
    {
      question: 'Is my data safe?',
      answer: 'Yes! The conversion occurs strictly inside your browser. No files are uploaded to our servers.'
    }
  ],
  educationalContent: {
    whatIsIt: 'PNG to JPG Converter converts lossless portable network graphics (PNG) files into joint photographic experts group (JPG) compression format, applying a high-performance rendering canvas with custom backgrounds.',
    howToUse: '1. Select a PNG file.\n2. Preview its current details.\n3. Click "Convert to JPG".\n4. Download the compressed JPG output file.',
    proTips: [
      'For screenshots or diagrams containing text, PNG is preferred to avoid JPG ringing artifacts.',
      'For photographs, JPG is almost always superior in terms of size and visual compression.'
    ]
  }
};
