import { MAPS, convertText } from '../../utils/unicode';

export interface ItalicResult {
  name: string;
  text: string;
}

export function generateItalicText(text: string): ItalicResult[] {
  if (!text) return [];

  return [
    { name: 'Serif Italic', text: convertText(text, MAPS.italicSerif) },
    { name: 'Sans-Serif Italic', text: convertText(text, MAPS.italicSans) },
    { name: 'Serif Bold Italic', text: convertText(text, MAPS.boldItalicSerif) },
    { name: 'Sans-Serif Bold Italic', text: convertText(text, MAPS.boldItalicSans) }
  ];
}
