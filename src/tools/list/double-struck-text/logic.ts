import { MAPS, convertText } from '../../utils/unicode';

export interface DoubleStruckFont {
  name: string;
  text: string;
}

export function generateDoubleStruck(text: string): DoubleStruckFont[] {
  if (!text) return [];

  const mainStruck = convertText(text, MAPS.doubleStruck);

  return [
    { name: 'Standard Blackboard Bold', text: mainStruck },
    { name: 'Hollow Parentheses', text: `⟦ ${mainStruck} ⟧` },
    { name: 'Slashed Blackboard Bold', text: `𝕕𝕠𝕦𝕓𝕝𝕖 // ${mainStruck}` },
    { name: 'Starred Blackboard Bold', text: `★ ${mainStruck} ★` },
    { name: 'Uppercase Blackboard Bold', text: convertText(text.toUpperCase(), MAPS.doubleStruck) },
    { name: 'Lowercase Blackboard Bold', text: convertText(text.toLowerCase(), MAPS.doubleStruck) }
  ];
}
