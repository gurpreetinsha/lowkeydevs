import { describe, it, expect } from 'vitest';
import { generateItalicText } from './logic';

describe('Italic Text Generator', () => {
  it('should return empty array for empty input', () => {
    expect(generateItalicText('')).toEqual([]);
  });

  it('should generate multiple italic styles', () => {
    const results = generateItalicText('Text');
    expect(results.length).toBe(4);
    expect(results[0].name).toBe('Serif Italic');
    expect(results[0].text).not.toBe('Text');
  });
});
