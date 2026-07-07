import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'video-to-gif-converter',
  title: 'Video to GIF Converter',
  description: 'Convert MP4, WebM, or OGG videos to animated GIF images. Control dimensions, framerate (FPS), and capture length completely in your browser.',
  category: 'video',
  keywords: ['video to gif', 'convert mp4 to gif', 'webm to gif converter', 'animated gif maker', 'client side gif converter', 'local video to gif'],
  icon: 'Video',
  faqs: [
    {
      question: 'How does the Video to GIF Converter work?',
      answer: 'It reads video frame data locally in the browser and compiles it into an animated GIF file. It runs completely client-side, using standard browser canvas/video decoders and a lightweight GIF compilation encoder.'
    },
    {
      question: 'Is there a limit on video file size or duration?',
      answer: 'Because processing is run entirely locally inside your browser, there are no upload size limits. However, we recommend using shorter clips (under 10 seconds) or small video resolutions to prevent high memory consumption and ensure fast GIF compilation.'
    },
    {
      question: 'Are my videos uploaded to any servers?',
      answer: 'No. Just like all our tools, your media files are processed 100% locally. The video never leaves your browser, ensuring absolute security and privacy.'
    }
  ],
  educationalContent: {
    whatIsIt: 'The Video to GIF Converter is a utility for content creators, developers, and designers to create lightweight animated snippets from video clips. GIFs are perfect for showing UI flows, embedding instructions in documentation, or sharing short animations.',
    howToUse: '1. Select or drag and drop your video file (MP4, WebM, OGG).\n2. Drag the video timeline slider or enter parameters to set the Start Time and Duration.\n3. Choose your desired output width, frame rate (FPS), and rendering quality.\n4. Click "Convert to GIF" to generate your animation.\n5. View the output size, check the preview, and click download.',
    proTips: [
      'For maximum responsiveness, keep the GIF duration under 5 seconds and FPS around 10-15. This produces smooth loops with compact file sizes.',
      'If you have a high-resolution video, scale the output width down (e.g. 480px or 640px) to keep the generated GIF dimensions reasonable.'
    ]
  }
};
