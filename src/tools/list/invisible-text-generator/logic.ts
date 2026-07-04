export type InvisibleCharType = 'zwsp' | 'zwnj' | 'zwj' | 'wj' | 'invisible-sep';

const CHAR_MAP: Record<InvisibleCharType, string> = {
  'zwsp': '\u200B', // Zero-Width Space
  'zwnj': '\u200C', // Zero-Width Non-Joiner
  'zwj': '\u200D',  // Zero-Width Joiner
  'wj': '\u2060',   // Word Joiner
  'invisible-sep': '\u2063' // Invisible Separator
};

/**
 * Generates N count of the specified invisible unicode character.
 */
export function generateBlankText(type: InvisibleCharType, count: number): string {
  const char = CHAR_MAP[type] || '\u200B';
  const c = Math.max(1, Math.min(10000, count));
  return char.repeat(c);
}

/**
 * Hides a secret text message inside a cover text using Zero-Width steganography.
 */
export function encodeHiddenText(cover: string, secret: string): string {
  if (!secret) return cover;

  // Convert secret message to 16-bit binary representation
  const binary = Array.from(secret)
    .map(char => char.charCodeAt(0).toString(2).padStart(16, '0'))
    .join('');

  // Map 0 -> ZWSP (\u200B) and 1 -> ZWNJ (\u200C)
  const invisibleString = Array.from(binary)
    .map(bit => (bit === '0' ? '\u200B' : '\u200C'))
    .join('');

  // Embed the invisible message at the end of the cover text
  // We use Word Joiner (\u2060) as a boundary tag to frame the secret
  const boundaryStart = '\u2060\u2060';
  const boundaryEnd = '\u2060\u2063';

  return cover + boundaryStart + invisibleString + boundaryEnd;
}

/**
 * Extracts a hidden secret message from text containing Zero-Width steganography.
 */
export function decodeHiddenText(text: string): string {
  if (!text) return '';

  // Look for our boundary frames
  const boundaryRegex = /\u2060\u2060([\u200B\u200C]+)\u2060\u2063/;
  const match = text.match(boundaryRegex);
  
  let invisibleStr = '';
  if (match) {
    invisibleStr = match[1];
  } else {
    // Fallback: search for any sequence of ZWSP or ZWNJ if boundary was stripped or missing
    const rawMatches = text.match(/[\u200B\u200C]+/g);
    if (!rawMatches) return '';
    invisibleStr = rawMatches.join('');
  }

  if (!invisibleStr) return '';

  // Decode ZWSP (\u200B) -> 0 and ZWNJ (\u200C) -> 1
  const binary = Array.from(invisibleStr)
    .map(char => {
      if (char === '\u200B') return '0';
      if (char === '\u200C') return '1';
      return '';
    })
    .join('');

  // Convert 16-bit binary chunks back to standard characters
  let decoded = '';
  for (let i = 0; i < binary.length; i += 16) {
    const chunk = binary.slice(i, i + 16);
    if (chunk.length === 16) {
      decoded += String.fromCharCode(parseInt(chunk, 2));
    }
  }

  return decoded;
}
