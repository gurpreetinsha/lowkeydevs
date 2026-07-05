export interface RemoveEmDashOptions {
  replacement: 'hyphen' | 'doubleHyphen' | 'space' | 'empty' | 'custom';
  customValue: string;
}

/**
 * Replaces em dashes (—) and en dashes (–) in a text.
 */
export function removeEmDash(text: string, options: RemoveEmDashOptions = { replacement: 'hyphen', customValue: '' }): string {
  if (!text) return '';

  let replacer = '-';
  if (options.replacement === 'doubleHyphen') replacer = '--';
  else if (options.replacement === 'space') replacer = ' ';
  else if (options.replacement === 'empty') replacer = '';
  else if (options.replacement === 'custom') replacer = options.customValue;

  // Replace em dash (\u2014) and en dash (\u2013)
  return text.replace(/[\u2014\u2013]/g, replacer);
}
