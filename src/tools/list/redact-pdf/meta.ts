import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'redact-pdf',
  title: 'Redact PDF',
  description: 'Permanently remove sensitive information, text, and images from your PDF files. Visually draw black boxes to redact content locally in your browser.',
  category: 'pdf',
  keywords: ['redact pdf', 'remove sensitive info pdf', 'black out text pdf', 'pdf content remover', 'sanitize pdf online', 'client side pdf redaction'],
  icon: 'FileText',
  faqs: [
    {
      question: 'How do I redact a PDF?',
      answer: 'Upload your PDF document. The editor will display your PDF pages. Drag your mouse to draw rectangles over text, images, or figures you wish to redact. You can select your redaction color (black, white, or red/gray). When finished, click "Apply Redactions" to generate a securely sanitized PDF.'
    },
    {
      question: 'Is the redacted content actually removed or just hidden?',
      answer: 'Content is permanently covered! The tool uses pdf-lib to draw solid, opaque vector rectangle shapes onto the page stream. This physically burns the colored box over the underlying pixels and text blocks, rendering it unrecoverable.'
    },
    {
      question: 'Can I redact multiple pages?',
      answer: 'Yes! You can browse page-by-page, draw multiple redaction boxes on any page, and apply them all at once when generating the file.'
    }
  ],
  educationalContent: {
    whatIsIt: 'Redact PDF is a sanitization utility designed to mask private identifiers (like SSNs, phone numbers, names, or bank details). It overlays opaque blocking vector paths on the PDF document coordinates.',
    howToUse: '1. Select and upload the PDF file you wish to sanitize.\n2. Navigate through the document pages using the navigation bar.\n3. Click and drag on the page canvas to draw redaction rectangles.\n4. Select your preferred blackout color.\n5. Click "Apply & Download Redacted PDF".',
    proTips: [
      'Draw boxes slightly larger than the text you want to hide to make sure no letters or word edges peek out.',
      'Unlike simple PDF annotation editors, this tool embeds the redaction rectangles as solid vector objects in the page streams, preventing readers from "moving" the box to see what is underneath.'
    ]
  }
};
