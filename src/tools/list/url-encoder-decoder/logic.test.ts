import { describe, it, expect } from 'vitest';
import { encodeUrl, decodeUrl } from './logic';

describe('URL Encoder & Decoder Logic', () => {
  describe('encodeUrl', () => {
    it('should encode standard special characters in "all" mode (default)', () => {
      const input = 'hello world/test?val=1&other=2';
      const encoded = encodeUrl(input, 'all');
      expect(encoded).toBe('hello%20world%2Ftest%3Fval%3D1%26other%3D2');
    });

    it('should leave URL structure characters intact in "standard" mode', () => {
      const input = 'https://example.com/search?q=hello world';
      const encoded = encodeUrl(input, 'standard');
      expect(encoded).toBe('https://example.com/search?q=hello%20world');
    });

    it('should return empty string for empty input', () => {
      expect(encodeUrl('')).toBe('');
    });
  });

  describe('decodeUrl', () => {
    it('should decode percent-encoded strings correctly', () => {
      const input = 'hello%20world%2Ftest%3Fval%3D1%26other%3D2';
      const decoded = decodeUrl(input);
      expect(decoded).toBe('hello world/test?val=1&other=2');
    });

    it('should convert + to spaces', () => {
      const input = 'hello+world';
      const decoded = decodeUrl(input);
      expect(decoded).toBe('hello world');
    });

    it('should throw error for invalid percent sequences', () => {
      const bad = '%E0%A4';
      expect(() => decodeUrl(bad)).toThrow('Invalid percent-encoding sequence');
    });

    it('should return empty string for empty input', () => {
      expect(decodeUrl('')).toBe('');
    });
  });
});
