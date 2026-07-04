/**
 * Formats a GraphQL query string.
 */
export function formatGraphQL(query: string, spacing: number | string = 2): string {
  const trimmed = query.trim();
  if (!trimmed) return '';

  const indentStr = spacing === 'tab' ? '\t' : ' '.repeat(Number(spacing));
  let level = 0;
  let formatted = '';

  const lines = trimmed.split('\n');
  const tokens: string[] = [];

  for (let line of lines) {
    line = line.trim();
    if (!line) continue;

    if (line.startsWith('#')) {
      tokens.push(line);
      continue;
    }

    // Split by punctuation: {, }, (, ), :, @, ,, but preserve quotes
    const regex = /({|}|\(|\)|:|@|,|"(?:\\"|[^"])*"|[^\{\}\(\):@,\s]+)/g;
    let match;
    while ((match = regex.exec(line)) !== null) {
      tokens.push(match[0]);
    }
  }

  let inParens = 0;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    const prev = tokens[i - 1];
    const next = tokens[i + 1];

    if (token.startsWith('#')) {
      formatted += '\n' + indentStr.repeat(level) + token + '\n' + indentStr.repeat(level);
      continue;
    }

    if (token === '{') {
      formatted = formatted.trimEnd();
      formatted += ' {\n';
      level++;
      formatted += indentStr.repeat(level);
    } else if (token === '}') {
      level = Math.max(0, level - 1);
      formatted = formatted.trimEnd();
      formatted += '\n' + indentStr.repeat(level) + '}\n' + indentStr.repeat(level);
    } else if (token === '(') {
      inParens++;
      formatted += '(';
    } else if (token === ')') {
      inParens--;
      formatted += ')';
    } else if (token === ':') {
      formatted += ': ';
    } else if (token === ',') {
      formatted += ', ';
    } else {
      // If we are inside braces and NOT inside parentheses
      if (level > 0 && inParens === 0) {
        // If the previous token was a word/identifier or a closing brace/paren, start a new line
        if (prev && prev !== '{' && prev !== '(' && prev !== ':' && prev !== ',' && prev !== '@') {
          formatted = formatted.trimEnd();
          formatted += '\n' + indentStr.repeat(level);
        }
      }

      formatted += token;

      if (next && next !== '}' && next !== '{' && next !== ')' && next !== ':' && next !== ',' && next !== '(') {
        formatted += ' ';
      }
    }
  }

  // Cleanup duplicate newlines and leading/trailing whitespace
  return formatted
    .split('\n')
    .map(line => line.trimEnd())
    .filter((line, idx, arr) => line !== '' || (arr[idx - 1] !== '' && idx > 0))
    .join('\n')
    .trim();
}

/**
 * Minifies a GraphQL query string.
 */
export function minifyGraphQL(query: string): string {
  const trimmed = query.trim();
  if (!trimmed) return '';

  return trimmed
    .split('\n')
    .map(line => line.trim())
    .filter(line => line && !line.startsWith('#'))
    .join(' ')
    .replace(/\s+/g, ' ')
    .replace(/\s*([\{\}\(\):,])\s*/g, '$1')
    .trim();
}
