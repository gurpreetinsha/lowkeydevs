import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'jwt-debugger',
  title: 'JWT Debugger & Decoder',
  description: 'Decode, validate, edit, and verify JSON Web Tokens (JWT) client-side. Test HS256 signatures safely without uploading data to servers.',
  category: 'security',
  keywords: [
    'jwt debugger',
    'jwt decoder',
    'decode jwt',
    'verify jwt signature',
    'json web token',
    'jwt parser',
    'hs256 verifier',
  ],
  icon: 'Shield',
  faqs: [
    {
      question: 'Is my JWT data secure?',
      answer: 'Yes. All parsing, validation, and signature verification are processed 100% client-side inside your browser using Javascript and the Web Crypto API. Your tokens and secret keys are never sent to any server.',
    },
    {
      question: 'How does signature verification work?',
      answer: 'For HS256 (HMAC-SHA256) signatures, you can type your secret key into the verifier box. The browser will compute the HMAC signature of the header and payload and check if it matches the token\'s signature. Checkboxes allow you to specify if the secret is raw text or base64url-encoded.',
    },
    {
      question: 'Can I edit the JWT and create a new one?',
      answer: 'Yes! If you modify the JSON fields in the decoded Header or Payload panels, the debugger will automatically re-encode the parts and update the JWT string on the left in real time.',
    },
  ],
  educationalContent: {
    whatIsIt: 'JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs consist of three parts separated by dots (.): Header, Payload, and Signature.',
    howToUse: '1. Paste your encoded JWT token into the left-hand text area.\n2. The Header, Payload, and Signature will instantly decode and show on the right.\n3. Enter your secret key in the signature area to verify the token\'s authenticity.\n4. Modify any header or payload parameters to generate a new encoded token dynamically.',
    proTips: [
      'Hover over timestamp claims like "exp" (expiration) or "iat" (issued at) to see human-readable date formats in local time.',
      'Check the "Secret is Base64 encoded" box if your secret key is in base64/base64url format.',
    ],
  },
};
