/**
 * Encodes a string for use in URLs.
 * @param str The raw input string
 * @param mode 'standard' (leaves routing symbols intact) or 'all' (encodes every special char)
 */
export function encodeUrl(str: string, mode: 'standard' | 'all' = 'all'): string {
  if (!str) return '';
  return mode === 'all' ? encodeURIComponent(str) : encodeURI(str);
}

/**
 * Decodes a percent-encoded URL string.
 * @param str The encoded URL string
 * @throws Error if the string contains invalid percent-escape sequences
 */
export function decodeUrl(str: string): string {
  if (!str) return '';
  
  try {
    // Decodes percent encoding, converting '+' to space as standard in URL query params
    return decodeURIComponent(str.replace(/\+/g, '%20'));
  } catch (err: any) {
    throw new Error('Invalid percent-encoding sequence. Please check for incomplete or malformed % hex codes.');
  }
}
