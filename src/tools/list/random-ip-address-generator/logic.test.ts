import { describe, it, expect } from 'vitest';
import { generateRandomIps } from './logic';

describe('Random IP Address Generator Logic', () => {
  it('should generate IPv4 addresses', () => {
    const list = generateRandomIps({ type: 'ipv4', quantity: 5 });
    expect(list.length).toBe(5);
    list.forEach(ip => {
      const parts = ip.split('.');
      expect(parts.length).toBe(4);
      parts.forEach(p => {
        const val = parseInt(p, 10);
        expect(val).toBeGreaterThanOrEqual(0);
        expect(val).toBeLessThanOrEqual(255);
      });
    });
  });

  it('should generate IPv6 addresses', () => {
    const list = generateRandomIps({ type: 'ipv6', quantity: 3 });
    expect(list.length).toBe(3);
    list.forEach(ip => {
      const parts = ip.split(':');
      expect(parts.length).toBe(8);
    });
  });
});
