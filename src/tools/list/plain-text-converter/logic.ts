export interface PlainTextOptions {
  stripHtml: boolean;
  stripMarkdown: boolean;
  normalizeUnicode: boolean;
  trimLines: boolean;
  removeDuplicateLines: boolean;
}

/**
 * Normalizes mathematical/styled alphanumeric Unicode characters (fraktur, bold, script, etc.)
 * back to standard base ASCII characters.
 */
export function normalizeUnicodeStyledText(text: string): string {
  // NFKD normalization separates character base letters from compatibility stylings
  return text.normalize('NFKD').replace(/[\u0300-\u036f]/g, '');
}

/**
 * Strips HTML tags from text.
 */
export function stripHtmlTags(html: string): string {
  return html
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Strips Markdown formatting.
 */
export function stripMarkdown(md: string): string {
  return md
    // Headers
    .replace(/^#{1,6}\s+/gm, '')
    // Bold/Italic
    .replace(/[\*_]{1,3}(.*?)[\*_]{1,3}/g, '$1')
    // Links
    .replace(/\[(.*?)\]\((.*?)\)/g, '$1')
    // Images
    .replace(/!\[(.*?)\]\((.*?)\)/g, '$1')
    // Inline code
    .replace(/`(.*?)`/g, '$1')
    // Code blocks
    .replace(/```[\s\S]*?```/g, '')
    // Blockquotes
    .replace(/^\s*>\s+/gm, '')
    // Lists
    .replace(/^\s*[\-\*\+]\s+/gm, '')
    // Numbered lists
    .replace(/^\s*\d+\.\s+/gm, '')
    // Horizontal rules
    .replace(/^\s*[\-\*_]{3,}\s*$/gm, '');
}

/**
 * Converts rich or formatted text to clean, plain text.
 */
export function convertToPlainText(text: string, options: PlainTextOptions): string {
  let result = text;

  // 1. Normalize Unicode first to avoid conflicts
  if (options.normalizeUnicode) {
    result = normalizeUnicodeStyledText(result);
  }

  // 2. Strip HTML
  if (options.stripHtml) {
    result = stripHtmlTags(result);
  }

  // 3. Strip Markdown
  if (options.stripMarkdown) {
    result = stripMarkdown(result);
  }

  // 4. Line processing (trim, remove duplicates)
  let lines = result.split(/\r?\n/);

  if (options.trimLines) {
    lines = lines.map(line => line.trim());
  }

  if (options.removeDuplicateLines) {
    const seen = new Set<string>();
    lines = lines.filter(line => {
      const trimmed = line.trim();
      if (!trimmed) return true; // keep blank lines
      if (seen.has(trimmed)) {
        return false;
      }
      seen.add(trimmed);
      return true;
    });
  }

  return lines.join('\n').trim();
}
