export interface FormatOptions {
  stripHtml: boolean;
  stripMarkdown: boolean;
  stripBbcode: boolean;
  normalizeUnicode: boolean;
  collapseWhitespace: boolean;
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
    .replace(/&nbsp;/g, ' ');
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
 * Strips BBCode tags.
 */
export function stripBbcodeTags(text: string): string {
  // Replace [tag=option]content[/tag] with content
  let clean = text.replace(/\[[a-zA-Z\*]+(?:=[^\]]+)?\]([\s\S]*?)\[\/[a-zA-Z\*]+\]/gi, '$1');
  // Replace any remaining standalone tags
  clean = clean.replace(/\[\/??[a-zA-Z\*]+(?:=[^\]]+)?\]/gi, '');
  return clean;
}

/**
 * Cleans and collapses excess whitespace, blank lines, and double spaces.
 */
export function collapseWhitespace(text: string): string {
  // Collapse double spaces and tabs
  let clean = text.replace(/[ \t]+/g, ' ');
  // Trim individual lines
  let lines = clean.split(/\r?\n/).map(line => line.trim());
  // Join back and collapse multiple consecutive newlines (3 or more) to 2 (double newline)
  clean = lines.join('\n');
  clean = clean.replace(/\n{3,}/g, '\n\n');
  return clean.trim();
}

/**
 * Clean text formatting main entry function.
 */
export function clearFormatting(text: string, options: FormatOptions): string {
  if (!text) return '';

  let result = text;

  // 1. Normalize Unicode symbols
  if (options.normalizeUnicode) {
    result = normalizeUnicodeStyledText(result);
  }

  // 2. Strip BBCode tags
  if (options.stripBbcode) {
    result = stripBbcodeTags(result);
  }

  // 3. Strip HTML
  if (options.stripHtml) {
    result = stripHtmlTags(result);
  }

  // 4. Strip Markdown
  if (options.stripMarkdown) {
    result = stripMarkdown(result);
  }

  // 5. Collapse Whitespace
  if (options.collapseWhitespace) {
    result = collapseWhitespace(result);
  }

  return result;
}
