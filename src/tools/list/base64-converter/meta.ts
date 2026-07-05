import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'base64-converter',
  title: 'Base64 Encoder & Decoder',
  description: 'Encode text to Base64 or decode Base64 back to plain text instantly. Safe, secure, client-side converter.',
  category: 'converters',
  keywords: ['base64 encoder', 'base64 decoder', 'base64 convert', 'text to base64', 'base64 to text', 'base64 tool'],
  icon: 'RefreshCw',
  faqs: [
    {
      question: 'Is my converted data secure?',
      answer: 'Yes. All encoding and decoding happen directly inside your browser. No strings or data are sent to our servers.'
    },
    {
      question: 'What is Base64 encoding used for?',
      answer: 'Base64 is a binary-to-text encoding scheme. It is widely used to represent binary data (like images or files) in an ASCII string format, making it safe for transmission over text-based protocols like email (MIME) or URL query parameters.'
    },
    {
      question: 'Does this handle Unicode/UTF-8 characters?',
      answer: 'Yes. Our converter includes full UTF-8 character support, ensuring that accented characters, emojis, and international text encode and decode correctly without breaking.'
    }
  ],
  educationalContent: {
    whatIsIt: 'Base64 represents data in a set of 64 characters (A-Z, a-z, 0-9, +, /). It is commonly used when raw binary needs to be transferred over media that are designed to handle text, ensuring data integrity during transfer.',
    howToUse: '1. Choose your mode: "Encode" (convert plain text to Base64) or "Decode" (convert Base64 back to plain text).\n2. Paste your text in the Input box.\n3. The result will render instantly in the Output box as you type.\n4. Click "Copy" to save your result, or "Clear" to reset the editor.',
    proTips: [
      'If you see a decoding error, verify that the input string is a valid Base64 string and does not contain illegal characters.',
      'Our tool uses an optimized UTF-8 encoding method to prevent standard browser errors when encoding non-ASCII symbols like emojis.'
    ]
  }
};
