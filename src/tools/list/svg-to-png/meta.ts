import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'svg-to-png',
  title: 'SVG to PNG Converter',
  description: 'Convert scalable vector graphics (SVG) into rasterized PNG format. Render clean vector shapes into high resolution static pixels.',
  category: 'image',
  keywords: ['svg to png', 'convert svg to png online', 'vector to raster', 'svg render', 'scalable vector graphics converter', 'client side svg conversion'],
  icon: 'image',
  faqs: [
    {
      question: 'Will my converted PNG image support scaling without quality loss?',
      answer: 'No. PNG is a raster format made of static pixels. Once you convert the vector SVG to PNG, it becomes fixed at a specific resolution and will pixelate if stretched.'
    },
    {
      question: 'Can I define the dimensions of the output PNG?',
      answer: 'Yes! The converter automatically reads the SVG\'s viewBox/width/height and scales the render, but you can also input custom resolutions if you need a high-res print-ready PNG.'
    },
    {
      question: 'Is it safe to convert corporate logos here?',
      answer: 'Yes. The entire rendering process takes place locally inside your browser via the HTML5 canvas API. Nothing is sent to external servers.'
    }
  ],
  educationalContent: {
    whatIsIt: 'SVG to PNG Converter converts XML-based scalable vector graphics (SVG) shapes, curves, and layers into standard lossless portable network graphics (PNG) raster grids.',
    howToUse: '1. Select or drop your SVG file.\n2. Preview the rendering.\n3. Adjust the target width/height if needed.\n4. Click "Convert to PNG" and download.',
    proTips: [
      'For crisp icon renders, double the width and height parameters before converting to create high-DPI "@2x" graphics.',
      'Make sure all fonts used inside the SVG are system-installed or inline-styled, otherwise they may fall back to default serif/sans fonts during canvas drawing.'
    ]
  }
};
