/**
 * Encodes plain text into 8-bit space-separated binary code blocks.
 */
export function textToBinary(text: string): string {
  if (!text) return '';
  const encoder = new TextEncoder();
  const bytes = encoder.encode(text);
  return Array.from(bytes)
    .map(b => b.toString(2).padStart(8, '0'))
    .join(' ');
}

/**
 * Decodes 8-bit binary code blocks back into plain text.
 * Resilient to spaces and newlines.
 */
export function binaryToText(binary: string): string {
  const trimmed = binary.trim();
  if (!trimmed) return '';

  // Remove spaces to simplify parsing, then split into groups of 8
  const bits = trimmed.replace(/\s+/g, '');
  
  if (!/^[01]*$/.test(bits)) {
    throw new Error('Invalid binary input. Binary code must only contain 0, 1, spaces or newlines.');
  }

  if (bits.length % 8 !== 0) {
    throw new Error('Invalid binary length. Total number of bits must be a multiple of 8.');
  }

  const bytes: number[] = [];
  for (let i = 0; i < bits.length; i += 8) {
    bytes.push(parseInt(bits.slice(i, i + 8), 2));
  }

  try {
    const decoder = new TextDecoder();
    return decoder.decode(new Uint8Array(bytes));
  } catch (err) {
    throw new Error('Failed to decode binary bytes into UTF-8 text.');
  }
}
