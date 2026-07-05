export interface RandomNumberOptions {
  min: number;
  max: number;
  quantity: number;
  unique: boolean;
  sort: 'asc' | 'desc' | 'none';
  separator: '\n' | ', ' | ' ';
}

/**
 * Generates an array of random numbers based on options.
 */
export function generateRandomNumbers(options: RandomNumberOptions): number[] {
  const { min, max, quantity, unique, sort } = options;
  
  if (min > max) return [];
  
  const range = max - min + 1;
  
  // If unique is requested but quantity exceeds range size, cap quantity or adjust unique
  let actualQty = quantity;
  if (unique && actualQty > range) {
    actualQty = range;
  }
  
  const results: number[] = [];
  const seen = new Set<number>();
  
  // Web Crypto API fallback
  const getSecureRandom = (): number => {
    if (typeof globalThis !== 'undefined' && globalThis.crypto) {
      const arr = new Uint32Array(1);
      globalThis.crypto.getRandomValues(arr);
      return arr[0] / (0xffffffff + 1);
    }
    return Math.random();
  };

  while (results.length < actualQty) {
    const rand = Math.floor(getSecureRandom() * range) + min;
    if (unique) {
      if (!seen.has(rand)) {
        seen.add(rand);
        results.push(rand);
      }
    } else {
      results.push(rand);
    }
  }

  if (sort === 'asc') {
    results.sort((a, b) => a - b);
  } else if (sort === 'desc') {
    results.sort((a, b) => b - a);
  }

  return results;
}
