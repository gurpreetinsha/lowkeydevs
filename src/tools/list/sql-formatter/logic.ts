// SQL Keywords to format
const SQL_KEYWORDS = new Set([
  'SELECT', 'FROM', 'WHERE', 'AND', 'OR', 'JOIN', 'LEFT', 'RIGHT', 'INNER', 'OUTER',
  'ON', 'GROUP BY', 'ORDER BY', 'HAVING', 'LIMIT', 'INSERT', 'INTO', 'VALUES',
  'UPDATE', 'SET', 'DELETE', 'CREATE', 'TABLE', 'AS', 'IN', 'IS', 'NULL', 'NOT',
  'LIKE', 'UNION', 'ALL', 'EXISTS', 'BETWEEN', 'CASE', 'WHEN', 'THEN', 'ELSE',
  'END', 'BY', 'ORDER', 'GROUP', 'CROSS', 'NATURAL', 'DATABASE', 'INDEX', 'VIEW',
  'DROP', 'ALTER', 'ADD', 'KEY', 'PRIMARY', 'FOREIGN', 'REFERENCES', 'DEFAULT',
  'UNIQUE', 'CHECK', 'CONSTRAINT', 'AUTO_INCREMENT', 'INTO'
]);

// Keywords that should start on a new line
const BLOCK_KEYWORDS = new Set([
  'SELECT', 'FROM', 'WHERE', 'GROUP BY', 'ORDER BY', 'HAVING', 'LIMIT',
  'UNION', 'INSERT INTO', 'INSERT', 'UPDATE', 'DELETE FROM', 'DELETE', 'SET', 'VALUES',
  'LEFT JOIN', 'RIGHT JOIN', 'INNER JOIN', 'OUTER JOIN', 'JOIN', 'CROSS JOIN',
  'NATURAL JOIN', 'CREATE TABLE', 'CREATE', 'DROP TABLE', 'ALTER TABLE'
]);

// Keywords that should start a new line at an indented level (e.g. inside WHERE)
const LINE_KEYWORDS = new Set(['AND', 'OR', 'UNION', 'EXISTS']);

interface Token {
  type: 'keyword' | 'identifier' | 'string' | 'comment' | 'punctuation' | 'whitespace' | 'operator';
  value: string;
}

// Tokenize SQL string safely preserving strings & comments
function tokenize(sql: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;
  const n = sql.length;

  while (i < n) {
    const char = sql[i];

    // 1. Whitespace
    if (/\s/.test(char)) {
      let space = '';
      while (i < n && /\s/.test(sql[i])) {
        space += sql[i];
        i++;
      }
      tokens.push({ type: 'whitespace', value: space });
      continue;
    }

    // 2. Block Comments /* ... */
    if (char === '/' && sql[i + 1] === '*') {
      let comment = '/*';
      i += 2;
      while (i < n && !(sql[i] === '*' && sql[i + 1] === '/')) {
        comment += sql[i];
        i++;
      }
      if (i < n) {
        comment += '*/';
        i += 2;
      }
      tokens.push({ type: 'comment', value: comment });
      continue;
    }

    // 3. Line Comments -- ...
    if (char === '-' && sql[i + 1] === '-') {
      let comment = '--';
      i += 2;
      while (i < n && sql[i] !== '\n' && sql[i] !== '\r') {
        comment += sql[i];
        i++;
      }
      tokens.push({ type: 'comment', value: comment });
      continue;
    }

    // 4. String Literals '...' or "..." or `...`
    if (char === "'" || char === '"' || char === '`') {
      const quote = char;
      let str = quote;
      i++;
      while (i < n) {
        // Escaped quotes
        if (sql[i] === '\\' && sql[i + 1] === quote) {
          str += '\\' + quote;
          i += 2;
          continue;
        }
        if (sql[i] === quote) {
          str += quote;
          i++;
          break;
        }
        str += sql[i];
        i++;
      }
      tokens.push({ type: 'string', value: str });
      continue;
    }

    // 5. Punctuation / Brackets
    if (char === '(' || char === ')' || char === ',' || char === ';') {
      tokens.push({ type: 'punctuation', value: char });
      i++;
      continue;
    }

    // 6. Operators
    if (/[=\>\<!\+\-\*\/&\|\^\~%]/.test(char)) {
      let op = char;
      i++;
      while (i < n && /[=\>\<!\+\-\*\/&\|\^\~%]/.test(sql[i])) {
        // Avoid eating comment characters
        if (sql[i] === '-' && sql[i + 1] === '-') break;
        if (sql[i] === '/' && sql[i + 1] === '*') break;
        op += sql[i];
        i++;
      }
      tokens.push({ type: 'operator', value: op });
      continue;
    }

    // 7. Identifiers / Word/ Keywords
    if (/[a-zA-Z0-9_\.]/.test(char)) {
      let word = '';
      while (i < n && /[a-zA-Z0-9_\.]/.test(sql[i])) {
        word += sql[i];
        i++;
      }
      // Check for compound keywords like "GROUP BY", "ORDER BY", "LEFT JOIN", etc.
      // Lookahead helper to see if next tokens form compound keyword
      let tempIndex = i;
      let spaceBetween = '';
      while (tempIndex < n && /\s/.test(sql[tempIndex])) {
        spaceBetween += sql[tempIndex];
        tempIndex++;
      }
      let nextWord = '';
      while (tempIndex < n && /[a-zA-Z0-9_\.]/.test(sql[tempIndex])) {
        nextWord += sql[tempIndex];
        tempIndex++;
      }

      const combined = `${word.toUpperCase()} ${nextWord.toUpperCase()}`;
      if (SQL_KEYWORDS.has(combined) || BLOCK_KEYWORDS.has(combined)) {
        tokens.push({ type: 'keyword', value: combined });
        i = tempIndex;
      } else if (SQL_KEYWORDS.has(word.toUpperCase())) {
        tokens.push({ type: 'keyword', value: word });
      } else {
        tokens.push({ type: 'identifier', value: word });
      }
      continue;
    }

    // 8. Single unknown character fallthrough
    tokens.push({ type: 'identifier', value: char });
    i++;
  }

  return tokens;
}

