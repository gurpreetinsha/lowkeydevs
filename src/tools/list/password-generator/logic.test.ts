import { describe, it, expect } from 'vitest';
import { generatePassword, ratePasswordStrength } from './logic';

describe('Password Generator Logic', () => {
  describe('generatePassword', () => {
    it('should generate password of specified length', () => {
      const length = 16;
      const pwd = generatePassword({ length, uppercase: true, lowercase: true, numbers: true, symbols: true });
      expect(pwd.length).toBe(length);
    });

    it('should include uppercase when selected', () => {
      const pwd = generatePassword({ length: 20, uppercase: true, lowercase: false, numbers: false, symbols: false });
      expect(/^[A-Z]+$/.test(pwd)).toBe(true);
    });

    it('should include lowercase when selected', () => {
      const pwd = generatePassword({ length: 20, uppercase: false, lowercase: true, numbers: false, symbols: false });
      expect(/^[a-z]+$/.test(pwd)).toBe(true);
    });

    it('should include numbers when selected', () => {
      const pwd = generatePassword({ length: 20, uppercase: false, lowercase: false, numbers: true, symbols: false });
      expect(/^[0-9]+$/.test(pwd)).toBe(true);
    });

    it('should throw an error if no character sets are selected', () => {
      expect(() => {
        generatePassword({ length: 12, uppercase: false, lowercase: false, numbers: false, symbols: false });
      }).toThrow('At least one character set must be selected');
    });
  });

  describe('ratePasswordStrength', () => {
    it('should return score 0 for empty or very short passwords', () => {
      const rating = ratePasswordStrength('');
      expect(rating.score).toBe(0);
      expect(rating.label).toBe('Very Weak');
    });

    it('should rate a strong password appropriately', () => {
      const rating = ratePasswordStrength('S3cur3!P@ssw0rd99');
      expect(rating.score).toBe(4);
      expect(rating.label).toBe('Excellent');
    });
  });
});
