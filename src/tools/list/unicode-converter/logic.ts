export interface UnicodeCharInfo {
  char: string;
  codePoint: string;   // U+XXXX
  decimal: number;
  hex: string;
  htmlDec: string;     // &#65;
  htmlHex: string;     // &#x41;
  binary: string;
}

/**
 * Analyzes string and returns array of information for each character/code point.
 */
export function analyzeUnicode(text: string): UnicodeCharInfo[] {
  if (!text) return [];
  
  // Use Array.from to correctly split by Unicode code points (handles emojis/surrogates)
  const chars = Array.from(text);
  
  return chars.map(char => {
    const codePointNum = char.codePointAt(0) || 0;
    
    // Hex code point string padding
    let hexStr = codePointNum.toString(16).toUpperCase();
    if (hexStr.length < 4) {
      hexStr = hexStr.padStart(4, '0');
    }
    
    // Binary padding to multiple of 8 bits
    let binStr = codePointNum.toString(2);
    const byteLength = Math.ceil(binStr.length / 8) * 8;
    binStr = binStr.padStart(byteLength || 8, '0');
    
    return {
      char,
      codePoint: `U+${hexStr}`,
      decimal: codePointNum,
      hex: hexStr,
      htmlDec: `&#${codePointNum};`,
      htmlHex: `&#x${hexStr.toLowerCase()};`,
      binary: binStr
    };
  });
}

/**
 * Converts string into space-separated string representation.
 */
export function convertTextToFormat(text: string, format: 'codePoint' | 'decimal' | 'hex' | 'htmlDec' | 'htmlHex' | 'binary'): string {
  const infoList = analyzeUnicode(text);
  if (infoList.length === 0) return '';
  
  if (format === 'htmlDec') {
    return infoList.map(info => info.htmlDec).join('');
  }
  if (format === 'htmlHex') {
    return infoList.map(info => info.htmlHex).join('');
  }
  
  return infoList.map(info => info[format]).join(' ');
}
