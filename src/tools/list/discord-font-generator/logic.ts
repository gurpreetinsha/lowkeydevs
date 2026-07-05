import { MAPS, convertText, applyCombiningMark, UNDERLINE_MARKS } from '../../utils/unicode';

export interface DiscordStyledFont {
  name: string;
  text: string;
  isAnsi?: boolean;
}

export function generateDiscordFonts(text: string): DiscordStyledFont[] {
  if (!text) return [];

  return [
    // Discord Markdown
    { name: 'Discord Bold', text: `**${text}**` },
    { name: 'Discord Italic', text: `*${text}*` },
    { name: 'Discord Underline', text: `__${text}__` },
    { name: 'Discord Strikethrough', text: `~~${text}~~` },
    { name: 'Discord Spoiler (Click to reveal)', text: `||${text}||` },
    { name: 'Discord Quote Block', text: `> ${text}` },
    { name: 'Discord Underline Bold Italic', text: `___**${text}**___` },

    // Discord ANSI Color Codes
    { name: 'ANSI Color: Red', text: `\`\`\`ansi\n\u001b[2;31m${text}\u001b[0m\n\`\`\``, isAnsi: true },
    { name: 'ANSI Color: Green', text: `\`\`\`ansi\n\u001b[2;32m${text}\u001b[0m\n\`\`\``, isAnsi: true },
    { name: 'ANSI Color: Yellow', text: `\`\`\`ansi\n\u001b[2;33m${text}\u001b[0m\n\`\`\``, isAnsi: true },
    { name: 'ANSI Color: Blue', text: `\`\`\`ansi\n\u001b[2;34m${text}\u001b[0m\n\`\`\``, isAnsi: true },
    { name: 'ANSI Color: Pink / Magenta', text: `\`\`\`ansi\n\u001b[2;35m${text}\u001b[0m\n\`\`\``, isAnsi: true },
    { name: 'ANSI Color: Cyan', text: `\`\`\`ansi\n\u001b[2;36m${text}\u001b[0m\n\`\`\``, isAnsi: true },
    { name: 'ANSI Color: Highlight Yellow Background', text: `\`\`\`ansi\n\u001b[2;43m${text}\u001b[0m\n\`\`\``, isAnsi: true },

    // Unicode font styles
    { name: 'Gothic Normal', text: convertText(text, MAPS.gothicNormal) },
    { name: 'Gothic Bold', text: convertText(text, MAPS.gothicBold) },
    { name: 'Cursive / Script', text: convertText(text, MAPS.scriptNormal) },
    { name: 'Cursive Bold', text: convertText(text, MAPS.scriptBold) },
    { name: 'Double-Struck', text: convertText(text, MAPS.doubleStruck) },
    { name: 'Bubble White', text: convertText(text, MAPS.circledWhite) },
    { name: 'Bubble Black', text: convertText(text, MAPS.circledBlack) },
    { name: 'Small Caps', text: convertText(text.toLowerCase(), MAPS.smallCaps) }
  ];
}
