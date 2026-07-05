import { MAPS, convertText, applyCombiningMark, UNDERLINE_MARKS } from '../../utils/unicode';

export interface StyledFont {
  name: string;
  text: string;
}

export function generateTikTokFonts(text: string): StyledFont[] {
  if (!text) return [];

  const base = [
    { name: 'Cursive / Script', text: convertText(text, MAPS.scriptNormal) },
    { name: 'Cursive Bold', text: convertText(text, MAPS.scriptBold) },
    { name: 'Bubble White', text: convertText(text, MAPS.circledWhite) },
    { name: 'Bubble Black', text: convertText(text, MAPS.circledBlack) },
    { name: 'Square White', text: convertText(text, MAPS.squaredWhite) },
    { name: 'Square Black', text: convertText(text, MAPS.squaredBlack) },
    { name: 'Gothic Normal', text: convertText(text, MAPS.gothicNormal) },
    { name: 'Gothic Bold', text: convertText(text, MAPS.gothicBold) },
    { name: 'Bold Serif', text: convertText(text, MAPS.boldSerif) },
    { name: 'Bold Sans', text: convertText(text, MAPS.boldSans) },
    { name: 'Italic Serif', text: convertText(text, MAPS.italicSerif) },
    { name: 'Bold Italic Sans', text: convertText(text, MAPS.boldItalicSans) },
    { name: 'Small Caps', text: convertText(text.toLowerCase(), MAPS.smallCaps) },
    { name: 'Wide Vaporwave', text: text.split('').join(' ') },
    { name: 'Monospace', text: convertText(text, MAPS.monospace) },
    { name: 'Double-Struck', text: convertText(text, MAPS.doubleStruck) }
  ];

  // TikTok Aesthetic Decorations
  const cleanSmallCaps = convertText(text.toLowerCase(), MAPS.smallCaps);
  const boldClean = convertText(text, MAPS.boldSans);

  const decors = [
    { name: 'Trendy Sparkles', text: `✨ ${text} ✨` },
    { name: 'Cute Hearts', text: `˚ʚ♡ɞ˚ ${text} ˚ʚ♡ɞ˚` },
    { name: 'Vibe Checker', text: `⚡︎ ${boldClean} ⚡︎` },
    { name: 'Aesthetic Bows', text: `୨🎀୧ ${cleanSmallCaps} ୨🎀୧` },
    { name: 'Stardust Frame', text: `✦•┈๑ ${text} ๑┈•✦` },
    { name: 'Cherry Blossom', text: `🌸 ${text} 🌸` },
    { name: 'Kaomoji Wink', text: `(๑>ᴗ<๑) ${cleanSmallCaps}` },
    { name: 'Glitch Border', text: `▓▒░ ${boldClean} ░▒▓` }
  ];

  return [...base, ...decors];
}
