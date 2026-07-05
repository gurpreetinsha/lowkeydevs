import { describe, it, expect } from 'vitest';
import { removeEmDash } from './logic';

describe('Remove Em Dash Logic', () => {
  it('should remove em dash and replace with standard hyphen', () => {
    expect(removeEmDash('hello\u2014world', { replacement: 'hyphen', customValue: '' })).toBe('hello-world');
  });

  it('should replace en dash with space', () => {
    expect(removeEmDash('hello\u2013world', { replacement: 'space', customValue: '' })).toBe('hello world');
  });
});
