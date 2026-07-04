import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'json-stringify-text',
  title: 'JSON Stringify Text',
  description: 'Escape and stringify plain text or JSON structures into a single-line, fully escaped JSON string literal.',
  category: 'json-yaml',
  keywords: ['json stringify', 'escape json string', 'string to json literal', 'json escaper', 'minify and escape json', 'backslash escape'],
  icon: 'Quote',
  faqs: [
    {
      question: 'What is the purpose of JSON Stringify Text?',
      answer: 'It takes text or code containing quotes, newlines, and backslashes, and encodes it into a safe JSON string literal representation that can be pasted directly into JSON configs, environment variables, or API payloads.'
    },
    {
      question: 'What is the difference between Raw Text and JSON Object modes?',
      answer: 'Raw Text treats the entire input as a literal string. JSON Object parses the input first to validate its correctness, compresses it, and then turns the compressed JSON object into an escaped string.'
    },
    {
      question: 'Does this handle multi-line strings?',
      answer: 'Yes. All line breaks are converted to literal "\\n" escapes inside the stringified JSON.'
    }
  ],
  educationalContent: {
    whatIsIt: 'When embedding code, HTML, or JSON inside another JSON structure, quotes and line breaks can break syntax. JSON Stringify Text converts text into an escaped, double-quoted JSON string format (e.g. converting a newline to \\n, and double quotes to \\"), ensuring the text remains a valid JSON string literal.',
    howToUse: '1. Paste your raw text or JSON object into the Input area.\n2. Choose a conversion mode (Escape Raw Text or Parse & Escape JSON Object).\n3. Click "Stringify" to perform the conversion.\n4. Copy the escaped string literal from the Output pane.',
    proTips: [
      'Use "JSON Object" mode to minify and escape configuration blobs before sending them as API parameters.',
      'To reverse this process and clean up backslashes, use the counterpart tool: JSON Unstringifier.'
    ]
  }
};
