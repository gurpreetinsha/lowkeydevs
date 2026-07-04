/**
 * Returns the word count of a text.
 */
export function countWords(text: string): number {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).length;
}

/**
 * Returns the character count of a text.
 */
export function countCharacters(text: string): number {
  return text.length;
}

/**
 * Calculates estimated reading time in minutes (assuming 200 words per minute).
 */
export function calculateReadingTime(text: string): number {
  const words = countWords(text);
  return Math.ceil(words / 200);
}
