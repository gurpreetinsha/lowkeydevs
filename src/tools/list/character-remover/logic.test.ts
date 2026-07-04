import { describe, it, expect } from 'vitest';
import { removeCharacters, type RemoveOptions } from './logic';

describe('Character Remover Logic', () => {
  const defaultOptions: RemoveOptions = {
    removeLetters: false,
    removeNumbers: false,
    removePunctuation: false,
    removeWhitespace: false,
    removeNewlines: false,
    customChars: '',
    caseSensitive: false
  };

  it('should return empty string for empty input', () => {
    expect(removeCharacters('', defaultOptions)).toBe('');
  });

  it('should remove letters when removeLetters is true', () => {
    const text = 'Hello 123 World!';
    const opts = { ...defaultOptions, removeLetters: true };
    expect(removeCharacters(text, opts)).toBe(' 123 !');
  });

  it('should remove numbers when removeNumbers is true', () => {
    const text = 'Hello 123 World!';
    const opts = { ...defaultOptions, removeNumbers: true };
    expect(removeCharacters(text, opts)).toBe('Hello  World!');
  });

  it('should remove punctuation when removePunctuation is true', () => {
    const text = 'Hello, World!';
    const opts = { ...defaultOptions, removePunctuation: true };
    expect(removeCharacters(text, opts)).toBe('Hello World');
  });

  it('should remove custom characters', () => {
    const text = 'Banana shake!';
    const opts = { ...defaultOptions, customChars: 'a!' };
    expect(removeCharacters(text, opts)).toBe('Bnn shke');
  });

  it('should respect case sensitivity for custom characters', () => {
    const text = 'Apple and Banana';
    const optsInsensitive = { ...defaultOptions, customChars: 'a', caseSensitive: false };
    const optsSensitive = { ...defaultOptions, customChars: 'a', caseSensitive: true };
    expect(removeCharacters(text, optsInsensitive)).toBe('pple nd Bnn');
    expect(removeCharacters(text, optsSensitive)).toBe('Apple nd Bnn');
  });

  it('should remove spaces and tabs when removeWhitespace is true', () => {
    const text = 'Hello\t World\nNew Line';
    const opts = { ...defaultOptions, removeWhitespace: true };
    expect(removeCharacters(text, opts)).toBe('HelloWorld\nNewLine');
  });

  it('should remove newlines when removeNewlines is true', () => {
    const text = 'Hello\nWorld\r\nTest';
    const opts = { ...defaultOptions, removeNewlines: true };
    expect(removeCharacters(text, opts)).toBe('HelloWorldTest');
  });
});
