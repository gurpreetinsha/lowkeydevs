import { UNDERLINE_MARKS, applyCombiningMark } from '../../utils/unicode';

export type UnderlineStyle = 'single' | 'double' | 'wave' | 'dotted' | 'slash';

export function underlineText(text: string, style: UnderlineStyle): string {
  if (!text) return '';
  const mark = UNDERLINE_MARKS[style] || UNDERLINE_MARKS.single;
  return applyCombiningMark(text, mark);
}
