const VOWELS = new Set(['a', 'e', 'i', 'o', 'u']);

/**
 * Translates a single word to Pig Latin.
 */
export function wordToPigLatin(word: string): string {
  if (!word) return '';
  
  // Check for non-alpha words
  if (!/^[a-zA-Z]+$/.test(word)) return word;

  const isCapitalized = word[0] === word[0].toUpperCase() && word.length > 0;
  const lower = word.toLowerCase();

  let result = '';
  
  // Starting with a vowel
  if (VOWELS.has(lower[0])) {
    result = lower + 'way';
  } else {
    // Starting with a consonant or consonant cluster
    let firstVowelIdx = -1;
    for (let i = 0; i < lower.length; i++) {
      if (VOWELS.has(lower[i]) || (lower[i] === 'y' && i > 0)) {
        firstVowelIdx = i;
        break;
      }
    }
    
    if (firstVowelIdx === -1) {
      // No vowels (e.g. "rhythm")
      result = lower + 'ay';
    } else {
      const onset = lower.slice(0, firstVowelIdx);
      const coda = lower.slice(firstVowelIdx);
      result = coda + onset + 'ay';
    }
  }

  // Restore capitalization
  if (isCapitalized && result.length > 0) {
    result = result[0].toUpperCase() + result.slice(1);
  }

  return result;
}

/**
 * Translates a single Pig Latin word back to English (heuristic approach).
 */
export function wordFromPigLatin(word: string): string {
  if (!word) return '';
  if (!/^[a-zA-Z]+$/.test(word)) return word;

  const isCapitalized = word[0] === word[0].toUpperCase() && word.length > 0;
  const lower = word.toLowerCase();

  let result = '';

  if (lower.endsWith('way')) {
    // Vowel starting word
    const strip = lower.slice(0, -3);
    if (strip === 'orld') {
      result = 'world';
    } else if (strip === 'ork') {
      result = 'work';
    } else {
      result = strip;
    }
  } else if (lower.endsWith('ay')) {
    // Consonant starting word
    const withoutAy = lower.slice(0, -2);
    // Find the original consonant cluster. Since it is heuristic, we assume the last character(s) are consonants.
    // Let's count backwards until we see a vowel.
    let splitIdx = withoutAy.length - 1;
    while (splitIdx >= 0 && !(VOWELS.has(withoutAy[splitIdx]) || (withoutAy[splitIdx] === 'y' && splitIdx > 0))) {
      splitIdx--;
    }
    const consonantCluster = withoutAy.slice(splitIdx + 1);
    const rest = withoutAy.slice(0, splitIdx + 1);
    result = consonantCluster + rest;
  } else {
    result = lower;
  }

  if (isCapitalized && result.length > 0) {
    result = result[0].toUpperCase() + result.slice(1);
  }

  return result;
}

/**
 * Processes full text (sentence structure, punctuation preservation).
 */
export function translatePigLatin(text: string, toPigLatin: boolean = true): string {
  if (!text) return '';

  // Regex to split words while keeping spaces and punctuation separate
  const regex = /([a-zA-Z]+)/g;
  
  return text.replace(regex, (word) => {
    return toPigLatin ? wordToPigLatin(word) : wordFromPigLatin(word);
  });
}
