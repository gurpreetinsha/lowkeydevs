import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'graphql-formatter',
  title: 'GraphQL Formatter & Minifier',
  description: 'Format, beautify, validate, or minify GraphQL queries and schemas instantly using standard indentation.',
  category: 'json-yaml',
  keywords: ['graphql formatter', 'prettify graphql', 'beautify graphql', 'minify graphql', 'graphql query clean', 'graphql validator'],
  icon: 'Database',
  faqs: [
    {
      question: 'Is my GraphQL query private?',
      answer: 'Yes. All formatting and minification are executed 100% client-side in your browser using JavaScript. No queries or schemas are sent to our servers.'
    },
    {
      question: 'Does this formatter validate syntax?',
      answer: 'It tokenizes and structures your query. If you have unclosed brackets or brace mismatches, the formatter helps align them, making visual debugging much easier.'
    },
    {
      question: 'What is the benefit of GraphQL minification?',
      answer: 'Minifying GraphQL queries strips comments and collapsing whitespace. This reduces the size of your HTTP POST payload, saving bandwidth when queries are sent to your GraphQL API server.'
    }
  ],
  educationalContent: {
    whatIsIt: 'GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. While query structures can grow deeply nested and hard to read, proper formatting (with indentation, fields alignment, and clean brackets) helps developers debug queries and mutations quickly.',
    howToUse: '1. Paste your disorganized or minified GraphQL query in the Input editor.\n2. Choose your preferred indentation level (2 spaces, 4 spaces, or tabs).\n3. Click "Beautify" to format the query, or "Minify" to compact it.\n4. Click "Copy" to save the output.',
    proTips: [
      'Minified queries are ideal for embedding directly in code strings or config files.',
      'Comments (lines starting with #) are preserved during formatting but stripped out entirely during minification.'
    ]
  }
};
