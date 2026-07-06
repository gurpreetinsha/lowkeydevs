import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'ai-pdf-summarizer',
  title: 'AI PDF Summarizer',
  description: 'Summarize, analyze, and translate PDF files locally in your browser. Paste your API key to converse with your document securely and privately.',
  category: 'pdf',
  keywords: ['ai pdf summarizer', 'chat with pdf', 'pdf translator', 'summarize pdf online', 'client side pdf ai helper', 'gemini pdf summarizer'],
  icon: 'Sparkles',
  faqs: [
    {
      question: 'How does client-side AI PDF Summarization work?',
      answer: 'This tool extracts text content from all pages of your PDF document using PDF.js. It then integrates directly with AI services (like Gemini API or OpenAI API) client-side using your API key. If no key is provided, it operates in heuristic offline analysis mode, giving you stats and structural breakdown.'
    },
    {
      question: 'Is my API key stored securely?',
      answer: 'Yes. Your API key is stored locally in your browser\'s localStorage. It is never transmitted to any third party other than the official AI provider endpoints (Google or OpenAI) during chat queries.'
    },
    {
      question: 'Can I translate my PDF to other languages?',
      answer: 'Yes! Once text is extracted, you can request translations or ask questions in any language supported by the AI model.'
    }
  ],
  educationalContent: {
    whatIsIt: 'AI PDF Summarizer is a document analyzer that combines local text extraction with API model interfaces. It lets you extract full document contents, draft bulleted summaries, generate outlines, and query the document text directly in a conversational format.',
    howToUse: '1. Select and upload your PDF document.\n2. Configure your AI service by entering your Gemini or OpenAI API Key (or use the mock analyzer to inspect document stats).\n3. Click "Generate Summary" to run the extraction.\n4. Type custom questions, summaries, or translations in the chat panel.',
    proTips: [
      'Enter an API key for the Gemini model to get advanced multi-page insights.',
      'Ask the chatbot specific questions about contents (e.g. "What is the expiration date in this contract?") to extract data instantly.'
    ]
  }
};
