import { ToolConfig } from "@/schemas/tool";

export const config: ToolConfig = {
  title: "EMI Calculator",
  slug: "emi",
  description: "Calculate your Equated Monthly Installment (EMI) for home loans, car loans, or personal loans. View interest breakdowns and schedules.",
  keywords: ["emi calculator", "loan emi", "monthly installment", "amortization calculator", "mortgage calculator"],
  category: "finance",
  icon: "TrendingUp",
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
        max: 100000000,
        message: "Loan amount must be between $1,000 and $100,000,000."
      }
    },
    {
      id: "interestRate",
      label: "Interest Rate (% P.A.)",
      type: "number",
      defaultValue: 8.5,
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
      label: "Loan Tenure",
      type: "number",
      defaultValue: 15,
      validation: {
        required: true,
        min: 1,
        max: 50,
        message: "Tenure must be between 1 and 50 years."
      },
      gridSpan: "half"
    }
  ],
  outputs: [
    {
      id: "monthlyPayment",
      label: "Monthly EMI",
      type: "number",
      format: "currency",
      precision: 2
    },
    {
      id: "totalInterest",
      label: "Total Interest Payable",
      type: "number",
      format: "currency",
      precision: 2
    },
    {
      id: "totalPayment",
      label: "Total Amount (Principal + Interest)",
      type: "number",
      format: "currency",
      precision: 2
    },
    {
      id: "schedule",
      label: "Yearly Amortization Schedule",
      type: "table",
      description: "Amortization table breaking down principal and interest payments per year."
    }
  ],
  formula: {
    description: "The Equated Monthly Installment (EMI) is calculated using the loan amount (P), the monthly interest rate (r), and the number of monthly installments (n).",
    latex: "EMI = \\frac{P \\times r \\times (1 + r)^n}{(1 + r)^n - 1}",
    steps: [
      "Convert annual interest rate to monthly: r = (Annual Rate / 12) / 100.",
      "Convert tenure from years to months: n = Years * 12.",
      "Calculate EMI: EMI = [P * r * (1 + r)^n] / [(1 + r)^n - 1]."
    ],
  },
  examples: [
    {
      inputs: { loanAmount: 100000, interestRate: 8.5, tenure: 15 },
      outputs: { monthlyPayment: 984.74, totalInterest: 77253.16, totalPayment: 177253.16 },
      explanation: "A loan of $100,000 at 8.5% yearly interest for 15 years yields an EMI of $984.74, totaling $77,253.16 in interest payments.",
    }
  ],
  faq: [
    {
      question: "What is an Equated Monthly Installment (EMI)?",
      answer: "An EMI is a fixed payment amount made by a borrower to a lender at a specified date each calendar month. EMIs consist of both principal and interest portions.",
    },
    {
      question: "How does pre-payment affect EMI?",
      answer: "Making additional principal pre-payments reduces the total outstanding loan balance, which either reduces your subsequent EMI amounts or shortens the remaining loan tenure.",
    }
  ],
  relatedTools: ["bmi", "age"],
  status: "published",
  featured: true,
  trending: true
};
