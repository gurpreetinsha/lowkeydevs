import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'uuid-generator',
  title: 'UUID Generator',
  description: 'Generate secure random UUIDs (v4) in bulk. Configure hyphens, uppercase casing, braces, and copy results instantly.',
  category: 'generators',
  keywords: ['uuid generator', 'guid generator', 'generate uuid', 'bulk uuid', 'uuid v4', 'online uuid generator'],
  icon: 'Fingerprint',
  faqs: [
    {
      question: 'Are the generated UUIDs secure?',
      answer: 'Yes. The tool uses the cryptographically secure Web Crypto API (crypto.getRandomValues) natively supported in modern browsers.'
    },
    {
      question: 'What is a UUID v4?',
      answer: 'A Version 4 UUID is a universally unique identifier generated using random numbers. It contains 122 bits of entropy, making collisions virtually impossible.'
    },
    {
      question: 'Is my generated data private?',
      answer: 'Absolutely. All generation is done client-side within your browser. No data or identifiers are sent to our servers.'
    }
  ],
  educationalContent: {
    whatIsIt: 'A UUID (Universally Unique Identifier) is a 128-bit label used to uniquely identify information in computer systems without significant central coordination.',
    howToUse: 'Choose your desired output options (hyphens, uppercase, braces) and the quantity to generate. Click "Generate" to generate them. Use the Copy button to quickly copy the list to your clipboard.',
    proTips: [
      'Disable hyphens if you need a compact 32-character hexadecimal format.',
      'Use bulk generation (up to 100 at once) to prepare test datasets or database seeds quickly.'
    ]
  }
};
