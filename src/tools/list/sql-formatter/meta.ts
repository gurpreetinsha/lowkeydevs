import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'sql-formatter',
  title: 'SQL Formatter & Beautifier',
  description: 'Format, beautify, and minify your SQL queries instantly. Supports custom indentation, keyword casing, and runs entirely in your browser.',
  category: 'text',
  keywords: [
    'sql formatter',
    'sql beautifier',
    'format sql',
    'beautify sql',
    'minify sql',
    'sql query formatter',
    'sql syntax highlighter',
  ],
  icon: 'Database',
  faqs: [
    {
      question: 'Is my SQL query processed securely?',
      answer: 'Yes. All formatting, minification, and syntax parsing are executed client-side in your browser. No database connection or server request is made, keeping your query schemas completely private.',
    },
    {
      question: 'Which SQL dialects are supported?',
      answer: 'The formatter parses standard SQL statements (like SELECT, INSERT, UPDATE, DELETE, CREATE, DROP). It works perfectly across standard SQL dialects such as MySQL, PostgreSQL, SQLite, and Microsoft SQL Server.',
    },
    {
      question: 'Can I choose the keyword capitalization?',
      answer: 'Yes. You can choose to force SQL keywords to UPPERCASE, lowercase, or keep them as originally entered (preserve case).',
    },
  ],
  educationalContent: {
    whatIsIt: 'SQL (Structured Query Language) is the standard language for relational database management. As queries grow in size and complexity, they often become dense and unreadable. An SQL Formatter adds consistent spacing, proper line breaks before major query keywords (like FROM, WHERE, JOIN), and aligns indentation to make code legible and easy to debug.',
    howToUse: '1. Paste your raw, minified, or messy SQL query into the input field.\n2. Choose your preferred keyword case (UPPERCASE, lowercase, or preserve) and indentation style.\n3. The query will format in real time as you edit.\n4. Click "Minify" if you want to compress the query into a single line, or click "Copy" to save the result.',
    proTips: [
      'Comments (both single-line `--` and multi-line `/* ... */`) are preserved during formatting.',
      'Parenthesized subqueries are automatically indented relative to their parent clause for readability.',
    ],
  },
};
