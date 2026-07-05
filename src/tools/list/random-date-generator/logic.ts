export interface DateGenOptions {
  startDate: string; // YYYY-MM-DD
  endDate: string;   // YYYY-MM-DD
  quantity: number;
  format: 'YYYY-MM-DD' | 'MM/DD/YYYY' | 'DD/MM/YYYY' | 'ISO';
}

/**
 * Formats a Date object.
 */
export function formatDate(date: Date, format: DateGenOptions['format']): string {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  if (format === 'MM/DD/YYYY') {
    return `${month}/${day}/${year}`;
  }
  if (format === 'DD/MM/YYYY') {
    return `${day}/${month}/${year}`;
  }
  if (format === 'ISO') {
    return date.toISOString();
  }
  return `${year}-${month}-${day}`;
}

/**
 * Generates random dates within range.
 */
export function generateRandomDates(options: DateGenOptions): string[] {
  const { startDate, endDate, quantity, format } = options;
  
  const startTs = Date.parse(startDate);
  const endTs = Date.parse(endDate);
  
  if (isNaN(startTs) || isNaN(endTs) || startTs > endTs) return [];

  const range = endTs - startTs;
  const results: string[] = [];

  const getSecureRandom = (): number => {
    if (typeof globalThis !== 'undefined' && globalThis.crypto) {
      const arr = new Uint32Array(1);
      globalThis.crypto.getRandomValues(arr);
      return arr[0] / (0xffffffff + 1);
    }
    return Math.random();
  };

  for (let i = 0; i < quantity; i++) {
    const randomTs = startTs + Math.floor(getSecureRandom() * (range + 1));
    const randomDate = new Date(randomTs);
    results.push(formatDate(randomDate, format));
  }

  return results;
}
