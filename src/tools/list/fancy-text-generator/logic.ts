import { MAPS, convertText, applyCombiningMark, UNDERLINE_MARKS, reverseTextChars } from '../../utils/unicode';

export interface StyledTextResult {
  name: string;
  text: string;
}

export function generateFancyText(text: string): StyledTextResult[] {
  if (!text) return [];

  return [
    { name: 'Bold Serif', text: convertText(text, MAPS.boldSerif) },
    { name: 'Bold Sans-Serif', text: convertText(text, MAPS.boldSans) },
    { name: 'Italic Serif', text: convertText(text, MAPS.italicSerif) },
    { name: 'Italic Sans-Serif', text: convertText(text, MAPS.italicSans) },
    { name: 'Bold Italic Serif', text: convertText(text, MAPS.boldItalicSerif) },
    { name: 'Bold Italic Sans-Serif', text: convertText(text, MAPS.boldItalicSans) },
    { name: 'Script (Cursive) Normal', text: convertText(text, MAPS.scriptNormal) },
    { name: 'Script (Cursive) Bold', text: convertText(text, MAPS.scriptBold) },
    { name: 'Gothic / Fraktur Normal', text: convertText(text, MAPS.gothicNormal) },
    { name: 'Gothic / Fraktur Bold', text: convertText(text, MAPS.gothicBold) },
    { name: 'Double-Struck (Blackboard)', text: convertText(text, MAPS.doubleStruck) },
    { name: 'Monospace', text: convertText(text, MAPS.monospace) },
    { name: 'Circled White (Bubble)', text: convertText(text, MAPS.circledWhite) },
    { name: 'Circled Black (Solid)', text: convertText(text, MAPS.circledBlack) },
    { name: 'Squared White', text: convertText(text, MAPS.squaredWhite) },
    { name: 'Squared Black (Solid)', text: convertText(text, MAPS.squaredBlack) },
    { name: 'Small Caps', text: convertText(text.toLowerCase(), MAPS.smallCaps) },
    { name: 'Superscript', text: convertText(text, MAPS.superscript) },
    { name: 'Subscript', text: convertText(text.toLowerCase(), MAPS.subscript) },
    { name: 'Upside Down', text: reverseTextChars(convertText(text, MAPS.upsideDown)) },
    { name: 'Mirror (Horizontally Flipped)', text: reverseTextChars(convertText(text, MAPS.mirror)) },
    { name: 'Underlined Single', text: applyCombiningMark(text, UNDERLINE_MARKS.single) },
    { name: 'Underlined Double', text: applyCombiningMark(text, UNDERLINE_MARKS.double) },
    { name: 'Underlined Wave', text: applyCombiningMark(text, UNDERLINE_MARKS.wave) },
    { name: 'Strikethrough', text: applyCombiningMark(text, UNDERLINE_MARKS.strike) }
  ];
}
