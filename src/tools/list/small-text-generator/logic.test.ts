import { describe, it, expect } from 'vitest';
import { makeSmallText } from './logic';

describe('Small Text Generator', () => {
  it('should return empty string for empty input', () => {
    expect(makeSmallText('', 'small-caps')).toBe('');
  });

  it('should convert text to small caps', () => {
    expect(makeSmallText('abc', 'small-caps')).toBe('ᴀʙᴄ');
  });

  it('should convert text to superscript', () => {
    expect(makeSmallText('abc', 'superscript')).toBe('ᵃᵇᶜ');
  });
});
