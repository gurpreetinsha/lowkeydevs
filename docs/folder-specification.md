# Folder Layout Specification - LowKeyDevs

This document defines the folder structure and codebase organization for the **LowKeyDevs** project.

---

## 1. Directory Structure Overview

```
lowkeydevs/
├── docs/                      # Architectural and design specification markdown files
├── public/                    # Raw static assets
│   ├── favicon.svg            # Site favicon
│   ├── favicon.ico
│   └── search-index.json      # Auto-generated build-time search index
├── src/
│   ├── assets/                # Images, fonts, and global assets to be optimized by Astro
│   ├── components/            # Reusable UI components
│   │   ├── base/              # Primitives (Button.astro, Textarea.astro, Toggle.astro)
│   │   ├── Header.astro       # Global site navigation header
│   │   ├── Footer.astro       # Global footer
│   │   └── ToolCard.astro     # Standard grid cards for displaying tools
│   ├── layouts/               # Common layouts
│   │   ├── Layout.astro       # Main site layout (SEO, HTML tags, Theme script)
│   │   └── ToolLayout.astro   # Dedicated layout for tools (handles meta, layout, content)
│   ├── pages/                 # File-based routing
│   │   ├── index.astro        # Homepage (instant search, categories)
│   │   ├── tools/
│   │   │   ├── [slug].astro   # Dynamic route rendering a specific tool
│   │   │   └── category/
│   │   │       └── [category].astro # Dynamic route rendering a category list page
│   │   ├── about.astro        # Static content page
│   │   └── privacy.astro      # Privacy policy page
│   ├── styles/                # Global styling stylesheets
│   │   └── index.css          # Design system variables, dark/light theme, resets
│   └── tools/                 # Tool logic & configurations
│       ├── definitions.ts     # TypeScript interfaces for tools and categories
│       ├── registry.ts        # Registrar importing and exporting all tools
│       └── list/              # Isolated directory per tool
│           └── [tool-slug]/   # e.g., json-formatter/
│               ├── meta.ts    # Title, description, keywords, FAQs, and schemas
│               ├── logic.ts   # Pure typescript business logic functions
│               ├── logic.test.ts # Vitest/Jest unit tests for business logic
│               └── ui.astro   # Interactive tool wrapper & UI Custom Element
├── astro.config.mjs           # Astro configurations
├── package.json               # Package dependencies & commands
├── tsconfig.json              # TypeScript compilation setup
└── vitest.config.ts           # Test configuration
```

---

## 2. Directory Guidelines

### `src/tools/list/[tool-slug]`
This directory houses the entire lifecycle of a tool. Keeping all components of a single tool in one directory guarantees high cohesion and makes code deletion or refactoring simple.
- **`meta.ts`**: Static metadata exported as a `ToolMeta` constant. Read during SSG for routing and SEO.
- **`logic.ts`**: Pure functions for data transformation. Absolutely NO references to `document`, `window`, or browser specific globals. This allows execution in standard Node/Deno environments for testing.
- **`ui.astro`**: Renders the tool interface layout. Instantiates a client-side Custom Element (e.g. `<json-formatter-tool>`) encapsulating DOM events and interactivity.

### `src/components/base/`
Atomic components that provide visual and functional consistency. Every base component must be:
- Accessible (correct aria attributes, roles, and keyboard navigation support).
- Theme-aware.
- Flexible through props (e.g., passing class overrides, disabled states).
