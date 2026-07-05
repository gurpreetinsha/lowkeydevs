import { describe, it, expect } from 'vitest';
import { generateUuid, generateUuids } from './logic';

describe('UUID Generator Logic', () => {
  describe('generateUuid', () => {
    it('should generate a valid v4 UUID by default', () => {
      const uuid = generateUuid();
      // Length is 36, contains 4 hyphens
      expect(uuid.length).toBe(36);
      expect((uuid.match(/-/g) || []).length).toBe(4);
      // Valid v4 format regex
      expect(uuid).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
    });

    it('should respect uppercase option', () => {
      const uuid = generateUuid({ uppercase: true, hyphens: true, braces: false });
      expect(uuid).toMatch(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/);
    });

    it('should respect hyphens = false option', () => {
      const uuid = generateUuid({ uppercase: false, hyphens: false, braces: false });
      expect(uuid.length).toBe(32);
      expect(uuid).not.toContain('-');
      expect(uuid).toMatch(/^[0-9a-f]{32}$/);
    });

    it('should respect braces = true option', () => {
      const uuid = generateUuid({ uppercase: false, hyphens: true, braces: true });
      expect(uuid.startsWith('{')).toBe(true);
      expect(uuid.endsWith('}')).toBe(true);
      expect(uuid.length).toBe(38); // 36 + 2 braces
    });
  });

  describe('generateUuids', () => {
    it('should generate the correct quantity', () => {
      const qty = 5;
      const list = generateUuids({ quantity: qty, uppercase: false, hyphens: true, braces: false });
      expect(list.length).toBe(qty);
      expect(list[0]).not.toBe(list[1]); // should be unique
    });

    it('should clamp quantity within 1 and 100', () => {
      const listLow = generateUuids({ quantity: -5, uppercase: false, hyphens: true, braces: false });
      expect(listLow.length).toBe(1);

      const listHigh = generateUuids({ quantity: 200, uppercase: false, hyphens: true, braces: false });
      expect(listHigh.length).toBe(100);
    });
  });
});
