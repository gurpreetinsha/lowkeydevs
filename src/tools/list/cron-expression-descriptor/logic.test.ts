import { describe, it, expect } from 'vitest';
import { describeCron, getNextExecutionTimes } from './logic';

describe('Cron Expression Descriptor Logic', () => {
  it('should describe a simple daily cron correctly', () => {
    const cron = '0 12 * * *';
    const result = describeCron(cron);
    expect(result.description).toBe('At noon, every day.');
    expect(result.parts.minute).toBe('0');
    expect(result.parts.hour).toBe('12:00 PM (noon)');
  });

  it('should describe complex range, list, and steps correctly', () => {
    const cron = '*/15 9-17 1,15 * 1-5';
    const result = describeCron(cron);
    
    expect(result.description).toContain('Every 15 minutes');
    expect(result.description).toContain('from 9:00 AM through 5:00 PM');
    expect(result.description).toContain('day 1 and day 15');
    expect(result.description).toContain('Monday through Friday');
  });

  it('should compute next execution times correctly', () => {
    const cron = '0 0 1 * *'; // Midnight on first day of month
    const times = getNextExecutionTimes(cron, 3);
    
    expect(times.length).toBe(3);
    
    // Each time should be the first day of a month
    expect(times[0].getDate()).toBe(1);
    expect(times[0].getHours()).toBe(0);
    expect(times[0].getMinutes()).toBe(0);

    expect(times[1].getDate()).toBe(1);
    expect(times[2].getDate()).toBe(1);
  });

  it('should throw an error for invalid cron expressions', () => {
    expect(() => describeCron('invalid cron')).toThrow();
    expect(() => describeCron('* * * * * *')).toThrow(); // 6 fields not supported
    expect(() => describeCron('60 24 * * *')).toThrow(); // Out of bounds values
  });
});
