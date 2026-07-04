import { describe, it, expect } from 'vitest';
import { generateMd5, generateSha } from './logic';

describe('Hash Generator Logic', () => {
  describe('generateMd5', () => {
    it('should generate correct MD5 hash for empty string', () => {
      expect(generateMd5('')).toBe('d41d8cd98f00b204e9800998ecf8427e');
    });

    it('should generate correct MD5 hash for standard string', () => {
      expect(generateMd5('hello')).toBe('5d41402abc4b2a76b9719d911017c592');
      expect(generateMd5('The quick brown fox jumps over the lazy dog')).toBe('9e107d9d372bb6826bd81d3542a419d6');
    });
  });

  describe('generateSha', () => {
    it('should generate correct SHA-256 hash', async () => {
      const hash = await generateSha('hello', 'SHA-256');
      expect(hash).toBe('2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824');
    });

    it('should generate correct SHA-1 hash', async () => {
      const hash = await generateSha('hello', 'SHA-1');
      expect(hash).toBe('aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d');
    });

    it('should generate correct SHA-512 hash', async () => {
      const hash = await generateSha('hello', 'SHA-512');
      expect(hash).toBe('9b71d224bd62f3785d96d46ad3ea3d73319bfbc2890caadae2dff72519673ca72323c3d99ba5c11d7c7acc6e14b8c5da0c4663475c2e5c3adef46f73bcdec043');
    });

    it('should return empty string for empty input', async () => {
      const hash = await generateSha('', 'SHA-256');
      expect(hash).toBe('');
    });
  });
});
