import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'sign-pdf',
  title: 'Sign PDF',
  description: 'Sign PDF documents online securely. Draw your signature, type it using elegant script fonts, or upload a signature image. 100% local.',
  category: 'pdf',
  keywords: ['sign pdf', 'electronic signature', 'e-sign pdf online', 'digital signature', 'add signature to pdf', 'local pdf signer'],
  icon: 'FileText',
  faqs: [
    {
      question: 'Is my electronic signature legally binding?',
      answer: 'Yes, electronic signatures are legally recognized in most countries under laws such as the ESIGN Act (US) and eIDAS Regulation (EU) for standard contracts, agreements, and waivers.'
    },
    {
      question: 'Can I reuse my signature across different pages?',
      answer: 'Yes. Once you create your signature (by drawing, typing, or uploading), you can place multiple copies of it on different pages and resize them individually.'
    },
    {
      question: 'Is my signature data private?',
      answer: 'Absolutely. The signature creation, placing, and final rendering are processed entirely client-side. Your signature drawings and PDF documents are never uploaded to any external server.'
    }
  ],
  educationalContent: {
    whatIsIt: 'Sign PDF allows adding electronic signatures (drawn, typed, or uploaded) onto PDF documents locally using canvas coordinates positioning and pdf-lib image embedding.',
    howToUse: '1. Select and upload your PDF document.\n2. Click "Create Signature" to draw a freehand signature, type it in an elegant script font, or upload an image.\n3. Click "Place Signature" to overlay it onto the current page.\n4. Drag and resize the signature box on any page. Navigate pages as needed.\n5. Click "Apply & Download" to compile and save your signed PDF document.',
    proTips: [
      'For typed signatures, try different cursive fonts to find the style that fits your document style.',
      'If you upload a signature image, use a PNG with transparent background for the cleanest look.'
    ]
  }
};
