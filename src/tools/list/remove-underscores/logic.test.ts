import { describe, it, expect } from 'vitest';
import { removeUnderscores } from './logic';

describe('Remove Underscores Logic', () => {
  it('should remove underscores and replace with space', () => {
    expect(removeUnderscores('hello_world', { replacement: 'space', customValue: '' })).toBe('hello world');
  });

  it('should remove underscores completely', () => {
    expect(removeUnderscores('hello_world', { replacement: 'empty', customValue: '' })).toBe('helloworld');
  });

  it('should replace underscores with custom values', () => {
    expect(removeUnderscores('hello_world', { replacement: 'custom', customValue: '||' })).toBe('hello||world');
  });
});
