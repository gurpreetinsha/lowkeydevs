import type { ToolCategory } from './definitions';

export interface ToolRegistryEntry {
  slug: string;
  category: ToolCategory;
  icon: string;
}

export const registry: ToolRegistryEntry[] = [
  {
    "slug": "json-formatter",
    "category": "json-yaml",
    "icon": "Braces"
  },
  {
    "slug": "password-generator",
    "category": "generators",
    "icon": "Key"
  },
  {
    "slug": "base64-converter",
    "category": "converters",
    "icon": "RefreshCw"
  },
  {
    "slug": "character-remover",
    "category": "text",
    "icon": "Eraser"
  },
  {
    "slug": "duplicate-word-finder",
    "category": "text",
    "icon": "ListFilter"
  },
  {
    "slug": "binary-code-translator",
    "category": "converters",
    "icon": "Binary"
  },
  {
    "slug": "hex-to-text-converter",
    "category": "converters",
    "icon": "Hash"
  },
  {
    "slug": "html-to-markdown-converter",
    "category": "text",
    "icon": "Markdown"
  },
  {
    "slug": "graphql-formatter",
    "category": "json-yaml",
    "icon": "Database"
  },
  {
    "slug": "css-formatter",
    "category": "text",
    "icon": "Brush"
  },
  {
    "slug": "json-stringify-text",
    "category": "json-yaml",
    "icon": "Quote"
  },
  {
    "slug": "json-unstringifier",
    "category": "json-yaml",
    "icon": "Braces"
  },
  {
    "slug": "unicode-to-text-converter",
    "category": "converters",
    "icon": "Languages"
  },
  {
    "slug": "plain-text-converter",
    "category": "text",
    "icon": "FileText"
  },
  {
    "slug": "online-notepad",
    "category": "text",
    "icon": "Notebook"
  },
  {
    "slug": "uuid-generator",
    "category": "generators",
    "icon": "Fingerprint"
  },
  {
    "slug": "case-converter",
    "category": "text",
    "icon": "Type"
  },
  {
    "slug": "url-encoder-decoder",
    "category": "converters",
    "icon": "Link"
  },
  {
    "slug": "epoch-converter",
    "category": "dev-utils",
    "icon": "Clock"
  },
  {
    "slug": "hash-generator",
    "category": "security",
    "icon": "Shield"
  },
  {
    "slug": "sentence-counter",
    "category": "text",
    "icon": "Type"
  },
  {
    "slug": "sort-words-alphabetically",
    "category": "text",
    "icon": "SortAsc"
  },
  {
    "slug": "find-and-replace-text",
    "category": "text",
    "icon": "Replace"
  },
  {
    "slug": "remove-duplicate-lines",
    "category": "text",
    "icon": "ListFilter"
  },
  {
    "slug": "remove-text-formatting",
    "category": "text",
    "icon": "Brush"
  },
  {
    "slug": "repeat-text-generator",
    "category": "generators",
    "icon": "Repeat"
  },
  {
    "slug": "reverse-text-generator",
    "category": "generators",
    "icon": "Reverse"
  },
  {
    "slug": "invisible-text-generator",
    "category": "generators",
    "icon": "EyeOff"
  },
  {
    "slug": "fancy-text-generator",
    "category": "text",
    "icon": "Brush"
  },
  {
    "slug": "bold-text-generator",
    "category": "text",
    "icon": "Type"
  },
  {
    "slug": "italic-text-generator",
    "category": "text",
    "icon": "Type"
  },
  {
    "slug": "underline-text-generator",
    "category": "text",
    "icon": "Type"
  },
  {
    "slug": "strikethrough-text-generator",
    "category": "text",
    "icon": "Type"
  },
  {
    "slug": "bubble-text-generator",
    "category": "text",
    "icon": "Type"
  },
  {
    "slug": "small-text-generator",
    "category": "text",
    "icon": "Type"
  },
  {
    "slug": "big-text-generator",
    "category": "text",
    "icon": "Terminal"
  },
  {
    "slug": "gothic-text-generator",
    "category": "text",
    "icon": "Type"
  },
  {
    "slug": "mirror-text-generator",
    "category": "text",
    "icon": "Reverse"
  },
  {
    "slug": "fonts-for-instagram",
    "category": "text",
    "icon": "instagram"
  },
  {
    "slug": "whatsapp-font-generator",
    "category": "text",
    "icon": "messagesquare"
  },
  {
    "slug": "tiktok-font-generator",
    "category": "text",
    "icon": "brush"
  },
  {
    "slug": "discord-font-generator",
    "category": "text",
    "icon": "messagesquare"
  },
  {
    "slug": "facebook-font-generator",
    "category": "text",
    "icon": "facebook"
  },
  {
    "slug": "twitter-font-generator",
    "category": "text",
    "icon": "twitter"
  },
  {
    "slug": "cute-font-generator",
    "category": "text",
    "icon": "sparkles"
  },
  {
    "slug": "unicode-text-converter",
    "category": "text",
    "icon": "sparkles"
  },
  {
    "slug": "double-struck-text",
    "category": "text",
    "icon": "sparkles"
  },
  {
    "slug": "wide-text-generator",
    "category": "text",
    "icon": "sparkles"
  },
  {
    "slug": "image-to-text-ocr",
    "category": "image",
    "icon": "image"
  },
  {
    "slug": "jpg-to-png",
    "category": "image",
    "icon": "image"
  },
  {
    "slug": "png-to-jpg",
    "category": "image",
    "icon": "image"
  },
  {
    "slug": "jpg-to-webp",
    "category": "image",
    "icon": "image"
  },
  {
    "slug": "webp-to-jpg",
    "category": "image",
    "icon": "image"
  },
  {
    "slug": "png-to-webp",
    "category": "image",
    "icon": "image"
  },
  {
    "slug": "webp-to-png",
    "category": "image",
    "icon": "image"
  },
  {
    "slug": "svg-to-png",
    "category": "image",
    "icon": "image"
  },
  {
    "slug": "image-to-ascii",
    "category": "image",
    "icon": "image"
  },
  {
    "slug": "online-video-converter",
    "category": "video",
    "icon": "video"
  },
  {
    "slug": "camelcase-converter",
    "category": "text",
    "icon": "Type"
  },
  {
    "slug": "kebab-case-converter",
    "category": "text",
    "icon": "Type"
  },
  {
    "slug": "dot-case-converter",
    "category": "text",
    "icon": "Type"
  },
  {
    "slug": "caesar-cipher-tool",
    "category": "security",
    "icon": "Shield"
  },
  {
    "slug": "nato-phonetic-alphabet-translator",
    "category": "text",
    "icon": "Languages"
  },
  {
    "slug": "pig-latin-translator",
    "category": "text",
    "icon": "Languages"
  },
  {
    "slug": "roman-numeral-dates",
    "category": "converters",
    "icon": "Clock"
  },
  {
    "slug": "unicode-converter",
    "category": "converters",
    "icon": "Binary"
  },
  {
    "slug": "remove-underscores",
    "category": "text",
    "icon": "Eraser"
  },
  {
    "slug": "remove-em-dash",
    "category": "text",
    "icon": "Eraser"
  },
  {
    "slug": "random-number-generator",
    "category": "generators",
    "icon": "Hash"
  },
  {
    "slug": "random-password-generator",
    "category": "generators",
    "icon": "Key"
  },
  {
    "slug": "random-choice-generator",
    "category": "generators",
    "icon": "Shuffle"
  },
  {
    "slug": "random-date-generator",
    "category": "generators",
    "icon": "Clock"
  },
  {
    "slug": "random-letter-generator",
    "category": "generators",
    "icon": "Type"
  },
  {
    "slug": "random-month-generator",
    "category": "generators",
    "icon": "Clock"
  },
  {
    "slug": "random-ip-address-generator",
    "category": "generators",
    "icon": "Sliders"
  },
  {
    "slug": "nanoid-generator",
    "category": "generators",
    "icon": "Fingerprint"
  },
  {
    "slug": "strong-password-generator",
    "category": "generators",
    "icon": "Lock"
  },
  {
    "slug": "apa-citation-generator",
    "category": "dev-utils",
    "icon": "FileText"
  },
  {
    "slug": "merge-pdf",
    "category": "pdf",
    "icon": "FileText"
  },
  {
    "slug": "split-pdf",
    "category": "pdf",
    "icon": "FileText"
  },
  {
    "slug": "compress-pdf",
    "category": "pdf",
    "icon": "FileText"
  },
  {
    "slug": "word-to-pdf",
    "category": "pdf",
    "icon": "FileText"
  },
  {
    "slug": "jpg-to-pdf",
    "category": "pdf",
    "icon": "FileText"
  },
  {
    "slug": "pdf-to-jpg",
    "category": "pdf",
    "icon": "FileText"
  },
  {
    "slug": "edit-pdf",
    "category": "pdf",
    "icon": "FileText"
  },
  {
    "slug": "sign-pdf",
    "category": "pdf",
    "icon": "FileText"
  },
  {
    "slug": "unlock-pdf",
    "category": "pdf",
    "icon": "FileText"
  },
  {
    "slug": "protect-pdf",
    "category": "pdf",
    "icon": "FileText"
  },
  {
    "slug": "pdf-to-excel",
    "category": "pdf",
    "icon": "FileText"
  },
  {
    "slug": "excel-to-pdf",
    "category": "pdf",
    "icon": "FileText"
  },
  {
    "slug": "pdf-to-powerpoint",
    "category": "pdf",
    "icon": "FileText"
  },
  {
    "slug": "powerpoint-to-pdf",
    "category": "pdf",
    "icon": "FileText"
  },
  {
    "slug": "organize-pdf",
    "category": "pdf",
    "icon": "FileText"
  },
  {
    "slug": "add-page-numbers",
    "category": "pdf",
    "icon": "FileText"
  },
  {
    "slug": "add-watermark",
    "category": "pdf",
    "icon": "FileText"
  },
  {
    "slug": "rotate-pdf",
    "category": "pdf",
    "icon": "FileText"
  },
  {
    "slug": "scan-to-pdf",
    "category": "pdf",
    "icon": "FileText"
  }
];

