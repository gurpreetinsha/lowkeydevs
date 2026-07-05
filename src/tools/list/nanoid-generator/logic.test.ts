import { describe, it, expect } from 'vitest';
import { generateNanoids } from './logic';

describe('Nano ID Generator Logic', () => {
  it('should generate ids of requested size', () => {
    const list = generateNanoids({ size: 21, alphabet: '', quantity: 5 });
    expect(list.length).toBe(5);
    list.forEach(id => {
      expect(id.length).toBe(21);
    });
  });

  it('should respect custom alphabet', () => {
    const list = generateNanoids({ size: 10, alphabet: 'abc', quantity: 1 });
    expect(list[0]).toMatch(/^[abc]+$/);
  });
});
