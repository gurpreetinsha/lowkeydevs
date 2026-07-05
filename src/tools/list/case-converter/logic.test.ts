import { describe, it, expect } from 'vitest';
import { 
  toCamelCase, 
  toPascalCase, 
  toSnakeCase, 
  toKebabCase, 
  toTitleCase, 
  toSentenceCase, 
  getTextStats 
} from './logic';

describe('Case Converter Logic', () => {
  const sampleText = 'hello world_this-is A Test';

  it('should convert to camelCase correctly', () => {
    expect(toCamelCase(sampleText)).toBe('helloWorldThisIsATest');
  });

  it('should convert to PascalCase correctly', () => {
    expect(toPascalCase(sampleText)).toBe('HelloWorldThisIsATest');
  });

  it('should convert to snake_case correctly', () => {
    expect(toSnakeCase(sampleText)).toBe('hello_world_this_is_a_test');
  });

  it('should convert to kebab-case correctly', () => {
    expect(toKebabCase(sampleText)).toBe('hello-world-this-is-a-test');
  });

  it('should convert to Title Case correctly', () => {
    expect(toTitleCase('hello world. this is a test.')).toBe('Hello World. This Is A Test.');
  });

  it('should convert to Sentence case correctly', () => {
    expect(toSentenceCase('hello world! this is a test. coding is fun? yes.')).toBe(
      'Hello world! This is a test. Coding is fun? Yes.'
    );
  });

  describe('getTextStats', () => {
    it('should compute stats correctly for standard text', () => {
      const text = 'Hello World.\n\nThis is a test.';
      const stats = getTextStats(text);
      expect(stats.characters).toBe(29);
      expect(stats.charactersNoSpaces).toBe(23);
      expect(stats.words).toBe(6);
      expect(stats.lines).toBe(3);
      expect(stats.paragraphs).toBe(2);
    });

    it('should return zeros for empty string', () => {
      const stats = getTextStats('');
      expect(stats.characters).toBe(0);
      expect(stats.words).toBe(0);
      expect(stats.lines).toBe(0);
      expect(stats.paragraphs).toBe(0);
    });
  });
});
