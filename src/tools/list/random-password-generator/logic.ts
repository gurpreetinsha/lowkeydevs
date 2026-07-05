export interface PasswordGenOptions {
  length: number;
  quantity: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
  excludeSimilar: boolean;
  excludeAmbiguous: boolean;
}

/**
 * Generates a list of random passwords.
 */
export function generatePasswords(options: PasswordGenOptions): string[] {
  const { length, quantity, uppercase, lowercase, numbers, symbols, excludeSimilar, excludeAmbiguous } = options;

  let lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  let uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let numberChars = '0123456789';
  let symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  if (excludeSimilar) {
    lowercaseChars = lowercaseChars.replace(/[l|o]/g, '');
    uppercaseChars = uppercaseChars.replace(/[I|O]/g, '');
    numberChars = numberChars.replace(/[0|1]/g, '');
    symbolChars = symbolChars.replace(/[|]/g, ''); // exclude similar looking symbols if any
  }

  if (excludeAmbiguous) {
    symbolChars = symbolChars.replace(/[{}[\]()/\/'"`~,;:.<>]/g, '');
  }

  let charPool = '';
  if (lowercase) charPool += lowercaseChars;
  if (uppercase) charPool += uppercaseChars;
  if (numbers) charPool += numberChars;
  if (symbols) charPool += symbolChars;

  if (!charPool) return [];

  const passwords: string[] = [];
  
  const getSecureRandom = (): number => {
    if (typeof globalThis !== 'undefined' && globalThis.crypto) {
      const arr = new Uint32Array(1);
      globalThis.crypto.getRandomValues(arr);
      return arr[0] / (0xffffffff + 1);
    }
    return Math.random();
  };

  for (let q = 0; q < quantity; q++) {
    let pwd = '';
    
    // Ensure we get at least one character from each active category to guarantee composition
    const guaranteed: string[] = [];
    if (lowercase && lowercaseChars) guaranteed.push(lowercaseChars[Math.floor(getSecureRandom() * lowercaseChars.length)]);
    if (uppercase && uppercaseChars) guaranteed.push(uppercaseChars[Math.floor(getSecureRandom() * uppercaseChars.length)]);
    if (numbers && numberChars) guaranteed.push(numberChars[Math.floor(getSecureRandom() * numberChars.length)]);
    if (symbols && symbolChars) guaranteed.push(symbolChars[Math.floor(getSecureRandom() * symbolChars.length)]);
    
    for (let i = 0; i < length; i++) {
      if (i < guaranteed.length) {
        pwd += guaranteed[i];
      } else {
        pwd += charPool[Math.floor(getSecureRandom() * charPool.length)];
      }
    }
    
    // Shuffle the generated password characters to remove the prefix guarantee order
    const pwdArr = pwd.split('');
    for (let i = pwdArr.length - 1; i > 0; i--) {
      const j = Math.floor(getSecureRandom() * (i + 1));
      [pwdArr[i], pwdArr[j]] = [pwdArr[j], pwdArr[i]];
    }

    passwords.push(pwdArr.join(''));
  }

  return passwords;
}
