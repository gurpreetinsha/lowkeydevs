import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'protect-pdf',
  title: 'Protect PDF',
  description: 'Encrypt your PDF documents with a secure password locally in your browser. Complete client-side security.',
  category: 'pdf',
  keywords: ['protect pdf', 'encrypt pdf', 'add password to pdf', 'lock pdf', 'secure pdf online', 'client side pdf protection'],
  icon: 'FileText',
  faqs: [
    {
      question: 'What is the difference between open password and owner password?',
      answer: 'An Open (User) Password is required to open and view the PDF document. An Owner (Permissions) Password is required to modify restrictions like printing, copying text, or editing.'
    },
    {
      question: 'Is it safe to enter my confidential passwords here?',
      answer: 'Yes, 100%. The encryption runs entirely inside your browser using local web crypto wrappers. Your password and PDF data never touch any server.'
    },
    {
      question: 'Can I remove the password later?',
      answer: 'Yes! You can remove the password at any time using our Unlock PDF tool, provided you know the original password.'
    }
  ],
  educationalContent: {
    whatIsIt: 'Protect PDF encrypts document streams using RC4 or AES algorithms. This prevents unauthorized users from opening, printing, or copying the file contents.',
    howToUse: '1. Select and upload your PDF file.\n2. Enter a secure password to restrict viewing.\n3. Optionally, configure an owner password to block editing/printing.\n4. Click "Encrypt & Protect PDF".\n5. Save your secure, password-locked PDF document.',
    proTips: [
      'Use a strong password combining uppercase, lowercase, numbers, and symbols to ensure protection against brute-force attacks.',
      'Note down your password carefully, as it cannot be recovered if forgotten.'
    ]
  }
};
