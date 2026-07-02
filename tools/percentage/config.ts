import { ToolConfig } from "@/schemas/tool";

export const config: ToolConfig = {
  title: "Percentage Calculator",
  slug: "percentage",
  description: "Find percentages, calculate percentage changes (increase/decrease), and determine fractional ratios instantly.",
  keywords: ["percentage calculator", "calculate percent", "percent increase", "percent decrease", "percentage change"],
  category: "math",
  icon: "Percent",
  color: "indigo",
  inputs: [
    {
      id: "calcType",
      label: "Calculation Type",
      type: "select",
      defaultValue: "of",
      options: [
        { label: "What is X% of Y?", value: "of" },
        { label: "X is what percentage of Y?", value: "is_what" },
        { label: "What is the percentage change from X to Y?", value: "change" }
      ]
    },
    {
      id: "x",
      label: "Value X",
      type: "number",
      defaultValue: 10,
      validation: {
        required: true,
      },
      gridSpan: "half"
    },
    {
      id: "y",
      label: "Value Y",
      type: "number",
      defaultValue: 100,
      validation: {
        required: true,
      },
      gridSpan: "half"
    }
  ],
  outputs: [
    {
      id: "result",
      label: "Calculated Result",
      type: "number",
      precision: 4
    },
    {
      id: "description",
      label: "Equation Explanation",
      type: "text"
    }
  ],
  formula: {
    description: "Percentages are portions of a whole, calculated using simple fractions multiplied by 100. The change formula finds difference relative to starting value.",
    latex: "Percentage = \\frac{Part}{Whole} \\times 100",
    steps: [
      "X% of Y: Result = (X / 100) * Y.",
      "X is what % of Y: Result = (X / Y) * 100.",
      "Change from X to Y: Result = ((Y - X) / X) * 100."
    ],
  },
  examples: [
    {
      inputs: { calcType: "of", x: 20, y: 150 },
      outputs: { result: 30, description: "20% of 150 is 30." },
      explanation: "20% of 150 = (20/100) * 150 = 30.",
    }
  ],
  faq: [
    {
      question: "How do you calculate percentage increase?",
      answer: "Subtract the original value X from the new value Y, divide the difference by original value X, and multiply the result by 100.",
    }
  ],
  relatedTools: ["scientific"],
  status: "published",
  featured: false,
  trending: true
};
