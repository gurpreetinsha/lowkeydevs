import { applyCombiningMark } from '../../utils/unicode';

export type StrikethroughStyle = 'long' | 'short' | 'slash' | 'tilde';

export const STRIKE_MARKS = {
  long: '\u0336',    // Combining long stroke overlay (standard strikethrough)
  short: '\u0335',   // Combining short stroke overlay
  slash: '\u0337',   // Combining short solidus overlay (slash-through)
  tilde: '\u0334'    // Combining tilde overlay
};

export function strikethroughText(text: string, style: StrikethroughStyle): string {
  if (!text) return '';
  const mark = STRIKE_MARKS[style] || STRIKE_MARKS.long;
  return applyCombiningMark(text, mark);
}
