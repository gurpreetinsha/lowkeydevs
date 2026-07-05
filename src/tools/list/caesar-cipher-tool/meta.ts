import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'caesar-cipher-tool',
  title: 'Caesar Cipher Tool',
  description: 'Encrypt or decrypt text online using the classic Caesar Cipher algorithm. Customize shift values and encoding instantly.',
  category: 'security',
  icon: 'Shield',
  keywords: ['caesar cipher', 'caesar shift converter', 'rot13 tool', 'classic cryptography', 'text encryptor'],
  faqs: [
    {
      question: 'What is a Caesar Cipher?',
      answer: 'The Caesar Cipher is one of the earliest and simplest cryptographic methods. It is a type of substitution cipher in which each letter in the plaintext is shifted a fixed number of positions down the alphabet.'
    },
    {
      question: 'How secure is a Caesar Cipher?',
      answer: 'It is highly insecure and can be easily broken. Since there are only 25 possible shift keys, a simple brute-force attack can decode it in milliseconds. It is primarily used for educational and recreational purposes today.'
    }
  ],
  educationalContent: {
    whatIsIt: 'A Caesar Cipher Tool shifts each alphabetical character in a string by a specified number of places. It was named after Julius Caesar, who used it to communicate with his generals.',
    howToUse: '1. Enter the text you want to process.\n2. Choose the shift key (value from 1 to 25).\n3. Toggle between "Encrypt" and "Decrypt" modes.\n4. Copy the resulting encoded or decoded text.'
  }
};
