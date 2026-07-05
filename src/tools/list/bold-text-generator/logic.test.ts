import { describe, it, expect } from 'vitest';
import { generateBoldText } from './logic';

describe('Bold Text Generator', () => {
  it('should return empty array for empty input', () => {
    expect(generateBoldText('')).toEqual([]);
  });

  it('should generate different bold styles', () => {
    const results = generateBoldText('Hello');
    expect(results.length).toBe(6);
    expect(results[0].name).toBe('Serif Bold');
    expect(results[0].text).not.toBe('Hello');
  });
});