export interface SQLFormatOptions {
  indentation: string; // "2", "4", "tab"
  keywordCase: 'upper' | 'lower' | 'preserve';
}

export function formatSql(sql: string, options: SQLFormatOptions): string {
  const tokens = tokenize(sql);
  
  let indentStr = '  '; // Default 2 spaces
  if (options.indentation === '4') {
    indentStr = '    ';
  } else if (options.indentation === 'tab') {
    indentStr = '\t';
  }

  let result = '';
  let indentLevel = 0;

  // Filter out all whitespaces to rebuild cleanly
  const cleanTokens = tokens.filter(t => t.type !== 'whitespace');

  const getIndent = (level: number) => {
    return indentStr.repeat(Math.max(0, level));
  };

  let i = 0;
  const n = cleanTokens.length;

  while (i < n) {
    const token = cleanTokens[i];

    // Format keyword case
    let val = token.value;
    if (token.type === 'keyword') {
      if (options.keywordCase === 'upper') {
        val = val.toUpperCase();
      } else if (options.keywordCase === 'lower') {
        val = val.toLowerCase();
      }
    }

    if (token.type === 'keyword') {
      const upperVal = val.toUpperCase();

      if (BLOCK_KEYWORDS.has(upperVal)) {
        // SELECT, FROM, WHERE, etc. start on new line
        if (result.length > 0) {
          result = result.trimEnd() + '\n' + getIndent(indentLevel);
        }
        result += val + ' ';
      } else if (LINE_KEYWORDS.has(upperVal)) {
        // AND, OR inside clause
        if (result.length > 0) {
          result = result.trimEnd() + '\n' + getIndent(indentLevel + 1);
        }
        result += val + ' ';
      } else {
        result += val + ' ';
      }
    } else if (token.type === 'punctuation') {
      if (val === '(') {
        // Check if preceding token was a function/keyword
        const prev = cleanTokens[i - 1];
        if (prev && prev.type === 'identifier') {
          // Keep function call compact e.g. COUNT(
          result = result.trimEnd() + '(';
        } else {
          result += '( ';
        }
        indentLevel++;
      } else if (val === ')') {
        indentLevel = Math.max(0, indentLevel - 1);
        result = result.trimEnd();
        if (result.endsWith('\n' + getIndent(indentLevel + 1))) {
          // If we had a newline before, pull back paren to match indent level
          result = result.substring(0, result.lastIndexOf('\n')) + '\n' + getIndent(indentLevel) + ') ';
        } else {
          result += ' ) ';
        }
      } else if (val === ',') {
        // Add new line for commas inside SELECT list if we are at base indent level (makes it gorgeous!)
        // But to keep it robust and not wrap everything, let's add space by default
        // and if it's in a select list we can wrap if needed, or simply append space
        result = result.trimEnd() + ', ';
      } else {
        result += val + ' ';
      }
    } else if (token.type === 'operator') {
      // Spaces around operators
      result = result.trimEnd() + ` ${val} `;
    } else if (token.type === 'comment') {
      if (val.startsWith('--')) {
        result += val + '\n' + getIndent(indentLevel);
      } else {
        result += ' ' + val + ' ';
      }
    } else {
      // Identifier, string
      result += val + ' ';
    }

    i++;
  }

  // Final cleanup of spaces and trailing whitespace
  return result
    .split('\n')
    .map(line => line.trimEnd())
    .join('\n')
    .trim();
}

export function minifySql(sql: string): string {
  const tokens = tokenize(sql);
  let result = '';

  for (const token of tokens) {
    if (token.type === 'comment') {
      continue; // Remove comments
    }
    if (token.type === 'whitespace') {
      result += ' ';
      continue;
    }
    result += token.value;
  }

  // Replace multiple spaces with a single space, collapse spaces around operator and punctuations
  return result
    .replace(/\s+/g, ' ')
    .replace(/\s*([,\(\)=><!+-/*;])\s*/g, '$1')
    .trim();
}
