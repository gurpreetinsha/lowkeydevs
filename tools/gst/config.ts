import { ToolConfig } from "@/schemas/tool";

export const config: ToolConfig = {
  title: "GST Calculator",
  slug: "gst",
  description: "Calculate Goods and Services Tax (GST) easily. Supports tax inclusive and exclusive calculation modes and splits tax components (CGST, SGST).",
  keywords: ["gst calculator", "goods and services tax", "tax inclusive", "tax exclusive", "cgst sgst split"],
  category: "finance",
  icon: "Briefcase",
  color: "emerald",
  inputs: [
    {
      id: "amount",
      label: "Amount ($)",
      type: "number",
      defaultValue: 1000,
      validation: {
        required: true,
        min: 1,
        max: 1000000000,
        message: "Amount must be between $1 and $1,000,000,000."
      }
    },
    {
      id: "gstRate",
      label: "GST Rate (%)",
      type: "select",
      defaultValue: 18,
      options: [
        { label: "5%", value: 5 },
        { label: "12%", value: 12 },
        { label: "18%", value: 18 },
        { label: "28%", value: 28 }
      ],
      gridSpan: "half"
    },
    {
      id: "gstType",
      label: "Tax Mode",
      type: "radio",
      defaultValue: "exclusive",
      options: [
        { label: "GST Exclusive (Add GST)", value: "exclusive" },
        { label: "GST Inclusive (Subtract GST)", value: "inclusive" }
      ],
      gridSpan: "half"
    }
  ],
  outputs: [
    {
      id: "gstAmount",
      label: "GST Amount",
      type: "number",
      format: "currency",
      precision: 2
    },
    {
      id: "cgst",
      label: "CGST Portion (50%)",
      type: "number",
      format: "currency",
      precision: 2,
      description: "Central GST component."
    },
    {
      id: "sgst",
      label: "SGST Portion (50%)",
      type: "number",
      format: "currency",
      precision: 2,
      description: "State GST component."
    },
    {
      id: "finalAmount",
      label: "Final Price",
      type: "number",
      format: "currency",
      precision: 2,
      description: "Gross price including tax or net price excluding tax."
    }
  ],
  formula: {
    description: "Tax-exclusive adds GST to base price, whereas tax-inclusive calculates base price from retail rate.",
    latex: "GST\\,(Exclusive) = Amount \\times \\frac{Rate}{100}",
    steps: [
      "GST Exclusive Amount = Base Amount * (Rate / 100). Total = Base Amount + GST.",
      "GST Inclusive Amount = Base Amount - (Base Amount / (1 + Rate/100)). Net = Base Amount - GST.",
      "CGST and SGST splits are exactly half of the calculated GST amount."
    ],
  },
  examples: [
    {
      inputs: { amount: 100, gstRate: 18, gstType: "exclusive" },
      outputs: { gstAmount: 18, finalAmount: 118, cgst: 9, sgst: 9 },
      explanation: "For an exclusive base price of $100 and 18% tax rate: Tax amount is $18, CGST/SGST splits are $9 each, and retail price is $118.",
    }
  ],
  faq: [
    {
      question: "What is the difference between GST Inclusive and Exclusive?",
      answer: "GST Exclusive refers to a base price before tax is added. GST Inclusive refers to a total retail price that already contains the tax amount.",
    }
  ],
  relatedTools: ["emi", "discount"],
  status: "published",
  featured: false,
  trending: false
};
