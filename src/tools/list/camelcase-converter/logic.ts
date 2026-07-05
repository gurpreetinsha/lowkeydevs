import { splitWords } from '../case-converter/logic';

/**
 * Converts a single line to camelCase.
 */
export function convertLineToCamelCase(str: string): string {
  const words = splitWords(str);
  if (words.length === 0) return '';
  return words[0].toLowerCase() + 
    words.slice(1).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('');
}

/**
 * Converts the entire input to camelCase. Optionally processes line-by-line.
 */
export function convertToCamelCase(str: string, lineByLine: boolean = true): string {
  if (!str) return '';
  if (lineByLine) {
    return str
      .split(/\r?\n/)
      .map(line => convertLineToCamelCase(line))
      .join('\n');
  }
  return convertLineToCamelCase(str);
}
