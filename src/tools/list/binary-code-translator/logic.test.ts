import { describe, it, expect } from 'vitest';
import { textToBinary, binaryToText } from './logic';

describe('Binary Code Translator Logic', () => {
  it('should encode text to binary', () => {
    expect(textToBinary('A')).toBe('01000001');
    expect(textToBinary('AB')).toBe('01000001 01000010');
  });

  it('should decode binary to text', () => {
    expect(binaryToText('01000001')).toBe('A');
    expect(binaryToText('01000001 01000010')).toBe('AB');
    expect(binaryToText('0100000101000010')).toBe('AB'); // run-together
  });

  it('should encode and decode unicode / emojis', () => {
    const text = '👋 Hello!';
    const binary = textToBinary(text);
    expect(binaryToText(binary)).toBe(text);
  });

  it('should return empty string for empty inputs', () => {
    expect(textToBinary('')).toBe('');
    expect(binaryToText('')).toBe('');
  });

  it('should throw error for non-binary characters', () => {
    expect(() => binaryToText('01000002')).toThrow();
    expect(() => binaryToText('abc')).toThrow();
  });

  it('should throw error for incomplete bits', () => {
    expect(() => binaryToText('01010')).toThrow();
  });
});
