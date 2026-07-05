import { describe, it, expect } from 'vitest';
import { findAndReplace, type ReplaceOptions } from './logic';

describe('Find and Replace Text Logic', () => {
  const defaultOptions: ReplaceOptions = {
    find: '',
    replace: '',
    caseSensitive: false,
    wholeWord: false,
    regex: false
  };

  it('should return empty string for empty input', () => {
    const res = findAndReplace('', defaultOptions);
    expect(res.text).toBe('');
    expect(res.matchCount).toBe(0);
  });

  it('should do standard substring replacement', () => {
    const text = 'The quick brown fox jumps over the lazy dog.';
    const opts = { ...defaultOptions, find: 'the', replace: 'a' };
    const res = findAndReplace(text, opts);
    // Case-insensitive, so both "The" and "the" are replaced
    expect(res.text).toBe('a quick brown fox jumps over a lazy dog.');
    expect(res.matchCount).toBe(2);
  });

  it('should respect case sensitivity', () => {
    const text = 'The quick brown fox jumps over the lazy dog.';
    const opts = { ...defaultOptions, find: 'the', replace: 'a', caseSensitive: true };
    const res = findAndReplace(text, opts);
    expect(res.text).toBe('The quick brown fox jumps over a lazy dog.');
    expect(res.matchCount).toBe(1);
  });

  it('should respect whole word matching', () => {
    const text = 'The cat in category.';
    const optsWhole = { ...defaultOptions, find: 'cat', replace: 'dog', wholeWord: true };
    const optsPartial = { ...defaultOptions, find: 'cat', replace: 'dog', wholeWord: false };
    
    const resWhole = findAndReplace(text, optsWhole);
    const resPartial = findAndReplace(text, optsPartial);

    expect(resWhole.text).toBe('The dog in category.');
    expect(resWhole.matchCount).toBe(1);

    expect(resPartial.text).toBe('The dog in dogegory.');
    expect(resPartial.matchCount).toBe(2);
  });

  it('should support regex matching and replacements', () => {
    const text = 'apples, bananas, cherries';
    const opts = { ...defaultOptions, find: '(\\w+)s\\b', replace: 'delicious $1', regex: true };
    const res = findAndReplace(text, opts);
    expect(res.text).toBe('delicious apple, delicious banana, delicious cherrie');
    expect(res.matchCount).toBe(3);
  });

  it('should handle invalid regex patterns gracefully', () => {
    const text = 'Some text';
    const opts = { ...defaultOptions, find: '[a-z', regex: true };
    const res = findAndReplace(text, opts);
    expect(res.error).toBeDefined();
    expect(res.error).toContain('Invalid Search Pattern');
    expect(res.text).toBe(text);
  });
});
