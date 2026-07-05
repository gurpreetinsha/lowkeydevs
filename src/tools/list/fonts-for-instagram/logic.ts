import { MAPS, convertText, applyCombiningMark, UNDERLINE_MARKS, reverseTextChars } from '../../utils/unicode';

export interface StyledFont {
  name: string;
  text: string;
}

export function generateInstagramFonts(text: string): StyledFont[] {
  if (!text) return [];

  const baseFonts = [
    { name: 'Bold Serif', text: convertText(text, MAPS.boldSerif) },
    { name: 'Bold Sans', text: convertText(text, MAPS.boldSans) },
    { name: 'Italic Serif', text: convertText(text, MAPS.italicSerif) },
    { name: 'Italic Sans', text: convertText(text, MAPS.italicSans) },
    { name: 'Bold Italic Serif', text: convertText(text, MAPS.boldItalicSerif) },
    { name: 'Bold Italic Sans', text: convertText(text, MAPS.boldItalicSans) },
    { name: 'Script / Cursive', text: convertText(text, MAPS.scriptNormal) },
    { name: 'Script Bold', text: convertText(text, MAPS.scriptBold) },
    { name: 'Gothic / Fraktur', text: convertText(text, MAPS.gothicNormal) },
    { name: 'Gothic Bold', text: convertText(text, MAPS.gothicBold) },
    { name: 'Double-Struck (Blackboard)', text: convertText(text, MAPS.doubleStruck) },
    { name: 'Monospace', text: convertText(text, MAPS.monospace) },
    { name: 'Bubble White', text: convertText(text, MAPS.circledWhite) },
    { name: 'Bubble Black', text: convertText(text, MAPS.circledBlack) },
    { name: 'Square White', text: convertText(text, MAPS.squaredWhite) },
    { name: 'Square Black', text: convertText(text, MAPS.squaredBlack) },
    { name: 'Small Caps', text: convertText(text.toLowerCase(), MAPS.smallCaps) },
    { name: 'Superscript', text: convertText(text, MAPS.superscript) },
    { name: 'Subscript', text: convertText(text.toLowerCase(), MAPS.subscript) },
    { name: 'Underline Single', text: applyCombiningMark(text, UNDERLINE_MARKS.single) },
    { name: 'Underline Double', text: applyCombiningMark(text, UNDERLINE_MARKS.double) },
    { name: 'Strikethrough', text: applyCombiningMark(text, UNDERLINE_MARKS.strike) }
  ];

  // Instagram Aesthetic Decorated Fonts
  const cleanBold = convertText(text, MAPS.boldSans);
  const cleanScript = convertText(text, MAPS.scriptNormal);
  const cleanSmallCaps = convertText(text.toLowerCase(), MAPS.smallCaps);

  const decors = [
    { name: 'Aesthetic Hearts', text: `♡｡.｡:*♡ ${text} ♡*:｡.｡♡` },
    { name: 'Cute Sparkles', text: `✧･ﾟ:* ${text} *:･ﾟ✧` },
    { name: 'Bio Divider', text: `★·.·´¯\`·.·★ ${text} ★·.·´¯\`·.·★` },
    { name: 'Sweet Flower', text: `✿ ${text} ✿` },
    { name: 'Princess Stars', text: `☆•*¨*•.¸¸☆ ${text} ☆¸¸.•*¨*•☆` },
    { name: 'Aesthetic Wings', text: `꧁༺ ${text} ༻꧂` },
    { name: 'Cute Kaomoji Hug', text: `(っ◔◡◔)っ ♥ ${text} ♥` },
    { name: 'Love Border', text: `*•.¸♡ ${cleanSmallCaps} ♡¸.•*` },
    { name: 'Gothic Crosses', text: `† ${convertText(text, MAPS.gothicNormal)} †` },
    { name: 'Vaporwave Wide', text: text.split('').join(' ') },
    { name: 'Coquette Bows', text: `🎀 ${text} 🎀` },
    { name: 'Retro Blocks', text: `░▒▓█ ${cleanBold} █▓▒░` },
    { name: 'Cursive Swirls', text: `❁ ${cleanScript} ❁` }
  ];

  return [...baseFonts, ...decors];
}
