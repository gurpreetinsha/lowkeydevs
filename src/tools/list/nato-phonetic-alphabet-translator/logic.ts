const NATO_MAP: Record<string, string> = {
  a: 'Alpha', b: 'Bravo', c: 'Charlie', d: 'Delta', e: 'Echo', f: 'Foxtrot',
  g: 'Golf', h: 'Hotel', i: 'India', j: 'Juliett', k: 'Kilo', l: 'Lima',
  m: 'Mike', n: 'November', o: 'Oscar', p: 'Papa', q: 'Quebec', r: 'Romeo',
  s: 'Sierra', t: 'Tango', u: 'Uniform', v: 'Victor', w: 'Whiskey', x: 'X-ray',
  y: 'Yankee', z: 'Zulu',
  '0': 'Zero', '1': 'One', '2': 'Two', '3': 'Three', '4': 'Four',
  '5': 'Five', '6': 'Six', '7': 'Seven', '8': 'Eight', '9': 'Nine'
};

export interface NatoOptions {
  separator: string;      // e.g. " ", "-", ", "
  casing: 'Title' | 'Upper' | 'Lower';
}

/**
 * Translates input text to NATO phonetic alphabet.
 */
export function translateToNato(text: string, options: NatoOptions = { separator: ' ', casing: 'Title' }): string {
  if (!text) return '';

  return text
    .split('')
    .map(char => {
      const lower = char.toLowerCase();
      if (lower in NATO_MAP) {
        const word = NATO_MAP[lower];
        if (options.casing === 'Upper') return word.toUpperCase();
        if (options.casing === 'Lower') return word.toLowerCase();
        return word; // Title Case is default
      }
      // If it is whitespace, keep it or skip it, let's keep non-alphanumeric chars or space
      if (/\s/.test(char)) return ' ';
      return char;
    })
    // Filter out contiguous spaces and join with the separator
    .filter((val, index, arr) => {
      // Avoid repeating separators for spaces
      if (val === ' ' && (index === 0 || arr[index - 1] === ' ')) return false;
      return true;
    })
    .map((val, index, arr) => {
      if (val === ' ') return '\n'; // space between words represented as newlines/gaps
      return val;
    })
    .join(options.separator)
    // Replace double newlines or formatting
    .replace(/\r?\n/g, ' ')
    .trim();
}
