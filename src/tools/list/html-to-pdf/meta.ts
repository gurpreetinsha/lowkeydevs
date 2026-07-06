import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'html-to-pdf',
  title: 'HTML to PDF',
  description: 'Convert custom HTML code or entire web structures into styled PDF documents. Fully client-side rendering with options for sizing, margins, and orientation.',
  category: 'pdf',
  keywords: ['html to pdf', 'convert html code to pdf', 'webpage to pdf converter', 'online html to pdf', 'render html as pdf client side'],
  icon: 'FileText',
  faqs: [
    {
      question: 'How does client-side HTML to PDF conversion work?',
      answer: 'This tool renders your custom HTML into an isolated sandboxed iframe. It then uses html2pdf.js, which captures the visual styles using html2canvas and translates them into vector PDF components using jsPDF, compiling the file directly in your browser.'
    },
    {
      question: 'Does it support external CSS styles, Google Fonts, and images?',
      answer: 'Yes! You can load external stylesheets (like Tailwind or Bootstrap) and Google Fonts via `<link>` tags, and include inline images. Make sure external resources are CORS-enabled so the canvas renderer can read them.'
    },
    {
      question: 'What page sizes and formats are supported?',
      answer: 'You can choose between A4, Letter, and Legal formats, configure margins (None, Small, or Standard), and set the document orientation to either Portrait or Landscape.'
    }
  ],
  educationalContent: {
    whatIsIt: 'HTML to PDF is a compiler that translates standard web formatting (HTML/CSS) into structured PDF pages. It provides a real-time sandboxed preview window where you can test code, templates, and designs before downloading them as print-ready PDF files.',
    howToUse: '1. Paste or write your HTML code directly into the editor pane.\n2. Choose page layout options (Size, Margins, and Orientation).\n3. Click "Generate PDF Preview" to view the layout.\n4. Click "Download PDF" to save the compiled document.',
    proTips: [
      'Use inline styles or a `<style>` block inside the HTML for the most reliable CSS rendering.',
      'Add the CSS rule `page-break-after: always;` to force manual page breaks inside your PDF document.'
    ]
  }
};