export function getToolBySlug(slug: string): ToolRegistryEntry | undefined {
  return registry.find(tool => tool.slug === slug);
}

export function getToolsByCategory(category: ToolCategory): ToolRegistryEntry[] {
  return registry.filter(tool => tool.category === category);
}

export interface CategoryDetail {
  slug: ToolCategory;
  titleKey: string;
  descriptionKey: string;
  icon: string;
}

export const categories: CategoryDetail[] = [
  {
    slug: 'json-yaml',
    titleKey: 'categories.json-yaml',
    descriptionKey: 'categories.json-yaml.desc',
    icon: 'Braces'
  },
  {
    slug: 'generators',
    titleKey: 'categories.generators',
    descriptionKey: 'categories.generators.desc',
    icon: 'Key'
  },
  {
    slug: 'converters',
    titleKey: 'categories.converters',
    descriptionKey: 'categories.converters.desc',
    icon: 'RefreshCw'
  },
  {
    slug: 'text',
    titleKey: 'categories.text',
    descriptionKey: 'categories.text.desc',
    icon: 'Info'
  },
  {
    slug: 'image',
    titleKey: 'categories.image',
    descriptionKey: 'categories.image.desc',
    icon: 'Image'
  },
  {
    slug: 'video',
    titleKey: 'categories.video',
    descriptionKey: 'categories.video.desc',
    icon: 'Video'
  },
  {
    slug: 'dev-utils',
    titleKey: 'categories.dev-utils',
    descriptionKey: 'categories.dev-utils.desc',
    icon: 'Terminal'
  },
  {
    slug: 'security',
    titleKey: 'categories.security',
    descriptionKey: 'categories.security.desc',
    icon: 'Shield'
  },
  {
    slug: 'pdf',
    titleKey: 'categories.pdf',
    descriptionKey: 'categories.pdf.desc',
    icon: 'FileText'
  }
];

export function getCategoryDetail(slug: ToolCategory): CategoryDetail | undefined {
  return categories.find(cat => cat.slug === slug);
}
