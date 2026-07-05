import { MAPS, convertText } from '../../utils/unicode';

export type BubbleStyle = 'circled-white' | 'circled-black' | 'squared-white' | 'squared-black';

export function bubbleText(text: string, style: BubbleStyle): string {
  if (!text) return '';

  switch (style) {
    case 'circled-white':
      return convertText(text, MAPS.circledWhite);
    case 'circled-black':
      return convertText(text, MAPS.circledBlack);
    case 'squared-white':
      return convertText(text, MAPS.squaredWhite);
    case 'squared-black':
      return convertText(text, MAPS.squaredBlack);
    default:
      return convertText(text, MAPS.circledWhite);
  }
}
