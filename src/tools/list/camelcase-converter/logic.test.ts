import { describe, it, expect } from 'vitest';
import { convertToCamelCase } from './logic';

describe('camelCase Converter Logic', () => {
  it('should convert simple text to camelCase', () => {
    expect(convertToCamelCase('hello world', false)).toBe('helloWorld');
    expect(convertToCamelCase('Hello-World', false)).toBe('helloWorld');
    expect(convertToCamelCase('hello_world_test', false)).toBe('helloWorldTest');
  });

  it('should convert line-by-line', () => {
    const input = 'hello world\nfoo bar_baz\nTESTING KEBAB';
    const expected = 'helloWorld\nfooBarBaz\ntestingKebab';
    expect(convertToCamelCase(input, true)).toBe(expected);
  });
});
