import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'unicode-to-text-converter',
  title: 'Unicode to Text Converter',
  description: 'Convert Unicode escape sequences (JavaScript \\uXXXX, HTML entities, CSS codes) back to readable text and vice-versa.',
  category: 'converters',
  keywords: ['unicode to text', 'text to unicode', 'unicode escape converter', 'html entity decoder', 'unicode decoder', 'css unicode converter'],
  icon: 'Languages',
  faqs: [
    {
      question: 'Which Unicode formats are supported?',
      answer: 'This tool encodes to and decodes from JavaScript escape formats (\\uXXXX and \\u{XXXX}), HTML entity decimal (&#DD;) and hex (&#xXX;), CSS escapes (\\XXXX), and official Unicode notation (U+XXXX).'
    },
    {
      question: 'How are emojis handled?',
      answer: 'Emojis are fully supported. Since emojis are located in higher Unicode planes (astral planes), the tool translates them into appropriate code point escapes, such as JS braced escapes (\\u{1f600}) or HTML entities.'
    },
    {
      question: 'Does this tool decode mixed text?',
      answer: 'Yes! The Unicode decoder detects escape sequences embedded in regular text and decodes them while leaving standard text intact.'
    }
  ],
  educationalContent: {
    whatIsIt: 'Unicode is a universal character encoding standard that assigns a unique number (code point) to every character across languages, scripts, and symbols. In coding environments, special characters are represented as Unicode escape sequences. This tool translates escape formats into legible characters and encodes text back into safe escape codes.',
    howToUse: '1. Select the conversion direction (Unicode to Text or Text to Unicode).\n2. Choose the specific escape format (JS, HTML, CSS, or U+) when encoding.\n3. Paste the content in the Input box.\n4. Copy the converted text from the Output box.',
    proTips: [
      'Use HTML Entity Decimal or Hex formats to safely embed special characters and symbols in raw web page markup.',
      'CSS Unicode sequences require a space separator or trailing characters to delineate the escape code in styles.'
    ]
  }
};
