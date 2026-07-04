---

version: alpha
name: Premium-Tools-design-analysis
description: The 2026 web system is a controlled premium utilities interface built from stark white editorial space, deep green-black feature bands, soft mineral surfaces, rounded media cards, and a distinctive type split between monospaced-feeling display headlines and precise UI text.

colors:
primary: "#17171c"
primary-dark: "#000000"
ink: "#212121"
deep-accent: "#003c33"
dark-navy: "#071829"
canvas: "#ffffff"
neutral-surface: "#eeece7"
pale-accent: "#edfce9"
pale-blue: "#f1f5ff"
hairline: "#d9d9dd"
border-light: "#e5e7eb"
card-border: "#f2f2f2"
muted: "#93939f"
slate: "#75758a"
body-muted: "#616161"
action-blue: "#1863dc"
focus-blue: "#4c6ee6"
highlight-coral: "#ff7759"
highlight-coral-soft: "#ffad9b"
form-focus: "#9b60aa"
on-primary: "#ffffff"
on-dark: "#ffffff"
error: "#b30000"

typography:
hero-display:
fontFamily: Primary Display Font
fontSize: 96px
fontWeight: 400
lineHeight: 1
letterSpacing: -1.92px
product-display:
fontFamily: Primary Display Font
fontSize: 72px
fontWeight: 400
lineHeight: 1
letterSpacing: -1.44px
section-display:
fontFamily: Primary UI Font
fontSize: 60px
fontWeight: 400
lineHeight: 1
letterSpacing: -1.2px
section-heading:
fontFamily: Primary UI Font
fontSize: 48px
fontWeight: 400
lineHeight: 1.2
letterSpacing: -0.48px
card-heading:
fontFamily: Primary UI Font
fontSize: 32px
fontWeight: 400
lineHeight: 1.2
letterSpacing: -0.32px
feature-heading:
fontFamily: Primary UI Font
fontSize: 24px
fontWeight: 400
lineHeight: 1.3
letterSpacing: 0
body-large:
fontFamily: Primary UI Font
fontSize: 18px
fontWeight: 400
lineHeight: 1.4
letterSpacing: 0
body:
fontFamily: Primary UI Font
fontSize: 16px
fontWeight: 400
lineHeight: 1.5
letterSpacing: 0
button:
fontFamily: Primary UI Font
fontSize: 14px
fontWeight: 500
lineHeight: 1.71
letterSpacing: 0
caption:
fontFamily: Primary UI Font
fontSize: 14px
fontWeight: 400
lineHeight: 1.4
letterSpacing: 0
mono-label:
fontFamily: Monospace Label Font
fontSize: 14px
fontWeight: 400
lineHeight: 1.4
letterSpacing: 0.28px
micro:
fontFamily: Primary UI Font
fontSize: 12px
fontWeight: 400
lineHeight: 1.4
letterSpacing: 0

rounded:
xs: 4px
sm: 8px
md: 16px
lg: 22px
xl: 30px
pill: 32px
full: 9999px

spacing:
xxs: 2px
xs: 6px
sm: 8px
md: 12px
lg: 16px
xl: 24px
xxl: 32px
section: 80px

