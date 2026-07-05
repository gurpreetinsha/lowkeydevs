import { describe, it, expect } from 'vitest';
import { stringifyText } from './logic';

describe('JSON Stringify Text Logic', () => {
  it('should stringify raw text with quotes and newlines', () => {
    const text = 'Hello "World"\nNew line';
    const result = stringifyText(text, 'raw');
    expect(result).toBe('"Hello \\"World\\"\\nNew line"');
  });

  it('should parse, minify, and stringify valid JSON objects', () => {
    const jsonStr = '{\n  "a": 1,\n  "b": [2, 3]\n}';
    const result = stringifyText(jsonStr, 'json');
    expect(result).toBe('"{\\"a\\":1,\\"b\\":[2,3]}"');
  });

  it('should return empty string for empty inputs', () => {
    expect(stringifyText('', 'raw')).toBe('');
    expect(stringifyText('', 'json')).toBe('');
  });

  it('should throw error for invalid JSON input in JSON mode', () => {
    expect(() => stringifyText('{"a": 1', 'json')).toThrow();
  });
});
