import { describe, it, expect } from 'vitest';
import { generateGothicText } from './logic';

describe('Gothic Text Generator', () => {
  it('should return empty array for empty input', () => {
    expect(generateGothicText('')).toEqual([]);
  });

  it('should convert text to gothic normal and bold styles', () => {
    const results = generateGothicText('Gothic');
    expect(results.length).toBe(2);
    expect(results[0].name).toBe('Normal Gothic / Fraktur');
    expect(results[0].text).not.toBe('Gothic');
  });
});
