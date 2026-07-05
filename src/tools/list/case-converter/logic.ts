/**
 * Splits a string into words based on spaces, underscores, hyphens, and camelCase boundaries.
 */
export function splitWords(str: string): string[] {
  if (!str.trim()) return [];
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2') // split camelCase
    .replace(/[-_]+/g, ' ')               // replace hyphens/underscores with space
    .trim()
    .split(/\s+/);
}

export function toCamelCase(str: string): string {
  const words = splitWords(str);
  if (words.length === 0) return '';
  return words[0].toLowerCase() + 
    words.slice(1).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('');
}

export function toPascalCase(str: string): string {
  const words = splitWords(str);
  return words.map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('');
}

export function toSnakeCase(str: string): string {
  const words = splitWords(str);
  return words.map(w => w.toLowerCase()).join('_');
}

export function toKebabCase(str: string): string {
  const words = splitWords(str);
  return words.map(w => w.toLowerCase()).join('-');
}

export function toTitleCase(str: string): string {
  if (!str) return '';
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function toSentenceCase(str: string): string {
  if (!str) return '';
  return str.toLowerCase().replace(/(^\s*|[.!?]\s+)([a-z])/g, (m, g1, g2) => g1 + g2.toUpperCase());
}

export interface TextStats {
  characters: number;
  charactersNoSpaces: number;
  words: number;
  lines: number;
  paragraphs: number;
}

export function getTextStats(str: string): TextStats {
  const trimmed = str.trim();
  if (!trimmed) {
    return { characters: 0, charactersNoSpaces: 0, words: 0, lines: 0, paragraphs: 0 };
  }
  
  return {
    characters: str.length,
    charactersNoSpaces: str.replace(/\s/g, '').length,
    words: trimmed.split(/\s+/).filter(w => w.length > 0).length,
    lines: str ? str.split(/\r\n|\r|\n/).length : 0,
    paragraphs: str.split(/\n\s*\n/).filter(p => p.trim().length > 0).length
  };
}
