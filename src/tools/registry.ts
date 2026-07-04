import type { ToolMeta, ToolCategory } from './definitions';
import { meta as jsonFormatterMeta } from './list/json-formatter/meta';
import { meta as passwordGeneratorMeta } from './list/password-generator/meta';
import { meta as base64ConverterMeta } from './list/base64-converter/meta';
import { meta as characterRemoverMeta } from './list/character-remover/meta';
import { meta as duplicateWordFinderMeta } from './list/duplicate-word-finder/meta';
import { meta as binaryCodeTranslatorMeta } from './list/binary-code-translator/meta';
import { meta as hexToTextConverterMeta } from './list/hex-to-text-converter/meta';
import { meta as htmlToMarkdownConverterMeta } from './list/html-to-markdown-converter/meta';
import { meta as graphqlFormatterMeta } from './list/graphql-formatter/meta';
import { meta as cssFormatterMeta } from './list/css-formatter/meta';
import { meta as jsonStringifyTextMeta } from './list/json-stringify-text/meta';
import { meta as jsonUnstringifierMeta } from './list/json-unstringifier/meta';
import { meta as unicodeToTextConverterMeta } from './list/unicode-to-text-converter/meta';
import { meta as plainTextConverterMeta } from './list/plain-text-converter/meta';
import { meta as onlineNotepadMeta } from './list/online-notepad/meta';
import { meta as uuidGeneratorMeta } from './list/uuid-generator/meta';
import { meta as caseConverterMeta } from './list/case-converter/meta';
import { meta as urlEncoderDecoderMeta } from './list/url-encoder-decoder/meta';
import { meta as epochConverterMeta } from './list/epoch-converter/meta';
import { meta as hashGeneratorMeta } from './list/hash-generator/meta';
import { meta as sentenceCounterMeta } from './list/sentence-counter/meta';
import { meta as sortWordsMeta } from './list/sort-words-alphabetically/meta';
import { meta as findAndReplaceMeta } from './list/find-and-replace-text/meta';
import { meta as removeDuplicateLinesMeta } from './list/remove-duplicate-lines/meta';
import { meta as removeTextFormattingMeta } from './list/remove-text-formatting/meta';
import { meta as repeatTextGeneratorMeta } from './list/repeat-text-generator/meta';
import { meta as reverseTextGeneratorMeta } from './list/reverse-text-generator/meta';
import { meta as invisibleTextGeneratorMeta } from './list/invisible-text-generator/meta';
import { meta as fancyTextGeneratorMeta } from './list/fancy-text-generator/meta';
import { meta as boldTextGeneratorMeta } from './list/bold-text-generator/meta';
import { meta as italicTextGeneratorMeta } from './list/italic-text-generator/meta';
import { meta as underlineTextGeneratorMeta } from './list/underline-text-generator/meta';
import { meta as strikethroughTextGeneratorMeta } from './list/strikethrough-text-generator/meta';
import { meta as bubbleTextGeneratorMeta } from './list/bubble-text-generator/meta';
import { meta as smallTextGeneratorMeta } from './list/small-text-generator/meta';
import { meta as bigTextGeneratorMeta } from './list/big-text-generator/meta';
import { meta as gothicTextGeneratorMeta } from './list/gothic-text-generator/meta';
import { meta as mirrorTextGeneratorMeta } from './list/mirror-text-generator/meta';

// Central Registry of all tools
export const registry: ToolMeta[] = [
  jsonFormatterMeta,
  passwordGeneratorMeta,
  base64ConverterMeta,
  characterRemoverMeta,
  duplicateWordFinderMeta,
  binaryCodeTranslatorMeta,
  hexToTextConverterMeta,
  htmlToMarkdownConverterMeta,
  graphqlFormatterMeta,
  cssFormatterMeta,
  jsonStringifyTextMeta,
  jsonUnstringifierMeta,
  unicodeToTextConverterMeta,
  plainTextConverterMeta,
  onlineNotepadMeta,
  uuidGeneratorMeta,
  caseConverterMeta,
  urlEncoderDecoderMeta,
  epochConverterMeta,
  hashGeneratorMeta,
  sentenceCounterMeta,
  sortWordsMeta,
  findAndReplaceMeta,
  removeDuplicateLinesMeta,
  removeTextFormattingMeta,
  repeatTextGeneratorMeta,
  reverseTextGeneratorMeta,
  invisibleTextGeneratorMeta,
  fancyTextGeneratorMeta,
  boldTextGeneratorMeta,
  italicTextGeneratorMeta,
  underlineTextGeneratorMeta,
  strikethroughTextGeneratorMeta,
  bubbleTextGeneratorMeta,
  smallTextGeneratorMeta,
  bigTextGeneratorMeta,
  gothicTextGeneratorMeta,
  mirrorTextGeneratorMeta
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
  },
  {
    slug: 'dev-utils',
    title: 'Developer Utilities',
    description: 'Useful utilities like Epoch converters, crontab editors, and regex checkers.',
    icon: 'Terminal'
  },
  {
    slug: 'security',
    title: 'Security & Cryptography',
    description: 'Generate secure hashes, inspect JWTs, encrypt/decrypt text, and verify signatures.',
    icon: 'Shield'
  }
];

// Get category details by its slug
export function getCategoryDetail(slug: ToolCategory): CategoryDetail | undefined {
  return categories.find(cat => cat.slug === slug);
}
