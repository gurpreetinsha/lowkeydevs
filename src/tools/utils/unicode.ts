// Helper to build a mapping from start characters to Unicode offsets
function buildMapFromOffset(startChar: string, startCodePoint: number): Record<string, string> {
  const map: Record<string, string> = {};
  const base = startChar.charCodeAt(0);
  for (let i = 0; i < 26; i++) {
    map[String.fromCharCode(base + i)] = String.fromCodePoint(startCodePoint + i);
  }
  return map;
}

function buildNumberMap(startCodePoint: number): Record<string, string> {
  const map: Record<string, string> = {};
  for (let i = 0; i < 10; i++) {
    map[String(i)] = String.fromCodePoint(startCodePoint + i);
  }
  return map;
}

// --------------------------------------------------
// Font Dictionaries
// --------------------------------------------------

// 1. Bold Serif
const BOLD_SERIF_UPPER = buildMapFromOffset('A', 0x1D400); // 𝐀
const BOLD_SERIF_LOWER = buildMapFromOffset('a', 0x1D41A); // 𝐚
const BOLD_SERIF_NUMS = buildNumberMap(0x1D7CE); // 𝟎
const BOLD_SERIF = { ...BOLD_SERIF_UPPER, ...BOLD_SERIF_LOWER, ...BOLD_SERIF_NUMS };

// 2. Bold Sans-Serif
const BOLD_SANS_UPPER = buildMapFromOffset('A', 0x1D5E2); // 𝗔
const BOLD_SANS_LOWER = buildMapFromOffset('a', 0x1D5FC); // 𝗮
const BOLD_SANS_NUMS = buildNumberMap(0x1D7EC); // 𝟬
const BOLD_SANS = { ...BOLD_SANS_UPPER, ...BOLD_SANS_LOWER, ...BOLD_SANS_NUMS };

// 3. Italic Serif (with 'h' exception)
const ITALIC_SERIF_UPPER = buildMapFromOffset('A', 0x1D434); // 𝐴
const ITALIC_SERIF_LOWER = {
  ...buildMapFromOffset('a', 0x1D44E), // 𝑎
  'h': 'ℎ' // U+210E
};
const ITALIC_SERIF = { ...ITALIC_SERIF_UPPER, ...ITALIC_SERIF_LOWER };

// 4. Bold Italic Serif
const BOLD_ITALIC_SERIF_UPPER = buildMapFromOffset('A', 0x1D468); // 𝑨
const BOLD_ITALIC_SERIF_LOWER = buildMapFromOffset('a', 0x1D482); // 𝒂
const BOLD_ITALIC_SERIF = { ...BOLD_ITALIC_SERIF_UPPER, ...BOLD_ITALIC_SERIF_LOWER };

// 5. Italic Sans-Serif
const ITALIC_SANS_UPPER = buildMapFromOffset('A', 0x1D616); // 𝘈
const ITALIC_SANS_LOWER = buildMapFromOffset('a', 0x1D630); // 𝘢
const ITALIC_SANS = { ...ITALIC_SANS_UPPER, ...ITALIC_SANS_LOWER };

// 6. Bold Italic Sans-Serif
const BOLD_ITALIC_SANS_UPPER = buildMapFromOffset('A', 0x1D64A); // 𝘼
const BOLD_ITALIC_SANS_LOWER = buildMapFromOffset('a', 0x1D664); // 𝙖
const BOLD_ITALIC_SANS = { ...BOLD_ITALIC_SANS_UPPER, ...BOLD_ITALIC_SANS_LOWER };

// 7. Script / Cursive Normal
const SCRIPT_NORMAL_UPPER = {
  ...buildMapFromOffset('A', 0x1D49C), // 𝒜
  'B': 'ℬ', 'E': 'ℰ', 'F': 'ℱ', 'H': 'ℋ', 'I': 'ℐ', 'L': 'ℒ', 'M': 'ℳ', 'R': 'ℛ'
};
const SCRIPT_NORMAL_LOWER = {
  ...buildMapFromOffset('a', 0x1D4B6), // 𝒶
  'e': 'ℯ', 'g': 'ℊ', 'o': 'ℴ'
};
const SCRIPT_NORMAL = { ...SCRIPT_NORMAL_UPPER, ...SCRIPT_NORMAL_LOWER };

