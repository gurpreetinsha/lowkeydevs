/**
 * Formats a CSS stylesheet query string.
 */
export function formatCSS(css: string, spacing: number | string = 2): string {
  const trimmed = css.trim();
  if (!trimmed) return '';

  const indentStr = spacing === 'tab' ? '\t' : ' '.repeat(Number(spacing));
  let level = 0;
  let formatted = '';

  // Clean comments and normalize whitespaces
  let clean = trimmed
    .replace(/\/\*[\s\S]*?\*\//g, '') // remove comments for simple formatting
    .replace(/\s+/g, ' ')             // normalize spacing
    .trim();

  for (let i = 0; i < clean.length; i++) {
    const char = clean[i];

    if (char === '{') {
      formatted = formatted.trimEnd();
      formatted += ' {\n' + indentStr.repeat(++level);
    } else if (char === '}') {
      level = Math.max(0, level - 1);
      formatted = formatted.trimEnd();
      formatted += '\n' + indentStr.repeat(level) + '}\n\n' + indentStr.repeat(level);
    } else if (char === ';') {
      formatted += ';\n' + indentStr.repeat(level);
    } else if (char === ':') {
      formatted += ': ';
    } else if (char === ',') {
      formatted += ', ';
    } else {
      if (char === ' ' && formatted.endsWith(' ')) {
        continue;
      }
      formatted += char;
    }
  }

  // Cleanup newlines and trailing whitespace
  return formatted
    .split('\n')
    .map(line => line.trimEnd())
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/**
 * Minifies a CSS stylesheet.
 */
export function minifyCSS(css: string): string {
  const trimmed = css.trim();
  if (!trimmed) return '';

  return trimmed
    .replace(/\/\*[\s\S]*?\*\//g, '') // remove comments
    .replace(/\s+/g, ' ')             // normalize spaces
    .replace(/\s*([\{\};:,])\s*/g, '$1')
    .replace(/;}/g, '}')              // remove trailing semicolons
    .trim();
}