## components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.on-primary}"
typography: "{typography.button}"
rounded: "{rounded.pill}"
padding: 12px 24px
button-secondary:
backgroundColor: transparent
textColor: "{colors.ink}"
typography: "{typography.body}"
rounded: "{rounded.xs}"
padding: 8px 0
button-pill-outline:
backgroundColor: transparent
textColor: "{colors.primary}"
typography: "{typography.button}"
rounded: "{rounded.xl}"
padding: 6px 12px
announcement-bar:
backgroundColor: "{colors.primary-dark}"
textColor: "{colors.on-dark}"
typography: "{typography.micro}"
height: 36px
hero-tool-preview:
backgroundColor: "{colors.canvas}"
rounded: "{rounded.lg}"
tool-interface-card:
backgroundColor: "{colors.primary}"
textColor: "{colors.on-dark}"
rounded: "{rounded.sm}"
padding: 24px
feature-highlight-strip:
backgroundColor: "{colors.canvas}"
textColor: "{colors.ink}"
typography: "{typography.caption}"
capability-card:
backgroundColor: "{colors.canvas}"
textColor: "{colors.ink}"
typography: "{typography.body}"
rounded: "{rounded.xs}"
padding: 24px
dark-feature-band:
backgroundColor: "{colors.deep-accent}"
textColor: "{colors.on-dark}"
rounded: "{rounded.lg}"
padding: 80px
featured-tool-card:
backgroundColor: "{colors.neutral-surface}"
textColor: "{colors.ink}"
rounded: "{rounded.sm}"
padding: 32px
category-filter-chip:
backgroundColor: transparent
textColor: "{colors.highlight-coral}"
typography: "{typography.card-heading}"
rounded: "{rounded.sm}"
padding: 8px 14px
categorized-tool-list:
backgroundColor: "{colors.canvas}"
textColor: "{colors.ink}"
typography: "{typography.body-large}"
feedback-panel:
backgroundColor: "{colors.canvas}"
textColor: "{colors.ink}"
rounded: "{rounded.lg}"
padding: 32px
footer-utility-links:
backgroundColor: "{colors.primary}"
textColor: "{colors.on-dark}"
typography: "{typography.micro}"

## Overview

The current web presence feels like a sober premium utilities platform with editorial restraint. The home page opens on a huge typographic declaration over a white canvas, then uses crisp interfaces, dark tool mockups, feature highlights, and generous empty space to make complex utilities feel controlled rather than overwhelming. Tool category pages invert the tone into deep green-black or dark navy bands, while reference and library pages move toward publishing-system clarity: large filters, thin rules, dense lists, and pale technical backgrounds.

What makes the system distinctive is the mix of austere black-and-white UI with bursts of tactile interface imagery. The site avoids decorative chrome in the normal utility workflow; color arrives through high-fidelity tool previews, abstract 3D visualizations, coral taxonomy chips, blue utility links, and dark calculator environments. Cards are rounded but not cute. Type is large, tight, and almost monospaced in spirit, creating a laboratory cadence across marketing, functional, and editorial surfaces.

**Key Characteristics:**

* Monumental display headlines with very tight line height and negative tracking.
* White editorial canvases interrupted by deep green, dark navy, and utility-led CTA bands.
* Rounded media cards and featured tool cards, usually 8px to 22px.
* Pill CTAs in near-black or white, with most secondary actions rendered as underlined text links.
* Feature-highlight strips with monochrome icons and very wide vertical spacing.
* Utility interface mockups using dark panels, small status chips, and quick-copy badges.
* Reference and category surfaces with prominent taxonomy chips, long rule-separated lists, and search fields.

---

## Colors

### Brand & Accent

* **Primary Dark** (`#000000`): Announcement bar, highest-contrast text, and the global visual anchor.
* **Near-Black Primary** (`#17171c`): Primary CTA buttons, dark footer, and deep UI cards.
* **Deep Accent Green** (`#003c33`): Hero bands for advanced generator and utility sections.
* **Dark Navy** (`#071829`): Financial calculators and high-security converter bands.
* **Action Blue** (`#1863dc`): Reference links, pagination, and secondary action emphasis.
* **Highlight Coral** (`#ff7759`): Category chips, taxonomy outlines, and warm utility markers.
* **Soft Coral** (`#ffad9b`): Pale chip borders and segmented tool-label details.

### Surface & Background

* **Canvas White** (`#ffffff`): Dominant page background and form/card surface.
* **Neutral Surface** (`#eeece7`): Featured tool cards, preview placeholders, and warm neutral surface blocks.
* **Pale Accent Wash** (`#edfce9`): Page section backdrop behind stacked dark capability panels.
* **Pale Blue Wash** (`#f1f5ff`): Category CTA surface behind abstract 3D imagery.
* **Card Border** (`#f2f2f2`): Softest card containment line.

### Text & Rules

* **Ink** (`#212121`): Default body text and most link text on light backgrounds.
* **Muted Slate** (`#93939f`): Footer links, dates, metadata, and de-emphasized labels.
* **Slate** (`#75758a`): List separators and tertiary text.
* **Hairline** (`#d9d9dd`): Standard list rules and section dividers.
* **Border Light** (`#e5e7eb`): Secondary divider and utility rule.

### Semantic

