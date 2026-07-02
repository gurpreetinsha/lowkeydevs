export function calculate(inputs: Record<string, any>): Record<string, any> {
  const weight = Number(inputs.weight);
  const height = Number(inputs.height);

  if (!weight || !height || weight <= 0 || height <= 0) {
    return {
      bmi: 0,
      category: "Please enter valid measurements.",
      idealWeightRange: "N/A",
      gaugeVal: 0,
    };
  }

  const heightM = height / 100;
  const bmi = weight / (heightM * heightM);

  let category = "";
  if (bmi < 18.5) {
    category = "Underweight 🔵";
  } else if (bmi >= 18.5 && bmi < 25) {
    category = "Normal weight 🟢";
  } else if (bmi >= 25 && bmi < 30) {
    category = "Overweight 🟡";
  } else {
    category = "Obese 🔴";
  }

  // Ideal weight range: BMI between 18.5 and 24.9
  const idealMin = 18.5 * (heightM * heightM);
  const idealMax = 24.9 * (heightM * heightM);
  const idealWeightRange = `${idealMin.toFixed(1)} kg - ${idealMax.toFixed(1)} kg`;

  return {
    bmi,
    category,
    idealWeightRange,
    gaugeVal: bmi, // Renders the BMI value on the gauge widget
  };
}
