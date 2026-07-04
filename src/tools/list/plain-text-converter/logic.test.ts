import { describe, it, expect } from 'vitest';
import { convertToPlainText, normalizeUnicodeStyledText, stripHtmlTags, stripMarkdown } from './logic';

describe('Plain Text Converter Logic', () => {
  const defaultOptions = {
    stripHtml: false,
    stripMarkdown: false,
    normalizeUnicode: false,
    trimLines: false,
    removeDuplicateLines: false
  };

  it('should normalize styled Unicode text', () => {
    // Bold, script, double-struck, monospace
    expect(normalizeUnicodeStyledText('𝕿𝖍𝖎𝖘')).toBe('This');
    expect(normalizeUnicodeStyledText('𝓣𝓱𝓲𝓼 𝕚𝕤 𝟭')).toBe('This is 1');
  });

  it('should strip HTML tags', () => {
    expect(stripHtmlTags('<p>Hello <b>World</b>!</p>')).toBe('Hello World !');
  });

  it('should strip markdown symbols', () => {
    expect(stripMarkdown('# Header\nSome **bold** text')).toBe('Header\nSome bold text');
  });

  it('should convert with options combined', () => {
    const raw = '<p>𝕿𝖍𝖎𝖘 𝕚𝕤 **bold** HTML</p>';
    const cleaned = convertToPlainText(raw, {
      stripHtml: true,
      stripMarkdown: true,
      normalizeUnicode: true,
      trimLines: true,
      removeDuplicateLines: false
    });
    expect(cleaned).toBe('This is bold HTML');
  });

  it('should remove duplicate lines in convertToPlainText', () => {
    const raw = 'Line 1\nLine 2\nLine 1\nLine 3';
    const cleaned = convertToPlainText(raw, {
      ...defaultOptions,
      removeDuplicateLines: true
    });
    expect(cleaned).toBe('Line 1\nLine 2\nLine 3');
  });
});
