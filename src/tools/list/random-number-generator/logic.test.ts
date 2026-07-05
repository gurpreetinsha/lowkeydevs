import { describe, it, expect } from 'vitest';
import { generateRandomNumbers } from './logic';

describe('Random Number Generator Logic', () => {
  it('should generate numbers in range', () => {
    const nums = generateRandomNumbers({ min: 10, max: 20, quantity: 5, unique: false, sort: 'none', separator: ' ' });
    expect(nums.length).toBe(5);
    nums.forEach(n => {
      expect(n).toBeGreaterThanOrEqual(10);
      expect(n).toBeLessThanOrEqual(20);
    });
  });

  it('should handle sorting', () => {
    const nums = generateRandomNumbers({ min: 1, max: 100, quantity: 10, unique: true, sort: 'asc', separator: ' ' });
    for (let i = 0; i < nums.length - 1; i++) {
      expect(nums[i]).toBeLessThanOrEqual(nums[i + 1]);
    }
  });
});