* **Focus Blue** (`#4c6ee6`): Keyboard focus and ring color.
* **Form Focus Violet** (`#9b60aa`): Focus border for text inputs.
* **Error Red** (`#b30000`): Extracted ring/shadow color associated with validation-like states.

### Gradient System

The platform does not use gradients as a generic UI fill. Gradients and color fields are media-led: abstract 3D hero imagery, deep blue data visualizations, red-orange tutorial video posters, and dark green-to-black tool environments. Keep utility surfaces flat; reserve gradient richness for large media panels and CTA image bands.

---

## Typography

### Font Family

* **Display**: `Primary Display Font`, falling back to `Space Grotesk`, `Inter`, `ui-sans-serif`, and `system-ui`.
* **Body/UI**: `Primary UI Font`, falling back to `Inter`, `Arial`, `ui-sans-serif`, and `system-ui`.
* **Technical labels**: `Monospace Label Font`, falling back to `Arial`, `ui-sans-serif`, and `system-ui`.
* **Icons**: Custom icon fonts and thin-line geometric illustrations.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Hero Display | Primary Display | 96px | 400 | 1.00 | -1.92px | Home page declaration scale. |
| Product Display | Primary Display | 72px | 400 | 1.00 | -1.44px | Category and reference hero headlines. |
| Section Display | Primary UI | 60px | 400 | 1.00 | -1.2px | Large tool-page headings. |
| Section Heading | Primary UI | 48px | 400 | 1.20 | -0.48px | Split hero and CTA headings. |
| Card Heading | Primary UI | 32px | 400 | 1.20 | -0.32px | Feature card and list section titles. |
| Feature Heading | Primary UI | 24px | 400 | 1.30 | 0 | Cards, filters, and library titles. |
| Body Large | Primary UI | 18px | 400 | 1.40 | 0 | Lead text and larger instructions. |
| Body | Primary UI | 16px | 400 | 1.50 | 0 | Default copy and link text. |
| Button | Primary UI | 14px | 500 | 1.71 | 0 | Compact CTA labels. |
| Caption | Primary UI | 14px | 400 | 1.40 | 0 | Metadata and small explanatory text. |
| Mono Label | Monospace Label | 14px | 400 | 1.40 | 0.28px | Uppercase technical labels. |
| Micro | Primary UI | 12px | 400 | 1.40 | 0 | Footer, nav microcopy, and small links. |

### Principles

* Use massive type sparingly; overview pages often have one oversized headline and then settle into restrained 16px-24px UI copy for inputs and results.
* Keep display type tight. Hero copy should feel compact and carved, not airy.
* Avoid heavy bold weights. Size, spacing, and surface contrast do most of the hierarchy work.
* Use uppercase mono labels for categories and system markers, especially on complex generator and reference pages.
* Library pages can use coral chips and blue links, but the base typography remains black and measured.

---

## Layout

### Spacing System

The system uses an 8px base with many one-off alignment values: `2px`, `6px`, `8px`, `10px`, `12px`, `16px`, `20px`, `22px`, `24px`, `28px`, `32px`, `36px`, `40px`, `56px`, `60px`, `64px`, and `80px`.

Large sections rely on dramatic vertical breathing room. The home page places a feature-highlight strip far below the hero media. Tool pages often hold dark interface panels inside fields of empty white space, then transition to dense forms, comparison tables, or footers only near the end.

### Grid & Container

* Global nav uses a three-zone layout: logo left, menu centered, sign-in/CTA right.
* Home hero is centered text above a two-card media composition: a wide interface mockup card beside a narrower preview card.
* Feature sections commonly use 3-column cards on desktop.
* Utility pages alternate centered hero blocks, feature-highlight strips, large single-capability bands, and 2- or 3-column card grids.
* Reference pages use full-width lists with update dates and chip columns instead of decorative cards.
* Calculators and generators use two-column input rows inside a rounded white card on dark or stone section backgrounds.

### Whitespace Philosophy

The platform uses whitespace as a signal of precision and reliability. Large empty intervals separate the value proposition, functional proof, preview interfaces, and CTA. Dense content appears only where it serves the user's task: conversion tables, library card grids, and generator form fields.

---

## Elevation & Depth

The design is mostly flat. Depth comes from surface alternation, media contrast, rounded corners, and thin borders rather than drop shadows.

