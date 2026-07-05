import { MAPS, convertText, applyCombiningMark, UNDERLINE_MARKS } from '../../utils/unicode';

export interface WhatsAppStyledFont {
  name: string;
  text: string;
  isNative: boolean; // Native WhatsApp markdown vs Unicode
}

export function generateWhatsAppFonts(text: string): WhatsAppStyledFont[] {
  if (!text) return [];

  return [
    // Native WhatsApp markdown styles
    { name: 'WhatsApp Native Bold', text: `*${text}*`, isNative: true },
    { name: 'WhatsApp Native Italic', text: `_${text}_`, isNative: true },
    { name: 'WhatsApp Native Strikethrough', text: `~${text}~`, isNative: true },
    { name: 'WhatsApp Native Monospace', text: `\`\`\`${text}\`\`\``, isNative: true },
    { name: 'WhatsApp Native Bold Italic', text: `*_${text}_*`, isNative: true },
    { name: 'WhatsApp Native Bold Strike', text: `*~${text}~*`, isNative: true },
    { name: 'WhatsApp Native All Combined', text: `*_~${text}~_*`, isNative: true },

    // Unicode font styles
    { name: 'Cursive Font', text: convertText(text, MAPS.scriptNormal), isNative: false },
    { name: 'Double-Struck Font', text: convertText(text, MAPS.doubleStruck), isNative: false },
    { name: 'Bubble White Font', text: convertText(text, MAPS.circledWhite), isNative: false },
    { name: 'Bubble Black Font', text: convertText(text, MAPS.circledBlack), isNative: false },
    { name: 'Gothic Font', text: convertText(text, MAPS.gothicNormal), isNative: false },
    { name: 'Gothic Bold Font', text: convertText(text, MAPS.gothicBold), isNative: false },
    { name: 'Bold Serif Font', text: convertText(text, MAPS.boldSerif), isNative: false },
    { name: 'Italic Serif Font', text: convertText(text, MAPS.italicSerif), isNative: false },
    { name: 'Small Caps Font', text: convertText(text.toLowerCase(), MAPS.smallCaps), isNative: false },
    { name: 'Superscript Font', text: convertText(text, MAPS.superscript), isNative: false },
    { name: 'Underlined Wave Font', text: applyCombiningMark(text, UNDERLINE_MARKS.wave), isNative: false }
  ];
}
