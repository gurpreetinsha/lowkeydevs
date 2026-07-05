import { describe, it, expect } from 'vitest';
import { pickRandomChoices } from './logic';

describe('Random Choice Generator Logic', () => {
  it('should pick choices', () => {
    const choices = ['Apple', 'Banana', 'Cherry'];
    const result = pickRandomChoices({ choices, quantity: 2, allowDuplicates: false });
    expect(result.length).toBe(2);
    expect(choices).toContain(result[0]);
    expect(choices).toContain(result[1]);
  });

  it('should prevent duplicates if selected', () => {
    const choices = ['A', 'B'];
    const result = pickRandomChoices({ choices, quantity: 5, allowDuplicates: false });
    expect(result.length).toBe(2);
    expect(result).toContain('A');
    expect(result).toContain('B');
  });
});
