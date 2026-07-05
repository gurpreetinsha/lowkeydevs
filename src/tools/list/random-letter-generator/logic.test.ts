import { describe, it, expect } from 'vitest';
import { generateRandomLetters } from './logic';

describe('Random Letter Generator Logic', () => {
  it('should generate letters', () => {
    const list = generateRandomLetters({ quantity: 10, upper: true, lower: true, unique: false, separator: ' ' });
    expect(list.length).toBe(10);
    list.forEach(l => {
      expect(l.length).toBe(1);
      expect(/^[a-zA-Z]$/.test(l)).toBe(true);
    });
  });

  it('should generate unique lowercase letters', () => {
    const list = generateRandomLetters({ quantity: 30, upper: false, lower: true, unique: true, separator: ' ' });
    expect(list.length).toBe(26); // Capped at 26 lowercase alphabet letters
  });
});
