const ROMAN_NUMERALS: [number, string][] = [
  [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
  [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
  [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
];

export function intToRoman(num: number): string {
  if (isNaN(num) || num <= 0 || num > 3999) return '';
  let result = '';
  let remaining = num;
  for (const [val, letter] of ROMAN_NUMERALS) {
    while (remaining >= val) {
      result += letter;
      remaining -= val;
    }
  }
  return result;
}

const ROMAN_VALUES: Record<string, number> = {
  M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1
};

export function romanToInt(roman: string): number {
  if (!roman) return 0;
  const upper = roman.toUpperCase().trim();
  let total = 0;
  for (let i = 0; i < upper.length; i++) {
    const currentVal = ROMAN_VALUES[upper[i]];
    const nextVal = ROMAN_VALUES[upper[i + 1]] || 0;
    if (!currentVal) return 0; // Invalid roman numeral character
    if (currentVal < nextVal) {
      total -= currentVal;
    } else {
      total += currentVal;
    }
  }
  return total;
}

export interface RomanDateOptions {
  separator: string; // '.', '/', '-', ' '
  format: 'MDY' | 'DMY' | 'YMD';
}

/**
 * Converts standard date (YYYY-MM-DD or MM/DD/YYYY) to Roman numeral date.
 */
export function convertDateToRoman(dateStr: string, options: RomanDateOptions = { separator: '.', format: 'MDY' }): string {
  if (!dateStr) return '';
  
  // Try to parse the date.
  // Can be YYYY-MM-DD (from input[type=date]) or manual input.
  let parsed = Date.parse(dateStr);
  let year = NaN, month = NaN, day = NaN;

  if (isNaN(parsed)) {
    // Try custom slash/dash/dot matching (e.g. 07/05/2026 or 5-12-1998)
    const parts = dateStr.split(/[-./ ]/);
    if (parts.length === 3) {
      const p1 = parseInt(parts[0], 10);
      const p2 = parseInt(parts[1], 10);
      const p3 = parseInt(parts[2], 10);
      if (p3 > 100) {
        // Assume MM/DD/YYYY or DD/MM/YYYY
        year = p3;
        if (p1 <= 12 && p2 <= 31) {
          month = p1;
          day = p2;
        } else if (p2 <= 12 && p1 <= 31) {
          month = p2;
          day = p1;
        }
      } else if (p1 > 100) {
        // Assume YYYY/MM/DD
        year = p1;
        month = p2;
        day = p3;
      }
    }
  } else {
    const date = new Date(parsed);
    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();
  }

  if (isNaN(year) || isNaN(month) || isNaN(day) || year <= 0 || year > 3999 || month < 1 || month > 12 || day < 1 || day > 31) {
    return 'Invalid Date (Years 1-3999 supported)';
  }

  const rYear = intToRoman(year);
  const rMonth = intToRoman(month);
  const rDay = intToRoman(day);

  if (options.format === 'DMY') {
    return [rDay, rMonth, rYear].join(options.separator);
  }
  if (options.format === 'YMD') {
    return [rYear, rMonth, rDay].join(options.separator);
  }
  return [rMonth, rDay, rYear].join(options.separator);
}

/**
 * Converts Roman numeral date back to standard number format.
 */
export function convertRomanToDate(romanStr: string, options: RomanDateOptions = { separator: '.', format: 'MDY' }): string {
  if (!romanStr) return '';
  const parts = romanStr.split(options.separator);
  if (parts.length !== 3) {
    return 'Invalid Roman Numeral Date format';
  }

  const p1 = romanToInt(parts[0]);
  const p2 = romanToInt(parts[1]);
  const p3 = romanToInt(parts[2]);

  let month = 0, day = 0, year = 0;

  if (options.format === 'DMY') {
    day = p1;
    month = p2;
    year = p3;
  } else if (options.format === 'YMD') {
    year = p1;
    month = p2;
    day = p3;
  } else {
    month = p1;
    day = p2;
    year = p3;
  }

  if (month < 1 || month > 12 || day < 1 || day > 31 || year <= 0 || year > 3999) {
    return 'Invalid components in Roman Date';
  }

  // Format as MM/DD/YYYY
  const pad = (n: number) => n.toString().padStart(2, '0');
  return `${pad(month)}/${pad(day)}/${year}`;
}
