import { describe, it, expect } from 'vitest';
import { mirrorText } from './logic';

describe('Mirror Text Generator', () => {
  it('should return empty string for empty input', () => {
    expect(mirrorText('', 'mirror')).toBe('');
  });

  it('should reverse character sequence', () => {
    expect(mirrorText('abc', 'reverse')).toBe('cba');
  });

  it('should flip character glyphs upside down', () => {
    expect(mirrorText('abc', 'upside-down')).toBe('ɔqɐ');
  });
});
