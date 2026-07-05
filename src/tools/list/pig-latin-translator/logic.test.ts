import { describe, it, expect } from 'vitest';
import { translatePigLatin } from './logic';

describe('Pig Latin Translator Logic', () => {
  it('should translate English to Pig Latin', () => {
    expect(translatePigLatin('Hello, world!', true)).toBe('Ellohay, orldway!');
    expect(translatePigLatin('Apple banana cherry', true)).toBe('Appleway ananabay errychay');
  });

  it('should translate Pig Latin to English', () => {
    expect(translatePigLatin('Ellohay, orldway!', false)).toBe('Hello, world!');
    expect(translatePigLatin('Appleway ananabay errychay', false)).toBe('Apple banana cherry');
  });
});
