import { describe, it, expect } from 'vitest';
import { clearFormatting, type FormatOptions } from './logic';

describe('Remove Text Formatting Logic', () => {
  const defaultOptions: FormatOptions = {
    stripHtml: false,
    stripMarkdown: false,
    stripBbcode: false,
    normalizeUnicode: false,
    collapseWhitespace: false
  };

  it('should return empty string for empty input', () => {
    expect(clearFormatting('', defaultOptions)).toBe('');
  });

  it('should strip HTML tags', () => {
    const text = '<p>Hello <strong>World</strong>!</p><script>console.log(1)</script>';
    const opts = { ...defaultOptions, stripHtml: true, collapseWhitespace: true };
    // Script tag content is removed and HTML tags stripped.
    const res = clearFormatting(text, opts);
    expect(res).toContain('Hello World !');
    expect(res).not.toContain('strong');
    expect(res).not.toContain('console.log');
  });

  it('should strip Markdown shorthand styles', () => {
    const text = '# Title\nThis is **bold** and *italic* code: `const x = 1`.';
    const opts = { ...defaultOptions, stripMarkdown: true };
    const res = clearFormatting(text, opts);
    expect(res).toBe('Title\nThis is bold and italic code: const x = 1.');
  });

  it('should strip BBCode tags', () => {
    const text = 'This is [b]bold text[/b] and a [url=https://google.com]link[/url].';
    const opts = { ...defaultOptions, stripBbcode: true };
    const res = clearFormatting(text, opts);
    expect(res).toBe('This is bold text and a link.');
  });

  it('should normalize styled social fonts and mathematical letters', () => {
    const text = '𝕿𝖍𝖎𝖘 is 𝓣𝓱𝓲𝓼 and 𝕥𝕙𝕚𝕤.';
    const opts = { ...defaultOptions, normalizeUnicode: true };
    const res = clearFormatting(text, opts);
    expect(res).toBe('This is This and this.');
  });

  it('should collapse double spaces and blank lines', () => {
    const text = 'Hello    World\n\n\n\nNew   Line';
    const opts = { ...defaultOptions, collapseWhitespace: true };
    const res = clearFormatting(text, opts);
    expect(res).toBe('Hello World\n\nNew Line');
  });
});
