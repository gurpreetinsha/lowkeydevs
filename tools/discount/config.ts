import { ToolConfig } from "@/schemas/tool";

export const config: ToolConfig = {
  title: "Discount Calculator",
  slug: "discount",
  description: "Find the net price of an item after applying single or stacked discounts, and calculate sales tax amounts instantly.",
  keywords: ["discount calculator", "sale price calculator", "percent off calculator", "savings calculator", "shopping math"],
  category: "business",
  icon: "Briefcase",
  color: "blue",
  inputs: [
    {
      id: "price",
      label: "Original Price ($)",
      type: "number",
      defaultValue: 100,
      validation: {
        required: true,
        min: 0.01,
        message: "Original price must be greater than $0."
      }
    },
    {
      id: "discount",
      label: "Discount (%)",
      type: "number",
      defaultValue: 20,
      validation: {
        required: true,
        min: 0,
        max: 100,
        message: "Discount must be between 0% and 100%."
      },
      gridSpan: "half"
    },
    {
      id: "additionalDiscount",
      label: "Second Discount (% Off)",
      type: "number",
      defaultValue: 0,
      description: "Optional secondary stacked discount (e.g. extra 10% off).",
      validation: {
        required: false,
        min: 0,
        max: 100,
      },
      gridSpan: "half"
    },
    {
      id: "tax",
      label: "Sales Tax (%)",
      type: "number",
      defaultValue: 8,
      validation: {
        required: false,
        min: 0,
        max: 100,
      }
    }
  ],
  outputs: [
    {
      id: "finalPrice",
      label: "Final Price (After Discount & Tax)",
      type: "number",
      format: "currency",
      precision: 2
    },
    {
      id: "savings",
      label: "Total Amount Saved",
      type: "number",
      format: "currency",
      precision: 2
    },
    {
      id: "taxAmount",
      label: "Sales Tax Amount Paid",
      type: "number",
      format: "currency",
      precision: 2
    }
  ],
  formula: {
    description: "Calculate primary discount, apply secondary discount to the reduced amount (stacked), and add sales tax to the final sum.",
    latex: "Price_{Final} = Price_{Original} \\times (1 - \\frac{D_1}{100}) \\times (1 - \\frac{D_2}{100}) \\times (1 + \\frac{Tax}{100})",
    steps: [
      "Find price after first discount: P1 = Price * (1 - Discount1/100).",
      "Find price after stacked discount: P2 = P1 * (1 - Discount2/100).",
      "Calculate tax: Tax Amount = P2 * (TaxRate / 100).",
      "Final Price = P2 + Tax Amount. Total Savings = Original Price - Final Price + Tax Amount."
    ],
  },
  examples: [
    {
      inputs: { price: 100, discount: 20, additionalDiscount: 10, tax: 8 },
      outputs: { finalPrice: 77.76, savings: 28, taxAmount: 5.76 },
      explanation: "A $100 item with 20% off ($80) and additional 10% off ($72), plus 8% tax ($5.76) has a final retail price of $77.76.",
    }
  ],
  faq: [
    {
      question: "Are secondary discounts added together or stacked?",
      answer: "Stacked. Instead of adding them (20% + 10% = 30%), the first discount is applied (leaving 80% of price), and then the second discount is applied to the *reduced* amount (leaving 90% of $80 = $72). This is how standard retail stores calculate stackable coupons.",
    }
  ],
  relatedTools: ["gst", "percentage"],
  status: "published",
  featured: false,
  trending: false
};
