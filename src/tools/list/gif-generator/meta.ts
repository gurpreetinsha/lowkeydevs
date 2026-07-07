import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'gif-generator',
  title: 'GIF Generator',
  description: 'Create animated GIFs from a sequence of images entirely in your browser. Customize speed, dimensions, loop options, quality, and text overlay.',
  category: 'image',
  icon: 'video',
  keywords: ['gif generator', 'create gif online', 'make animated gif', 'images to gif converter', 'gif maker from photos', 'client side gif creator', 'local gif builder', 'gifshot tools'],
  faqs: [
    {
      question: 'Is my visual data uploaded to a server to compile the GIF?',
      answer: 'No. The compilation runs 100% locally in your browser using HTML5 Canvas and client-side encoding scripts. No files are uploaded to any external server, ensuring complete data security.'
    },
    {
      question: 'What types of images can I upload as frames?',
      answer: 'You can upload standard image formats, including PNG, JPEG, and WebP, to compile your GIF sequence.'
    },
    {
      question: 'What does the frame delay option do?',
      answer: 'The frame delay (interval) controls the speed of the animation. It represents the number of seconds each image is visible on the screen. For example, a 0.2-second delay renders 5 frames per second.'
    },
    {
      question: 'How does the GIF quality setting work?',
      answer: 'This setting defines the color quantization quality factor (from 1 to 20). A quality index of 1 gives the highest visual accuracy but takes longer to render and yields a larger file. A quality index of 10-12 is typically ideal for general web animated GIFs.'
    }
  ],
  educationalContent: {
    whatIsIt: 'GIF Generator is a client-side utility that compiles multiple static image frames into a single, animated Graphics Interchange Format (GIF) file complete with interval frame delays and loops.',
    howToUse: '1. Drag and drop or browse to upload multiple images at once.\n2. Reorder frames in the sequence list using the left (◀) and right (▶) buttons, or remove unwanted frames.\n3. Adjust the speed (frame delay), target dimensions, and loop behavior.\n4. Optionally add a text overlay to render captions directly onto the frames.\n5. Click "Generate Animated GIF" to begin rendering, then download the finished file.',
    proTips: [
      'For smooth animations, upload frames of identical dimensions. If the sizes vary, the generator will automatically pad or fit them according to your selected output width and height.',
      'Add a text overlay caption to create personalized memes or highlight instructions for walkthrough animations.'
    ]
  }
};
