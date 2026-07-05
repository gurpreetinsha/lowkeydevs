export interface IpGenOptions {
  type: 'ipv4' | 'ipv6';
  quantity: number;
}

/**
 * Generates secure random IP addresses.
 */
export function generateRandomIps(options: IpGenOptions): string[] {
  const { type, quantity } = options;
  const results: string[] = [];

  const getSecureRandomByte = (): number => {
    if (typeof globalThis !== 'undefined' && globalThis.crypto) {
      const arr = new Uint8Array(1);
      globalThis.crypto.getRandomValues(arr);
      return arr[0];
    }
    return Math.floor(Math.random() * 256);
  };

  const getSecureRandomHexWord = (): string => {
    if (typeof globalThis !== 'undefined' && globalThis.crypto) {
      const arr = new Uint16Array(1);
      globalThis.crypto.getRandomValues(arr);
      return arr[0].toString(16);
    }
    return Math.floor(Math.random() * 65536).toString(16);
  };

  for (let i = 0; i < quantity; i++) {
    if (type === 'ipv4') {
      const octets = [
        getSecureRandomByte(),
        getSecureRandomByte(),
        getSecureRandomByte(),
        getSecureRandomByte()
      ];
      results.push(octets.join('.'));
    } else {
      const blocks = [
        getSecureRandomHexWord(),
        getSecureRandomHexWord(),
        getSecureRandomHexWord(),
        getSecureRandomHexWord(),
        getSecureRandomHexWord(),
        getSecureRandomHexWord(),
        getSecureRandomHexWord(),
        getSecureRandomHexWord()
      ];
      results.push(blocks.join(':'));
    }
  }

  return results;
}
