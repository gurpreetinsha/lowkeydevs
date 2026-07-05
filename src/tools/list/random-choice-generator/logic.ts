export interface ChoiceGenOptions {
  choices: string[];
  quantity: number;
  allowDuplicates: boolean;
}

/**
 * Picks random items from a list of choices.
 */
export function pickRandomChoices(options: ChoiceGenOptions): string[] {
  const { choices, quantity, allowDuplicates } = options;
  
  // Clean choices list
  const cleanChoices = choices.map(c => c.trim()).filter(c => c.length > 0);
  if (cleanChoices.length === 0) return [];

  let actualQty = quantity;
  if (!allowDuplicates && actualQty > cleanChoices.length) {
    actualQty = cleanChoices.length;
  }

  const results: string[] = [];
  const pool = [...cleanChoices];

  const getSecureRandomIndex = (max: number): number => {
    if (typeof globalThis !== 'undefined' && globalThis.crypto) {
      const arr = new Uint32Array(1);
      globalThis.crypto.getRandomValues(arr);
      return Math.floor((arr[0] / (0xffffffff + 1)) * max);
    }
    return Math.floor(Math.random() * max);
  };

  for (let i = 0; i < actualQty; i++) {
    const idx = getSecureRandomIndex(pool.length);
    results.push(pool[idx]);
    if (!allowDuplicates) {
      pool.splice(idx, 1);
    }
  }

  return results;
}
