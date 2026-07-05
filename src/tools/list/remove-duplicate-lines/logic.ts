export interface DedupeOptions {
  caseSensitive: boolean;
  behavior: 'keep-first' | 'keep-last' | 'remove-all';
  ignoreEmptyLines: boolean;
  sortOutput: boolean;
}

/**
 * Removes duplicate lines from a block of text based on the provided options.
 */
export function removeDuplicateLines(text: string, options: DedupeOptions): string {
  if (!text) return '';

  const lines = text.split(/\r?\n/);
  
  // 1. Compute frequencies for 'remove-all' behavior
  const frequencies = new Map<string, number>();
  if (options.behavior === 'remove-all') {
    lines.forEach(line => {
      const trimmed = line.trim();
      if (options.ignoreEmptyLines && trimmed === '') return;
      const key = options.caseSensitive ? line : line.toLowerCase();
      frequencies.set(key, (frequencies.get(key) || 0) + 1);
    });
  }

  // 2. Track last indices for 'keep-last' behavior
  const lastIndices = new Map<string, number>();
  if (options.behavior === 'keep-last') {
    lines.forEach((line, index) => {
      const trimmed = line.trim();
      if (options.ignoreEmptyLines && trimmed === '') return;
      const key = options.caseSensitive ? line : line.toLowerCase();
      lastIndices.set(key, index);
    });
  }

  // 3. Deduplicate
  const seen = new Set<string>();
  let resultLines = lines.filter((line, index) => {
    const trimmed = line.trim();
    if (options.ignoreEmptyLines && trimmed === '') {
      return true; // Always keep empty lines
    }

    const key = options.caseSensitive ? line : line.toLowerCase();

    if (options.behavior === 'remove-all') {
      // Keep only if it appeared exactly once
      return (frequencies.get(key) || 0) <= 1;
    }

    if (options.behavior === 'keep-last') {
      // Keep only if this is the last index it appeared
      return lastIndices.get(key) === index;
    }

    // Default: keep-first
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });

  // 4. Optional sorting of final lines
  if (options.sortOutput) {
    const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
    resultLines.sort((a, b) => {
      // Keep empty lines at the top/bottom or sort naturally
      if (a.trim() === '' && b.trim() !== '') return -1;
      if (a.trim() !== '' && b.trim() === '') return 1;
      return collator.compare(a, b);
    });
  }

  return resultLines.join('\n');
}
