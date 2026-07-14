import { describe, it, expect } from 'vitest';
import { decodeJWT, base64UrlEncode, base64UrlDecode, signHS256, verifyHS256 } from './logic';

describe('JWT Debugger Logic', () => {
  const sampleHeader = { alg: 'HS256', typ: 'JWT' };
  const samplePayload = { sub: '1234567890', name: 'John Doe', iat: 1516239022 };
  const secret = 'your-256-bit-secret';

  it('should encode and decode base64url properly', () => {
    const input = 'Hello World! This contains special chars + / =';
    const encoded = base64UrlEncode(input);
    expect(encoded).not.toContain('+');
    expect(encoded).not.toContain('/');
    expect(encoded).not.toContain('=');

    const decoded = base64UrlDecode(encoded);
    expect(decoded).toBe(input);
  });

  it('should sign and verify HS256 JWT tokens', async () => {
    const headerStr = JSON.stringify(sampleHeader);
    const payloadStr = JSON.stringify(samplePayload);

    const token = await signHS256(headerStr, payloadStr, secret);
    expect(token).toBeDefined();
    
    const parts = token.split('.');
    expect(parts.length).toBe(3);

    const decoded = decodeJWT(token);
    expect(decoded.header).toEqual(sampleHeader);
    expect(decoded.payload).toEqual(samplePayload);

    const isValid = await verifyHS256(parts[0], parts[1], parts[2], secret);
    expect(isValid).toBe(true);

    const isInvalid = await verifyHS256(parts[0], parts[1], parts[2], 'wrong-secret');
    expect(isInvalid).toBe(false);
  });

  it('should throw an error for invalid JWT structure', () => {
    expect(() => decodeJWT('invalidtoken')).toThrow();
    expect(() => decodeJWT('a.b')).toThrow();
    expect(() => decodeJWT('a.b.c.d')).toThrow();
  });
});
