import { describe, it, expect } from 'vitest';
import { countWords, countCharacters, calculateReadingTime } from './logic';

describe('Online Notepad Logic', () => {
  it('should count words correctly', () => {
    expect(countWords('')).toBe(0);
    expect(countWords('   ')).toBe(0);
    expect(countWords('Hello World')).toBe(2);
    expect(countWords('Hello   World   From   Astro')).toBe(4);
  });

  it('should count characters correctly', () => {
    expect(countCharacters('')).toBe(0);
    expect(countCharacters('Hello')).toBe(5);
    expect(countCharacters('Hello\nWorld')).toBe(11);
  });

  it('should calculate reading time correctly', () => {
    expect(calculateReadingTime('')).toBe(0);
    expect(calculateReadingTime('Hello')).toBe(1); // 1 word, rounded up to 1 min
    
    // Generate 450 words
    const words450 = 'word '.repeat(450);
    expect(calculateReadingTime(words450)).toBe(3); // 450 / 200 = 2.25, rounded to 3
  });
});
