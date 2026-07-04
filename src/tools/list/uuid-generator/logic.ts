export interface UuidOptions {
  quantity: number;
  uppercase: boolean;
  hyphens: boolean;
  braces: boolean;
}

/**
 * Generates a single v4 UUID based on options.
 */
export function generateUuid(options: Omit<UuidOptions, 'quantity'> = { uppercase: false, hyphens: true, braces: false }): string {
  let uuid = '';
  
  if (typeof globalThis !== 'undefined' && globalThis.crypto && typeof globalThis.crypto.randomUUID === 'function') {
    uuid = globalThis.crypto.randomUUID();
  } else {
    // Math.random fallback for environments without Web Crypto randomUUID support
    uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  if (!options.hyphens) {
    uuid = uuid.replace(/-/g, '');
  }
  
  if (options.uppercase) {
    uuid = uuid.toUpperCase();
  }
  
  if (options.braces) {
    uuid = `{${uuid}}`;
  }
  
  return uuid;
}

/**
 * Generates an array of UUIDs.
 */
export function generateUuids(options: UuidOptions): string[] {
  const qty = Math.max(1, Math.min(100, options.quantity));
  const list: string[] = [];
  
  for (let i = 0; i < qty; i++) {
    list.push(generateUuid(options));
  }
  
  return list;
}
