export const DENSITY_RAMPS = {
  standard: '$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,\\"^`\'. ',
  short: '@#W$9876543210?!abc;:+=-,._ ',
  blocks: '█▓▒░ ',
  minimal: '#+-.'
};

export interface ASCIICharacterMapOptions {
  ramp: keyof typeof DENSITY_RAMPS;
  width: number;
  contrast: number;
  brightness: number;
  invert: boolean;
  colorMode: 'bw' | 'color';
}