| Level | Treatment | Use |
| --- | --- | --- |
| Flat | No shadow, white or dark field | Hero copy, reference lists, library surfaces |
| Bordered | 1px `#d9d9dd`, `#e5e7eb`, or dark translucent rules | Comparison rows, inputs, pale cards, footer utility lists |
| Media Lift | Rounded image or video over contrasting section color | Hero tool previews, tutorial videos, CTA imagery |
| Dark Tool Field | Deep green or navy full-width band | Advanced generators, financial calculators, high-security utility sections |

---

## Shapes

### Radius Scale

| Token | Value | Role |
| --- | --- | --- |
| `xs` | 4px | Utility thumbnails, search fields, library article images, utility elements |
| `sm` | 8px | Category chips, cards, small media, modal dialogs |
| `md` | 16px | Medium featured cards and grouped setting blocks |
| `lg` | 22px | Signature preview-card and soft placeholder radius |
| `xl` | 30px | Reference/topic filter pills |
| `pill` | 32px | Primary CTA buttons |
| `full` | 9999px | Round status elements and fully pill-shaped controls |

### Image Treatment

Images are not decorative backdrops for text except in CTA bands. Most imagery sits as rounded cards with visible corners: interface walkthroughs, lifestyle photography, library thumbnails, and abstract 3D renders. The dominant radii are 8px and 22px.

---

## Components

### **`button-primary`**

Near-black or white pill CTA, depending on surface contrast. Uses 14px-16px Primary UI Font, 12px 24px padding, and a 32px pill radius. This is the primary action style for "Start generating", "Calculate now", and hero CTAs.

### **`button-secondary`**

Text-only action link, usually underlined or rule-aligned, with no filled background. Used for "Browse all tools", "View documentation", newsletter signup, and secondary hero actions.

### **`button-pill-outline`**

Outlined pill control with transparent fill, 1px dark border, and 30px radius. Used for list filters, tool category tags, and lightweight taxonomy controls.

### **`announcement-bar`**

Full-width dark strip above the nav, 36px tall, centered microcopy with an underlined "Learn more" link and a close control at the far right.

### **`hero-tool-preview`**

Rounded media card used in the home hero and category pages. It combines photography or abstract imagery with an overlaid dark utility interface module. Radius is usually 22px on large cards and 8px on smaller thumbnails.

### **`tool-interface-card`**

Dark interface mockup panel showing tool outputs, status chips, quick-copy badges, input fields, and generated result cards. Background is near-black, text is white or muted, and small accent chips use active tool colors.

### **`feature-highlight-strip`**

Centered copy above a row of monochrome icons or integration marks. It is intentionally quiet: no cards, no borders, just large horizontal spacing and black or white marks depending on the background.

### **`capability-card`**

Content block with thin-line geometric illustration, 24px heading, body copy, and a text link. On light backgrounds, cards often have only a top rule or a subtle image/card relationship rather than full boxing.

### **`dark-feature-band`**

Deep green or navy full-width section used for advanced tool capabilities, privacy claims, and technical breakdowns. Text turns white; cards use darker translucent surfaces, pale borders, and abstract line illustrations.

### **`featured-tool-card`**

Warm stone card used for specific utility summaries. Typically 3-column on desktop, with 8px radius, generous padding, a small pill button, a divider line, and checkmark bullet rows highlighting features.

### **`category-filter-chip`**

Large coral taxonomy chip used on the library or index pages. Active chips invert to coral fill with dark text; inactive chips use coral outline and pale fill. Typography is oversized relative to typical filters, making the taxonomy a hero-level control.

### **`categorized-tool-list`**

Rule-separated utility list with title left, topic pills centered, and update date right. Rows are tall, white, and border-driven; filters above use many compact outlined pills.

### **`feedback-panel`**

Rounded white form panel set against dark green or warm stone sections. Inputs are rectangular with thin gray borders, 12px-16px padding, and compact labels/placeholders. Submit uses the same near-black pill style as primary CTAs.

### **`footer-utility-links`**

Dark footer link block with coral "New Tools" label, white headline, muted legal microcopy, a single-line email field, and arrow submit marker. Footer columns use white section labels and muted links.

### **`partner-showcase-ad`**

