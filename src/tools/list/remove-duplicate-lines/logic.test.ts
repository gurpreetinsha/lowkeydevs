import { describe, it, expect } from 'vitest';
import { removeDuplicateLines, type DedupeOptions } from './logic';

describe('Remove Duplicate Lines Logic', () => {
  const defaultOptions: DedupeOptions = {
    caseSensitive: false,
    behavior: 'keep-first',
    ignoreEmptyLines: true,
    sortOutput: false
  };

  it('should return empty string for empty input', () => {
    expect(removeDuplicateLines('', defaultOptions)).toBe('');
  });

  it('should keep the first occurrence of duplicates by default', () => {
    const text = 'apple\nbanana\napple\ncherry\nbanana';
    expect(removeDuplicateLines(text, defaultOptions)).toBe('apple\nbanana\ncherry');
  });

  it('should respect case sensitivity', () => {
    const text = 'apple\nApple\napple\nbanana';
    const optsSensitive = { ...defaultOptions, caseSensitive: true };
    const optsInsensitive = { ...defaultOptions, caseSensitive: false };

    expect(removeDuplicateLines(text, optsSensitive)).toBe('apple\nApple\nbanana');
    expect(removeDuplicateLines(text, optsInsensitive)).toBe('apple\nbanana');
  });

  it('should keep the last occurrence when behavior is keep-last', () => {
    // We want to verify it keeps the last index
    const text = '1: apple\n2: banana\n3: apple\n4: cherry';
    // Normalized to remove index prefixes for test setup
    const cleanText = 'apple\nbanana\napple\ncherry';
    const opts = { ...defaultOptions, behavior: 'keep-last' as const };
    // 'apple' first index is 0, second index is 2. With keep-last, the line at index 2 (second 'apple') is kept, and index 0 is deleted.
    // Order in original lines: line 0 (apple), line 1 (banana), line 2 (apple), line 3 (cherry).
    // Result should keep banana (line 1), apple (line 2), cherry (line 3).
    expect(removeDuplicateLines(cleanText, opts)).toBe('banana\napple\ncherry');
  });

  it('should remove all occurrences of duplicates when behavior is remove-all', () => {
    const text = 'apple\nbanana\napple\ncherry\nbanana\ndate';
    const opts = { ...defaultOptions, behavior: 'remove-all' as const };
    // apple and banana are duplicates and should be deleted completely.
    // cherry and date are unique and should remain.
    expect(removeDuplicateLines(text, opts)).toBe('cherry\ndate');
  });

  it('should preserve empty lines when ignoreEmptyLines is true', () => {
    const text = 'apple\n\nbanana\n\napple';
    const opts = { ...defaultOptions, ignoreEmptyLines: true };
    expect(removeDuplicateLines(text, opts)).toBe('apple\n\nbanana\n');
  });

  it('should sort remaining lines when sortOutput is true', () => {
    const text = 'cherry\napple\nbanana';
    const opts = { ...defaultOptions, sortOutput: true };
    expect(removeDuplicateLines(text, opts)).toBe('apple\nbanana\ncherry');
  });
});