// 8. Script / Cursive Bold
const SCRIPT_BOLD_UPPER = buildMapFromOffset('A', 0x1D4D0); // 𝓐
const SCRIPT_BOLD_LOWER = buildMapFromOffset('a', 0x1D4EA); // 𝓪
const SCRIPT_BOLD = { ...SCRIPT_BOLD_UPPER, ...SCRIPT_BOLD_LOWER };

// 9. Gothic / Fraktur Normal
const GOTHIC_NORMAL_UPPER = {
  ...buildMapFromOffset('A', 0x1D504), // 𝔄
  'C': 'ℭ', 'H': 'ℌ', 'I': 'ℑ', 'R': 'ℜ', 'Z': 'ℨ'
};
const GOTHIC_NORMAL_LOWER = buildMapFromOffset('a', 0x1D51E); // 𝔞
const GOTHIC_NORMAL = { ...GOTHIC_NORMAL_UPPER, ...GOTHIC_NORMAL_LOWER };

// 10. Gothic / Fraktur Bold
const GOTHIC_BOLD_UPPER = buildMapFromOffset('A', 0x1D538); // 𝕬
const GOTHIC_BOLD_LOWER = buildMapFromOffset('a', 0x1D552); // 𝖆
const GOTHIC_BOLD = { ...GOTHIC_BOLD_UPPER, ...GOTHIC_BOLD_LOWER };

// 11. Double-Struck / Blackboard Bold
const DOUBLE_STRUCK_UPPER = {
  ...buildMapFromOffset('A', 0x1D538), // 𝔸
  'C': 'ℂ', 'H': 'ℍ', 'N': 'ℕ', 'P': 'ℙ', 'Q': 'ℚ', 'R': 'ℝ', 'Z': 'ℤ'
};
const DOUBLE_STRUCK_LOWER = buildMapFromOffset('a', 0x1D552); // 𝕒
const DOUBLE_STRUCK_NUMS = buildNumberMap(0x1D7D8); // 𝟘
const DOUBLE_STRUCK = { ...DOUBLE_STRUCK_UPPER, ...DOUBLE_STRUCK_LOWER, ...DOUBLE_STRUCK_NUMS };

// 12. Monospace
const MONOSPACE_UPPER = buildMapFromOffset('A', 0x1D670); // 𝙰
const MONOSPACE_LOWER = buildMapFromOffset('a', 0x1D68A); // 𝚊
const MONOSPACE_NUMS = buildNumberMap(0x1D7F6); // 𝟶
const MONOSPACE = { ...MONOSPACE_UPPER, ...MONOSPACE_LOWER, ...MONOSPACE_NUMS };

// 13. Bubble / Circled White
const CIRCLED_WHITE_UPPER = buildMapFromOffset('A', 0x24B6); // Ⓐ
const CIRCLED_WHITE_LOWER = buildMapFromOffset('a', 0x24D0); // ⓐ
const CIRCLED_WHITE_NUMS: Record<string, string> = {
  '0': '⓪',
  '1': '①', '2': '②', '3': '③', '4': '④', '5': '⑤', '6': '⑥', '7': '⑦', '8': '⑧', '9': '⑨'
};
const CIRCLED_WHITE = { ...CIRCLED_WHITE_UPPER, ...CIRCLED_WHITE_LOWER, ...CIRCLED_WHITE_NUMS };

// 14. Bubble / Circled Black (Solid)
const CIRCLED_BLACK_UPPER = buildMapFromOffset('A', 0x1F150); // 🅐
const CIRCLED_BLACK_LOWER = buildMapFromOffset('a', 0x1F150); // Maps lower to upper solid
const CIRCLED_BLACK_NUMS: Record<string, string> = {
  '0': '⓿',
  '1': '❶', '2': '❷', '3': '❸', '4': '❹', '5': '❺', '6': '❻', '7': '❼', '8': '❽', '9': '❾'
};
const CIRCLED_BLACK = { ...CIRCLED_BLACK_UPPER, ...CIRCLED_BLACK_LOWER, ...CIRCLED_BLACK_NUMS };

// 15. Squared White
const SQUARED_WHITE_UPPER = buildMapFromOffset('A', 0x1F170); // 🄰
const SQUARED_WHITE_LOWER = buildMapFromOffset('a', 0x1F170);
const SQUARED_WHITE = { ...SQUARED_WHITE_UPPER, ...SQUARED_WHITE_LOWER };

