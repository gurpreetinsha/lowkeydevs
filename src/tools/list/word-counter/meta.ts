import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'word-counter',
  title: 'Word Counter & Text Analyzer',
  description: 'Count words, characters, sentences, paragraphs, and lines in your text. Analyze estimated reading time, speaking time, and case transformations.',
  category: 'text',
  keywords: ['word counter', 'character counter', 'word count', 'text analyzer', 'reading time calculator', 'speaking time calculator', 'keyword density', 'case converter'],
  icon: 'type',
  faqs: [
    {
      question: 'How is Reading Time calculated?',
      answer: 'Reading time is calculated using the industry standard average reading speed of 225 words per minute (WPM) for adults. The formula is: Total Words / 225.'
    },
    {
      question: 'How is Speaking Time calculated?',
      answer: 'Speaking time is based on an average conversational speaking speed of 150 words per minute (WPM). The formula is: Total Words / 150.'
    },
    {
      question: 'What is Keyword Density?',
      answer: 'Keyword Density represents how frequently specific words appear in your text compared to the total word count. Keeping an eye on keyword density helps with SEO optimization and avoiding word repetition.'
    }
  ],
  educationalContent: {
    whatIsIt: 'The Word Counter & Text Analyzer is a comprehensive writing tool that provides live metrics on your text. In addition to simple word and character counts, it offers structural statistics (sentences, paragraphs, reading speed estimates) and semantic metadata (keyword occurrences, casing transforms) to help you optimize copy for blogs, scripts, academic papers, and social media.',
    howToUse: '1. Paste or type your text directly into the input editor.\n2. The stats panels (words, chars, sentences, reading time) will update in real-time as you type.\n3. Check the "Keyword Density" list to identify repeated keywords.\n4. Click any of the casing buttons in the toolbar to automatically format your text (e.g. UPPERCASE, camelCase).',
    proTips: [
      'For optimal SEO, target a primary keyword density of 1% to 2.5%. Anything higher might trigger search engine warnings for keyword stuffing.',
      'Check the speaking time gauge when preparing video scripts or presentations to ensure they fit your target slot.'
    ]
  }
};
