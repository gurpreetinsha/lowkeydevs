import { describe, it, expect } from 'vitest';
import { generateRandomMonths } from './logic';

describe('Random Month Generator Logic', () => {
  it('should generate months', () => {
    const list = generateRandomMonths({ quantity: 5, format: 'full', unique: false });
    expect(list.length).toBe(5);
  });

  it('should support short and number formats', () => {
    const listShort = generateRandomMonths({ quantity: 1, format: 'short', unique: false });
    expect(listShort[0].length).toBe(3);
    
    const listNum = generateRandomMonths({ quantity: 1, format: 'number', unique: false });
    expect(parseInt(listNum[0], 10)).toBeGreaterThanOrEqual(1);
    expect(parseInt(listNum[0], 10)).toBeLessThanOrEqual(12);
  });
});
