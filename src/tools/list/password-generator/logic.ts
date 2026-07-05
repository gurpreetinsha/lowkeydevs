interface PasswordOptions {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
}

/**
 * Generates a random secure password based on options.
 * Uses cryptographically secure random numbers if available.
 */
export function generatePassword(options: PasswordOptions): string {
  const { length, uppercase, lowercase, numbers, symbols } = options;

  const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
  const numChars = '0123456789';
  const symChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  let allowedChars = '';
  let guaranteedChars: string[] = [];

  if (uppercase) {
    allowedChars += upperChars;
    guaranteedChars.push(getRandomChar(upperChars));
  }
  if (lowercase) {
    allowedChars += lowerChars;
    guaranteedChars.push(getRandomChar(lowerChars));
  }
  if (numbers) {
    allowedChars += numChars;
    guaranteedChars.push(getRandomChar(numChars));
  }
  if (symbols) {
    allowedChars += symChars;
    guaranteedChars.push(getRandomChar(symChars));
  }

  if (allowedChars.length === 0) {
    throw new Error('At least one character set must be selected');
  }

  let password = [...guaranteedChars];
  const remainingLength = length - guaranteedChars.length;

  for (let i = 0; i < remainingLength; i++) {
    password.push(getRandomChar(allowedChars));
  }

  // Shuffle the password array to avoid predictable starting positions
  return shuffleArray(password).join('');
}

function getRandomChar(chars: string): string {
  let randomIndex = 0;
  if (typeof globalThis !== 'undefined' && globalThis.crypto) {
    const array = new Uint32Array(1);
    globalThis.crypto.getRandomValues(array);
    randomIndex = array[0] % chars.length;
  } else {
    randomIndex = Math.floor(Math.random() * chars.length);
  }
  return chars.charAt(randomIndex);
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    let j = 0;
    if (typeof globalThis !== 'undefined' && globalThis.crypto) {
      const u32 = new Uint32Array(1);
      globalThis.crypto.getRandomValues(u32);
      j = u32[0] % (i + 1);
    } else {
      j = Math.floor(Math.random() * (i + 1));
    }
    const temp = shuffled[i];
    shuffled[i] = shuffled[j];
    shuffled[j] = temp;
  }
  return shuffled;
}

/**
 * Rates the strength of a password from 0 to 4.
 */
export function ratePasswordStrength(password: string): { score: number; label: string; color: string } {
  if (!password) return { score: 0, label: 'Very Weak', color: 'var(--error-color)' };
  
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  // Cap at 4
  const normalizedScore = Math.min(4, Math.floor(score / 1.5));

  const ratings = [
    { score: 0, label: 'Very Weak', color: 'hsl(350, 80%, 60%)' },
    { score: 1, label: 'Weak', color: 'hsl(30, 80%, 55%)' },
    { score: 2, label: 'Medium', color: 'hsl(45, 80%, 50%)' },
    { score: 3, label: 'Strong', color: 'hsl(100, 70%, 45%)' },
    { score: 4, label: 'Excellent', color: 'hsl(142, 70%, 45%)' }
  ];

  return ratings[normalizedScore] || ratings[0];
}
