import { describe, it, expect } from 'vitest';
import { convertToKebabCase } from './logic';

describe('kebab-case Converter Logic', () => {
  it('should convert simple text to kebab-case', () => {
    expect(convertToKebabCase('hello world', false)).toBe('hello-world');
    expect(convertToKebabCase('Hello-World', false)).toBe('hello-world');
    expect(convertToKebabCase('hello_world_test', false)).toBe('hello-world-test');
  });

  it('should convert line-by-line', () => {
    const input = 'hello world\nfoo bar_baz';
    const expected = 'hello-world\nfoo-bar-baz';
    expect(convertToKebabCase(input, true)).toBe(expected);
  });
});
