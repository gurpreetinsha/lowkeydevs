import { ToolConfig } from "@/schemas/tool";

export const config: ToolConfig = {
  title: "Scientific Calculator",
  slug: "scientific",
  description: "A full-featured scientific calculator supporting trigonometric functions, logarithms, exponentials, and equation history.",
  keywords: ["scientific calculator", "online calculator", "trigonometry calculator", "log log ln", "math solver"],
  category: "math",
  icon: "Calculator",
  color: "indigo",
  inputs: [], // Renders entirely custom interface
  outputs: [],
  formula: {
    description: "Calculations are parsed dynamically using mathematical order of operations (BEMDAS/PEMDAS) and native trigonometric functions.",
    steps: [
      "Input equation using numbers and operators.",
      "Apply functions like sin, cos, log directly.",
      "Press '=' or enter to execute calculations and log results."
    ],
  },
  examples: [
    {
      inputs: { equation: "sin(30) + 5" },
      outputs: { result: "5.5" },
      explanation: "Sin(30 degrees) is 0.5. Adding 5 yields 5.5.",
    }
  ],
  faq: [
    {
      question: "Are angles calculated in degrees or radians?",
      answer: "The calculator supports toggling between degrees (DEG) and radians (RAD) for all trigonometric calculations.",
    }
  ],
  relatedTools: ["percentage"],
  status: "published",
  featured: true,
  trending: true
};
