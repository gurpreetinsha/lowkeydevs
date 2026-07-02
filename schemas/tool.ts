export type InputType = 
  | "number" 
  | "text" 
  | "select" 
  | "checkbox" 
  | "radio" 
  | "date" 
  | "range" 
  | "textarea";

export interface ToolInput {
  id: string;
  label: string;
  type: InputType;
  defaultValue: any;
  placeholder?: string;
  description?: string;
  min?: number;
  max?: number;
  step?: number;
  options?: { label: string; value: string | number }[];
  validation?: {
    required?: boolean;
    pattern?: string;
    message?: string;
    min?: number;
    max?: number;
  };
  gridSpan?: "half" | "full";
}

export type OutputType = 
  | "number" 
  | "text" 
  | "html" 
  | "gauge" 
  | "table";

export interface ToolOutput {
  id: string;
  label: string;
  type: OutputType;
  format?: "currency" | "percent" | "decimal" | "duration" | "none";
  precision?: number;
  unit?: string;
  description?: string;
}

export interface ToolFormula {
  description: string;
  latex?: string;
  steps?: string[];
}

export interface ToolExample {
  inputs: Record<string, any>;
  outputs: Record<string, any>;
  explanation: string;
}

export interface ToolFAQ {
  question: string;
  answer: string;
}

export interface ToolConfig {
  title: string;
  slug: string;
  description: string;
  keywords: string[];
  category: string;
  icon: string; // Lucide icon name
  color: string; // Theme color name (e.g. indigo, emerald, rose)
  inputs: ToolInput[];
  outputs: ToolOutput[];
  formula: ToolFormula;
  examples: ToolExample[];
  faq: ToolFAQ[];
  relatedTools: string[];
  metaTitle?: string;
  metaDescription?: string;
  status: "published" | "draft" | "scheduled";
  publishDate?: string;
  featured?: boolean;
  trending?: boolean;
}
