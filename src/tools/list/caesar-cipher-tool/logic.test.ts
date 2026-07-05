import { describe, it, expect } from 'vitest';
import { caesarCipher } from './logic';

describe('Caesar Cipher Logic', () => {
  it('should encrypt correctly', () => {
    expect(caesarCipher('Hello World!', 3, false)).toBe('Khoor Zruog!');
    expect(caesarCipher('ABC', 1, false)).toBe('BCD');
  });

  it('should decrypt correctly', () => {
    expect(caesarCipher('Khoor Zruog!', 3, true)).toBe('Hello World!');
    expect(caesarCipher('BCD', 1, true)).toBe('ABC');
  });

  it('should handle large shifts', () => {
    expect(caesarCipher('Hello', 29, false)).toBe(caesarCipher('Hello', 3, false));
  });
});
