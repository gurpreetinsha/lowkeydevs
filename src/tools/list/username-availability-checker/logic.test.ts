import { describe, it, expect } from 'vitest';
import { validateUsername } from './logic';

describe('validateUsername', () => {
  it('should accept valid usernames', () => {
    expect(validateUsername('john').isValid).toBe(true);
    expect(validateUsername('alex123').isValid).toBe(true);
    expect(validateUsername('guri_dev').isValid).toBe(true);
    expect(validateUsername('dev-coder').isValid).toBe(true);
    expect(validateUsername('some.user').isValid).toBe(true);
  });

  it('should reject empty usernames', () => {
    const result = validateUsername('');
    expect(result.isValid).toBe(false);
    expect(result.error).toBe('Username cannot be empty.');
  });

  it('should reject usernames that are too short', () => {
    const result = validateUsername('a');
    expect(result.isValid).toBe(false);
    expect(result.error).toBe('Username must be at least 2 characters.');
  });

  it('should reject usernames that are too long', () => {
    const result = validateUsername('a'.repeat(31));
    expect(result.isValid).toBe(false);
    expect(result.error).toBe('Username cannot exceed 30 characters.');
  });

  it('should reject usernames with spaces', () => {
    const result = validateUsername('john doe');
    expect(result.isValid).toBe(false);
    expect(result.error).toContain('can only contain letters');
  });

  it('should reject usernames with special characters', () => {
    expect(validateUsername('john!').isValid).toBe(false);
    expect(validateUsername('john@').isValid).toBe(false);
    expect(validateUsername('john#').isValid).toBe(false);
    expect(validateUsername('john$').isValid).toBe(false);
  });
});
