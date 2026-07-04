export interface UnstringifyResult {
  result: string;
  format: 'json' | 'text';
}

/**
 * Helper to unescape JSON/string escape characters.
 */
function unescapeString(str: string): string {
  return str
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, '\\')
    .replace(/\\n/g, '\n')
    .replace(/\\t/g, '\t')
    .replace(/\\r/g, '\r')
    .replace(/\\b/g, '\b')
    .replace(/\\f/g, '\f');
}

/**
 * Recursively parses and unescapes a stringified JSON value back into formatted JSON or text.
 */
export function unstringifyText(text: string): UnstringifyResult {
  let current = text.trim();
  if (!current) return { result: '', format: 'text' };

  let prev = '';
  let changed = false;

  while (current !== prev) {
    prev = current;

    // First, check if stripping outer quotes directly results in a valid JSON object
    if (
      (current.startsWith('"') && current.endsWith('"')) ||
      (current.startsWith("'") && current.endsWith("'"))
    ) {
      const stripped = current.slice(1, -1);
      try {
        const parsed = JSON.parse(stripped);
        if (typeof parsed === 'object' && parsed !== null) {
          return {
            result: JSON.stringify(parsed, null, 2),
            format: 'json'
          };
        }
      } catch {
        // Continue to parse as string literal
      }
    }

    // 1. Try to JSON.parse if it is wrapped in quotes
    if (
      (current.startsWith('"') && current.endsWith('"')) ||
      (current.startsWith("'") && current.endsWith("'"))
    ) {
      try {
        let token = current;
        if (token.startsWith("'")) {
          token = '"' + token.slice(1, -1).replace(/"/g, '\\"').replace(/\\'/g, "'") + '"';
        }
        const parsed = JSON.parse(token);
        if (typeof parsed === 'string') {
          current = parsed;
          changed = true;
          continue;
        } else {
          return {
            result: JSON.stringify(parsed, null, 2),
            format: 'json'
          };
        }
      } catch {
        // Fail-through to unescapeString replacement
      }
    }

    // 2. Unescape escaped quotes and backslashes if not directly JSON-parseable
    if (current.includes('\\') || current.includes('"')) {
      const unescaped = unescapeString(current);
      if (unescaped !== current) {
        current = unescaped;
        changed = true;
        continue;
      }
    }
  }

  // Check if final unescaped result is a valid JSON object/array
  try {
    const finalParsed = JSON.parse(current);
    if (typeof finalParsed === 'object' && finalParsed !== null) {
      return {
        result: JSON.stringify(finalParsed, null, 2),
        format: 'json'
      };
    }
  } catch {
    // Not valid JSON, return as plain text
  }

  return {
    result: current,
    format: 'text'
  };
}
