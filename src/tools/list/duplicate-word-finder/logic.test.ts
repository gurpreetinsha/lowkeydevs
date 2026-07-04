import { describe, it, expect } from 'vitest';
import { findDuplicateWords, removeDuplicateWords } from './logic';

describe('Duplicate Word Finder Logic', () => {
  const text = 'The quick brown fox jumps over the lazy dog. The fox is quick.';

  describe('findDuplicateWords', () => {
    it('should find duplicates with case sensitivity', () => {
      const dups = findDuplicateWords(text, { ignoreCase: false, ignorePunctuation: true });
      // "fox" occurs twice: "fox", "fox." (punctuation ignored)
      // "quick" occurs twice
      // "the" occurs twice: "the", "The" (case-sensitive, so "The" vs "the" are separate)
      const words = dups.map(d => d.word);
      expect(words).toContain('fox');
      expect(words).toContain('quick');
      expect(words).not.toContain('the'); // "The" (2) and "the" (1)
    });

    it('should find duplicates case-insensitively', () => {
      const dups = findDuplicateWords(text, { ignoreCase: true, ignorePunctuation: true });
      const words = dups.map(d => d.word);
      expect(words).toContain('the');
      expect(words).toContain('fox');
      expect(words).toContain('quick');
    });

    it('should sort duplicates by count descending', () => {
      const sample = 'apple banana banana apple cherry banana';
      const dups = findDuplicateWords(sample, { ignoreCase: true, ignorePunctuation: true });
      expect(dups[0]).toEqual({ word: 'banana', count: 3 });
      expect(dups[1]).toEqual({ word: 'apple', count: 2 });
    });
  });

  describe('removeDuplicateWords', () => {
    it('should remove duplicates keeping the first occurrence', () => {
      const sample = 'apple banana banana cherry apple';
      const cleaned = removeDuplicateWords(sample, {
        ignoreCase: true,
        ignorePunctuation: true,
        removeMode: 'keep-first'
      });
      expect(cleaned).toBe('apple banana cherry');
    });

    it('should remove duplicate words completely in remove-all mode', () => {
      const sample = 'apple banana banana cherry apple';
      const cleaned = removeDuplicateWords(sample, {
        ignoreCase: true,
        ignorePunctuation: true,
        removeMode: 'remove-all'
      });
      expect(cleaned).toBe('cherry');
    });
  });
});
