export interface MonthGenOptions {
  quantity: number;
  format: 'full' | 'short' | 'number';
  unique: boolean;
}

const MONTHS_FULL = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const MONTHS_SHORT = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const MONTHS_NUM = [
  '01', '02', '03', '04', '05', '06',
  '07', '08', '09', '10', '11', '12'
];

/**
 * Generates random months.
 */
export function generateRandomMonths(options: MonthGenOptions): string[] {
  const { quantity, format, unique } = options;
  
  let pool = MONTHS_FULL;
  if (format === 'short') pool = MONTHS_SHORT;
  else if (format === 'number') pool = MONTHS_NUM;

  let actualQty = quantity;
  if (unique && actualQty > 12) {
    actualQty = 12;
  }

  const results: string[] = [];
  const tempPool = [...pool];

  const getSecureRandomIndex = (max: number): number => {
    if (typeof globalThis !== 'undefined' && globalThis.crypto) {
      const arr = new Uint32Array(1);
      globalThis.crypto.getRandomValues(arr);
      return Math.floor((arr[0] / (0xffffffff + 1)) * max);
    }
    return Math.floor(Math.random() * max);
  };

  for (let i = 0; i < actualQty; i++) {
    const idx = getSecureRandomIndex(tempPool.length);
    results.push(tempPool[idx]);
    if (unique) {
      tempPool.splice(idx, 1);
    }
  }

  return results;
}
