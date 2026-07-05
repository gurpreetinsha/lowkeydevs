import { describe, it, expect } from 'vitest';
import { analyzeUnicode, convertTextToFormat } from './logic';

describe('Unicode Converter Logic', () => {
  it('should analyze characters correctly', () => {
    const analysis = analyzeUnicode('A');
    expect(analysis.length).toBe(1);
    expect(analysis[0].char).toBe('A');
    expect(analysis[0].codePoint).toBe('U+0041');
    expect(analysis[0].decimal).toBe(65);
    expect(analysis[0].hex).toBe('0041');
  });

  it('should convert full text to formats', () => {
    expect(convertTextToFormat('Hi', 'hex')).toBe('0048 0069');
    expect(convertTextToFormat('Hi', 'htmlDec')).toBe('&#72;&#105;');
  });
});
