/**
 * Encodes plain text into hexadecimal notation with custom separators.
 */
export function textToHex(text: string, separator: string = ' '): string {
  if (!text) return '';
  
  const bytes = new TextEncoder().encode(text);
  const hexArr = Array.from(bytes).map(b => b.toString(16).padStart(2, '0'));

  switch (separator) {
    case 'none':
      return hexArr.join('');
    case '0x':
      return hexArr.map(h => '0x' + h).join(' ');
    case 'backslash-x':
      return hexArr.map(h => '\\x' + h).join('');
    case 'comma':
      return hexArr.join(',');
    case 'space':
    default:
      return hexArr.join(' ');
  }
}

/**
 * Decodes hexadecimal string into UTF-8 text.
 * Resilient to prefixes like 0x, \x and separators like commas, colons, spaces.
 */
export function hexToText(hex: string): string {
  let cleaned = hex.trim();
  if (!cleaned) return '';

  // Strip prefixes and separators
  cleaned = cleaned.replace(/\\x|0x|[\s,:]/g, '');

  if (!/^[0-9a-fA-F]*$/.test(cleaned)) {
    throw new Error('Invalid hex input. Hexadecimal must only contain characters 0-9 and A-F.');
  }

  if (cleaned.length % 2 !== 0) {
    throw new Error('Invalid hex length. Total hexadecimal digits must be an even number.');
  }

  const bytes: number[] = [];
  for (let i = 0; i < cleaned.length; i += 2) {
    bytes.push(parseInt(cleaned.slice(i, i + 2), 16));
  }

  try {
    return new TextDecoder().decode(new Uint8Array(bytes));
  } catch (err) {
    throw new Error('Failed to decode hex bytes into UTF-8 text.');
  }
}
