import { describe, it, expect } from 'vitest';
import { unicodeToText, textToUnicode } from './logic';

describe('Unicode to Text Converter Logic', () => {
  it('should decode JS unicode escape sequences', () => {
    expect(unicodeToText('\\u0041\\u0042')).toBe('AB');
    expect(unicodeToText('\\u{1f600}')).toBe('😀');
  });

  it('should decode HTML entity entities', () => {
    expect(unicodeToText('&#65;&#66;')).toBe('AB');
    expect(unicodeToText('&#x1f600;')).toBe('😀');
  });

  it('should decode U+ notation and CSS escapes', () => {
    expect(unicodeToText('U+0041U+0042')).toBe('AB');
    expect(unicodeToText('\\0041 \\0042 ')).toBe('AB');
  });

  it('should encode text to JS format', () => {
    expect(textToUnicode('AB', 'js')).toBe('\\u0041\\u0042');
    expect(textToUnicode('😀', 'js')).toBe('\\u{1f600}');
  });

  it('should encode text to HTML formats', () => {
    expect(textToUnicode('A', 'html-dec')).toBe('&#65;');
    expect(textToUnicode('A', 'html-hex')).toBe('&#x41;');
  });

  it('should encode text to CSS and U+ format', () => {
    expect(textToUnicode('A', 'css')).toBe('\\0041 ');
    expect(textToUnicode('A', 'u-plus')).toBe('U+0041');
  });

  it('should return empty string for empty inputs', () => {
    expect(unicodeToText('')).toBe('');
    expect(textToUnicode('')).toBe('');
  });
});
