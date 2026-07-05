import { splitWords } from '../case-converter/logic';

/**
 * Converts a single line to kebab-case.
 */
export function convertLineToKebabCase(str: string): string {
  const words = splitWords(str);
  return words.map(w => w.toLowerCase()).join('-');
}

/**
 * Converts the entire input to kebab-case. Optionally processes line-by-line.
 */
export function convertToKebabCase(str: string, lineByLine: boolean = true): string {
  if (!str) return '';
  if (lineByLine) {
    return str
      .split(/\r?\n/)
      .map(line => convertLineToKebabCase(line))
      .join('\n');
  }
  return convertLineToKebabCase(str);
}
