import { ToolConfig } from "@/schemas/tool";

export const config: ToolConfig = {
  title: "Hex to RGB Converter",
  slug: "hex-rgb",
  description: "Convert hex color codes to RGB, RGBA, and HSL color values in real-time, with color swatch previews.",
  keywords: ["hex to rgb", "color converter", "rgb to hsl", "hex code checker", "rgba selector"],
  category: "color",
  icon: "Palette",
  color: "purple",
  inputs: [
    {
      id: "hex",
      label: "Hex Color Code",
      type: "text",
      defaultValue: "#3b82f6",
      placeholder: "e.g. #3b82f6 or FFF",
      validation: {
        required: true,
        pattern: "^#?([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$",
        message: "Please enter a valid 3 or 6 digit hex code."
      }
    }
  ],
  outputs: [
    {
      id: "rgb",
      label: "RGB Format",
      type: "text",
    },
    {
      id: "rgba",
      label: "RGBA Format (Opacity 100%)",
      type: "text",
    },
    {
      id: "hsl",
      label: "HSL Format",
      type: "text",
    },
    {
      id: "colorPreview",
      label: "Color Preview Swatch",
      type: "html",
      description: "Live swatch of the selected color code."
    }
  ],
  formula: {
    description: "Splits a hexadecimal string into red, green, and blue components, converting each base-16 pair into a base-10 integer. HSL is derived by finding hue angles and saturation ratios relative to RGB min/max levels.",
    latex: "R_{10} = \\text{parseInt}(\\text{Hex}[1..2], 16)",
    steps: [
      "Remove leading '#' hash symbol if present.",
      "Expand short 3-digit codes (e.g. #38F) to 6-digit (e.g. #3388FF).",
      "Extract R, G, B channels as hexadecimal segments.",
      "Parse segments to base 10 integers (0-255).",
      "Execute RGB to HSL algorithms based on chroma levels."
    ],
  },
  examples: [
    {
      inputs: { hex: "#3b82f6" },
      outputs: { rgb: "rgb(59, 130, 246)", rgba: "rgba(59, 130, 246, 1)", hsl: "hsl(217, 91%, 60%)" },
      explanation: "#3b82f6 breaks down to Red=59 (3b), Green=130 (82), and Blue=246 (f6).",
    }
  ],
  faq: [
    {
      question: "Are short hex codes supported?",
      answer: "Yes. Short hex codes like #FFF or 0A9 will be automatically expanded to their full forms (#FFFFFF, #00AA99) before calculations.",
    }
  ],
  relatedTools: ["text-case"],
  status: "published",
  featured: false,
  trending: false
};
