/**
 * Encodes a UTF-8 string to Base64.
 * Handles Unicode and Emojis properly.
 */
export function encodeBase64(str: string): string {
  if (!str) return '';
  const bytes = new TextEncoder().encode(str);
  const binString = Array.from(bytes, (byte) => String.fromCharCode(byte)).join('');
  return btoa(binString);
}

/**
 * Decodes a Base64 string back to a UTF-8 string.
 * Handles Unicode and Emojis properly, and throws if input is invalid.
 */
export function decodeBase64(str: string): string {
  if (!str) return '';
  
  // Clean whitespaces or linebreaks often found in copied Base64 strings
  const cleaned = str.trim().replace(/\s+/g, '');
  
  try {
    const binString = atob(cleaned);
    const bytes = Uint8Array.from(binString, (char) => char.charCodeAt(0));
    return new TextDecoder().decode(bytes);
  } catch (err) {
    throw new Error('Invalid Base64 format');
  }
}
