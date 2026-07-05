import { describe, it, expect } from 'vitest';
import { isMilliseconds, epochToUtc, epochToLocal, humanDateToEpoch } from './logic';

describe('Epoch Time Converter Logic', () => {
  const sampleEpochSec = 1719878400; // 2024-07-02 00:00:00 UTC
  const sampleEpochMs = 1719878400000;

  describe('isMilliseconds', () => {
    it('should correctly identify second and millisecond epochs', () => {
      expect(isMilliseconds(sampleEpochSec)).toBe(false);
      expect(isMilliseconds(sampleEpochMs)).toBe(true);
    });
  });

  describe('epochToUtc', () => {
    it('should convert epoch seconds to correct UTC string', () => {
      const utcStr = epochToUtc(sampleEpochSec);
      expect(utcStr).toBe('Tue, 02 Jul 2024 00:00:00 GMT');
    });

    it('should convert epoch milliseconds to correct UTC string', () => {
      const utcStr = epochToUtc(sampleEpochMs);
      expect(utcStr).toBe('Tue, 02 Jul 2024 00:00:00 GMT');
    });

    it('should throw on invalid timestamps', () => {
      expect(() => epochToUtc(Infinity)).toThrow();
    });
  });

  describe('epochToLocal', () => {
    it('should convert to local date string without crashing', () => {
      const localStr = epochToLocal(sampleEpochSec);
      expect(localStr).toContain('2024');
    });
  });

  describe('humanDateToEpoch', () => {
    it('should convert UTC human date parts to correct epoch values', () => {
      const { seconds, milliseconds } = humanDateToEpoch(2024, 7, 2, 0, 0, 0, 0, true);
      expect(seconds).toBe(sampleEpochSec);
      expect(milliseconds).toBe(sampleEpochMs);
    });

    it('should convert Local human date parts to correct epoch values', () => {
      const parts = humanDateToEpoch(2024, 7, 2, 0, 0, 0, 0, false);
      const expectedDate = new Date(2024, 6, 2, 0, 0, 0, 0); // 6 is July
      expect(parts.milliseconds).toBe(expectedDate.getTime());
    });
  });
});