Warm, quiet editorial ad placement container. It is styled to fit the site's layout seamlessly without flashy animations or popups. Uses the neutral surface (`#eeece7`) background or a thin hairline border, precise UI typography, and the uppercase Mono Label font for tags like "PARTNER SHOWCASE" or "SPONSOR".

---

## Sponsor & Ad Placements (Non-Intrusive Ads)

To sustain the platform while preserving a premium, high-end developer experience:
* **Editorial Integration**: Ads are styled exactly like native tool cards or sidebar widgets. They use the same font sizing, colors (near-black, slate, neutral-surface), and borders.
* **No Layout Shifts (Zero CLS)**: Ad slots have fixed dimensions or minimum heights to prevent content jumping when the ad content renders.
* **Non-Intrusive Placement**: Ads are constrained to specific grid slots on index lists, or positioned in the tool workspace sidebar. No sticky banners, no full-screen overlays, and no audio/video autoplay.
* **Transparent Badging**: Every placement must be labeled with an uppercase mono-label (e.g. `SPONSOR` or `PARTNER SHOWCASE`) using `--color-muted` and the `technical label` font.

---

## Do's and Don'ts

### Do

* Use white canvas as the default surface; introduce dark green or navy as full-width advanced utility bands.
* Keep primary CTAs pill-shaped and near-black on light surfaces.
* Use 22px radius on major interface previews and placeholders.
* Use coral for library taxonomy and small warm accents, not as the main CTA system.
* Use monochrome feature icons with wide spacing.
* Use thin-line geometric illustrations for reference materials and capability icons.
* Let high-fidelity interface mockups carry color, while the structural UI shell stays restrained.

### Don't

* Do not turn coral or blue into broad decorative surface colors.
* Do not add heavy drop shadows to tool cards or result panels.
* Do not make every section card-based; the platform often uses unframed rows, rules, and open space for calculators and settings.
* Do not use rounded cards below 8px for major media or previews.
* Do not replace the display/body type split with one generic sans-serif voice.
* Do not render undocumented interaction variants in documentation or previews.
* Do not use saturated gradients as normal utility backgrounds; keep gradients media-led.

---

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
| --- | --- | --- |
| Small Mobile | <425px | Single-column cards, compact nav, reduced hero headline scale |
| Mobile | 425-640px | Hero media stacks, tool grids become one column, generator inputs stack |
| Large Mobile | 640-768px | Wider one-column layouts with larger interface cards |
| Tablet | 768-1024px | Two-column cards begin, nav spacing tightens |
| Desktop | 1024-1440px | Full nav, 3-column card grids, split preview compositions |
| Large Desktop | 1440-2560px | Wide containers and large empty vertical intervals |

### Touch Targets

Primary CTAs and pills meet comfortable touch sizing through 12px-24px padding and pill radii. Filter pills and category chips are larger than standard tags, making dense taxonomy surfaces highly usable on touch devices when browsing for specific utilities.

### Collapsing Strategy

* Nav collapses from full horizontal links to a compact mobile menu.
* Hero media moves from split cards to stacked cards.
* Featured tool grids collapse from 3 columns to 2 and then 1.
* Calculator forms collapse from paired rows to a single vertical column.
* Categorized lists preserve their rule-separated structure but stack metadata below tool names on smaller widths.

---

## Iteration Guide

1. Start from a white canvas or a full-width dark green/navy band; avoid mid-tone page backgrounds unless the screenshot shows a specific feedback/form section.
2. Use `button-primary` for the single highest-priority action and `button-secondary` for the companion action.
3. Use `hero-tool-preview` or `tool-interface-card` when a page needs visual energy; avoid fake or inaccurate data points in the mockups.
4. For library or reference pages, combine `category-filter-chip`, `button-pill-outline`, and `categorized-tool-list` instead of generic marketing cards.
5. Keep component examples structurally honest: blank preview frames are better than invented inputs.

---

## Known Gaps

* Exact semantic font files are not bundled; use the documented fallbacks when implementing the system externally.
* Mobile screenshots were not regenerated in this public update, so mobile behavior is documented from the desktop system and existing responsive utility patterns.
* Some live pages lazy-load calculator interfaces late; blank utility placeholders are documented as placeholder skeleton surfaces rather than fully populated output cards.