import { describe, it, expect } from 'vitest';
import { generateFancyText } from './logic';

describe('Fancy Text Generator', () => {
  it('should return empty array for empty input', () => {
    expect(generateFancyText('')).toEqual([]);
  });

  it('should generate multiple styled outputs for a word', () => {
    const results = generateFancyText('abc');
    expect(results.length).toBeGreaterThan(15);
    
    // Check that we have a bold version
    const boldSerif = results.find(r => r.name === 'Bold Serif');
    expect(boldSerif).toBeDefined();
    expect(boldSerif?.text).not.toBe('abc');
    expect(boldSerif?.text.length).toBeGreaterThan(3); // Unicode math letters are surrogate pairs, so length > 3
  });
});
