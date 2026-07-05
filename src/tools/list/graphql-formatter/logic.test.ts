import { describe, it, expect } from 'vitest';
import { formatGraphQL, minifyGraphQL } from './logic';

describe('GraphQL Formatter Logic', () => {
  const rawQuery = `
    # Get user profile
    query GetUser($id: ID!) {
      user(id: $id) {
        id
        name
        email
        posts { title views }
      }
    }
  `;

  describe('formatGraphQL', () => {
    it('should format a valid query with default 2 space indentation', () => {
      const formatted = formatGraphQL(rawQuery);
      expect(formatted).toContain('query GetUser($id: ID!) {');
      expect(formatted).toContain('  user(id: $id) {');
      expect(formatted).toContain('    id');
      expect(formatted).toContain('    posts {');
      expect(formatted).toContain('      title');
      expect(formatted).toContain('      views');
    });

    it('should format with 4 spaces', () => {
      const formatted = formatGraphQL(rawQuery, 4);
      expect(formatted).toContain('    user(id: $id) {');
    });

    it('should return empty string for empty input', () => {
      expect(formatGraphQL('')).toBe('');
      expect(formatGraphQL('   ')).toBe('');
    });
  });

  describe('minifyGraphQL', () => {
    it('should collapse whitespace and strip comments', () => {
      const minified = minifyGraphQL(rawQuery);
      expect(minified).toBe('query GetUser($id:ID!){user(id:$id){id name email posts{title views}}}');
    });

    it('should return empty string for empty input', () => {
      expect(minifyGraphQL('')).toBe('');
    });
  });
});
