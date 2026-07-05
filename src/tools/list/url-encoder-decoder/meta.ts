import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'url-encoder-decoder',
  title: 'URL Encoder & Decoder',
  description: 'Encode or decode URL percent strings. Clean formatting, client-side execution, and mode configuration for components.',
  category: 'converters',
  keywords: ['url encoder', 'url decoder', 'url encode', 'url decode', 'percent encoding', 'url escape'],
  icon: 'Link',
  faqs: [
    {
      question: 'Why do we need URL encoding?',
      answer: 'URLs can only contain standard ASCII characters. Characters outside this set (like spaces, emojis, or query symbols) must be converted to a percent-encoded format to be transmitted safely.'
    },
    {
      question: 'What is the difference between URL encoding and URL component encoding?',
      answer: 'Standard URL encoding leaves routing characters (like /, ?, :, @) intact. Component encoding converts all special characters including routing characters, which is required when embedding a URL inside a query parameter.'
    }
  ],
  educationalContent: {
    whatIsIt: 'A URL Encoder and Decoder translates special characters into percent-encoded triplets (e.g. space to %20) and back, conforming to the RFC 3986 specification.',
    howToUse: 'Enter the text or URL into the input field. Select the encoding mode ("Standard" or "Encode All"), and click "Encode" or "Decode". Copy the result instantly.',
    proTips: [
      'Choose "Encode All" when preparing a full URL to be passed inside a query parameter of another URL.',
      'Check the error banner for diagnostic info if the string contains invalid percent-escape sequences during decoding.'
    ]
  }
};
