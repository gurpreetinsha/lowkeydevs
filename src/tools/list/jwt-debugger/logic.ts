// Base64Url helper functions
export function base64UrlDecode(str: string): string {
  let base64 = str.replace(/-/g, '+').replace(/_/g, '/');
  while (base64.length % 4) {
    base64 += '=';
  }
  // Decode support Unicode
  const raw = atob(base64);
  return decodeURIComponent(
    raw
      .split('')
      .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
      .join('')
  );
}

export function base64UrlEncode(str: string): string {
  const bytes = new TextEncoder().encode(str);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

export interface DecodedJWT {
  header: any;
  payload: any;
  headerStr: string;
  payloadStr: string;
  signature: string;
  headerBase64: string;
  payloadBase64: string;
}

export function decodeJWT(token: string): DecodedJWT {
  const parts = token.trim().split('.');
  if (parts.length !== 3) {
    throw new Error('JWT must contain exactly three parts separated by dots');
  }

  const [headerBase64, payloadBase64, signature] = parts;

  try {
    const headerStr = base64UrlDecode(headerBase64);
    const payloadStr = base64UrlDecode(payloadBase64);

    return {
      header: JSON.parse(headerStr),
      payload: JSON.parse(payloadStr),
      headerStr,
      payloadStr,
      signature,
      headerBase64,
      payloadBase64,
    };
  } catch (err: any) {
    throw new Error(`Failed to decode JWT: ${err.message}`);
  }
}

export async function verifyHS256(
  headerBase64: string,
  payloadBase64: string,
  signatureBase64: string,
  secret: string,
  secretIsBase64: boolean = false
): Promise<boolean> {
  try {
    const textEncoder = new TextEncoder();
    let keyData: Uint8Array;
    if (secretIsBase64) {
      // Decode base64 secret
      let base64 = secret.replace(/-/g, '+').replace(/_/g, '/');
      while (base64.length % 4) {
        base64 += '=';
      }
      const binary = atob(base64);
      keyData = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) {
        keyData[i] = binary.charCodeAt(i);
      }
    } else {
      keyData = textEncoder.encode(secret);
    }

    // Import HS256 HMAC key
    const key = await crypto.subtle.importKey(
      'raw',
      keyData,
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign']
    );

    const data = textEncoder.encode(`${headerBase64}.${payloadBase64}`);
    const signatureBuffer = await crypto.subtle.sign('HMAC', key, data);
    
    // Convert signatureBuffer to base64url
    const signatureBytes = new Uint8Array(signatureBuffer);
    let binary = '';
    for (let i = 0; i < signatureBytes.byteLength; i++) {
      binary += String.fromCharCode(signatureBytes[i]);
    }
    const computedSignatureBase64 = btoa(binary)
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');

    return computedSignatureBase64 === signatureBase64;
  } catch (e) {
    return false;
  }
}

export async function signHS256(
  headerStr: string,
  payloadStr: string,
  secret: string,
  secretIsBase64: boolean = false
): Promise<string> {
  const headerBase64 = base64UrlEncode(headerStr);
  const payloadBase64 = base64UrlEncode(payloadStr);
  const textEncoder = new TextEncoder();
  
  let keyData: Uint8Array;
  if (secretIsBase64) {
    let base64 = secret.replace(/-/g, '+').replace(/_/g, '/');
    while (base64.length % 4) {
      base64 += '=';
    }
    const binary = atob(base64);
    keyData = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      keyData[i] = binary.charCodeAt(i);
    }
  } else {
    keyData = textEncoder.encode(secret);
  }

  const key = await crypto.subtle.importKey(
    'raw',
    keyData,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const data = textEncoder.encode(`${headerBase64}.${payloadBase64}`);
  const signatureBuffer = await crypto.subtle.sign('HMAC', key, data);
  
  const signatureBytes = new Uint8Array(signatureBuffer);
  let binary = '';
  for (let i = 0; i < signatureBytes.byteLength; i++) {
    binary += String.fromCharCode(signatureBytes[i]);
  }
  const signatureBase64 = btoa(binary)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  return `${headerBase64}.${payloadBase64}.${signatureBase64}`;
}
