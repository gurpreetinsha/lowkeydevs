import { MAPS, convertText } from '../../utils/unicode';

export interface CuteStyledFont {
  name: string;
  text: string;
}

export function generateCuteFonts(text: string): CuteStyledFont[] {
  if (!text) return [];

  // Convert versions
  const script = convertText(text, MAPS.scriptNormal);
  const bubbles = convertText(text, MAPS.circledWhite);
  const smallcaps = convertText(text.toLowerCase(), MAPS.smallCaps);
  const doubleStruck = convertText(text, MAPS.doubleStruck);

  return [
    { name: 'Coquette Bows', text: `୨🎀୧ ${script} ୨🎀୧` },
    { name: 'Soft Angel Wings', text: `ʚ ${script} ɞ` },
    { name: 'Aesthetic Hearts', text: `ʚ♡⃛ɞ ${text} ʚ♡⃛ɞ` },
    { name: 'Sweet Strawberry', text: `🍓 ${bubbles} 🍓` },
    { name: 'Dreamy Sparkles', text: `✧･ﾟ:* ${script} *:･ﾟ✧` },
    { name: 'Cute Tulips', text: `𓍢ִ໋🌷͙֒ ${smallcaps} 𓍢ִ໋🌷͙֒` },
    { name: 'Kaomoji Flower Hug', text: `(✿◠‿◠) ${text} (◡‿◡✿)` },
    { name: 'Cloudy Sky', text: `⋆｡ﾟ☁︎｡⋆｡ ﾟ ${doubleStruck} ﾟ ｡☁︎｡ﾟ⋆` },
    { name: 'Crescent Moon', text: `☾ ${script} ☽` },
    { name: 'Lollipop Stars', text: `🍭🍭 ${text} 🍭🍭` },
    { name: 'Teddy Bear', text: `🧸 ${smallcaps} 🧸` },
    { name: 'Cute Sparkle Border', text: `｡☆✼★ ${text} ★✼☆｡` },
    { name: 'Whimsical Swirls', text: `✿°•.¸ ${script} ¸.•°✿` },
    { name: 'Happy Kaomoji', text: `(๑>ᴗ<๑) ${bubbles} ♡` },
    { name: 'Magical Wand', text: `🪄✨ ${smallcaps} ✨🪄` },
    { name: 'Love Hearts', text: `♥ ${text} ♥` }
  ];
}
