import { ToolConfig } from "@/schemas/tool";

export const config: ToolConfig = {
  title: "Loan Calculator",
  slug: "loan",
  description: "Configure your loan metrics and add optional monthly extra payments to see how much interest you can save and how much sooner you can pay off your balance.",
  keywords: ["loan calculator", "mortgage payoff", "amortization chart", "extra payments calculator", "loan interest savings"],
  category: "finance",
  icon: "Briefcase",
  color: "emerald",
  inputs: [
    {
      id: "loanAmount",
      label: "Loan Amount ($)",
      type: "number",
      defaultValue: 100000,
      validation: {
        required: true,
        min: 1000,
        max: 50000000,
        message: "Loan amount must be between $1,000 and $50,000,000."
      }
    },
    {
      id: "interestRate",
      label: "Interest Rate (% P.A.)",
      type: "number",
      defaultValue: 6.0,
      step: 0.1,
      validation: {
        required: true,
        min: 0.1,
        max: 100,
        message: "Interest rate must be between 0.1% and 100%."
      },
      gridSpan: "half"
    },
    {
      id: "tenure",
      label: "Tenure (Years)",
      type: "number",
      defaultValue: 10,
      validation: {
        required: true,
        min: 1,
        max: 50,
        message: "Tenure must be between 1 and 50 years."
      },
      gridSpan: "half"
    },
    {
      id: "extraPayment",
      label: "Extra Monthly Payment ($)",
      type: "number",
      defaultValue: 0,
      description: "Optional extra principal payment paid each month.",
      validation: {
        required: false,
        min: 0,
      }
    }
  ],
  outputs: [
    {
      id: "monthlyPayment",
      label: "Monthly Standard Payment",
      type: "number",
      format: "currency",
      precision: 2
    },
    {
      id: "payoffDuration",
      label: "New Payoff Duration",
      type: "text",
      description: "How long it will take to pay off the loan with extra payments."
    },
    {
      id: "totalInterest",
      label: "Total Interest Paid",
      type: "number",
      format: "currency",
      precision: 2
    },
    {
      id: "interestSavings",
      label: "Total Interest Savings",
      type: "number",
      format: "currency",
      precision: 2,
      description: "Money saved in interest due to extra monthly payments."
    },
    {
      id: "totalPayment",
      label: "Total Payoff Amount",
      type: "number",
      format: "currency",
      precision: 2
    },
    {
      id: "schedule",
      label: "Payoff Schedule Breakdown",
      type: "table"
    }
  ],
  formula: {
    description: "Computes standard payments using the compound amortization formula, then runs a month-by-month simulation to apply extra principal reductions.",
    latex: "Principal\\,Payment\\,(Month) = Standard\\,EMI - (Balance \\times Rate) + Extra\\,Payment",
    steps: [
      "Find standard monthly EMI: EMI = [P * r * (1+r)^n] / [(1+r)^n - 1].",
      "Simulate each month: interest = balance * monthlyRate, principal = EMI - interest.",
      "Add extra payment to principal, subtract total principal from balance.",
      "Track when balance hits 0, aggregate interest saved vs standard payoff."
    ],
  },
  examples: [
    {
      inputs: { loanAmount: 100000, interestRate: 6, tenure: 10, extraPayment: 200 },
      outputs: { monthlyPayment: 1110.21, payoffDuration: "8 Years & 1 Month", totalInterest: 23689.84, interestSavings: 9534.76, totalPayment: 123689.84 },
      explanation: "With $200 extra paid monthly, you pay off the 10-year loan 1 year and 11 months early, saving $9,534.76 in interest.",
    }
  ],
  faq: [
    {
      question: "Is there a penalty for making extra payments on a loan?",
      answer: "Most consumer loans (like auto or student loans) and home mortgages do not have prepayment penalties. However, you should check your specific loan terms to be sure.",
    }
  ],
  relatedTools: ["emi", "discount"],
  status: "published",
  featured: true,
  trending: false
};
