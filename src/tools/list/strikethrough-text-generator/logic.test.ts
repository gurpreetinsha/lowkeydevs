import { describe, it, expect } from 'vitest';
import { strikethroughText } from './logic';

describe('Strikethrough Text Generator', () => {
  it('should return empty string for empty input', () => {
    expect(strikethroughText('', 'long')).toBe('');
  });

  it('should apply combining marks to letters', () => {
    const text = 'abc';
    const result = strikethroughText(text, 'long');
    expect(result.length).toBe(6); // 3 letters + 3 combining marks
    expect(result.includes('\u0336')).toBe(true);
  });
});
