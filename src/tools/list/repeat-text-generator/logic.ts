export interface RepeatOptions {
  count: number;
  separator: 'none' | 'space' | 'comma' | 'newline' | 'tab' | 'custom';
  customSeparator: string;
  prependIndex: boolean;
}

/**
 * Generates repeated text based on provided options.
 */
export function repeatText(text: string, options: RepeatOptions): string {
  if (!text) return '';

  const count = Math.max(1, Math.min(10000, options.count));
  
  let sep = '';
  switch (options.separator) {
    case 'space':
      sep = ' ';
      break;
    case 'comma':
      sep = ', ';
      break;
    case 'newline':
      sep = '\n';
      break;
    case 'tab':
      sep = '\t';
      break;
    case 'custom':
      sep = options.customSeparator;
      break;
    case 'none':
    default:
      sep = '';
      break;
  }

  if (options.prependIndex) {
    const items: string[] = [];
    for (let i = 1; i <= count; i++) {
      items.push(`${i}. ${text}`);
    }
    return items.join(sep);
  }

  return Array(count).fill(text).join(sep);
}
