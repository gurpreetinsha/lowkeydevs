import type { ToolMeta, ToolCategory } from './definitions';
import { meta as jsonFormatterMeta } from './list/json-formatter/meta';
import { meta as passwordGeneratorMeta } from './list/password-generator/meta';
import { meta as base64ConverterMeta } from './list/base64-converter/meta';

// Central Registry of all tools
export const registry: ToolMeta[] = [
  jsonFormatterMeta,
  passwordGeneratorMeta,
  base64ConverterMeta
];

// Helper to find a tool by its slug
export function getToolBySlug(slug: string): ToolMeta | undefined {
  return registry.find(tool => tool.slug === slug);
}

// Helper to list all tools in a specific category
export function getToolsByCategory(category: ToolCategory): ToolMeta[] {
  return registry.filter(tool => tool.category === category);
}

// Category Configuration details
export interface CategoryDetail {
  slug: ToolCategory;
  title: string;
  description: string;
  icon: string;
}

export const categories: CategoryDetail[] = [
  {
    slug: 'json-yaml',
    title: 'JSON & YAML Tools',
    description: 'Format, validate, parse, and convert JSON or YAML structure strings.',
    icon: 'Braces'
  },
  {
    slug: 'generators',
    title: 'Generators',
    description: 'Generate passwords, hashes, UUIDs, QR codes, or dummy text on the fly.',
    icon: 'Key'
  },
  {
    slug: 'converters',
    title: 'Converters',
    description: 'Convert data representation between Base64, Hex, URL encoding, or different measurement units.',
    icon: 'RefreshCw'
  },
  {
    slug: 'text',
    title: 'Text Tools',
    description: 'Manipulate casing, check diffs, count lines, or filter text data.',
    icon: 'Info'
  }
];

// Get category details by its slug
export function getCategoryDetail(slug: ToolCategory): CategoryDetail | undefined {
  return categories.find(cat => cat.slug === slug);
}
