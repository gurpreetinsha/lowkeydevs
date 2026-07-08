import { describe, it, expect } from 'vitest';
import {
  calculateMetricBmi,
  calculateImperialBmi,
  getBmiCategory,
  getIdealWeightRangeMetric,
  getIdealWeightRangeImperial,
  getWeightDifference
} from './logic';

describe('BMI Calculator Logic', () => {
  describe('calculateMetricBmi', () => {
    it('should calculate BMI correctly for normal ranges', () => {
      expect(calculateMetricBmi(70, 175)).toBe(22.9);
      expect(calculateMetricBmi(50, 160)).toBe(19.5);
    });

    it('should return 0 for invalid inputs', () => {
      expect(calculateMetricBmi(0, 175)).toBe(0);
      expect(calculateMetricBmi(70, -10)).toBe(0);
    });
  });

  describe('calculateImperialBmi', () => {
    it('should calculate BMI correctly for normal ranges', () => {
      // 150 lbs, 5 ft 10 in (70 inches)
      expect(calculateImperialBmi(150, 70)).toBe(21.5);
    });

    it('should return 0 for invalid inputs', () => {
      expect(calculateImperialBmi(-10, 70)).toBe(0);
      expect(calculateImperialBmi(150, 0)).toBe(0);
    });
  });

  describe('getBmiCategory', () => {
    it('should classify underweight correctly', () => {
      expect(getBmiCategory(18.4)).toBe('Underweight');
    });

    it('should classify normal weight correctly', () => {
      expect(getBmiCategory(18.5)).toBe('Normal weight');
      expect(getBmiCategory(24.9)).toBe('Normal weight');
    });

    it('should classify overweight correctly', () => {
      expect(getBmiCategory(25.0)).toBe('Overweight');
      expect(getBmiCategory(29.9)).toBe('Overweight');
    });

    it('should classify obese classes correctly', () => {
      expect(getBmiCategory(30.0)).toBe('Obese Class I');
      expect(getBmiCategory(34.9)).toBe('Obese Class I');
      expect(getBmiCategory(35.0)).toBe('Obese Class II');
      expect(getBmiCategory(39.9)).toBe('Obese Class II');
      expect(getBmiCategory(40.0)).toBe('Obese Class III');
    });

    it('should return Unknown for zero/negative values', () => {
      expect(getBmiCategory(0)).toBe('Unknown');
      expect(getBmiCategory(-5)).toBe('Unknown');
    });
  });

  describe('getIdealWeightRangeMetric', () => {
    it('should calculate correct range', () => {
      const range = getIdealWeightRangeMetric(175); // 1.75m
      // 18.5 * 1.75^2 = 56.65625 -> 56.7
      // 24.9 * 1.75^2 = 76.25625 -> 76.3
      expect(range.min).toBe(56.7);
      expect(range.max).toBe(76.3);
    });
  });

  describe('getIdealWeightRangeImperial', () => {
    it('should calculate correct range', () => {
      const range = getIdealWeightRangeImperial(70); // 70 inches
      // min: 18.5 * 4900 / 703 = 128.9
      // max: 24.9 * 4900 / 703 = 173.6
      expect(range.min).toBe(128.9);
      expect(range.max).toBe(173.6);
    });
  });

  describe('getWeightDifference', () => {
    it('should return none if weight is in healthy range', () => {
      const diff = getWeightDifference(70, 175, true);
      expect(diff.type).toBe('none');
      expect(diff.amount).toBe(0);
    });

    it('should calculate gain amount if underweight', () => {
      const diff = getWeightDifference(50, 175, true); // ideal min is 56.7
      expect(diff.type).toBe('gain');
      expect(diff.amount).toBe(6.7);
    });

    it('should calculate lose amount if overweight', () => {
      const diff = getWeightDifference(80, 175, true); // ideal max is 76.3
      expect(diff.type).toBe('lose');
      expect(diff.amount).toBe(3.7);
    });
  });
});
