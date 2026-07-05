export interface RemoveOptions {
  removeLetters: boolean;
  removeNumbers: boolean;
  removePunctuation: boolean;
  removeWhitespace: boolean;
  removeNewlines: boolean;
  customChars: string;
  caseSensitive: boolean;
}

/**
 * Removes characters from a block of text based on user options.
 */
export function removeCharacters(text: string, options: RemoveOptions): string {
  if (!text) return '';

  let result = text;

  // 1. Remove letters
  if (options.removeLetters) {
    result = result.replace(/[a-zA-Z]/g, '');
  }

  // 2. Remove numbers
  if (options.removeNumbers) {
    result = result.replace(/[0-9]/g, '');
  }

  // 3. Remove punctuation
  if (options.removePunctuation) {
    // Matches common ASCII punctuation symbols
    result = result.replace(/[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/g, '');
  }

  // 4. Remove custom characters
  if (options.customChars) {
    // Escape regex characters
    const escaped = options.customChars.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const flags = options.caseSensitive ? 'g' : 'gi';
    const regex = new RegExp(`[${escaped}]`, flags);
    result = result.replace(regex, '');
  }

  // 5. Remove whitespace (spaces and tabs, but not newlines)
  if (options.removeWhitespace) {
    result = result.replace(/[ \t]/g, '');
  }

  // 6. Remove newlines
  if (options.removeNewlines) {
    result = result.replace(/[\r\n]+/g, '');
  }

  return result;
}
