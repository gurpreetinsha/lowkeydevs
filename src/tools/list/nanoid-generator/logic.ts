export interface NanoidOptions {
  size: number;
  alphabet: string;
  quantity: number;
}

const DEFAULT_ALPHABET = 'usecomplexingat-23456789abdefghijkmnopqrstwxyzXYZ'; // standard Nano ID alphabet or A-Za-z0-9_-
const SAFE_ALPHABET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-';

/**
 * Generates a Nano ID list.
 */
export function generateNanoids(options: NanoidOptions): string[] {
  const { size, alphabet, quantity } = options;
  const chars = alphabet || SAFE_ALPHABET;
  const results: string[] = [];

  const getSecureRandomIndex = (max: number): number => {
    if (typeof globalThis !== 'undefined' && globalThis.crypto) {
      const arr = new Uint32Array(1);
      globalThis.crypto.getRandomValues(arr);
      return Math.floor((arr[0] / (0xffffffff + 1)) * max);
    }
    return Math.floor(Math.random() * max);
  };

  for (let q = 0; q < quantity; q++) {
    let id = '';
    for (let i = 0; i < size; i++) {
      id += chars[getSecureRandomIndex(chars.length)];
    }
    results.push(id);
  }

  return results;
}
