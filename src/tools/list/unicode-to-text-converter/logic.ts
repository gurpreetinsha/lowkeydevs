/**
 * Converts Unicode escape sequences (JavaScript \uXXXX, HTML entities, URL percent, CSS, U+) to readable text.
 */
export function unicodeToText(input: string): string {
  if (!input) return '';

  let text = input;

  // 1. JavaScript \u{XXXXX} (astral planes) and \uXXXX
  text = text.replace(/\\u\{([0-9a-fA-F]+)\}/g, (_, hex) => {
    return String.fromCodePoint(parseInt(hex, 16));
  });
  text = text.replace(/\\u([0-9a-fA-F]{4})/g, (_, hex) => {
    return String.fromCharCode(parseInt(hex, 16));
  });

  // 2. HTML Entities hex &#xXXXX; and decimal &#XXXX;
  text = text.replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => {
    return String.fromCodePoint(parseInt(hex, 16));
  });
  text = text.replace(/&#([0-9]+);/g, (_, dec) => {
    return String.fromCodePoint(parseInt(dec, 10));
  });

  // 3. URL-encoded percent sequences (e.g. %uXXXX)
  text = text.replace(/%u([0-9a-fA-F]{4})/g, (_, hex) => {
    return String.fromCharCode(parseInt(hex, 16));
  });
  // General URL decoding
  try {
    text = decodeURIComponent(text);
  } catch {
    // Ignore errors for partially-copied percent sequences
  }

  // 4. Unicode code points U+XXXX
  text = text.replace(/U\+([0-9a-fA-F]{4,6})/g, (_, hex) => {
    return String.fromCodePoint(parseInt(hex, 16));
  });

  // 5. CSS Unicode escapes \XXXX (usually followed by space or non-hex)
  text = text.replace(/\\([0-9a-fA-F]{1,6})\s?/g, (_, hex) => {
    return String.fromCodePoint(parseInt(hex, 16));
  });

  return text;
}

/**
 * Encodes plain text into selected Unicode escape sequence formats.
 */
export function textToUnicode(text: string, format: string = 'js'): string {
  if (!text) return '';

  return Array.from(text).map(char => {
    const code = char.codePointAt(0);
    if (code === undefined) return '';

    // Encode all characters, or skip ASCII?
    // Generally, developers want to convert everything to see raw escapes.
    switch (format) {
      case 'js':
        // JS \uXXXX only supports up to 0xFFFF, higher codes require braced format
        return code <= 0xffff
          ? '\\u' + code.toString(16).padStart(4, '0')
          : '\\u{' + code.toString(16) + '}';
      case 'js-brace':
        return '\\u{' + code.toString(16) + '}';
      case 'html-dec':
        return `&#${code};`;
      case 'html-hex':
        return `&#x${code.toString(16)};`;
      case 'css':
        return '\\' + code.toString(16).padStart(4, '0') + ' ';
      case 'u-plus':
        return 'U+' + code.toString(16).toUpperCase().padStart(4, '0');
      default:
        return char;
    }
  }).join('');
}
