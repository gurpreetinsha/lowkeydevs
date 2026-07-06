import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'pdf-forms',
  title: 'PDF Forms',
  description: 'Fill interactive AcroForm fields in any PDF file directly in your browser. Complete forms, check boxes, select dropdowns, and download flattened or interactive PDFs.',
  category: 'pdf',
  keywords: ['pdf form filler', 'fill pdf forms online', 'acroforms filler', 'pdf form editor', 'flatten pdf forms', 'client side pdf form filler'],
  icon: 'FileText',
  faqs: [
    {
      question: 'How do I fill out form fields in a PDF?',
      answer: 'Upload your PDF containing form fields. The tool will parse and render an easy-to-use visual HTML form corresponding to the PDF fields. Fill out the fields, choose whether to flatten the form, and download the updated PDF.'
    },
    {
      question: 'What does "Flatten Form Fields" mean?',
      answer: 'Flattening merges the form fields directly into the PDF content stream, making the text and checkmarks permanent. This prevents other users from editing or changing the values later and ensures correct rendering across all PDF viewers.'
    },
    {
      question: 'Is it safe to type sensitive information in these forms?',
      answer: 'Yes. All parsing, filling, and rendering occurs 100% in your local browser using client-side JavaScript. None of your inputs are ever sent to a server.'
    }
  ],
  educationalContent: {
    whatIsIt: 'PDF Forms is a document field mapper. It reads the interactive forms catalog (AcroForms) embedded inside a PDF file, renders them as a standard web form, updates the field dictionaries with user values, and writes a compliant PDF stream.',
    howToUse: '1. Select and upload your PDF form file.\n2. Fill out the fields (text boxes, drop-downs, checkmarks) in the generated form panel.\n3. Optionally check "Flatten Form Fields" for read-only security.\n4. Click "Fill & Download PDF".',
    proTips: [
      'If your PDF doesn\'t have interactive fields, you can use our Edit PDF tool to add text layers manually.',
      'Checkboxes and radio buttons are fully supported alongside text inputs.'
    ]
  }
};
