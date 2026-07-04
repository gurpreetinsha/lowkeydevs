import { describe, it, expect } from 'vitest';
import { bubbleText } from './logic';

describe('Bubble Text Generator', () => {
  it('should return empty string for empty input', () => {
    expect(bubbleText('', 'circled-white')).toBe('');
  });

  it('should convert alphabets to circled white characters', () => {
    expect(bubbleText('A', 'circled-white')).toBe('Ⓐ');
    expect(bubbleText('a', 'circled-white')).toBe('ⓐ');
  });

  it('should convert alphabets to circled black characters', () => {
    expect(bubbleText('A', 'circled-black')).toBe('🅐');
  });
});
