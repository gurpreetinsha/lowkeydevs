export interface ReplaceOptions {
  find: string;
  replace: string;
  caseSensitive: boolean;
  wholeWord: boolean;
  regex: boolean;
}

export interface ReplaceResult {
  text: string;
  matchCount: number;
  error?: string;
}

/**
 * Searches and replaces text based on options.
 */
export function findAndReplace(text: string, options: ReplaceOptions): ReplaceResult {
  if (!text) {
    return { text: '', matchCount: 0 };
  }

  if (!options.find) {
    return { text, matchCount: 0 };
  }

  let regexPattern = '';
  let flags = 'g';
  if (!options.caseSensitive) {
    flags += 'i';
  }

  try {
    if (options.regex) {
      regexPattern = options.find;
    } else {
      // Escape special regex characters
      let escaped = options.find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      if (options.wholeWord) {
        // Use word boundary check
        escaped = `\\b${escaped}\\b`;
      }
      regexPattern = escaped;
    }

    const re = new RegExp(regexPattern, flags);
    
    // Calculate count of matches
    // Note: for global matching regex, match() will find all occurrences.
    // If the regex matches empty string (e.g. .*), prevent infinite loops by checking.
    const matches = text.match(re);
    let matchCount = 0;
    if (matches) {
      matchCount = matches.length;
    }

    const replacedText = text.replace(re, options.replace);

    return {
      text: replacedText,
      matchCount
    };
  } catch (err: any) {
    return {
      text,
      matchCount: 0,
      error: `Invalid Search Pattern: ${err.message}`
    };
  }
}