// 16. Squared Black
const SQUARED_BLACK_UPPER = buildMapFromOffset('A', 0x1F170); // 🅰
const SQUARED_BLACK_LOWER = buildMapFromOffset('a', 0x1F170);
const SQUARED_BLACK = { ...SQUARED_BLACK_UPPER, ...SQUARED_BLACK_LOWER };

// 17. Small Caps (only a-z maps to small-cap characters)
const SMALL_CAPS_MAP: Record<string, string> = {
  'a': 'ᴀ', 'b': 'ʙ', 'c': 'ᴄ', 'd': 'ᴅ', 'e': 'ᴇ', 'f': 'ꜰ', 'g': 'ɢ', 'h': 'ʜ', 'i': 'ɪ',
  'j': 'ᴊ', 'k': 'ᴋ', 'l': 'ʟ', 'm': 'ᴍ', 'n': 'ɴ', 'o': 'ᴏ', 'p': 'ᴘ', 'q': 'ǫ', 'r': 'ʀ',
  's': 's', 't': 'ᴛ', 'u': 'ᴜ', 'v': 'ᴠ', 'w': 'ᴡ', 'x': 'x', 'y': 'ʏ', 'z': 'ᴢ'
};

// 18. Superscript
const SUPERSCRIPT_MAP: Record<string, string> = {
  '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
  '+': '⁺', '-': '⁻', '=': '⁼', '(': '⁽', ')': '⁾',
  'a': 'ᵃ', 'b': 'ᵇ', 'c': 'ᶜ', 'd': 'ᵈ', 'e': 'ᵉ', 'f': 'ᶠ', 'g': 'ᵍ', 'h': 'ʰ', 'i': 'ⁱ', 'j': 'ʲ',
  'k': 'ᵏ', 'l': 'ˡ', 'm': 'ᵐ', 'n': 'ⁿ', 'o': 'ᵒ', 'p': 'ᵖ', 'r': 'ʳ', 's': 'ˢ', 't': 'ᵗ', 'u': 'ᵘ',
  'v': 'ᵛ', 'w': 'ʷ', 'x': 'ˣ', 'y': 'ʸ', 'z': 'ᶻ',
  'A': 'ᴬ', 'B': 'ᴮ', 'D': 'ᴰ', 'E': 'ᴱ', 'G': 'ᴳ', 'H': 'ᴴ', 'I': 'ᴵ', 'J': 'ᴶ', 'K': 'ᴷ', 'L': 'ᴸ',
  'M': 'ᴹ', 'N': 'ᴺ', 'O': 'ᴼ', 'P': 'ᴾ', 'R': 'ᴿ', 'T': 'ᵀ', 'U': 'ᵁ', 'W': 'ᵂ'
};

// 19. Subscript
const SUBSCRIPT_MAP: Record<string, string> = {
  '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉',
  '+': '₊', '-': '₋', '=': '₌', '(': '₍', ')': '₎',
  'a': 'ₐ', 'e': 'ₑ', 'h': 'ₕ', 'i': 'ᵢ', 'j': 'ⱼ', 'k': 'ₖ', 'l': 'ₗ', 'm': 'ₘ', 'n': 'ₙ', 'o': 'ₒ',
  'p': 'ₚ', 'r': 'ᵣ', 's': 'ₛ', 't': 'ₜ', 'u': 'ᵤ', 'v': 'ᵥ', 'x': 'ₓ'
};

// 20. Upside Down Text Map
const UPSIDE_DOWN_MAP: Record<string, string> = {
  'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ', 'i': 'ᴉ', 'j': 'ɾ',
  'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd', 'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ',
  'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x', 'y': 'ʎ', 'z': 'z',
  'A': '∀', 'B': 'ᗺ', 'C': 'Ɔ', 'D': 'ᗡ', 'E': 'Ǝ', 'F': 'Ⅎ', 'G': '⅁', 'H': 'H', 'I': 'I', 'J': 'ᒋ',
  'K': 'ʞ', 'L': '˥', 'M': 'W', 'N': 'N', 'O': 'O', 'P': 'Ԁ', 'Q': 'Ò', 'R': 'ᴚ', 'S': 'S', 'T': '⊥',
  'U': '∩', 'V': 'Ʌ', 'W': 'M', 'X': 'X', 'Y': '⅄', 'Z': 'Z',
  '0': '0', '1': 'Ɩ', '2': 'ᄅ', '3': 'Ɛ', '4': 'ㄣ', '5': 'ϛ', '6': '9', '7': 'ㄥ', '8': '8', '9': '6',
  '.': '˙', ',': "'", "'": ',', '"': '„', '?': '¿', '!': '¡', ';': '؛', '(': ')', ')': '(',
  '[': ']', ']': '[', '{': '}', '}': '{', '<': '>', '>': '<', '_': '‾', '&': '⅋'
};

