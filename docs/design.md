---
version: beta
revision: 1.0.0
theme: liquid-glass
name: Apple Liquid Glass
colors:
  light:
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
    glass-bg: 'rgba(255, 255, 255, 0.45)'
    glass-bg-hover: 'rgba(255, 255, 255, 0.6)'
    glass-border: 'rgba(255, 255, 255, 0.4)'
    glass-border-hover: 'rgba(255, 255, 255, 0.6)'
    text: '#1d1d1f'
    text-subtle: '#86868b'
    text-subtlest: '#a1a1a6'
    brand: '#0071e3'
    brand-hover: '#0077ed'
    success: '#34c759'
    warning: '#ff9500'
    danger: '#ff3b30'
    accent: '#bf5af2'
  dark:
    background: 'linear-gradient(135deg, #0f0c20 0%, #15102a 50%, #06020f 100%)'
    glass-bg: 'rgba(20, 20, 30, 0.45)'
    glass-bg-hover: 'rgba(30, 30, 45, 0.6)'
    glass-border: 'rgba(255, 255, 255, 0.08)'
    glass-border-hover: 'rgba(255, 255, 255, 0.15)'
    text: '#f5f5f7'
    text-subtle: '#86868b'
    text-subtlest: '#a1a1a6'
    brand: '#2997ff'
    brand-hover: '#40a4ff'
    success: '#30d158'
    warning: '#ff9f0a'
    danger: '#ff453a'
    accent: '#bf5af2'
typography:
  family-display: '"Outfit", "Plus Jakarta Sans", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif'
  family-body: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif'
  family-code: '"JetBrains Mono", "SF Mono", Menlo, monospace'
rounded:
  small: '8px'
  medium: '12px'
  large: '18px'
  xlarge: '24px'
  full: '9999px'
blur:
  default: '20px'
  heavy: '40px'
shadows:
  soft: '0 8px 32px 0 rgba(31, 38, 135, 0.08)'
  hover: '0 12px 40px 0 rgba(31, 38, 135, 0.15)'
---

# Apple Liquid Glass DESIGN.md

This specification details the design language and visual guidelines for the **Liquid Glass** theme, inspired by Apple's glassmorphism and modern fluid aesthetics. It is responsive, highly polished, and relies heavily on transparency, blurs, and organic drop shadows.

## Core Principles

1. **Fluidity**: Backdrops should feel like liquid. Use soft, non-uniform radial gradient blobs floating in the background to create depth.
2. **Glassmorphism**: Cards, headers, inputs, and modals must look like sheets of frosted glass (`backdrop-filter: blur(20px)`).
3. **Refraction & Borders**: Glass panels must have a fine, semi-transparent border (white in light mode, thin grey in dark mode) to simulate the edge of a pane of glass.
4. **Clean Typography**: High contrast, geometric sans-serif fonts for headings, and highly readable, neutral sans-serif fonts for body content.
5. **Fluid Responsiveness**: Design layouts that expand and wrap naturally. Never use fixed widths that cause text clipping or horizontal scrolling on small screens.

## Layout & Components

### Cards & Panels
- **MUST** use `glass-bg` with a `backdrop-filter` of at least `20px`.
- **MUST** have a `glass-border` border of `1px solid`.
- **MUST** have rounded corners matching `rounded.large` (18px) or `rounded.xlarge` (24px) for layouts.
- **SHOULD** have a soft transition on hover (increase opacity of backdrop and border, add subtle zoom or elevation).

### Inputs & Buttons
- Inputs must be transparent with a glass border. On focus, the border must glow with the brand color.
- Primary buttons should use the brand color with a high saturation, standing out over the glass backdrop.
- Secondary buttons should look like glass tabs.