# LowKeyDevs Design System & Specification

This document defines the core visual design guidelines, design tokens, typography, and responsive layout specs for the LowKeyDevs online utility platform.

---

## 1. Typography

The platform utilizes three distinct Google Fonts loaded asynchronously to optimize page loads:

*   **Headings**: `Poppins` (Weights: 500, 600, 700)
    *   Used for main headers, section headings, and hero titles.
    *   Responsive scaling is configured via `clamp()` (e.g., `clamp(42px, 5vw, 72px)`).
*   **Body & UI Text**: `Inter` (Weights: 400, 500, 600)
    *   Used for general descriptions, buttons, tags, form labels, and navigation.
*   **Code & Input Elements**: `JetBrains Mono` (Weights: 400, 500)
    *   Used in raw textareas, output boxes, input text fields, and code viewer panels.

---

## 2. Color System & Themes

LowKeyDevs supports automatic system-preference theme detection and manual light/dark mode toggling, persisted in local storage.

### Light Theme
*   **Background (`--bg`)**: `#FCFCFD` (Cool off-white page background)
*   **Primary Surface (`--surface`)**: `#FFFFFF` (Pure white for cards and widgets)
*   **Surface Hover (`--surface-hover`)**: `#F4F4F5`
*   **Borders (`--border` / `--border-hover`)**: `#E5E7EB` / `#D1D5DB`
*   **Primary Text (`--text-primary`)**: `#18181B` (Dark charcoal)
*   **Secondary Text (`--text-secondary`)**: `#6B7280` (Muted gray)
*   **Accent Color (`--accent` / `--accent-hover`)**: `#C4A9F3` / `#B394E8` (Lavender violet)
*   **Accent Text On (`--accent-on`)**: `#18181B` (Contrast text on lavender buttons)
*   **Accent Subtle (`--accent-subtle`)**: `rgba(196, 169, 243, 0.1)` (Background for badges/pills)

### Dark Theme
*   **Background (`--bg`)**: `#090909` (Deep near-black page background)
*   **Primary Surface (`--surface`)**: `#111111` (Very dark gray for cards)
*   **Surface Elevated (`--surface-elevated`)**: `#171717` (Used for active states/panels)
*   **Surface Hover (`--surface-hover`)**: `#1F1F1F`
*   **Borders (`--border` / `--border-hover`)**: `#262626` / `#3F3F46`
*   **Primary Text (`--text-primary`)**: `#FAFAFA` (Off-white)
*   **Secondary Text (`--text-secondary`)**: `#A1A1AA` (Muted gray)
*   **Accent Color (`--accent` / `--accent-hover`)**: `#C4A9F3` / `#D3BFF6`
*   **Accent Text On (`--accent-on`)**: `#111111`

---

## 3. Spacing Grid

We use an 8-point spacing grid for layout margins, padding, and element gaps:

*   `--space-0-5`: `2px`
*   `--space-1`: `4px`
*   `--space-1-5`: `6px`
*   `--space-2`: `8px`
*   `--space-3`: `12px`
*   `--space-4`: `16px`
*   `--space-5`: `20px`
*   `--space-6`: `24px`
*   `--space-8`: `32px`
*   `--space-10`: `40px`
*   `--space-12`: `48px`
*   `--space-16`: `64px`
*   `--space-20`: `80px`
*   `--space-24`: `96px`

---

## 4. Borders & Corner Radii

Borders are strictly kept to a subtle `1px` width. Corner rounding is structured in scales:

*   `--radius-sm`: `6px` (Small buttons, copy badges, keyboard shortcuts)
*   `--radius-md`: `8px` (Inputs, textareas, category tabs, smaller widgets)
*   `--radius-lg`: `12px` (Cards, sidebars, content widgets, search modals)
*   `--radius-xl`: `16px` (Outer containers / main panels if needed)
*   `--radius-full`: `9999px` (Pills, badges)

---

## 5. Responsive Layout Architecture

The site uses a fully fluid design that handles multiple screen widths:

### Containers
*   **Global Container (`.container`)**: Center-aligned layout container. `max-width: 1200px;` with horizontal padding fluidly scaling from `16px` to `32px` (`clamp(16px, 4vw, 32px)`).
*   **Narrow Container (`.container-narrow`)**: Used for text-heavy focus pages (e.g., Privacy, About). `max-width: 720px;`.

### Key Breakpoints & Adjustments
*   **Desktop & Large Screen (> 1024px)**:
    *   Tool layout displays in a two-column grid: a main work area and a `320px` sidebar containing sponsor cards, related utilities, and compliance badges.
*   **Tablet View (<= 1024px)**:
    *   Tool layout collapses sidebar below the main workspace area.
*   **Mobile Switch (<= 768px)**:
    *   Top navigation links collapse into an off-screen mobile drawer (slides from right using translation).
    *   Editor workspace splits (input/output panels) switch from side-by-side (2 columns) to vertical stacking (1 column).
*   **Compact Mobile (<= 640px / 480px)**:
    *   Tool controls (action buttons, drop-downs, copy buttons) align vertically to prevent content squishing and overflow.
    *   Overlays (Drawer overlay, search modal) transition visibility safely to avoid layout scrollbar bugs.