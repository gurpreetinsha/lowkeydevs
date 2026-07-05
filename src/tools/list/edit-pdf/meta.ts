import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'edit-pdf',
  title: 'Edit PDF',
  description: 'Add text notes, freehand drawing annotations, and basic shapes onto your PDF documents locally. 100% private PDF editor.',
  category: 'pdf',
  keywords: ['edit pdf', 'annotate pdf', 'pdf editor online', 'write on pdf', 'draw on pdf', 'local pdf editor', 'client side pdf editor'],
  icon: 'FileText',
  faqs: [
    {
      question: 'What edits can I perform with this tool?',
      answer: 'You can add text blocks (customizing text contents, font size, and text color), draw freehand annotations directly on top of pages, insert rectangles/circles, and navigation pages.'
    },
    {
      question: 'Does this editor support editing existing text inside the PDF?',
      answer: 'No. This editor is designed for adding new annotations, drawings, notes, and shapes on top of existing PDF layers. It does not rewrite or edit the pre-existing embedded PDF text structures.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes. The PDF is rendered and edited entirely on your device using canvas overlays. Your modified document never touches a server.'
    }
  ],
  educationalContent: {
    whatIsIt: 'Edit PDF is a client-side layout editor that overlays text boxes and custom drawing nodes onto PDF page coordinate surfaces and merges them into the final file stream using pdf-lib.',
    howToUse: '1. Drag and drop a PDF file to upload.\n2. Select an editing tool from the toolbar: Text, Draw, or Clear.\n3. Click on the document page to add text, or drag to sketch freehand.\n4. Navigate pages using the page controls.\n5. Click "Save PDF" to permanently embed your changes and download the edited file.',
    proTips: [
      'Click the page viewport precisely when placing text. Double check font sizes and colors before saving.',
      'Use the freehand tool with red ink to highlight parts of the text or sign documents directly.'
    ]
  }
};
