import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'remove-text-formatting',
  title: 'Remove Text Formatting',
  description: 'Strip HTML, Markdown, BBCode, and mathematical Unicode symbols back to standard unformatted plain text instantly.',
  category: 'text',
  keywords: ['remove text formatting', 'strip style', 'strip HTML tags', 'remove markdown', 'bbcode cleaner', 'normalize unicode fonts', 'plain text maker', 'clear font styles'],
  icon: 'Brush',
  faqs: [
    {
      question: 'What types of formatting does this tool strip?',
      answer: 'It strips HTML elements, Markdown shorthand tags (like bold, italic, code brackets), BBCode styles (like [b] or [url]), and converts mathematical stylized fonts (bold, script, fraktur Unicode blocks) back to regular readable ASCII characters.'
    },
    {
      question: 'How does it normalize styled social media fonts?',
      answer: 'It decomposes unicode compatibility forms (NFKD normalization) to map fancy mathematical, bold, double-struck, script, and monospace characters back to standard alphabetical letters.'
    },
    {
      question: 'Can this tool remove double spaces or multiple empty lines?',
      answer: 'Yes! Check the "Collapse Whitespace" option to merge double spaces, trim trailing line-endings, and reduce multiple consecutive blank lines down to a single line break.'
    }
  ],
  educationalContent: {
    whatIsIt: 'Remove Text Formatting is a sanitizing utility designed to strip away hidden layout metadata, markup tags, styling tokens, or decorative social fonts. It leaves you with raw, uniform plain text that paste-links cleanly into any compiler, email client, or word document.',
    howToUse: '1. Paste your rich or formatted text in the Input area.\n2. Select which styling codes to remove: HTML, Markdown, BBCode, or mathematical Unicode fonts.\n3. Turn on whitespace collapse if needed to normalize lines and paragraphs.\n4. Click "Clear Formatting" and copy the sanitized plain text output.',
    proTips: [
      'Use this tool before pasting text from MS Word, PDFs, or website pages into databases to prevent styling errors and strange character encodings.',
      'Normalize Unicode fonts is perfect for converting fancy bio fonts on Twitter/X, Instagram, or LinkedIn into standard searchable text.'
    ]
  }
};
