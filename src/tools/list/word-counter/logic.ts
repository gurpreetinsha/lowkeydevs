export interface TextStats {
  characters: number;
  charactersNoSpaces: number;
  words: number;
  sentences: number;
  paragraphs: number;
  lines: number;
  readingTimeMin: number;
  speakingTimeMin: number;
}

export interface KeywordDensity {
  word: string;
  count: number;
  percentage: number;
}

/**
 * Counts sentences in text using punctuation marks followed by whitespace or ending.
 */
export function countSentences(text: string): number {
  if (!text.trim()) return 0;
  // Match period, question, exclamation marks that are followed by spaces or end of string.
  // Avoid matching decimal numbers (e.g., 3.14) or abbreviations.
  const sentences = text.match(/[^.!?]+[.!?]+(\s|$)/g);
  return sentences ? sentences.length : 1;
}

/**
 * Counts paragraphs using double newlines or single newlines with content.
 */
export function countParagraphs(text: string): number {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\n\s*\n+/).filter(p => p.trim().length > 0).length;
}

/**
 * Analyze text metrics in a single pass.
 */
export function analyzeText(text: string): TextStats {
  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, '').length;
  
  const trimmed = text.trim();
  const wordsArray = trimmed ? trimmed.split(/\s+/) : [];
  const words = wordsArray.length;
  
  const lines = text ? text.split('\n').length : 0;
  const sentences = countSentences(text);
  const paragraphs = countParagraphs(text);
  
  // Reading speed WPM = 225
  const readingTimeMin = words / 225;
  // Speaking speed WPM = 150
  const speakingTimeMin = words / 150;
  
  return {
    characters,
    charactersNoSpaces,
    words,
    sentences,
    paragraphs,
    lines,
    readingTimeMin,
    speakingTimeMin
  };
}

/**
 * Calculates top keywords in text (ignoring common stop words).
 */
export function getKeywordDensity(text: string, maxCount = 5): KeywordDensity[] {
  const trimmed = text.trim().toLowerCase();
  if (!trimmed) return [];
  
  // Clean punctuation and split words
  const words = trimmed
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'\n\r]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 2); // Ignore very short words
  
  if (words.length === 0) return [];
  
  const stopWords = new Set([
    'the', 'and', 'a', 'to', 'of', 'in', 'i', 'is', 'that', 'it', 'on', 'you', 'this',
    'for', 'but', 'with', 'as', 'are', 'was', 'with', 'they', 'be', 'at', 'one', 'have',
    'this', 'from', 'or', 'had', 'by', 'hot', 'word', 'but', 'some', 'what', 'there',
    'we', 'can', 'out', 'other', 'were', 'all', 'your', 'when', 'an', 'use', 'how', 'their'
  ]);
  
  const freqMap: Record<string, number> = {};
  let validWordCount = 0;
  
  words.forEach(word => {
    if (!stopWords.has(word) && isNaN(Number(word))) {
      freqMap[word] = (freqMap[word] || 0) + 1;
      validWordCount++;
    }
  });
  
  if (validWordCount === 0) return [];
  
  return Object.entries(freqMap)
    .map(([word, count]) => ({
      word,
      count,
      percentage: (count / words.length) * 100
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, maxCount);
}

/**
 * Case converters
 */
export function toTitleCase(str: string): string {
  return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase());
}

export function toSentenceCase(str: string): string {
  if (!str) return '';
  return str.toLowerCase().replace(/(^\s*|[.!?]\s+)([a-z])/g, (m, separator, letter) => separator + letter.toUpperCase());
}

export function toCamelCase(str: string): string {
  return str
    .replace(/[^a-zA-Z0-9\s]/g, '')
    .toLowerCase()
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => index === 0 ? word.toLowerCase() : word.toUpperCase())
    .replace(/\s+/g, '');
}

export function toPascalCase(str: string): string {
  return str
    .replace(/[^a-zA-Z0-9\s]/g, '')
    .toLowerCase()
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => word.toUpperCase())
    .replace(/\s+/g, '');
}

export function toSnakeCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .trim()
    .replace(/\s+/g, '_');
}

export function toKebabCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}
