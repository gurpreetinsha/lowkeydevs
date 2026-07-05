import { describe, it, expect } from 'vitest';
import { unstringifyText } from './logic';

describe('JSON Unstringifier Logic', () => {
  it('should unescape a stringified JSON object', () => {
    const raw = '"{\\"a\\":1,\\"b\\":[2,3]}"';
    const parsed = unstringifyText(raw);
    expect(parsed.format).toBe('json');
    expect(JSON.parse(parsed.result)).toEqual({ a: 1, b: [2, 3] });
  });

  it('should handle double-stringified JSON objects', () => {
    const raw = '"\\\\\\"{\\\\\\"name\\\\\\\":\\\\\\"test\\\\\\"}\\\\\\""';
    const parsed = unstringifyText(raw);
    expect(parsed.format).toBe('json');
    expect(JSON.parse(parsed.result)).toEqual({ name: 'test' });
  });

  it('should fallback to plain text if the final result is not a JSON object', () => {
    const raw = '"Hello \\"World\\"\\nLine 2"';
    const parsed = unstringifyText(raw);
    expect(parsed.format).toBe('text');
    expect(parsed.result).toBe('Hello "World"\nLine 2');
  });

  it('should return empty string for empty inputs', () => {
    const parsed = unstringifyText('');
    expect(parsed.result).toBe('');
    expect(parsed.format).toBe('text');
  });
});
