import { describe, it, expect } from 'vitest';
import { generatePasswords } from './logic';

describe('Random Password Generator Logic', () => {
  it('should generate passwords of requested length', () => {
    const list = generatePasswords({
      length: 16,
      quantity: 5,
      uppercase: true,
      lowercase: true,
      numbers: true,
      symbols: true,
      excludeSimilar: false,
      excludeAmbiguous: false
    });
    expect(list.length).toBe(5);
    list.forEach(p => {
      expect(p.length).toBe(16);
    });
  });

  it('should respect exclusions', () => {
    const list = generatePasswords({
      length: 50,
      quantity: 1,
      uppercase: false,
      lowercase: false,
      numbers: true,
      symbols: false,
      excludeSimilar: true,
      excludeAmbiguous: false
    });
    // 0 and 1 are similar looking, should be excluded
    expect(list[0]).not.toContain('0');
    expect(list[0]).not.toContain('1');
  });
});
