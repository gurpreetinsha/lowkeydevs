import { ToolConfig } from "@/schemas/tool";

export const config: ToolConfig = {
  title: "Age Calculator",
  slug: "age",
  description: "Calculate your exact age in years, months, weeks, days, hours, and minutes, or check the countdown to your next birthday.",
  keywords: ["age calculator", "calculate age", "how old am i", "chronological age", "next birthday countdown"],
  category: "time",
  icon: "Calendar",
  color: "sky",
  inputs: [
    {
      id: "birthDate",
      label: "Date of Birth",
      type: "date",
      defaultValue: "1995-01-01",
      validation: {
        required: true,
      },
      gridSpan: "half",
    },
    {
      id: "targetDate",
      label: "Current / Target Date",
      type: "date",
      defaultValue: new Date().toISOString().split("T")[0],
      description: "Defaults to today's date.",
      validation: {
        required: true,
      },
      gridSpan: "half",
    },
  ],
  outputs: [
    {
      id: "years",
      label: "Years",
      type: "number",
      precision: 0,
    },
    {
      id: "months",
      label: "Months",
      type: "number",
      precision: 0,
    },
    {
      id: "days",
      label: "Days",
      type: "number",
      precision: 0,
    },
    {
      id: "summaryText",
      label: "Age Summary",
      type: "text",
    },
    {
      id: "nextBirthday",
      label: "Next Birthday In",
      type: "text",
    },
    {
      id: "totalDays",
      label: "Total Elapsed Days",
      type: "number",
      precision: 0,
      unit: "days",
    },
  ],
  formula: {
    description: "Age is calculated by determining the difference between the birth date and target date in years, months, and days. The next birthday is calculated by finding the date of the next birth anniversary and computing the difference between it and the target date.",
    latex: "Age = Date\\,Difference(Birth\\,Date, Target\\,Date)",
    steps: [
      "Find the difference in whole years.",
      "Calculate remaining months after subtracting the years.",
      "Calculate remaining days after subtracting the months.",
      "Determine next birthday by incrementing the birth year until it is equal to or greater than the target date's year.",
      "Compute difference from target date to next birthday."
    ],
  },
  examples: [
    {
      inputs: { birthDate: "2000-05-15", targetDate: "2026-07-02" },
      outputs: { years: 26, months: 1, days: 17, totalDays: 9544 },
      explanation: "A person born on May 15, 2000 is 26 years, 1 month, and 17 days old on July 2, 2026.",
    },
  ],
  faq: [
    {
      question: "Does the Age Calculator adjust for leap years?",
      answer: "Yes. The calculator uses native Javascript date algorithms which dynamically account for the variation in the number of days in February and leap years (366 days).",
    },
    {
      question: "Can I calculate my age on a specific future or past date?",
      answer: "Yes, by adjusting the 'Current / Target Date' input field to your desired past or future date, you can find exactly how old you were or will be on that day.",
    },
  ],
  relatedTools: ["hex-rgb", "text-case"], // Temporary references, will link to other time tools if built
  status: "published",
  featured: true,
  trending: true,
};
