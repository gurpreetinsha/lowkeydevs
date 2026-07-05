import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'nato-phonetic-alphabet-translator',
  title: 'NATO Phonetic Alphabet Translator',
  description: 'Convert words, names, or letters into the NATO Phonetic Alphabet online. Customize separators and casing for clear voice spelling.',
  category: 'text',
  keywords: ['nato phonetic alphabet', 'nato spelling translator', 'phonetic alphabet converter', 'spelling alphabet decoder', 'voice spelling tool'],
  faqs: [
    {
      question: 'What is the NATO Phonetic Alphabet?',
      answer: 'It is a spelling alphabet used by radio operators, pilots, and military personnel to communicate letters clearly, especially over static-heavy voice channels. It maps A to Alpha, B to Bravo, C to Charlie, etc.'
    },
    {
      question: 'Are numbers supported?',
      answer: 'Yes, numbers are mapped to their standard phonetic equivalents (e.g. 0 to Zero, 1 to One, etc.).'
    }
  ],
  educationalContent: {
    whatIsIt: 'A NATO Phonetic Alphabet Translator converts standard text letters into spelling words, preventing confusion during voice transmissions or telephone conversations.',
    howToUse: 'Input the text or word you want to spell out, select the separator character, choose the casing option, and copy the phonetic result.'
  }
};
