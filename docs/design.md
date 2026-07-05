# LowKeyDevs Design System & Specification

This document defines the core visual design guidelines, design tokens, typography, and responsive layout specs for the LowKeyDevs online utility platform, reflecting its forward-looking, highly engineered, and slightly avant-garde visual identity.

---

## 1. Typography

The platform utilizes three distinct font families loaded asynchronously to optimize page loads, relying on a sharp contrast between brutalist display type and clean utilitarian UI text:

* **Headings**: `Agrandir` (Weight: 500)
* Used for main headers, section headings, and hero titles.
* Requires tight, strict negative letter-spacing (e.g., `-1.92px` at 64px scaling down proportionally) to create modern, editorial density.
* Responsive scaling is configured via `clamp()` (e.g., `clamp(42px, 5vw, 72px)`).


* **Body & UI Text**: `Inter` (Weights: 400, 500)
* Used for general descriptions, buttons, tags, form labels, and navigation. Acts as the neutral, highly legible counterbalance to the display type.


* **Code & Input Elements**: `JetBrains Mono` (Weights: 400, 500)
* Used in raw textareas, output boxes, input text fields, and code viewer panels.



---

## 2. Color System & Themes

LowKeyDevs supports automatic system-preference theme detection and manual light/dark mode toggling, persisted in local storage. The palette is anchored by a stark white canvas, a deep cosmic void (`#050010`), and a single vibrant purple chromatic event.

### Light Theme

* **Background (`--bg`)**: `#FFFFFF` (Pure white canvas)
* **Primary Surface (`--surface`)**: `#FFFFFF` (Pure white for cards and widgets)
* **Surface Hover (`--surface-hover`)**: `#F7F7F8` (Barely tinted off-white)
* **Borders (`--border` / `--border-hover`)**: `#E5E5E5` / `#D4D4D4` (Strict, neutral greys for hairlines)
* **Primary Text (`--text-primary`)**: `#050010` (Deep Void — near-black)
* **Secondary Text (`--text-secondary`)**: `#6B6678` (Muted Void / tinted grey)
* **Accent Color (`--accent` / `--accent-hover`)**: `#8C52FF` / `#6F33EB` (Primary Purple / Deep Purple)
* **Accent Text On (`--accent-on`)**: `#FFFFFF` (White text for high contrast on the purple button)
* **Accent Subtle (`--accent-subtle`)**: `rgba(140, 82, 255, 0.1)` (Background for badges/pills)

### Dark Theme

* **Background (`--bg`)**: `#050010` (Deep Void page background)
* **Primary Surface (`--surface`)**: `#130D24` (Slightly lifted void for nested cards)
* **Surface Elevated (`--surface-elevated`)**: `#1B1333` (Used for active states/panels)
* **Surface Hover (`--surface-hover`)**: `#21173D`
* **Borders (`--border` / `--border-hover`)**: `#2D2342` / `#413559`
* **Primary Text (`--text-primary`)**: `#FFFFFF` (Pure white)
* **Secondary Text (`--text-secondary`)**: `#A19DB0` (Muted light grey)
* **Accent Color (`--accent` / `--accent-hover`)**: `#8C52FF` / `#AB7DF9` (Primary Purple / Soft Purple)
* **Accent Text On (`--accent-on`)**: `#FFFFFF`

---

## 3. Spacing Grid

We use an 8-point spacing grid for layout margins, padding, and element gaps:

* `--space-0-5`: `2px`
* `--space-1`: `4px`
* `--space-1-5`: `6px`
* `--space-2`: `8px`
* `--space-3`: `12px`
* `--space-4`: `16px`
* `--space-5`: `20px`
* `--space-6`: `24px`
* `--space-8`: `32px`
* `--space-10`: `40px`
* `--space-12`: `48px`
* `--space-16`: `64px`
* `--space-20`: `80px`
* `--space-24`: `96px`

---

## 4. Borders & Corner Radii

Borders are strictly kept to a subtle `1px` width. Corner rounding is structured in a tight, square-ish scale to retain a functional, technical aesthetic:

* `--radius-sm`: `6px` (Small buttons, copy badges, keyboard shortcuts — the signature UI shape)
* `--radius-md`: `8px` (Inputs, textareas, category tabs, smaller widgets)
* `--radius-lg`: `12px` (Cards, sidebars, content widgets, search modals)
* `--radius-xl`: `16px` (Outer containers / main panels if needed)
* `--radius-full`: `9999px` (Pills, badges)

---

## 5. Responsive Layout Architecture

The site uses a fully fluid design that handles multiple screen widths:

### Containers

* **Global Container (`.container`)**: Center-aligned layout container. `max-width: 1280px;` with horizontal padding fluidly scaling from `16px` to `32px` (`clamp(16px, 4vw, 32px)`).
* **Narrow Container (`.container-narrow`)**: Used for text-heavy focus pages (e.g., Privacy, About). `max-width: 720px;`.

### Key Breakpoints & Adjustments

* **Desktop & Large Screen (> 1024px)**:
* Tool layout displays in a two-column grid: a main work area and a `320px` sidebar containing sponsor cards, related utilities, and compliance badges.


* **Tablet View (<= 1024px)**:
* Tool layout collapses sidebar below the main workspace area.


* **Mobile Switch (<= 768px)**:
* Top navigation links collapse into an off-screen mobile drawer (slides from right using translation).
* Editor workspace splits (input/output panels) switch from side-by-side (2 columns) to vertical stacking (1 column).


* **Compact Mobile (<= 640px / 480px)**:
* Tool controls (action buttons, drop-downs, copy buttons) align vertically to prevent content squishing and overflow.
* Overlays (Drawer overlay, search modal) transition visibility safely to avoid layout scrollbar bugs.
