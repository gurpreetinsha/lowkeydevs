# Design Language & Style Guide - LowKeyDevs

This document defines the visual design system, token guidelines, and UI components for **LowKeyDevs**. The design aims to look ultra-premium, dark-mode first (with light-mode support), accessible, and lightning-fast.

---

## 1. Visual Aesthetics & Philosophy

- **Premium Glassmorphism**: Cards and panels should utilize soft transparency, subtle border glows, and backdrop blurs to establish depth.
- **Electric Accent Gradients**: High-contrast, tailored HSL color palettes that make interactive elements stand out without creating visual noise.
- **Fluid Typography**: Standardize modern typography that scales smoothly across devices.
- **Micro-Animations**: Hover states, focus outlines, copy feedback, and page transitions must use cubic-bezier easing for a smooth, organic feel.

---

## 2. Typography

We use Google Fonts:
- **Headings**: `Outfit` (sans-serif, geometric, premium).
- **Body Text**: `Inter` (neutral, high legibility).
- **Monospace (Code/Inputs)**: `JetBrains Mono` (ideal for JSON, code syntax, and numbers).

```css
--font-sans: 'Inter', system-ui, -apple-system, sans-serif;
--font-display: 'Outfit', var(--font-sans);
--font-mono: 'JetBrains Mono', monospace;
```

---

## 3. Color Palette (HSL System)

We use curated HSL values to easily enable theme adjustments and transparency states.

### Sleek Dark Mode (Default)
- **Background**: HSL(224, 25%, 8%) — Deep obsidian blue-gray.
- **Surface (Cards/Containers)**: HSL(224, 25%, 12%) — Rich charcoal gray.
- **Borders**: HSL(224, 20%, 20% / 0.4) — Translucent boundary.
- **Primary Accent**: HSL(263, 90%, 64%) — Electric indigo.
- **Primary Gradient**: `linear-gradient(135deg, HSL(263, 90%, 64%) 0%, HSL(292, 84%, 60%) 100%)`
- **Secondary Accent**: HSL(192, 95%, 50%) — Cyber cyan.
- **Text Primary**: HSL(210, 40%, 98%) — Crisp near-white.
- **Text Secondary**: HSL(215, 20%, 75%) — Muted slate.

### Clean Light Mode
- **Background**: HSL(220, 30%, 97%) — Soft silver-gray.
- **Surface**: HSL(0, 0%, 100%) — Pure white.
- **Borders**: HSL(220, 20%, 90%) — Soft gray.
- **Primary Accent**: HSL(263, 90%, 54%) — Strong royal indigo.
- **Primary Gradient**: `linear-gradient(135deg, HSL(263, 90%, 54%) 0%, HSL(280, 80%, 50%) 100%)`
- **Text Primary**: HSL(224, 25%, 12%) — Obsidian dark.
- **Text Secondary**: HSL(220, 15%, 45%) — Charcoal gray.

---

## 4. UI Components Specification

### 4.1 Buttons
Buttons are clean, hover-reactive elements with slight transformations.
- **Primary**: Gradient background, text white, smooth hover translate-y (-1px) + subtle box shadow glow.
- **Secondary**: Translucent surface with border, accentuating on hover.
- **Disabled**: Slate background, low opacity, `cursor: not-allowed`.

```css
.btn {
  font-family: var(--font-display);
  font-weight: 500;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.btn:hover {
  transform: translateY(-1px);
}
.btn:active {
  transform: translateY(0);
}
```

### 4.2 Form Controls (Inputs, Textareas)
- Default background: Darkened translucent surface.
- Focus State: Border color shifts to Primary Accent, with an outer glow `box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.15)`.
- Typographic style in inputs: monospace by default for clean horizontal code/data alignment.

### 4.3 Cards (Tool Cards)
- Border: `1px solid var(--border-color)`.
- Background: Soft backdrop-filter blur with surface opacity.
- Hover state: Accent border color transition and a subtle, high-performance transform scale `scale(1.02)`.

---

## 5. Animations & Micro-Interactions

Keep animations fast and light (under 250ms).
- **Scale-Up Toggles**: Transitions on checkbox toggles.
- **Smooth Clipboard Indicator**: Instant fade-in of the "Copied!" checkmark, followed by a soft fade-out.
- **Hover Glows**: Border glows on cards using CSS custom properties.
- **Page Transitions**: Simple fade-in of pages to avoid jarring layout shifts.
