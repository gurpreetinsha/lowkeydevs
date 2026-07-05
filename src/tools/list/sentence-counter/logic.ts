export interface TextStats {
  sentences: number;
  words: number;
  characters: number;
  charactersNoSpaces: number;
  paragraphs: number;
  averageSentenceLength: number;
  readingTimeMin: number;
}

/**
 * Calculates sentence, paragraph, word, and character statistics for a block of text.
 */
export function calculateTextStats(text: string): TextStats {
  if (!text || text.trim() === '') {
    return {
      sentences: 0,
      words: 0,
      characters: 0,
      charactersNoSpaces: 0,
      paragraphs: 0,
      averageSentenceLength: 0,
      readingTimeMin: 0
    };
  }

  // 1. Characters count
  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, '').length;

  // 2. Words count
  const wordsArray = text.trim().split(/\s+/).filter(w => w.length > 0);
  const words = wordsArray.length;

  // 3. Paragraphs count
  const paragraphsArray = text.split(/\r?\n\s*\r?\n/).filter(p => p.trim().length > 0);
  const paragraphs = paragraphsArray.length || (text.trim().length > 0 ? 1 : 0);

  // 4. Sentences count
  // Avoid splitting common abbreviations like Mr. Dr. etc.
  const abbrRegex = /\b(Mr|Mrs|Ms|Dr|Jr|Sr|vs|e\.g|i\.e|etc|Prof|vs)\./gi;
  const tempText = text.replace(abbrRegex, '$1TEMP');
  
  // Sentence ending pattern: . ! or ? followed by whitespace or end of string
  const sentenceMatches = tempText.match(/[^.!?]+(?:[.!?]+(?=\s|$)|$)/g);
  let sentences = 0;
  if (sentenceMatches) {
    // Filter out matches that are just whitespace
    sentences = sentenceMatches.filter(s => s.trim().length > 0).length;
  }

  // Fallback: If we have words but 0 sentences (e.g. "hello world"), count as 1 sentence
  if (words > 0 && sentences === 0) {
    sentences = 1;
  }

  // 5. Average sentence length (words per sentence)
  const averageSentenceLength = sentences > 0 ? parseFloat((words / sentences).toFixed(1)) : 0;

  // 6. Reading time (Avg speed: 225 WPM)
  const readingTimeMin = parseFloat((words / 225).toFixed(2));

  return {
    sentences,
    words,
    characters,
    charactersNoSpaces,
    paragraphs,
    averageSentenceLength,
    readingTimeMin
  };
}
