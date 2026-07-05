import { describe, it, expect } from 'vitest';
import { generateApa7Citation, formatAuthors } from './logic';

describe('APA Citation Generator Logic', () => {
  it('should format author names', () => {
    expect(formatAuthors('John Smith')).toBe('Smith, J.');
    expect(formatAuthors('John Smith & Jane Doe')).toBe('Smith, J. & Doe, J.');
  });

  it('should generate book citation', () => {
    const res = generateApa7Citation({
      type: 'book',
      authors: 'John Smith',
      year: '2026',
      title: 'A Great Book',
      publisherOrSite: 'Publisher House',
      url: 'https://example.com',
      volume: '',
      issue: '',
      pages: ''
    });
    expect(res.plainText).toBe('Smith, J. (2026). A Great Book. Publisher House. https://example.com');
    expect(res.html).toBe('Smith, J. (2026). <i>A Great Book</i>. Publisher House. <a href="https://example.com" target="_blank" rel="noopener noreferrer">https://example.com</a>');
  });
});
