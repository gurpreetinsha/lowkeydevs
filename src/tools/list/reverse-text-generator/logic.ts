export type ReverseMode = 'characters' | 'words' | 'lines' | 'upside-down';

// Upside down character map
const flipMap: Record<string, string> = {
  'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ', 'i': 'ᴉ', 'j': 'ɾ',
  'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd', 'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ',
  'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x', 'y': 'ʎ', 'z': 'z',
  'A': '∀', 'B': 'q', 'C': 'Ɔ', 'D': 'p', 'E': 'Ǝ', 'F': 'Ⅎ', 'G': 'Ɔ', 'H': 'H', 'I': 'I', 'J': 'ſ',
  'K': 'ʞ', 'L': '˥', 'M': 'W', 'N': 'N', 'O': 'O', 'P': 'Ԁ', 'Q': 'Ό', 'R': 'ᴚ', 'S': 'S', 'T': '┴',
  'U': '∩', 'V': 'Λ', 'W': 'M', 'X': 'X', 'Y': '⅄', 'Z': 'Z',
  '1': 'Ɩ', '2': 'ᄅ', '3': 'Ɛ', '4': 'ㄣ', '5': 'ϛ', '6': '9', '7': 'ㄥ', '8': '8', '9': '6', '0': '0',
  '.': '˙', ',': "'", "'": ',', '"': '„', '?': '¿', '!': '¡', '(': ')', ')': '(',
  '[': ']', ']': '[', '{': '}', '}': '{', '<': '>', '>': '<', '&': '⅋', '_': '‾',
  ';': '؛', '`': '`', '\\': '\\', '/': '/'
};

/**
 * Reverses text based on selected mode.
 */
export function reverseText(text: string, mode: ReverseMode): string {
  if (!text) return '';

  switch (mode) {
    case 'words':
      // Reverse word sequence but keep line breaks intact
      return text.split(/(\r?\n)/).map(segment => {
        // Only reverse non-newline segments
        if (segment.match(/\r?\n/)) return segment;
        return segment.split(/\s+/).reverse().join(' ');
      }).join('');

    case 'lines':
      return text.split(/\r?\n/).reverse().join('\n');

    case 'upside-down':
      // Rotates letters and reverses the character sequence
      return Array.from(text)
        .map(char => flipMap[char] || char)
        .reverse()
        .join('');

    case 'characters':
    default:
      // Simple character reversal
      return Array.from(text).reverse().join('');
  }
}
