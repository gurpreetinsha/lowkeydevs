import { describe, it, expect } from 'vitest';
import { reverseText } from './logic';

describe('Reverse Text Generator Logic', () => {
  it('should return empty string for empty input', () => {
    expect(reverseText('', 'characters')).toBe('');
  });

  it('should reverse character sequence', () => {
    expect(reverseText('hello world', 'characters')).toBe('dlrow olleh');
  });

  it('should reverse word sequence but keep spacing', () => {
    expect(reverseText('hello world test', 'words')).toBe('test world hello');
  });

  it('should reverse lines sequence', () => {
    expect(reverseText('line1\nline2\nline3', 'lines')).toBe('line3\nline2\nline1');
  });

  it('should flip text upside-down and reverse characters', () => {
    // hello should become ollǝɥ backwards
    expect(reverseText('hello', 'upside-down')).toBe('ollǝɥ');
  });
});
