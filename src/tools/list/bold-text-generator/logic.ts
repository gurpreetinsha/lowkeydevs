import { MAPS, convertText } from '../../utils/unicode';

export interface BoldResult {
  name: string;
  text: string;
}

export function generateBoldText(text: string): BoldResult[] {
  if (!text) return [];

  return [
    { name: 'Serif Bold', text: convertText(text, MAPS.boldSerif) },
    { name: 'Sans-Serif Bold', text: convertText(text, MAPS.boldSans) },
    { name: 'Serif Bold Italic', text: convertText(text, MAPS.boldItalicSerif) },
    { name: 'Sans-Serif Bold Italic', text: convertText(text, MAPS.boldItalicSans) },
    { name: 'Script/Cursive Bold', text: convertText(text, MAPS.scriptBold) },
    { name: 'Gothic Bold', text: convertText(text, MAPS.gothicBold) }
  ];
}
