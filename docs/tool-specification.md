# Tool Specification - Lowkeydevs

This document defines the exact data structures, coding interfaces, and design patterns required for implementing a tool on the **Lowkeydevs** platform.

---

## 1. Type Definitions

All tools must adhere to the definitions declared in `src/tools/definitions.ts`.

### Tool Category Enum
```typescript
export type ToolCategory = 
  | 'text'          // Casing, diffs, formatting
  | 'json-yaml'      // Formatters, validators, converters (JSON, XML, YAML, CSV)
  | 'generators'     // Password, UUID, QR code, Lorem Ipsum
  | 'converters'     // Base64, Hex, Unit converters, URL encoding
  | 'dev-utils'      // Crontab generator, RegEx tester, epoch time
  | 'design'         // Color pickers, contrast checkers, image resizing
  | 'security';      // Hashing (MD5, SHA), cryptography, password checkers
```

### Static Metadata (`ToolMeta`)
```typescript
export interface ToolFAQ {
  question: string;
  answer: string;
}

export interface EducationalSection {
  title: string;
  paragraphs: string[];
}

export interface ToolMeta {
  slug: string;                  // URL-friendly slug (e.g. 'json-formatter')
  title: string;                 // Human-readable title
  description: string;           // Search meta description (120-155 characters)
  category: ToolCategory;        // Tool category grouping
  keywords: string[];            // Keywords used for SEO and internal search
  icon: string;                  // Lucide icon name (e.g. 'FileCode', 'Key')
  faqs: ToolFAQ[];               // FAQs rendered in structured accordion
  educationalContent: {          // Educational guide detailing usage
    whatIsIt: string;            // Explanation of the tool
    howToUse: string;            // Simple step-by-step instructions
    proTips?: string[];          // Advanced usage hints
  };
}
```

---

## 2. Code Structure Pattern

Each tool is implemented using three files inside `src/tools/list/[tool-slug]/`:

### File 1: `meta.ts`
```typescript
import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'json-formatter',
  title: 'JSON Formatter & Validator',
  description: 'Format, validate, beautify, and minify your JSON data instantly. Process everything client-side for maximum privacy.',
  category: 'json-yaml',
  keywords: ['json formatter', 'json beautifier', 'validate json', 'minify json', 'prettify json'],
  icon: 'Braces',
  faqs: [
    {
      question: 'Is my JSON data secure?',
      answer: 'Yes. All formatting and validation processes happen entirely in your browser. No data is sent to our servers.'
    }
  ],
  educationalContent: {
    whatIsIt: 'A JSON Formatter cleans up minified JSON strings, making them readable for developers.',
    howToUse: 'Paste your raw JSON in the input field. The formatted result will render instantly. Use the copy button to retrieve it.'
  }
};
```

### File 2: `logic.ts`
All business logic is written as pure, testable, dependency-free TypeScript functions.
```typescript
/**
 * Formats a raw JSON string.
 * @param jsonString The raw string input
 * @param spacing Indentation depth
 * @returns Formatted JSON string
 * @throws Error if input is invalid JSON
 */
export function formatJson(jsonString: string, spacing: number = 2): string {
  const trimmed = jsonString.trim();
  if (!trimmed) return '';
  const parsed = JSON.parse(trimmed);
  return JSON.stringify(parsed, null, spacing);
}

/**
 * Minifies a JSON string.
 */
export function minifyJson(jsonString: string): string {
  const trimmed = jsonString.trim();
  if (!trimmed) return '';
  const parsed = JSON.parse(trimmed);
  return JSON.stringify(parsed);
}
```

### File 3: `ui.astro`
To maintain lightweight page loads, we use native **Custom Elements**.
```astro
---
import { meta } from './meta';
---

<div class="tool-container">
  <div class="control-panel">
    <button data-action="format" class="btn primary">Beautify</button>
    <button data-action="minify" class="btn secondary">Minify</button>
    <button data-action="clear" class="btn text">Clear</button>
  </div>
  
  <div class="editor-grid">
    <textarea id="json-input" placeholder="Paste your JSON here..." aria-label="JSON Input"></textarea>
    <div class="output-wrapper">
      <button data-action="copy" class="btn-copy" aria-label="Copy to clipboard">Copy</button>
      <pre id="json-output"></pre>
    </div>
  </div>
</div>

<script>
  import { formatJson, minifyJson } from './logic';

  class JsonFormatterTool extends HTMLElement {
    inputEl!: HTMLTextAreaElement;
    outputEl!: HTMLPreElement;

    connectedCallback() {
      this.inputEl = this.querySelector('#json-input') as HTMLTextAreaElement;
      this.outputEl = this.querySelector('#json-output') as HTMLPreElement;

      // Event delegation for actions
      this.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const action = target.closest('[data-action]')?.getAttribute('data-action');
        
        if (action === 'format') this.handleFormat();
        if (action === 'minify') this.handleMinify();
        if (action === 'clear') this.handleClear();
        if (action === 'copy') this.handleCopy();
      });

      // Instant preview: Format as user types (debounce optional)
      this.inputEl.addEventListener('input', () => this.handleFormat(true));
    }

    handleFormat(silentError = false) {
      try {
        const result = formatJson(this.inputEl.value);
        this.outputEl.textContent = result;
        this.outputEl.classList.remove('error');
      } catch (err: any) {
        if (!silentError) {
          this.outputEl.textContent = `Error: ${err.message}`;
          this.outputEl.classList.add('error');
        }
      }
    }

    handleMinify() {
      try {
        const result = minifyJson(this.inputEl.value);
        this.outputEl.textContent = result;
        this.outputEl.classList.remove('error');
      } catch (err: any) {
        this.outputEl.textContent = `Error: ${err.message}`;
        this.outputEl.classList.add('error');
      }
    }

    handleClear() {
      this.inputEl.value = '';
      this.outputEl.textContent = '';
      this.outputEl.classList.remove('error');
    }

    async handleCopy() {
      const text = this.outputEl.textContent;
      if (!text) return;
      await navigator.clipboard.writeText(text);
      
      const copyBtn = this.querySelector('[data-action="copy"]');
      if (copyBtn) {
        copyBtn.textContent = 'Copied!';
        setTimeout(() => copyBtn.textContent = 'Copy', 1500);
      }
    }
  }

  // Register the element tag uniquely
  if (!customElements.get('json-formatter-tool')) {
    customElements.define('json-formatter-tool', JsonFormatterTool);
  }
</script>

