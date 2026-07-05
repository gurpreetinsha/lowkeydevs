import { MAPS, convertText } from '../../utils/unicode';

export interface GothicResult {
  name: string;
  text: string;
}

export function generateGothicText(text: string): GothicResult[] {
  if (!text) return [];

  return [
    { name: 'Normal Gothic / Fraktur', text: convertText(text, MAPS.gothicNormal) },
    { name: 'Bold Gothic / Fraktur', text: convertText(text, MAPS.gothicBold) }
  ];
}
