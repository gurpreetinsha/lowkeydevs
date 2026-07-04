/**
 * Stringifies and escapes text into a JSON string literal.
 */
export function stringifyText(text: string, mode: 'raw' | 'json' = 'raw'): string {
  if (!text) return '';

  if (mode === 'json') {
    try {
      const parsed = JSON.parse(text);
      const minified = JSON.stringify(parsed);
      return JSON.stringify(minified);
    } catch (err: any) {
      throw new Error(`Invalid JSON input: ${err.message}`);
    }
  } else {
    return JSON.stringify(text);
  }
}
