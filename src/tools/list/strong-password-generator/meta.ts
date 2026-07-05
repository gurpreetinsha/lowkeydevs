import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'strong-password-generator',
  title: 'Strong Password Generator',
  description: 'Generate high-entropy secure random passwords or memorable word-based passphrases. Check strength score and cracking times instantly.',
  category: 'generators',
  keywords: ['strong password generator', 'secure password generator', 'diceware passphrase generator', 'password entropy tool', 'random passcode generator'],
  faqs: [
    {
      question: 'What is a memorable passphrase?',
      answer: 'A memorable passphrase consists of several random words joined together (e.g., "Apple-Cedar-Chair-Dream"). According to security guidelines (like NIST), these are often easier for humans to remember while being mathematically extremely difficult for computers to crack.'
    },
    {
      question: 'What is entropy in passwords?',
      answer: 'Entropy measures the unpredictability of a password in bits. Higher entropy means it would take much longer for a hacker to crack via brute-force or dictionary attacks.'
    }
  ],
  educationalContent: {
    whatIsIt: 'A Strong Password Generator creates passwords or passphrases with maximum mathematical randomness to secure sensitive logins, offering visual feedback on password strength.',
    howToUse: '1. Select the generator mode (Random Characters or Memorable Passphrase).\n2. Adjust the length slider or word count.\n3. Customize settings (separators, capitalization, symbols).\n4. View the live strength meter and click "Copy Password".'
  }
};
