export interface LetterGenOptions {
  quantity: number;
  upper: boolean;
  lower: boolean;
  unique: boolean;
  separator: string;
}

/**
 * Generates random letters.
 */
export function generateRandomLetters(options: LetterGenOptions): string[] {
  const { quantity, upper, lower, unique, separator } = options;
  
  let pool = '';
  if (lower) pool += 'abcdefghijklmnopqrstuvwxyz';
  if (upper) pool += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  if (!pool) return [];

  let actualQty = quantity;
  if (unique && actualQty > pool.length) {
    actualQty = pool.length;
  }

  const results: string[] = [];
  const letters = pool.split('');

  const getSecureRandomIndex = (max: number): number => {
    if (typeof globalThis !== 'undefined' && globalThis.crypto) {
      const arr = new Uint32Array(1);
      globalThis.crypto.getRandomValues(arr);
      return Math.floor((arr[0] / (0xffffffff + 1)) * max);
    }
    return Math.floor(Math.random() * max);
  };

  for (let i = 0; i < actualQty; i++) {
    const idx = getSecureRandomIndex(letters.length);
    results.push(letters[idx]);
    if (unique) {
      letters.splice(idx, 1);
    }
  }

  return results;
}
