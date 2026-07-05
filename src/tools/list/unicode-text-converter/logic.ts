import { MAPS, convertText, applyCombiningMark, UNDERLINE_MARKS } from '../../utils/unicode';

export interface UnicodeStyle {
  name: string;
  text: string;
}

export function generateUnicodeStyles(text: string): UnicodeStyle[] {
  if (!text) return [];

  return [
    { name: 'Mathematical Bold Serif', text: convertText(text, MAPS.boldSerif) },
    { name: 'Mathematical Bold Sans', text: convertText(text, MAPS.boldSans) },
    { name: 'Mathematical Italic Serif', text: convertText(text, MAPS.italicSerif) },
    { name: 'Mathematical Italic Sans', text: convertText(text, MAPS.italicSans) },
    { name: 'Mathematical Bold Italic Serif', text: convertText(text, MAPS.boldItalicSerif) },
    { name: 'Mathematical Bold Italic Sans', text: convertText(text, MAPS.boldItalicSans) },
    { name: 'Cursive / Script Normal', text: convertText(text, MAPS.scriptNormal) },
    { name: 'Cursive / Script Bold', text: convertText(text, MAPS.scriptBold) },
    { name: 'Gothic / Blackletter Normal', text: convertText(text, MAPS.gothicNormal) },
    { name: 'Gothic / Blackletter Bold', text: convertText(text, MAPS.gothicBold) },
    { name: 'Double-Struck (Blackboard)', text: convertText(text, MAPS.doubleStruck) },
    { name: 'Circled White (Bubble)', text: convertText(text, MAPS.circledWhite) },
    { name: 'Circled Black', text: convertText(text, MAPS.circledBlack) },
    { name: 'Squared White', text: convertText(text, MAPS.squaredWhite) },
    { name: 'Squared Black', text: convertText(text, MAPS.squaredBlack) },
    { name: 'Small Caps', text: convertText(text.toLowerCase(), MAPS.smallCaps) },
    { name: 'Superscript', text: convertText(text, MAPS.superscript) },
    { name: 'Subscript', text: convertText(text, MAPS.subscript) },
    { name: 'Underline Single', text: applyCombiningMark(text, UNDERLINE_MARKS.single) },
    { name: 'Underline Double', text: applyCombiningMark(text, UNDERLINE_MARKS.double) },
    { name: 'Strikethrough', text: applyCombiningMark(text, UNDERLINE_MARKS.strike) },
    { name: 'Slash Overlay', text: applyCombiningMark(text, '\u0337') }
  ];
}
