import { MAPS, convertText, applyCombiningMark, UNDERLINE_MARKS } from '../../utils/unicode';

export interface StyledFont {
  name: string;
  text: string;
}

export function generateTwitterFonts(text: string): StyledFont[] {
  if (!text) return [];

  const base = [
    { name: 'Bold Serif', text: convertText(text, MAPS.boldSerif) },
    { name: 'Bold Sans', text: convertText(text, MAPS.boldSans) },
    { name: 'Italic Serif', text: convertText(text, MAPS.italicSerif) },
    { name: 'Italic Sans', text: convertText(text, MAPS.italicSans) },
    { name: 'Bold Italic Serif', text: convertText(text, MAPS.boldItalicSerif) },
    { name: 'Bold Italic Sans', text: convertText(text, MAPS.boldItalicSans) },
    { name: 'Script / Cursive', text: convertText(text, MAPS.scriptNormal) },
    { name: 'Script Bold', text: convertText(text, MAPS.scriptBold) },
    { name: 'Gothic Normal', text: convertText(text, MAPS.gothicNormal) },
    { name: 'Gothic Bold', text: convertText(text, MAPS.gothicBold) },
    { name: 'Double-Struck', text: convertText(text, MAPS.doubleStruck) },
    { name: 'Bubble White', text: convertText(text, MAPS.circledWhite) },
    { name: 'Bubble Black', text: convertText(text, MAPS.circledBlack) },
    { name: 'Square White', text: convertText(text, MAPS.squaredWhite) },
    { name: 'Square Black', text: convertText(text, MAPS.squaredBlack) },
    { name: 'Small Caps', text: convertText(text.toLowerCase(), MAPS.smallCaps) },
    { name: 'Superscript', text: convertText(text, MAPS.superscript) },
    { name: 'Underline Single', text: applyCombiningMark(text, UNDERLINE_MARKS.single) },
    { name: 'Strikethrough', text: applyCombiningMark(text, UNDERLINE_MARKS.strike) }
  ];

  const boldClean = convertText(text, MAPS.boldSans);

  const twitterDecors = [
    { name: 'Twitter Thread Style', text: `🧵 ${text}` },
    { name: 'Twitter Flash News', text: `⚡ ${boldClean} ⚡` },
    { name: 'Breaking News Info', text: `🚨 ${boldClean} 🚨` },
    { name: 'Attention Down Arrow', text: `👇 ${text} 👇` }
  ];

  return [...base, ...twitterDecors];
}
