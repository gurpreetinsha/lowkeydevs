/**
 * Encrypts/Decrypts a string using Caesar Cipher.
 * @param text The input text.
 * @param shift The shift key (usually 1-25).
 * @param decrypt If true, performs decryption (shifts backwards).
 */
export function caesarCipher(text: string, shift: number, decrypt: boolean = false): string {
  if (!text) return '';
  
  let actualShift = shift % 26;
  if (decrypt) {
    actualShift = (26 - actualShift) % 26;
  }
  
  return text.split('').map(char => {
    const code = char.charCodeAt(0);
    
    // Uppercase letters
    if (code >= 65 && code <= 90) {
      return String.fromCharCode(((code - 65 + actualShift) % 26) + 65);
    }
    
    // Lowercase letters
    if (code >= 97 && code <= 122) {
      return String.fromCharCode(((code - 97 + actualShift) % 26) + 97);
    }
    
    // Keep other characters as-is
    return char;
  }).join('');
}
