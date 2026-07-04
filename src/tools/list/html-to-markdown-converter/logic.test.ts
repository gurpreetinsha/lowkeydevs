import { describe, it, expect } from 'vitest';
import { htmlToMarkdown } from './logic';

describe('HTML to Markdown Converter Logic', () => {
  it('should return empty string for empty input', () => {
    expect(htmlToMarkdown('')).toBe('');
  });

  it('should convert basic typography tags', () => {
    expect(htmlToMarkdown('<p>Hello <strong>World</strong>!</p>'))
      .toBe('Hello **World**!');
    expect(htmlToMarkdown('<h1>Title</h1><p>Body <em>text</em></p>'))
      .toBe('# Title\n\nBody *text*');
  });

  it('should convert anchors and images', () => {
    expect(htmlToMarkdown('<a href="https://example.com">Link</a>'))
      .toBe('[Link](https://example.com)');
    expect(htmlToMarkdown('<img src="image.png" alt="Planet" />'))
      .toBe('![Planet](image.png)');
  });

  it('should convert lists', () => {
    const htmlUl = '<ul><li>First</li><li>Second</li></ul>';
    expect(htmlToMarkdown(htmlUl)).toBe('- First\n- Second');

    const htmlOl = '<ol><li>One</li><li>Two</li></ol>';
    expect(htmlToMarkdown(htmlOl)).toBe('1. One\n2. Two');
  });

  it('should convert blockquotes, horizontal rules, and line breaks', () => {
    expect(htmlToMarkdown('<blockquote>Quote text</blockquote>'))
      .toBe('> Quote text');
    expect(htmlToMarkdown('<hr />')).toBe('---');
    expect(htmlToMarkdown('Line 1<br />Line 2')).toBe('Line 1\nLine 2');
  });

  it('should convert code and pre blocks', () => {
    expect(htmlToMarkdown('<code>const x = 5;</code>')).toBe('`const x = 5;`');
    expect(htmlToMarkdown('<pre><code>function test() {\n  return true;\n}</code></pre>'))
      .toBe('```\nfunction test() {\n  return true;\n}\n```');
  });

  it('should ignore style and script blocks', () => {
    const html = '<script>console.log("hello");</script><div>Text</div><style>p { color: red; }</style>';
    expect(htmlToMarkdown(html)).toBe('Text');
  });
});
