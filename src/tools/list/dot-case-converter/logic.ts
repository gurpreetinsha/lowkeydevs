import { splitWords } from '../case-converter/logic';

/**
 * Converts a single line to dot.case.
 */
export function convertLineToDotCase(str: string): string {
  const words = splitWords(str);
  return words.map(w => w.toLowerCase()).join('.');
}

/**
 * Converts the entire input to dot.case. Optionally processes line-by-line.
 */
export function convertToDotCase(str: string, lineByLine: boolean = true): string {
  if (!str) return '';
  if (lineByLine) {
    return str
      .split(/\r?\n/)
      .map(line => convertLineToDotCase(line))
      .join('\n');
  }
  return convertLineToDotCase(str);
}
