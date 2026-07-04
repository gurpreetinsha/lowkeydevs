import { describe, it, expect } from 'vitest';
import { formatCSS, minifyCSS } from './logic';

describe('CSS Formatter Logic', () => {
  const rawCSS = `
    body {
      background-color: #000;
      color: #fff;
    }
    .card { margin: 10px; padding: 20px; }
  `;

  describe('formatCSS', () => {
    it('should format CSS with default 2 space indentation', () => {
      const formatted = formatCSS(rawCSS);
      expect(formatted).toContain('body {');
      expect(formatted).toContain('  background-color: #000;');
      expect(formatted).toContain('  color: #fff;');
      expect(formatted).toContain('.card {');
      expect(formatted).toContain('  margin: 10px;');
      expect(formatted).toContain('  padding: 20px;');
    });

    it('should format CSS with 4 spaces', () => {
      const formatted = formatCSS(rawCSS, 4);
      expect(formatted).toContain('    background-color: #000;');
    });

    it('should return empty string for empty input', () => {
      expect(formatCSS('')).toBe('');
      expect(formatCSS('  ')).toBe('');
    });
  });

  describe('minifyCSS', () => {
    it('should strip comments and compress rules', () => {
      const minified = minifyCSS(rawCSS);
      expect(minified).toBe('body{background-color:#000;color:#fff}.card{margin:10px;padding:20px}');
    });

    it('should return empty string for empty input', () => {
      expect(minifyCSS('')).toBe('');
    });
  });
});
