# Performance Budget & Speed Targets - Lowkeydevs

This document defines performance goals, page weight limits, and optimization rules to achieve sub-second load times and perfect Lighthouse scores.

---

## 1. Core Web Vitals & Lighthouse Targets

| Metric | Target | Measurement Condition |
| :--- | :--- | :--- |
| **Lighthouse Performance Score** | **98 - 100** | Mobile & Desktop emulation |
| **Largest Contentful Paint (LCP)** | **< 1.0s** | Over fast 3G network profiles |
| **Interaction to Next Paint (INP)** | **< 100ms** | Client-side calculations |
| **Cumulative Layout Shift (CLS)** | **0.0** | Explicit dimensions on all elements |
| **First Contentful Paint (FCP)** | **< 0.6s** | Pure SSG pages |

---

## 2. Page Weight Budgets (Compressed)

To guarantee instant loads on mobile devices, we enforce strict resource limits:

- **Initial HTML Document**: **< 15 KB**
- **Global Design System CSS**: **< 8 KB**
- **Core Site Script (Theme, Nav)**: **< 3 KB**
- **Per-Tool JS Logic**: **< 15 KB** (For standard converters, casing tools, etc.)
- **Lazy Loaded JS Libraries**: **No limit, but MUST be loaded asynchronously** (e.g. only fetch heavy libraries like PDF parsers or QR engines when the user interacts with the tool).

---

## 3. Optimization Rules

### 3.1 CSS & Font Loading
- **CSS Inlining**: Astro automatically aggregates and inlines critical CSS inside built HTML. Avoid writing large inline styles (`style="..."`) inside components.
- **Font Display**: Use `font-display: swap` for all external fonts to prevent invisible text during loading. Preload the primary `.woff2` font files.
- **System Font Fallbacks**: Always provide fallbacks like `system-ui, -apple-system, sans-serif` to display content instantly before custom fonts download.

### 3.2 JavaScript & Third-Party Code
- **No Third-Party Bloat**: Do not import external packages unless absolutely necessary. Write plain TypeScript helper functions instead.
- **Lazy Hydration**: Use Astro's island directives selectively. Never hydrate a component on page load if it can be deferred until the element is visible (`client:visible`) or idle (`client:idle`).
- **Dynamic Imports**: Import heavy packages dynamically:
  ```typescript
  // Bad: imports the whole library on page load
  import parser from 'heavy-parser-library';

  // Good: loads only when user clicks import
  async function handleImport() {
    const { default: parser } = await import('heavy-parser-library');
    parser.parse(...);
  }
  ```

### 3.3 Layout Shift Prevention (Zero CLS)
- **Explicit Image Dimensions**: Every image (`<img>`) and SVG container must have explicit `width` and `height` attributes to preserve visual space before loading.
- **Font Layout Shifts**: Match system fallback fonts as closely as possible to the custom display font (using adjusted ascent/descent overrides in `@font-face` if necessary) to avoid layout shifts when the font swaps in.

