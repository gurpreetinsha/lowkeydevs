import { describe, it, expect } from 'vitest';
import { generateStrongPassword, calculateStrength } from './logic';

describe('Strong Password Generator Logic', () => {
  it('should generate secure random passwords', () => {
    const pwd = generateStrongPassword({
      mode: 'random',
      length: 20,
      separator: '-',
      capitalize: false,
      includeNumber: false
    });
    expect(pwd.length).toBe(20);
  });

  it('should generate memorable passphrases', () => {
    const pwd = generateStrongPassword({
      mode: 'passphrase',
      length: 4,
      separator: '-',
      capitalize: true,
      includeNumber: true
    });
    // Should contain 4 capitalized words joined by hyphens, ending with a digit
    const parts = pwd.split('-');
    expect(parts.length).toBe(4);
    // Last part should end with a digit
    expect(/[0-9]$/.test(parts[3])).toBe(true);
  });

  it('should calculate strength', () => {
    const weak = calculateStrength('123');
    expect(weak.label).toBe('Very Weak');
    
    const strong = calculateStrength('kP9!mZ8$qL2#fV6^yB4*');
    expect(strong.entropy).toBeGreaterThan(60);
    expect(strong.label === 'Strong' || strong.label === 'Very Strong').toBe(true);
  });
});
