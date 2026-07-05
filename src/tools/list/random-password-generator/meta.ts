import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'random-password-generator',
  title: 'Random Password Generator (Bulk)',
  description: 'Generate secure random passwords in bulk online. Customize password lengths, quantity, character sets, and exclusion options.',
  category: 'generators',
  keywords: ['random password generator', 'bulk password generator', 'secure password lists', 'generate random passwords', 'mass password generator'],
  faqs: [
    {
      question: 'How is this different from the Strong Password Generator?',
      answer: 'This bulk generator is designed to create lists of multiple passwords (up to 100 at a time) for setting up multiple accounts, database seeds, or system installations. The Strong Password Generator focuses on crafting a single passphrase or high-entropy credentials with interactive strength scoring.'
    },
    {
      question: 'Is it safe to generate passwords here?',
      answer: 'Absolutely. All passwords are generated fully client-side inside your browser using the cryptographically secure Web Crypto API. No passwords are sent to our servers.'
    }
  ],
  educationalContent: {
    whatIsIt: 'A Random Password Generator is a tool that creates secure, high-entropy password strings using cryptographically secure random sequences to avoid human predictability.',
    howToUse: '1. Choose the number of passwords to generate.\n2. Set the desired character length and include sets like uppercase, lowercase, numbers, and symbols.\n3. Turn on similar/ambiguous characters exclusions if needed.\n4. Click "Generate" and copy the full list.'
  }
};
