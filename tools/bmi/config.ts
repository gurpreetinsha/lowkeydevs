import { ToolConfig } from "@/schemas/tool";

export const config: ToolConfig = {
  title: "BMI Calculator",
  slug: "bmi",
  description: "Calculate your Body Mass Index (BMI) to understand if you are underweight, normal weight, overweight, or obese. Includes ideal weight guidelines.",
  keywords: ["bmi calculator", "body mass index", "bmi checker", "ideal weight range", "health metrics"],
  category: "health",
  icon: "HeartPulse",
  color: "rose",
  inputs: [
    {
      id: "weight",
      label: "Weight (kg)",
      type: "number",
      defaultValue: 70,
      placeholder: "e.g. 70",
      validation: {
        required: true,
        min: 10,
        max: 300,
        message: "Weight must be between 10 and 300 kg."
      },
      gridSpan: "half"
    },
    {
      id: "height",
      label: "Height (cm)",
      type: "number",
      defaultValue: 170,
      placeholder: "e.g. 170",
      validation: {
        required: true,
        min: 50,
        max: 250,
        message: "Height must be between 50 and 250 cm."
      },
      gridSpan: "half"
    }
  ],
  outputs: [
    {
      id: "bmi",
      label: "BMI Value",
      type: "number",
      precision: 1,
    },
    {
      id: "category",
      label: "Weight Category",
      type: "text",
    },
    {
      id: "idealWeightRange",
      label: "Ideal Weight Range",
      type: "text",
    },
    {
      id: "gaugeVal",
      label: "BMI Category Gauge",
      type: "gauge",
      description: "BMI scales: Underweight (< 18.5), Normal (18.5 - 24.9), Overweight (25 - 29.9), Obese (>= 30)",
    }
  ],
  formula: {
    description: "Body Mass Index (BMI) is calculated by dividing weight in kilograms by the square of height in meters.",
    latex: "BMI = \\frac{Weight\\,(kg)}{Height\\,(m)^2}",
    steps: [
      "Convert height from centimeters to meters (divide by 100).",
      "Square the height value in meters.",
      "Divide weight in kilograms by the squared height value."
    ],
  },
  examples: [
    {
      inputs: { weight: 70, height: 170 },
      outputs: { bmi: 24.2, category: "Normal weight", idealWeightRange: "53.5 kg - 72.0 kg" },
      explanation: "A person weighing 70kg at a height of 170cm (1.7m) has a BMI of 24.2, placing them in the normal category.",
    }
  ],
  faq: [
    {
      question: "Is BMI an accurate measure of overall health?",
      answer: "BMI is a simple screening tool and does not measure body fat directly. It may not be fully accurate for athletes with high muscle mass (who might register as overweight) or older adults with low muscle mass.",
    },
    {
      question: "What is a healthy BMI range?",
      answer: "For most adults, a healthy BMI ranges between 18.5 and 24.9.",
    }
  ],
  relatedTools: ["age"],
  status: "published",
  featured: true,
  trending: true
};
