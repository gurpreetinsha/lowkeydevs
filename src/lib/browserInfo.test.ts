import { describe, it, expect } from 'vitest';
import { parseUserAgent } from './browserInfo';

describe('parseUserAgent', () => {
  it('detects Chrome on Windows', () => {
    const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
    const result = parseUserAgent(ua);
    expect(result.browser).toBe('Chrome');
    expect(result.browserVersion).toBe('120.0.0.0');
    expect(result.os).toBe('Windows');
    expect(result.deviceType).toBe('Desktop');
  });

  it('detects Safari on iOS (iPhone)', () => {
    const ua = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1';
    const result = parseUserAgent(ua);
    expect(result.browser).toBe('Safari');
    expect(result.browserVersion).toBe('17.0');
    expect(result.os).toBe('iOS');
    expect(result.deviceType).toBe('Mobile');
  });

  it('detects Edge on Windows', () => {
    const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0';
    const result = parseUserAgent(ua);
    expect(result.browser).toBe('Edge');
    expect(result.browserVersion).toBe('120.0.0.0');
    expect(result.os).toBe('Windows');
    expect(result.deviceType).toBe('Desktop');
  });

  it('detects Firefox on Linux', () => {
    const ua = 'Mozilla/5.0 (X11; Linux x86_64; rv:121.0) Gecko/20100101 Firefox/121.0';
    const result = parseUserAgent(ua);
    expect(result.browser).toBe('Firefox');
    expect(result.browserVersion).toBe('121.0');
    expect(result.os).toBe('Linux');
    expect(result.deviceType).toBe('Desktop');
  });

  it('detects Chrome on Android mobile', () => {
    const ua = 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36';
    const result = parseUserAgent(ua);
    expect(result.browser).toBe('Chrome');
    expect(result.browserVersion).toBe('120.0.0.0');
    expect(result.os).toBe('Android');
    expect(result.deviceType).toBe('Mobile');
  });
});
