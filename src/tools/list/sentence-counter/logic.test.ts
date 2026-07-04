import { describe, it, expect } from 'vitest';
import { calculateTextStats } from './logic';

describe('Sentence Counter Logic', () => {
  it('should return empty stats for empty input', () => {
    const stats = calculateTextStats('');
    expect(stats.sentences).toBe(0);
    expect(stats.words).toBe(0);
    expect(stats.characters).toBe(0);
    expect(stats.charactersNoSpaces).toBe(0);
    expect(stats.paragraphs).toBe(0);
    expect(stats.averageSentenceLength).toBe(0);
    expect(stats.readingTimeMin).toBe(0);
  });

  it('should count simple sentences, words, and characters correctly', () => {
    const text = 'Hello world. This is a test!';
    const stats = calculateTextStats(text);
    expect(stats.sentences).toBe(2);
    expect(stats.words).toBe(6);
    expect(stats.characters).toBe(28);
    expect(stats.charactersNoSpaces).toBe(23);
  });

  it('should treat single sentence without punctuation as 1 sentence', () => {
    const text = 'Hello world';
    const stats = calculateTextStats(text);
    expect(stats.sentences).toBe(1);
    expect(stats.words).toBe(2);
  });

  it('should handle common abbreviations to prevent false splits', () => {
    const text = 'Mr. Smith went to the market. Dr. Watson was there, e.g. buying bread.';
    const stats = calculateTextStats(text);
    // Mr. Dr. and e.g. should not start new sentences.
    // The text has 2 sentences:
    // 1: Mr. Smith went to the market.
    // 2: Dr. Watson was there, e.g. buying bread.
    expect(stats.sentences).toBe(2);
  });

  it('should count paragraphs correctly', () => {
    const text = 'First paragraph.\n\nSecond paragraph here.\n\nThird paragraph.';
    const stats = calculateTextStats(text);
    expect(stats.paragraphs).toBe(3);
  });

  it('should calculate correct average sentence length', () => {
    const text = 'Word. Two words. Three words here.';
    const stats = calculateTextStats(text);
    // Sentences: 3
    // Words: 1 + 2 + 3 = 6
    // Avg length: 6 / 3 = 2.0
    expect(stats.sentences).toBe(3);
    expect(stats.words).toBe(6);
    expect(stats.averageSentenceLength).toBe(2);
  });

  it('should calculate reading time correctly', () => {
    // 450 words at 225 WPM should be exactly 2.00 minutes
    const words = Array(450).fill('word').join(' ');
    const stats = calculateTextStats(words);
    expect(stats.words).toBe(450);
    expect(stats.readingTimeMin).toBe(2.00);
  });
});
