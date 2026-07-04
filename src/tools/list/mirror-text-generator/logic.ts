import { MAPS, convertText, reverseTextChars } from '../../utils/unicode';

export type MirrorMode = 'mirror' | 'upside-down' | 'reverse' | 'both';

export function mirrorText(text: string, mode: MirrorMode): string {
  if (!text) return '';

  switch (mode) {
    case 'mirror':
      return reverseTextChars(convertText(text, MAPS.mirror));
    case 'upside-down':
      return reverseTextChars(convertText(text, MAPS.upsideDown));
    case 'reverse':
      return reverseTextChars(text);
    case 'both':
      // Upside down + mirrored is equivalent to rotating it, which is standard upside down without reversing characters, or both
      return convertText(text, MAPS.upsideDown);
    default:
      return reverseTextChars(convertText(text, MAPS.mirror));
  }
}
