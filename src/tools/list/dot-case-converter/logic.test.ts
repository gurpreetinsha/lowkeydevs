import { describe, it, expect } from 'vitest';
import { convertToDotCase } from './logic';

describe('dot.case Converter Logic', () => {
  it('should convert simple text to dot.case', () => {
    expect(convertToDotCase('hello world', false)).toBe('hello.world');
    expect(convertToDotCase('Hello-World', false)).toBe('hello.world');
    expect(convertToDotCase('hello_world_test', false)).toBe('hello.world.test');
  });

  it('should convert line-by-line', () => {
    const input = 'hello world\nfoo bar_baz';
    const expected = 'hello.world\nfoo.bar.baz';
    expect(convertToDotCase(input, true)).toBe(expected);
  });
});
