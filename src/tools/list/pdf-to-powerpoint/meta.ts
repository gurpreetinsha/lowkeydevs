import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'pdf-to-powerpoint',
  title: 'PDF to PowerPoint Converter',
  description: 'Convert PDF files into Microsoft PowerPoint (.pptx) presentation slides locally in your browser. 100% private.',
  category: 'pdf',
  keywords: ['pdf to powerpoint', 'convert pdf to pptx', 'pdf to ppt', 'convert pdf to slides', 'online pdf to pptx', 'client side pdf to powerpoint'],
  icon: 'FileText',
  faqs: [
    {
      question: 'Will the slides retain the exact layout of the PDF?',
      answer: 'Yes! By choosing the standard conversion mode, each PDF page is rendered as a high-resolution slide background, ensuring that all fonts, drawings, charts, and image layouts are 100% preserved.'
    },
    {
      question: 'Can I edit the text on the slides after conversion?',
      answer: 'By default, rendering pages as slide backgrounds creates static image slides. If you need editable text boxes, select the "Extract text to textboxes" option, though layout matching might vary based on spacing.'
    },
    {
      question: 'Is my presentation private?',
      answer: 'Yes. The parsing, slide creation, and PPTX compilation run entirely inside your browser using JavaScript. No documents are uploaded to any server.'
    }
  ],
  educationalContent: {
    whatIsIt: 'PDF to PowerPoint converts document structures into editable or background-mapped slides using PDF.js and PptxGenJS entirely within your local browser context.',
    howToUse: '1. Select and upload your PDF file.\n2. Choose layout settings (Slide background image vs. text-box isolation).\n3. Click "Convert to PowerPoint".\n4. Save your presentation (.pptx) file directly.',
    proTips: [
      'For presenting report sheets, the background image layout preserves charts and tables perfectly.',
      'Slide aspect ratios are set to widescreen 16:9 by default, matching standard modern presentation setups.'
    ]
  }
};
