import { describe, it, expect } from 'vitest';
import { convertDateToRoman, convertRomanToDate } from './logic';

describe('Roman Numeral Dates Logic', () => {
  it('should convert standard date to Roman date', () => {
    expect(convertDateToRoman('2026-07-05', { separator: '.', format: 'MDY' })).toBe('VII.V.MMXXVI');
    expect(convertDateToRoman('1999-12-25', { separator: '/', format: 'DMY' })).toBe('XXV/XII/MCMXCIX');
  });

  it('should convert Roman date to standard date', () => {
    expect(convertRomanToDate('VII.V.MMXXVI', { separator: '.', format: 'MDY' })).toBe('07/05/2026');
    expect(convertRomanToDate('XXV/XII/MCMXCIX', { separator: '/', format: 'DMY' })).toBe('12/25/1999');
  });
});
