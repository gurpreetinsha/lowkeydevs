import { describe, it, expect } from 'vitest';
import { formatSql, minifySql } from './logic';

describe('SQL Formatter Logic', () => {
  it('should format a basic SELECT query correctly', () => {
    const rawSql = 'select id,name,email from users where age >= 18 and active = 1 order by name desc';
    const formatted = formatSql(rawSql, { indentation: '2', keywordCase: 'upper' });
    
    // We expect major clauses to start on new lines, and keywords to be capitalized
    expect(formatted).toContain('SELECT id, name, email');
    expect(formatted).toContain('\nFROM users');
    expect(formatted).toContain('\nWHERE age >= 18');
    expect(formatted).toContain('\n  AND active = 1');
    expect(formatted).toContain('\nORDER BY name desc');
  });

  it('should support lower case keywords and custom indentation', () => {
    const rawSql = 'SELECT id FROM users WHERE id IN (1,2,3)';
    const formatted = formatSql(rawSql, { indentation: '4', keywordCase: 'lower' });

    expect(formatted).toContain('select id');
    expect(formatted).toContain('\nfrom users');
    expect(formatted).toContain('\nwhere id in ( 1, 2, 3 )');
  });

  it('should minify SQL queries properly', () => {
    const rawSql = `
      -- Get active admins
      SELECT id, name
      FROM users
      WHERE role = 'admin'
        AND active = 1;
    `;
    const minified = minifySql(rawSql);
    expect(minified).toBe("SELECT id,name FROM users WHERE role='admin' AND active=1;");
  });

  it('should preserve comments and strings when formatting', () => {
    const rawSql = "SELECT * FROM users WHERE email = 'test@example.com' -- inline comment";
    const formatted = formatSql(rawSql, { indentation: '2', keywordCase: 'upper' });

    expect(formatted).toContain("'test@example.com'");
    expect(formatted).toContain('-- inline comment');
  });
});
