export interface SortOptions {
  order: 'asc' | 'desc';
  separator: 'space' | 'comma' | 'newline' | 'tab' | 'custom';
  customSeparator: string;
  caseSensitive: boolean;
  removeDuplicates: boolean;
  ignorePunctuation: boolean;
}

/**
 * Clean a string from punctuation for comparison if needed
 */
function cleanPunctuation(str: string): string {
  // Removes leading and trailing punctuation characters
  return str.replace(/^[^a-zA-Z0-9\s]+|[^a-zA-Z0-9\s]+$/g, '');
}

/**
 * Sorts words or lines alphabetically based on SortOptions.
 */
export function sortWords(text: string, options: SortOptions): string {
  if (!text) return '';

  // 1. Determine separator regex or string
  let delimiter: string | RegExp = ' ';
  let joiner = ' ';

  switch (options.separator) {
    case 'comma':
      delimiter = /,/;
      joiner = ', ';
      break;
    case 'newline':
      delimiter = /\r?\n/;
      joiner = '\n';
      break;
    case 'tab':
      delimiter = /\t/;
      joiner = '\t';
      break;
    case 'custom':
      delimiter = options.customSeparator || ' ';
      joiner = options.customSeparator || ' ';
      break;
    case 'space':
    default:
      delimiter = /\s+/;
      joiner = ' ';
      break;
  }

  // 2. Split input text
  let items = text.split(delimiter).map(item => item.trim()).filter(item => item.length > 0);

  // 3. Remove duplicates if requested
  if (options.removeDuplicates) {
    const seen = new Set<string>();
    items = items.filter(item => {
      const compareKey = options.caseSensitive ? item : item.toLowerCase();
      if (seen.has(compareKey)) return false;
      seen.add(compareKey);
      return true;
    });
  }

  // 4. Sort items
  const collator = new Intl.Collator(undefined, {
    numeric: true,
    sensitivity: options.caseSensitive ? 'variant' : 'base',
    caseFirst: options.caseSensitive ? 'upper' : 'false'
  });

  items.sort((a, b) => {
    let keyA = a;
    let keyB = b;

    if (options.ignorePunctuation) {
      keyA = cleanPunctuation(a);
      keyB = cleanPunctuation(b);
    }

    // Handle empty keys if punctuation stripping left nothing
    if (!keyA && keyB) return -1;
    if (keyA && !keyB) return 1;
    if (!keyA && !keyB) return 0;

    let comparison = collator.compare(keyA, keyB);
    
    // Fallback for case-sensitive if collator base sensitivity is equal
    if (comparison === 0 && options.caseSensitive) {
      comparison = a < b ? -1 : a > b ? 1 : 0;
    }

    return options.order === 'asc' ? comparison : -comparison;
  });

  return items.join(joiner);
}
