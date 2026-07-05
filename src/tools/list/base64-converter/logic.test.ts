import { describe, it, expect } from 'vitest';
import { encodeBase64, decodeBase64 } from './logic';

describe('Base64 Converter Logic', () => {
  describe('encodeBase64', () => {
    it('should encode standard ASCII text correctly', () => {
      const raw = 'Hello World';
      const encoded = encodeBase64(raw);
      expect(encoded).toBe('SGVsbG8gV29ybGQ=');
    });

    it('should encode Unicode/UTF-8 symbols (emojis) correctly', () => {
      const raw = '👋 Developer';
      const encoded = encodeBase64(raw);
      expect(encoded).toBe('8J+RiyBEZXZlbG9wZXI=');
    });

    it('should return empty string for empty input', () => {
      expect(encodeBase64('')).toBe('');
    });
  });

  describe('decodeBase64', () => {
    it('should decode valid Base64 string correctly', () => {
      const encoded = 'SGVsbG8gV29ybGQ=';
      const decoded = decodeBase64(encoded);
      expect(decoded).toBe('Hello World');
    });

    it('should decode Unicode/UTF-8 Base64 string correctly', () => {
      const encoded = '8J+RiyBEZXZlbG9wZXI=';
      const decoded = decodeBase64(encoded);
      expect(decoded).toBe('👋 Developer');
    });

    it('should throw an error on invalid Base64 input', () => {
      const bad = 'invalid-base-64!';
      expect(() => decodeBase64(bad)).toThrow('Invalid Base64 format');
    });

    it('should return empty string for empty input', () => {
      expect(decodeBase64('')).toBe('');
    });
  });
});
