import { describe, it, expect } from 'vitest';
import { underlineText } from './logic';

describe('Underline Text Generator', () => {
  it('should return empty string for empty input', () => {
    expect(underlineText('', 'single')).toBe('');
  });

  it('should apply combining marks to letters', () => {
    const text = 'abc';
    const result = underlineText(text, 'single');
    expect(result.length).toBe(6); // 3 letters + 3 combining marks
    expect(result.includes('\u0332')).toBe(true);
  });
});
