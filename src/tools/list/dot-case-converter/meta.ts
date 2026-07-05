import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'dot-case-converter',
  title: 'dot.case Converter',
  description: 'Convert any text, variables, or lists into dot.case format online instantly. Ideal for configuration files, properties, and metric keys.',
  category: 'text',
  keywords: ['dot case converter', 'convert to dot case', 'dot case generator', 'dot notation tool', 'property key generator'],
  faqs: [
    {
      question: 'What is dot.case?',
      answer: 'dot.case is a casing convention where all words are lowercased and separated by a dot or period character (e.g. "config.database.url").'
    },
    {
      question: 'Where is dot.case commonly used?',
      answer: 'It is widely used in property files (like Java .properties files), configuration keys (e.g., Spring Boot, PHP dotenv), translation keys (i18n), and metrics namespaces (like Graphite or Prometheus).'
    }
  ],
  educationalContent: {
    whatIsIt: 'A dot.case Converter transforms input strings into lowercased words separated by dots. This is extremely helpful for setting up structured dot-notated naming structures.',
    howToUse: 'Paste your input text, check the line-by-line option if you want to process multiple lines separately, and copy the dot.case output.'
  }
};
