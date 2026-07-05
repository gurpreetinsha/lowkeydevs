import { describe, it, expect } from 'vitest';
import { generateRandomDates, formatDate } from './logic';

describe('Random Date Generator Logic', () => {
  it('should generate dates within range', () => {
    const list = generateRandomDates({
      startDate: '2026-01-01',
      endDate: '2026-12-31',
      quantity: 5,
      format: 'YYYY-MM-DD'
    });
    expect(list.length).toBe(5);
    list.forEach(d => {
      const year = d.split('-')[0];
      expect(year).toBe('2026');
    });
  });

  it('should format date', () => {
    const d = new Date(2026, 6, 5); // Month is 0-indexed (6 = July)
    expect(formatDate(d, 'MM/DD/YYYY')).toBe('07/05/2026');
  });
});
