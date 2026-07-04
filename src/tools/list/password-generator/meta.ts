import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'password-generator',
  title: 'Secure Password Generator',
  description: 'Generate strong, secure, random passwords instantly. Customize length and characters client-side with absolute safety.',
  category: 'generators',
  keywords: ['password generator', 'random password', 'secure password', 'password creator', 'generate password', 'strong password'],
  icon: 'Key',
  faqs: [
    {
      question: 'Are my generated passwords safe?',
      answer: 'Yes. The passwords are generated entirely in your browser using the cryptographically secure Web Crypto API (`window.crypto.getRandomValues`). No passwords are ever sent over the internet or stored on our servers.'
    },
    {
      question: 'What makes a password strong?',
      answer: 'A strong password is at least 12–16 characters long and contains a mix of uppercase letters, lowercase letters, numbers, and special symbols. Randomness is the most important factor in preventing brute-force attacks.'
    },
    {
      question: 'Can I generate multiple passwords at once?',
      answer: 'This MVP generates one highly secure password at a time, allowing you to instantly tweak criteria, test its strength rating, and copy it in one click.'
    }
  ],
  educationalContent: {
    whatIsIt: 'A Password Generator creates unpredictable strings of characters designed to secure accounts against hacking. By using cryptographically secure random number generators (CSPRNG), it ensures the output is mathematically resistant to prediction, unlike standard human-designed passwords.',
    howToUse: '1. Adjust the length slider to your desired character count (recommended: 16+ characters).\n2. Select which character sets to include (Uppercase, Lowercase, Numbers, and Symbols).\n3. Click "Generate Password" (or it will update automatically as you adjust options).\n4. Review the password strength indicator (Weak, Medium, Strong) and click "Copy" to save it securely.',
    proTips: [
      'Avoid using common dictionary words or personal info. The default settings of this generator create maximum entropy passwords.',
      'Always use a reputable password manager to store these generated passwords so you do not have to memorize them.'
    ]
  }
};
