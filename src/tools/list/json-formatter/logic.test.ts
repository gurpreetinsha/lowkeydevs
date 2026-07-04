import { describe, it, expect } from 'vitest';
import { formatJson, minifyJson } from './logic';

describe('JSON Formatter & Validator Logic', () => {
  describe('formatJson', () => {
    it('should format a valid JSON string with default spacing', () => {
      const raw = '{"a":1,"b":[2,3],"c":{"d":"val"}}';
      const formatted = formatJson(raw);
      expect(formatted).toBe('{\n  "a": 1,\n  "b": [\n    2,\n    3\n  ],\n  "c": {\n    "d": "val"\n  }\n}');
    });

    it('should format a valid JSON string with 4 spaces', () => {
      const raw = '{"a":1}';
      const formatted = formatJson(raw, 4);
      expect(formatted).toBe('{\n    "a": 1\n}');
    });

    it('should format a valid JSON string with tabs', () => {
      const raw = '{"a":1}';
      const formatted = formatJson(raw, 'tab');
      expect(formatted).toBe('{\n\t"a": 1\n}');
    });

    it('should return empty string for empty input', () => {
      expect(formatJson('')).toBe('');
      expect(formatJson('   ')).toBe('');
    });

    it('should throw an error for invalid JSON string', () => {
      const bad = '{"a":1';
      expect(() => formatJson(bad)).toThrow(SyntaxError);
    });
  });

  describe('minifyJson', () => {
    it('should minify an indented JSON string', () => {
      const raw = '{\n  "a": 1,\n  "b": 2\n}';
      const minified = minifyJson(raw);
      expect(minified).toBe('{"a":1,"b":2}');
    });

    it('should return empty string for empty input', () => {
      expect(minifyJson('')).toBe('');
    });

    it('should throw an error for invalid JSON string', () => {
      const bad = '{"a":1';
      expect(() => minifyJson(bad)).toThrow(SyntaxError);
    });
  });
});
