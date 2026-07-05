export type ToolCategory =
  | 'text'          // Casing, diffs, formatting
  | 'json-yaml'     // Formatters, validators, converters (JSON, XML, YAML, CSV)
  | 'generators'    // Password, UUID, QR code, Lorem Ipsum
  | 'converters'    // Base64, Hex, Unit converters, URL encoding
  | 'dev-utils'     // Crontab generator, RegEx tester, epoch time
  | 'design'        // Color pickers, contrast checkers, image resizing
  | 'image'         // OCR, format converters, art generators
  | 'video'         // Format conversion, audio extraction
  | 'security';     // Hashing (MD5, SHA), cryptography, password checkers

export interface ToolFAQ {
  question: string;
  answer: string;
}

export interface ToolMeta {
  slug: string;                  // URL-friendly slug (e.g. 'json-formatter')
  title: string;                 // Human-readable title
  description: string;           // Search meta description (120-155 characters)
  category: ToolCategory;        // Tool category grouping
  keywords: string[];            // Keywords used for SEO and internal search
  icon: string;                  // Lucide icon name (e.g. 'Braces', 'Key')
  faqs: ToolFAQ[];               // FAQs rendered in structured accordion
  educationalContent: {          // Educational guide detailing usage
    whatIsIt: string;            // Explanation of the tool
    howToUse: string;            // Simple step-by-step instructions
    proTips?: string[];          // Advanced usage hints
  };
}
