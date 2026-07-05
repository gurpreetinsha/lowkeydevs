import { describe, it, expect } from 'vitest';
import { translateToNato } from './logic';

describe('NATO Phonetic Alphabet Translator Logic', () => {
  it('should translate single words', () => {
    expect(translateToNato('Hello', { separator: ' ', casing: 'Title' })).toBe('Hotel Echo Lima Lima Oscar');
    expect(translateToNato('ABC', { separator: '-', casing: 'Upper' })).toBe('ALPHA-BRAVO-CHARLIE');
  });

  it('should translate digits and keep punctuation', () => {
    expect(translateToNato('A1!', { separator: ' ', casing: 'Title' })).toBe('Alpha One !');
  });
});
