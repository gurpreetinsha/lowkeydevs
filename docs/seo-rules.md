# SEO Guidelines & Rules - LowKeyDevs

This document defines the strict SEO rules and metadata standards required for every page on the **LowKeyDevs** platform to ensure top search engine rankings.

---

## 1. Title Tags & Meta Descriptions

Every page must contain unique, descriptive, and keyword-optimized `<title>` and `<meta name="description">` tags.

### Page Titles (`<title>`)
- **Format for Tool Pages**: `{Tool Title} - LowKeyDevs` (e.g., *JSON Formatter & Validator - LowKeyDevs*).
- **Format for Category Pages**: `Best {Category Name} Tools Online - LowKeyDevs`.
- **Length**: Between 50 and 60 characters to prevent truncation in search result pages.
- **Rule**: Capitalize appropriately. Title tags must match the primary `<h1>` text of the page.

### Meta Descriptions
- **Length**: Between 120 and 155 characters.
- **Rule**: Must contain a clear call-to-action (e.g., "Format, validate, and beautify your JSON data instantly. 100% private and client-side.").
- **Constraint**: No duplicate descriptions across the site.

---

## 2. Heading Structure (Semantic Hierarchy)

- **Single H1 Rule**: Every page must have exactly *one* `<h1>` tag representing the page's primary name/subject.
- **Hierarchical Nesting**: Sections must flow logically: `<h1>` -> `<h2>` -> `<h3>` -> `<h4>`. Never skip a level (e.g., do not place an `<h3>` directly inside an `<h1>` section without an intermediate `<h2>`).
- **Semantic HTML5**: Wrap headings and content in appropriate semantic elements (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).

---

## 3. Structured Data (JSON-LD)

To stand out in Google Search, every tool page must output structured metadata using the `application/ld+json` format.

### Software Application Schema
Tool pages should declare the `SoftwareApplication` schema:
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "JSON Formatter",
  "operatingSystem": "All",
  "applicationCategory": "DeveloperApplication",
  "browserRequirements": "Requires JavaScript. Requires HTML5.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}
```

### FAQ Schema
If the tool defines FAQ questions, output the `FAQPage` schema:
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is my data sent to a server?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, all processing happens locally in your browser."
      }
    }
  ]
}
```

---

## 4. Canonical URLs & Open Graph

- **Canonical Tag**: Include a `<link rel="canonical" href="https://lowkeydevs.com/tools/slug" />` to resolve duplicate URL indexing issues (e.g., with search query parameters).
- **Open Graph (OG) Tags**:
  - `og:title`: Match page title.
  - `og:description`: Match meta description.
  - `og:url`: Match canonical URL.
  - `og:type`: `website`.
  - `og:image`: Provide a clean, high-contrast, automated preview image URL (e.g., a card showing the tool's name and category).
- **Twitter Cards**: Include `twitter:card` (set to `summary_large_image`) and `twitter:title`/`twitter:description`.

---

## 5. Internal Linking & Crawlability

- **Sitemap**: Keep `sitemap-index.xml` automatically updated via Astro's sitemap integration.
- **Categorical Breadcrumbs**: Always display navigation paths (`Home > JSON Tools > JSON Formatter`) to help search engines understand the site taxonomy.
- **Related Tools Section**: Every tool page must display 3-4 links to related tools to optimize internal PageRank flow.
- **Descriptive Anchors**: Avoid generic link text like "click here" or "learn more". Use descriptive text, e.g., "Use our [Base64 Decoder](/tools/base64-decoder) to inspect the data."
