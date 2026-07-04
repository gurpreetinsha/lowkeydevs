export interface DuplicateOptions {
  ignoreCase: boolean;
  ignorePunctuation: boolean;
  removeMode: 'keep-first' | 'remove-all';
}

export interface WordFrequency {
  word: string;
  count: number;
}

/**
 * Normalizes a word based on options (case and punctuation).
 */
function normalizeWord(word: string, ignoreCase: boolean, ignorePunctuation: boolean): string {
  let w = word;
  if (ignoreCase) {
    w = w.toLowerCase();
  }
  if (ignorePunctuation) {
    w = w.replace(/[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/g, '');
  }
  return w;
}

/**
 * Finds all duplicate words in a text and returns them with their counts.
 */
export function findDuplicateWords(text: string, options: { ignoreCase: boolean; ignorePunctuation: boolean }): WordFrequency[] {
  if (!text.trim()) return [];

  // Split by whitespace to get words
  const words = text.split(/\s+/).filter(Boolean);
  const freqMap = new Map<string, { original: string; count: number }>();

  for (const word of words) {
    const norm = normalizeWord(word, options.ignoreCase, options.ignorePunctuation);
    if (!norm) continue; // Skip if word becomes empty after removing punctuation

    const val = freqMap.get(norm);
    if (val) {
      val.count++;
    } else {
      freqMap.set(norm, { original: word, count: 1 });
    }
  }

  // Filter out non-duplicates and map to WordFrequency[]
  const duplicates: WordFrequency[] = [];
  for (const [norm, val] of freqMap.entries()) {
    if (val.count > 1) {
      duplicates.push({
        word: norm,
        count: val.count
      });
    }
  }

  // Sort by count descending, then alphabetically
  return duplicates.sort((a, b) => b.count - a.count || a.word.localeCompare(b.word));
}

/**
 * Removes duplicate words from the text.
 */
export function removeDuplicateWords(text: string, options: DuplicateOptions): string {
  if (!text.trim()) return '';

  const words = text.split(/(\s+)/); // preserve spaces so we can reconstruct layout
  const seen = new Set<string>();
  const duplicates = new Set<string>();

  // First pass: identify duplicates if we are in "remove-all" mode
  if (options.removeMode === 'remove-all') {
    const dupList = findDuplicateWords(text, options);
    for (const d of dupList) {
      duplicates.add(d.word);
    }
  }

  const result: string[] = [];

  for (const token of words) {
    // If token is whitespace, just preserve it
    if (/^\s+$/.test(token)) {
      result.push(token);
      continue;
    }

    const norm = normalizeWord(token, options.ignoreCase, options.ignorePunctuation);

    if (!norm) {
      result.push(token);
      continue;
    }

    if (options.removeMode === 'remove-all') {
      if (duplicates.has(norm)) {
        // completely remove this token
        continue;
      }
      result.push(token);
    } else {
      // keep-first mode
      if (seen.has(norm)) {
        // duplicate, skip
        continue;
      }
      seen.add(norm);
      result.push(token);
    }
  }

  // Post-process to remove extra spaces left by removed words
  return result.join('').replace(/[ \t]{2,}/g, ' ').replace(/\n{3,}/g, '\n\n').trim();
}
