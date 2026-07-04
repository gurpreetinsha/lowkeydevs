import { describe, it, expect } from 'vitest';
import { generateBlankText, encodeHiddenText, decodeHiddenText } from './logic';

describe('Invisible Text Generator Logic', () => {
  it('should generate requested count of blank spaces', () => {
    const res = generateBlankText('zwsp', 5);
    expect(res).toBe('\u200B\u200B\u200B\u200B\u200B');
  });

  it('should encode and decode a hidden message correctly', () => {
    const coverText = 'Hello World';
    const secretText = 'Secret123';
    
    const encoded = encodeHiddenText(coverText, secretText);
    expect(encoded).toContain(coverText);
    expect(encoded).not.toContain(secretText); // invisible

    const decoded = decodeHiddenText(encoded);
    expect(decoded).toBe(secretText);
  });

  it('should handle decoding normal text without hidden messages safely', () => {
    const normalText = 'This is just a normal sentence with no secrets.';
    expect(decodeHiddenText(normalText)).toBe('');
  });

  it('should decode hidden messages without boundary markers using fallback', () => {
    // If the boundary markers got stripped, we fallback to decoding any sequence of ZWSP/ZWNJ
    const secretText = 'Hi';
    const encoded = encodeHiddenText('Cover', secretText);
    // Strip boundary tags manually
    const stripped = encoded.replace(/\u2060/g, '');
    
    expect(decodeHiddenText(stripped)).toBe(secretText);
  });
});
