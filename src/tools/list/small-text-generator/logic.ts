import { MAPS, convertText } from '../../utils/unicode';

export type SmallTextStyle = 'small-caps' | 'superscript' | 'subscript';

export function makeSmallText(text: string, style: SmallTextStyle): string {
  if (!text) return '';

  switch (style) {
    case 'small-caps':
      return convertText(text.toLowerCase(), MAPS.smallCaps);
    case 'superscript':
      return convertText(text, MAPS.superscript);
    case 'subscript':
      return convertText(text.toLowerCase(), MAPS.subscript);
    default:
      return convertText(text.toLowerCase(), MAPS.smallCaps);
  }
}
