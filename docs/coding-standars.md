# Coding Standards & Guidelines - LowKeyDevs

This document defines the coding standards, TypeScript conventions, accessibility rules, and testing requirements for the **LowKeyDevs** project.

---

## 1. TypeScript Coding Style

We enforce strict TypeScript configurations. All code must compile without errors or warnings.

- **Prefer Type Inference**: Let TypeScript infer types for simple variables, but explicitly declare return types on all exported functions, especially in `logic.ts` files.
- **Avoid `any`**: Do not use `any`. Use `unknown` if a type is truly dynamic, or define proper union types.
- **Explicit Access Modifiers**: When writing class-based Custom Elements, use `private`, `protected`, and `public` methods to define scope clearly.
- **Pure Functions**: Write business logic as pure functions. A pure function:
  1. Given the same inputs, always returns the same output.
  2. Produces no side effects (no DOM manipulation, no local storage writing, no state modifications outside the function scope).

---

## 2. Accessibility (A11y) Requirements

Accessibility is a core requirement, not a secondary feature.

- **Semantic Tags**: Use `<button>` for actions and `<a>` for navigation. Do not add click handlers to generic `<div>` or `<span>` elements without proper ARIA role and keyboard bindings.
- **Keyboard Navigation**: Every interactive element must be focusable using the `Tab` key. Custom Elements must support keyboard equivalents (e.g., hitting `Enter` or `Space` triggers action buttons).
- **Aria Labels**: All icon-only buttons or inputs without a visible text label must contain an `aria-label` or `aria-labelledby` attribute.
- **Focus Rings**: Never disable focus rings (`outline: none` or `outline: 0`) without providing an equivalent, visible focus state (`:focus-visible` styling).

---

## 3. Custom Element Best Practices

When building interactivity with native HTML5 Custom Elements inside Astro:

- **Element Querying**: Scope DOM querying to the element instance (`this.querySelector(...)`) instead of querying globally (`document.querySelector(...)`). This prevents cross-contamination if multiple instances of the same tool are rendered on one page.
- **Cleanup Handlers**: If you register global event listeners (e.g., listening to `window` resize or `document` keydown), always clean them up inside the `disconnectedCallback()` lifecycle method:
  ```typescript
  class KeyboardShortcutListener extends HTMLElement {
    private handler = (e: KeyboardEvent) => this.onKey(e);

    connectedCallback() {
      window.addEventListener('keydown', this.handler);
    }

    disconnectedCallback() {
      window.removeEventListener('keydown', this.handler);
    }

    private onKey(e: KeyboardEvent) { ... }
  }
  ```
- **Avoid Global State**: Do not share mutable state on global objects (`window.someState = ...`). Share state between elements via custom events, URL query parameters, or local storage.
- **No Inline Scripts**: Write scripts inside Astro’s standard `<script>` tags, which automatically bundle, compile, and optimize the code.

---

## 4. Testing Guidelines

All business logic inside `logic.ts` must be verified using unit tests.

- **Location**: Store tests adjacent to code, named as `logic.test.ts`.
- **Coverage**: Aim for 100% test coverage on core utility logic (e.g. edge cases, invalid inputs, empty states, boundary values).
- **Test Framework**: We use Vitest for fast, native ESModule test execution.
- **Sample Test Structure**:
  ```typescript
  import { describe, it, expect } from 'vitest';
  import { formatJson } from './logic';

  describe('formatJson', () => {
    it('should format minified JSON strings', () => {
      const input = '{"a":1}';
      expect(formatJson(input)).toBe('{\n  "a": 1\n}');
    });

    it('should throw an error on invalid JSON input', () => {
      const input = '{"a":1';
      expect(() => formatJson(input)).toThrow();
    });
  });
  ```
