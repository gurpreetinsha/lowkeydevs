export interface RemoveUnderscoresOptions {
  replacement: 'space' | 'hyphen' | 'empty' | 'custom';
  customValue: string;
}

/**
 * Replaces underscores according to selected replacement option.
 */
export function removeUnderscores(text: string, options: RemoveUnderscoresOptions = { replacement: 'space', customValue: '' }): string {
  if (!text) return '';
  
  let replacer = ' ';
  if (options.replacement === 'hyphen') replacer = '-';
  else if (options.replacement === 'empty') replacer = '';
  else if (options.replacement === 'custom') replacer = options.customValue;

  return text.replace(/_/g, replacer);
}
