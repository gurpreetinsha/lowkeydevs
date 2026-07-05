import { describe, it, expect } from 'vitest';
import { sortWords, type SortOptions } from './logic';

describe('Sort Words Alphabetically Logic', () => {
  const defaultOptions: SortOptions = {
    order: 'asc',
    separator: 'space',
    customSeparator: '',
    caseSensitive: false,
    removeDuplicates: false,
    ignorePunctuation: false
  };

  it('should return empty string for empty input', () => {
    expect(sortWords('', defaultOptions)).toBe('');
  });

  it('should sort space-separated words ascending by default', () => {
    const text = 'banana apple cherry';
    expect(sortWords(text, defaultOptions)).toBe('apple banana cherry');
  });

  it('should sort space-separated words descending', () => {
    const text = 'banana apple cherry';
    const opts = { ...defaultOptions, order: 'desc' as const };
    expect(sortWords(text, opts)).toBe('cherry banana apple');
  });

  it('should sort comma-separated list', () => {
    const text = 'banana,apple,cherry';
    const opts = { ...defaultOptions, separator: 'comma' as const };
    expect(sortWords(text, opts)).toBe('apple, banana, cherry');
  });

  it('should sort newline-separated lines', () => {
    const text = 'banana\napple\ncherry';
    const opts = { ...defaultOptions, separator: 'newline' as const };
    expect(sortWords(text, opts)).toBe('apple\nbanana\ncherry');
  });

  it('should remove duplicates when removeDuplicates is true', () => {
    const text = 'apple banana apple cherry banana';
    const opts = { ...defaultOptions, removeDuplicates: true };
    expect(sortWords(text, opts)).toBe('apple banana cherry');
  });

  it('should support natural sorting for numbers', () => {
    const text = 'item10 item2 item1';
    expect(sortWords(text, defaultOptions)).toBe('item1 item2 item10');
  });

  it('should handle case-sensitive sorting', () => {
    const text = 'banana Apple cherry apple';
    const optsSensitive = { ...defaultOptions, caseSensitive: true };
    const optsInsensitive = { ...defaultOptions, caseSensitive: false };
    
    // Insensitive: apple/Apple are grouped, apple comes first or second. Apple, apple, banana, cherry
    expect(sortWords(text, optsInsensitive)).toBe('Apple apple banana cherry'); // collator grouping
    expect(sortWords(text, optsSensitive)).toBe('Apple apple banana cherry');
  });

  it('should ignore punctuation during sort comparison', () => {
    const text = 'banana, apple! cherry.';
    const opts = { ...defaultOptions, ignorePunctuation: true };
    expect(sortWords(text, opts)).toBe('apple! banana, cherry.');
  });
});
