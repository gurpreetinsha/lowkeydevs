export interface WideStyle {
  name: string;
  text: string;
}

export function toFullWidth(text: string): string {
  return text
    .split('')
    .map(char => {
      const code = char.charCodeAt(0);
      // ASCII printable characters range from 33 (!) to 126 (~)
      if (code >= 33 && code <= 126) {
        return String.fromCharCode(code + 65248);
      }
      // Space is special
      if (code === 32) {
        return '\u3000'; // Ideographic Space
      }
      return char;
    })
    .join('');
}

export function generateWideStyles(text: string, customSpacer: string = ' ', spacingCount: number = 1): WideStyle[] {
  if (!text) return [];

  // Fullwidth
  const fullWidth = toFullWidth(text);

  // Spaced variations
  const spaced1 = text.split('').filter(c => c !== ' ').join(' '.repeat(spacingCount));
  const customSpaced = text.split('').filter(c => c !== ' ').join(customSpacer.repeat(spacingCount));

  // Vaporwave styling (Fullwidth capitalized)
  const vaporwave = toFullWidth(text.toUpperCase());

  return [
    { name: 'Fullwidth (Unicode)', text: fullWidth },
    { name: 'Vaporwave (Fullwidth UPPERCASE)', text: vaporwave },
    { name: `Custom Spacing (Spacer: "${customSpacer}", Count: ${spacingCount})`, text: customSpaced },
    { name: 'Standard Wide Spaced', text: spaced1 },
    { name: 'Double Spaced', text: text.split('').join('  ') }
  ];
}
