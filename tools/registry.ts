import { ToolConfig } from "@/schemas/tool";

// Statically import tool configurations and calculation functions
import { config as ageConfig } from "./age/config";
import { calculate as ageCalculate } from "./age/calculate";

import { config as bmiConfig } from "./bmi/config";
import { calculate as bmiCalculate } from "./bmi/calculate";

import { config as emiConfig } from "./emi/config";
import { calculate as emiCalculate } from "./emi/calculate";

import { config as percentageConfig } from "./percentage/config";
import { calculate as percentageCalculate } from "./percentage/calculate";

import { config as gstConfig } from "./gst/config";
import { calculate as gstCalculate } from "./gst/calculate";

import { config as loanConfig } from "./loan/config";
import { calculate as loanCalculate } from "./loan/calculate";

import { config as discountConfig } from "./discount/config";
import { calculate as discountCalculate } from "./discount/calculate";

import { config as scientificConfig } from "./scientific/config";
import { calculate as scientificCalculate } from "./scientific/calculate";
import ScientificCustom from "./scientific/custom";

import { config as hexRgbConfig } from "./hex-rgb/config";
import { calculate as hexRgbCalculate } from "./hex-rgb/calculate";

import { config as textCaseConfig } from "./text-case/config";
import { calculate as textCaseCalculate } from "./text-case/calculate";

export interface ToolModule {
  config: ToolConfig;
  calculate: (inputs: Record<string, any>) => Record<string, any>;
  custom?: React.ComponentType<any>;
}

export const tools: Record<string, ToolModule> = {
  age: { config: ageConfig, calculate: ageCalculate },
  bmi: { config: bmiConfig, calculate: bmiCalculate },
  emi: { config: emiConfig, calculate: emiCalculate },
  percentage: { config: percentageConfig, calculate: percentageCalculate },
  gst: { config: gstConfig, calculate: gstCalculate },
  loan: { config: loanConfig, calculate: loanCalculate },
  discount: { config: discountConfig, calculate: discountCalculate },
  scientific: { config: scientificConfig, calculate: scientificCalculate, custom: ScientificCustom },
  "hex-rgb": { config: hexRgbConfig, calculate: hexRgbCalculate },
  "text-case": { config: textCaseConfig, calculate: textCaseCalculate },
};

export function getToolBySlug(slug: string): ToolConfig | undefined {
  return tools[slug]?.config;
}

export function getToolModule(slug: string): ToolModule | undefined {
  return tools[slug];
}

export function getToolsByCategory(categorySlug: string): ToolConfig[] {
  return Object.values(tools)
    .map((t) => t.config)
    .filter((config) => config.category === categorySlug && config.status === "published");
}

export function getAllTools(): ToolConfig[] {
  return Object.values(tools)
    .map((t) => t.config)
    .filter((config) => config.status === "published");
}

export function searchTools(query: string): ToolConfig[] {
  const normalized = query.toLowerCase().trim();
  if (!normalized) return [];

  return getAllTools().filter(
    (tool) =>
      tool.title.toLowerCase().includes(normalized) ||
      tool.description.toLowerCase().includes(normalized) ||
      tool.category.toLowerCase().includes(normalized) ||
      tool.keywords.some((kw) => kw.toLowerCase().includes(normalized))
  );
}
