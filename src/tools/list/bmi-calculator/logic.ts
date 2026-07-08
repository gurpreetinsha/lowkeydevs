/**
 * Calculates BMI using Metric units.
 * @param weightKg Weight in kilograms
 * @param heightCm Height in centimeters
 * @returns BMI score rounded to one decimal place, or 0 if input is invalid
 */
export function calculateMetricBmi(weightKg: number, heightCm: number): number {
  if (weightKg <= 0 || heightCm <= 0) return 0;
  const heightMeters = heightCm / 100;
  const bmi = weightKg / (heightMeters * heightMeters);
  return Math.round(bmi * 10) / 10;
}

/**
 * Calculates BMI using Imperial units.
 * @param weightLbs Weight in pounds
 * @param heightInches Height in inches
 * @returns BMI score rounded to one decimal place, or 0 if input is invalid
 */
export function calculateImperialBmi(weightLbs: number, heightInches: number): number {
  if (weightLbs <= 0 || heightInches <= 0) return 0;
  const bmi = 703 * (weightLbs / (heightInches * heightInches));
  return Math.round(bmi * 10) / 10;
}

/**
 * Classifies the BMI score into standard WHO categories.
 * @param bmi Body Mass Index score
 */
export function getBmiCategory(bmi: number): 'Underweight' | 'Normal weight' | 'Overweight' | 'Obese Class I' | 'Obese Class II' | 'Obese Class III' | 'Unknown' {
  if (bmi <= 0) return 'Unknown';
  if (bmi < 18.5) return 'Underweight';
  if (bmi < 25.0) return 'Normal weight';
  if (bmi < 30.0) return 'Overweight';
  if (bmi < 35.0) return 'Obese Class I';
  if (bmi < 40.0) return 'Obese Class II';
  return 'Obese Class III';
}

/**
 * Calculates the ideal weight range (BMI 18.5 - 24.9) for a given height in Metric units.
 * @param heightCm Height in centimeters
 * @returns Object with min and max weight in kg, rounded to 1 decimal place
 */
export function getIdealWeightRangeMetric(heightCm: number): { min: number; max: number } {
  if (heightCm <= 0) return { min: 0, max: 0 };
  const heightMeters = heightCm / 100;
  const min = 18.5 * (heightMeters * heightMeters);
  const max = 24.9 * (heightMeters * heightMeters);
  return {
    min: Math.round(min * 10) / 10,
    max: Math.round(max * 10) / 10
  };
}

/**
 * Calculates the ideal weight range (BMI 18.5 - 24.9) for a given height in Imperial units.
 * @param heightInches Height in inches
 * @returns Object with min and max weight in lbs, rounded to 1 decimal place
 */
export function getIdealWeightRangeImperial(heightInches: number): { min: number; max: number } {
  if (heightInches <= 0) return { min: 0, max: 0 };
  const min = (18.5 * (heightInches * heightInches)) / 703;
  const max = (24.9 * (heightInches * heightInches)) / 703;
  return {
    min: Math.round(min * 10) / 10,
    max: Math.round(max * 10) / 10
  };
}

/**
 * Calculates how much weight to gain or lose to reach the nearest boundary of the normal weight range.
 * @param currentWeight Current weight
 * @param height Height
 * @param isMetric True if metric (kg/cm), false if imperial (lbs/inches)
 * @returns Object indicating type ('gain' | 'lose' | 'none') and amount
 */
export function getWeightDifference(
  currentWeight: number,
  height: number,
  isMetric: boolean
): { type: 'gain' | 'lose' | 'none'; amount: number } {
  if (currentWeight <= 0 || height <= 0) {
    return { type: 'none', amount: 0 };
  }

  const range = isMetric ? getIdealWeightRangeMetric(height) : getIdealWeightRangeImperial(height);

  if (currentWeight < range.min) {
    return {
      type: 'gain',
      amount: Math.round((range.min - currentWeight) * 10) / 10
    };
  } else if (currentWeight > range.max) {
    return {
      type: 'lose',
      amount: Math.round((currentWeight - range.max) * 10) / 10
    };
  }

  return { type: 'none', amount: 0 };
}
