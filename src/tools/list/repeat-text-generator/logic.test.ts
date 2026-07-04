import { describe, it, expect } from 'vitest';
import { repeatText, type RepeatOptions } from './logic';

describe('Repeat Text Generator Logic', () => {
  const defaultOptions: RepeatOptions = {
    count: 3,
    separator: 'space',
    customSeparator: '',
    prependIndex: false
  };

  it('should return empty string for empty input', () => {
    expect(repeatText('', defaultOptions)).toBe('');
  });

  it('should repeat text with space separators', () => {
    expect(repeatText('hello', defaultOptions)).toBe('hello hello hello');
  });

  it('should repeat text with newline separators', () => {
    const opts = { ...defaultOptions, separator: 'newline' as const };
    expect(repeatText('hello', opts)).toBe('hello\nhello\nhello');
  });

  it('should prepended line numbering indices', () => {
    const opts = { ...defaultOptions, separator: 'newline' as const, prependIndex: true };
    expect(repeatText('test', opts)).toBe('1. test\n2. test\n3. test');
  });

  it('should cap repetitions to a max of 10000', () => {
    const opts = { ...defaultOptions, count: 20000, separator: 'none' as const };
    const res = repeatText('a', opts);
    expect(res.length).toBe(10000); // 10000 repetitions of 'a'
  });

  it('should support custom separator strings', () => {
    const opts = { ...defaultOptions, separator: 'custom' as const, customSeparator: ' - ' };
    expect(repeatText('x', opts)).toBe('x - x - x');
  });
});