// 21. Mirror Text Map (Horizontal Flip)
const MIRROR_MAP: Record<string, string> = {
  'a': 'ɒ', 'b': 'd', 'c': 'ɔ', 'd': 'b', 'e': 'ɘ', 'f': 'ʇ', 'g': 'ϱ', 'h': 'ʜ', 'i': 'i', 'j': 'Ⴑ',
  'k': 'ʞ', 'l': 'l', 'm': 'm', 'n': 'n', 'o': 'o', 'p': 'q', 'q': 'p', 'r': 'ɿ', 's': 'ꙅ', 't': 'ʇ',
  'u': 'u', 'v': 'v', 'w': 'w', 'x': 'x', 'y': 'ʏ', 'z': 'ƹ',
  'A': 'ᗅ', 'B': 'ᙏ', 'C': 'Ɔ', 'D': 'ᗡ', 'E': 'Ǝ', 'F': 'ᆁ', 'G': 'ᘐ', 'H': 'H', 'I': 'I', 'J': 'L',
  'K': '⋊', 'L': 'ᒧ', 'M': 'M', 'N': 'ᴎ', 'O': 'O', 'P': 'Ԁ', 'Q': 'Ọ', 'R': 'Я', 'S': 'Ƨ', 'T': 'T',
  'U': 'U', 'V': 'V', 'W': 'W', 'X': 'X', 'Y': 'ʏ', 'Z': 'S',
  '1': '1', '2': 'S', '3': 'Ɛ', '4': '߀', '5': 'c', '6': 'a', '7': 'ᆁ', '8': '8', '9': 'e', '0': '0',
  '&': '⅋', '?': '⸮', '.': '.', ',': ',', '(': ')', ')': '(', '[': ']', ']': '[', '{': '}', '}': '{'
};

// --------------------------------------------------
// Export Maps
// --------------------------------------------------
export const MAPS = {
  boldSerif: BOLD_SERIF,
  boldSans: BOLD_SANS,
  italicSerif: ITALIC_SERIF,
  boldItalicSerif: BOLD_ITALIC_SERIF,
  italicSans: ITALIC_SANS,
  boldItalicSans: BOLD_ITALIC_SANS,
  scriptNormal: SCRIPT_NORMAL,
  scriptBold: SCRIPT_BOLD,
  gothicNormal: GOTHIC_NORMAL,
  gothicBold: GOTHIC_BOLD,
  doubleStruck: DOUBLE_STRUCK,
  monospace: MONOSPACE,
  circledWhite: CIRCLED_WHITE,
  circledBlack: CIRCLED_BLACK,
  squaredWhite: SQUARED_WHITE,
  squaredBlack: SQUARED_BLACK,
  smallCaps: SMALL_CAPS_MAP,
  superscript: SUPERSCRIPT_MAP,
  subscript: SUBSCRIPT_MAP,
  upsideDown: UPSIDE_DOWN_MAP,
  mirror: MIRROR_MAP
};

// Helper function to map text
export function convertText(text: string, map: Record<string, string>): string {
  return text.split('').map(char => map[char] || char).join('');
}

// Special case for Reverse Characters
export function reverseTextChars(text: string): string {
  return text.split('').reverse().join('');
}

// Underline styles
export const UNDERLINE_MARKS = {
  single: '\u0332',      // Combining low line
  double: '\u0333',      // Combining double low line
  wave: '\u0330',        // Combining tilde below (wavy)
  dotted: '\u0323',      // Combining dot below
  slash: '\u0331',       // Combining macron below
  strike: '\u0336'       // Combining long stroke overlay
};

// Apply combining diacritic to each non-whitespace character in the string
export function applyCombiningMark(text: string, mark: string): string {
  return text.split('').map(char => {
    // If it's a newline or whitespace, do not apply diacritic
    if (/\s/.test(char)) return char;
    return char + mark;
  }).join('');
}
