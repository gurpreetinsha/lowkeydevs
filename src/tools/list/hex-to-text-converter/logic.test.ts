import { describe, it, expect } from 'vitest';
import { textToHex, hexToText } from './logic';

describe('Hex to Text Converter Logic', () => {
  it('should encode text to hex with spaces', () => {
    expect(textToHex('Hello')).toBe('48 65 6c 6c 6f');
  });

  it('should encode text to hex without separators', () => {
    expect(textToHex('Hello', 'none')).toBe('48656c6c6f');
  });

  it('should encode text to hex with C-style prefixes', () => {
    expect(textToHex('Hello', '0x')).toBe('0x48 0x65 0x6c 0x6c 0x6f');
  });

  it('should encode text to hex with backslash-x prefixes', () => {
    expect(textToHex('Hello', 'backslash-x')).toBe('\\x48\\x65\\x6c\\x6c\\x6f');
  });

  it('should encode text to hex with commas', () => {
    expect(textToHex('Hello', 'comma')).toBe('48,65,6c,6c,6f');
  });

  it('should decode hex back to text', () => {
    expect(hexToText('48 65 6c 6c 6f')).toBe('Hello');
    expect(hexToText('48656c6c6f')).toBe('Hello');
    expect(hexToText('0x48 0x65 0x6c 0x6c 0x6f')).toBe('Hello');
    expect(hexToText('\\x48\\x65\\x6c\\x6c\\x6f')).toBe('Hello');
    expect(hexToText('48,65,6c,6c,6f')).toBe('Hello');
    expect(hexToText('48:65:6c:6c:6f')).toBe('Hello');
  });

  it('should encode and decode unicode / emojis', () => {
    const text = 'Hello 🌍';
    const hex = textToHex(text);
    expect(hexToText(hex)).toBe(text);
  });

  it('should return empty string for empty inputs', () => {
    expect(textToHex('')).toBe('');
    expect(hexToText('')).toBe('');
  });

  it('should throw error for invalid hex digits', () => {
    expect(() => hexToText('48 65 zz')).toThrow();
  });

  it('should throw error for odd length hex digits', () => {
    expect(() => hexToText('486')).toThrow();
  });
});
