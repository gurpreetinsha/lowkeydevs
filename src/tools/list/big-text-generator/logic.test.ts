import { describe, it, expect } from 'vitest';
import { generateBigText } from './logic';

describe('Big Text Generator', () => {
  it('should return empty string for empty input', () => {
    expect(generateBigText('', 'block')).toBe('');
  });

  it('should render large text with 5 lines', () => {
    const result = generateBigText('HI', 'block');
    const lines = result.split('\n');
    expect(lines.length).toBe(5);
  });
});
