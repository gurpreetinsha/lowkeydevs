import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'px-to-rem-converter',
  title: 'PX to REM Converter',
  description: 'Convert pixels (PX) to REM units and vice versa. Customize the root font size and view a responsive CSS size reference table.',
  category: 'converters',
  keywords: ['px to rem', 'rem to px', 'pixel converter', 'rem converter', 'css units converter', 'font size converter', 'responsive design calculator'],
  icon: 'RefreshCw',
  faqs: [
    {
      question: 'What is a REM unit in CSS?',
      answer: 'REM (Root EM) is a CSS unit of measurement relative to the font-size of the root HTML element (usually the <html> tag). It is widely used in responsive typography and layouts.'
    },
    {
      question: 'How is PX converted to REM?',
      answer: 'The conversion formula is: REM = Pixels / Base Font Size. For example, if your base font size is 16px, then 20px is converted to REM as: 20 / 16 = 1.25rem.'
    },
    {
      question: 'Why should I use REM instead of PX?',
      answer: 'Using REM units improves accessibility. When users change their browser\'s default font size (e.g. for readability), REM-based designs automatically scale up or down to respect the user\'s settings, whereas PX-based layouts stay fixed.'
    }
  ],
  educationalContent: {
    whatIsIt: 'The PX to REM Converter is a utility for web developers and designers to quickly translate absolute pixel dimensions (PX) to relative, accessible layout units (REM). By converting absolute screen values to relative layout values, you can build responsive, accessible, and user-configurable interfaces.',
    howToUse: '1. Set your base document font-size in the "Base Font Size" box (usually 16px by default).\n2. Type in the "Pixels (PX)" input to see the REM value update instantly.\n3. Alternatively, enter a REM value to calculate the corresponding pixels.\n4. Copy the auto-generated CSS code snippet for direct paste into your stylesheet.',
    proTips: [
      'Tailwind CSS and many modern design systems use a base of 16px (1rem) for their spacing scale (e.g., p-4 is 1rem/16px).',
      'Keep the base size customizable to match different frameworks or custom themes that reset the html font-size to 62.5% (10px) to make math easier.'
    ]
  }
};
