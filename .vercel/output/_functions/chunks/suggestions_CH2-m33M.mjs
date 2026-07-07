import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as unescapeHTML, T as createComponent, _ as renderHead, a as renderComponent, f as renderTemplate, g as maybeRenderHead, l as renderSlot, n as renderScript, o as Fragment, v as addAttribute, w as createAstro, y as defineScriptVars } from "./server_Dt_BWqqO.mjs";
import "./compiler_kmuGzyek.mjs";
import { t as supabase } from "./supabase_gygvlrmJ.mjs";
//#region src/components/SuggestFeatureButton.astro
var $$SuggestFeatureButton = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<button id="suggest-feature-btn" class="suggest-feature-btn" aria-label="Suggest a Feature" title="Suggest a Feature" style="display: none;" data-astro-cid-mhclnfxp><span class="btn-icon" aria-hidden="true" data-astro-cid-mhclnfxp>💡</span><span class="btn-text" data-astro-cid-mhclnfxp>Suggest a Feature</span><span class="btn-loader" aria-hidden="true" data-astro-cid-mhclnfxp></span></button>${renderScript($$result, "C:/Users/gurpr/lowkeydevs/src/components/SuggestFeatureButton.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/gurpr/lowkeydevs/src/components/SuggestFeatureButton.astro", void 0);
//#endregion
//#region src/layouts/Layout.astro
createAstro("https://astro.build");
var $$Layout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Layout;
	const { title = "Lowkeydevs - Fast, Private Online Tools", description = "The internet's default toolbox. Free, client-side, privacy-respecting online developer tools and utilities with zero registration required.", canonicalUrl = Astro.url.href, ogImage = "/og-default.png", toolSlug, toolCategory } = Astro.props;
	return renderTemplate`<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1f2937"><link rel="manifest" href="/site.webmanifest"><!-- SEO Tags --><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(canonicalUrl, "href")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(canonicalUrl, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(ogImage, Astro.url).href, "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(canonicalUrl, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(ogImage, Astro.url).href, "content")}><!-- Google Fonts Preconnect and Load --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Inter:ital,opsz,wght@0,14..32,400;0,14..32,500;0,14..32,600;1,14..32,400&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet"><!-- Theme detection (runs before paint to prevent flash) --><script>
      (function() {
        const stored = localStorage.getItem('Lowkeydevs-theme');
        if (stored === 'light' || stored === 'dark') {
          document.documentElement.setAttribute('data-theme', stored);
        } else {
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
        }
      })();
    <\/script>${renderHead($$result)}</head><body${addAttribute(toolSlug, "data-tool-slug")}${addAttribute(toolCategory, "data-tool-category")}><a href="#main-content" class="skip-link">Skip to content</a>${renderSlot($$result, $$slots["default"])}${renderComponent($$result, "SuggestFeatureButton", $$SuggestFeatureButton, {})}</body></html>`;
}, "C:/Users/gurpr/lowkeydevs/src/layouts/Layout.astro", void 0);
//#endregion
//#region src/components/base/Icon.astro
createAstro("https://astro.build");
var $$Icon = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Icon;
	const { name, class: className = "", size = 20 } = Astro.props;
	const icons = {
		sliders: {
			viewBox: "0 0 24 24",
			paths: `<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M2 14h4M10 8h4M18 16h4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		palette: {
			viewBox: "0 0 24 24",
			paths: `<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19H4.87C5.55 19 6 18.45 6 17.77C6 17.43 5.86 17.12 5.64 16.89L5.59 16.84C5.12 16.36 4.83 15.71 4.83 15C4.83 13.25 6.25 11.83 8 11.83H9.83C11.58 11.83 13 10.41 13 8.66V6.83C13 5.64 13.96 4.67 15.15 4.67C15.82 4.67 16.42 4.98 16.82 5.46L16.87 5.52C17.29 6.03 17.92 6.33 18.63 6.33C19.93 6.33 21 5.26 21 3.96C21 3.23 20.67 2.58 20.15 2.15C18.06 0.81 15.54 0 12.83 0C6.21 0 0.83 5.38 0.83 12C0.83 17.52 5.31 22 10.83 22H12Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		braces: {
			viewBox: "0 0 24 24",
			paths: `<path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 21h1a2 2 0 0 0 2-2v-5a2 2 0 0 1 2-2 2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		key: {
			viewBox: "0 0 24 24",
			paths: `<path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		refreshcw: {
			viewBox: "0 0 24 24",
			paths: `<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 3h5v5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 21H3v-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		search: {
			viewBox: "0 0 24 24",
			paths: `<circle cx="11" cy="11" r="8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="m21 21-4.3-4.3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		moon: {
			viewBox: "0 0 24 24",
			paths: `<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		sun: {
			viewBox: "0 0 24 24",
			paths: `<circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		clipboard: {
			viewBox: "0 0 24 24",
			paths: `<rect width="8" height="4" x="8" y="2" rx="1" ry="1" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		check: {
			viewBox: "0 0 24 24",
			paths: `<path d="M20 6 9 17l-5-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		trash2: {
			viewBox: "0 0 24 24",
			paths: `<path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2M10 11v6M14 11v6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		chevrondown: {
			viewBox: "0 0 24 24",
			paths: `<path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		info: {
			viewBox: "0 0 24 24",
			paths: `<circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 16v-4M12 8h.01" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		externallink: {
			viewBox: "0 0 24 24",
			paths: `<path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		arrowright: {
			viewBox: "0 0 24 24",
			paths: `<path d="M5 12h14M12 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		lock: {
			viewBox: "0 0 24 24",
			paths: `<rect width="18" height="11" x="3" y="11" rx="2" ry="2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 11V7a5 5 0 0 1 10 0v4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		shuffle: {
			viewBox: "0 0 24 24",
			paths: `<path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22M18 2l4 4-4 4M2 6h1.9c1.2 0 2.3.6 3 1.6l1.1 1.6M15.4 12.8l1.2 1.6c.8 1 1.9 1.6 3.1 1.6H22M18 20l4-4-4-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		eraser: {
			viewBox: "0 0 24 24",
			paths: `<path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l4.3 4.3c1 1 1 2.5 0 3.4l-9.6 9.6H7Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="m22 21-10 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="m14 11-6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		listfilter: {
			viewBox: "0 0 24 24",
			paths: `<path d="M3 6h18M7 12h10M10 18h4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		binary: {
			viewBox: "0 0 24 24",
			paths: `<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M10 16h4M10 12h4M10 8h4" fill="none" stroke="currentColor" stroke-width="2"/>`
		},
		hash: {
			viewBox: "0 0 24 24",
			paths: `<path d="M4 9h16M4 15h16M9 3v18M15 3v18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		markdown: {
			viewBox: "0 0 24 24",
			paths: `<rect width="20" height="16" x="2" y="4" rx="2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 15V9l3 3 3-3v6M17 12V9m0 3 2-2m-2 2 2 2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		database: {
			viewBox: "0 0 24 24",
			paths: `<ellipse cx="12" cy="5" rx="9" ry="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" fill="none" stroke="currentColor" stroke-width="2"/>`
		},
		brush: {
			viewBox: "0 0 24 24",
			paths: `<path d="m12 22 1-1c1.4-1.4 2.4-3.2 3-5.2L18 9l-3-3-6.8 2C6.2 8.6 4.4 9.6 3 11l-1 1" fill="none" stroke="currentColor" stroke-width="2"/><path d="M18 9h3M6 21c.5-2.5 2.5-4.5 5-5M15 6s-1.5-4-5-4-5 4-5 4" fill="none" stroke="currentColor" stroke-width="2"/>`
		},
		quote: {
			viewBox: "0 0 24 24",
			paths: `<path d="M3 21c3 0 7-1 7-8V5H3v8h4c0 2-2 4-4 6v2Zm11 0c3 0 7-1 7-8V5h-7v8h4c0 2-2 4-4 6v2Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		unquote: {
			viewBox: "0 0 24 24",
			paths: `<path d="M10 3C7 3 3 4 3 11v8h7v-8H6c0-2 2-4 4-6V3Zm11 0c-3 0-7 1-7 8v8h7v-8h-4c0-2 2-4 4-6V3Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		languages: {
			viewBox: "0 0 24 24",
			paths: `<path d="m5 8 6 6M4 14l6-6M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		filetext: {
			viewBox: "0 0 24 24",
			paths: `<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 2v4a2 2 0 0 0 2 2h4M10 9H8M16 13H8M16 17H8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		notebook: {
			viewBox: "0 0 24 24",
			paths: `<path d="M2 6h4M2 10h4M2 14h4M2 18h4" fill="none" stroke="currentColor" stroke-width="2"/><rect width="16" height="20" x="6" y="2" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 2v20" fill="none" stroke="currentColor" stroke-width="2"/>`
		},
		fingerprint: {
			viewBox: "0 0 24 24",
			paths: `<path d="M2 12a10 10 0 1 0 18.8-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 10a7.5 7.5 0 1 0 13.5 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 8a5 5 0 1 0 8 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 6a2.5 2.5 0 1 0 4 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 3a1 1 0 1 0 2 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		type: {
			viewBox: "0 0 24 24",
			paths: `<polyline points="4 7 4 4 20 4 20 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="9" y1="20" x2="15" y2="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="12" y1="4" x2="12" y2="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		link: {
			viewBox: "0 0 24 24",
			paths: `<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		clock: {
			viewBox: "0 0 24 24",
			paths: `<circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polyline points="12 6 12 12 16 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		shield: {
			viewBox: "0 0 24 24",
			paths: `<path d="M20 13c0 5-3.5 7.5-7.66 9.7a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.8 17 5 19 5a1 1 0 0 1 1 1z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		terminal: {
			viewBox: "0 0 24 24",
			paths: `<polyline points="4 17 10 11 4 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="12" y1="19" x2="20" y2="19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		sortasc: {
			viewBox: "0 0 24 24",
			paths: `<path d="m3 16 4 4 4-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 20V4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 4h10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 8h7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 12h4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		replace: {
			viewBox: "0 0 24 24",
			paths: `<path d="M14 4h6v6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16v4h4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 4H4v6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 14v6h-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="m14 10-4 4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		repeat: {
			viewBox: "0 0 24 24",
			paths: `<path d="m17 2 4 4-4 4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 11v-1a4 4 0 0 1 4-4h14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="m7 22-4-4 4-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 13v1a4 4 0 0 1-4 4H3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		eyeoff: {
			viewBox: "0 0 24 24",
			paths: `<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="2" y1="2" x2="22" y2="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		reverse: {
			viewBox: "0 0 24 24",
			paths: `<path d="M8 3 4 7l4 4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 7h16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="m16 21 4-4-4-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 17H4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		instagram: {
			viewBox: "0 0 24 24",
			paths: `<rect width="20" height="20" x="2" y="2" rx="5" ry="5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		twitter: {
			viewBox: "0 0 24 24",
			paths: `<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		facebook: {
			viewBox: "0 0 24 24",
			paths: `<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		messagesquare: {
			viewBox: "0 0 24 24",
			paths: `<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		messagecircle: {
			viewBox: "0 0 24 24",
			paths: `<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		heart: {
			viewBox: "0 0 24 24",
			paths: `<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		star: {
			viewBox: "0 0 24 24",
			paths: `<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		sparkles: {
			viewBox: "0 0 24 24",
			paths: `<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		video: {
			viewBox: "0 0 24 24",
			paths: `<path d="m22 8-6 4 6 4V8Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		image: {
			viewBox: "0 0 24 24",
			paths: `<rect width="18" height="18" x="3" y="3" rx="2" ry="2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9" cy="9" r="2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		chevronright: {
			viewBox: "0 0 24 24",
			paths: `<path d="m9 18 6-6-6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		copy: {
			viewBox: "0 0 24 24",
			paths: `<rect width="14" height="14" x="8" y="8" rx="2" ry="2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		download: {
			viewBox: "0 0 24 24",
			paths: `<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polyline points="7 10 12 15 17 10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="12" y1="15" x2="12" y2="3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
		},
		logo: {
			viewBox: "0 0 280 280",
			paths: `<g transform="translate(40, 65)"><path fill="#8C52FF" d="M0 0 L80 0 L100 75 L20 75 Z M100 75 L180 75 L200 150 L120 150 Z"/></g>`
		}
	};
	const icon = icons[(name || "info").toLowerCase().replace(/[^a-z0-9]/g, "")] || icons.info;
	return renderTemplate`${maybeRenderHead($$result)}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(size, "width")}${addAttribute(size, "height")}${addAttribute(icon.viewBox, "viewBox")}${addAttribute(className, "class")} aria-hidden="true">${unescapeHTML(icon.paths)}</svg>`;
}, "C:/Users/gurpr/lowkeydevs/src/components/base/Icon.astro", void 0);
//#endregion
//#region src/tools/registry.ts
var registry = [
	{
		slug: "json-formatter",
		title: "JSON Formatter & Validator",
		description: "Format, validate, beautify, and minify your JSON data instantly. All processing runs 100% client-side in your browser for complete privacy.",
		category: "json-yaml",
		keywords: [
			"json formatter",
			"json beautifier",
			"validate json",
			"minify json",
			"prettify json",
			"json validator",
			"json parser"
		],
		icon: "Braces",
		faqs: [
			{
				question: "Is my JSON data secure?",
				answer: "Yes. All formatting, minification, and validation are processed entirely inside your browser using JavaScript. No JSON data is ever uploaded or transmitted to our servers."
			},
			{
				question: "Does this tool validate JSON schema or syntax?",
				answer: "Yes, it checks for syntax errors (such as missing commas, unclosed brackets, or trailing commas) and highlights exactly where the parsing failed."
			},
			{
				question: "Can I format nested arrays and objects?",
				answer: "Yes, the tool handles any valid nested JSON structure and outputs clean, indented text based on your selection (2 spaces, 4 spaces, or tabs)."
			}
		],
		educationalContent: {
			whatIsIt: "JSON (JavaScript Object Notation) is the standard format used to transmit structured data in web applications. While machines read minified JSON easily, humans require proper indentation, brackets alignment, and line breaks to debug and read it efficiently. A JSON Formatter takes dense, unreadable JSON and beautifies it.",
			howToUse: "1. Paste your raw, minified, or disorganized JSON text into the input field.\n2. The formatter will instantly validate and beautify the text as you type.\n3. Click \"Minify\" if you want to compact the JSON for storage or API payloads.\n4. Click \"Copy\" to save the result to your clipboard, or \"Clear\" to start fresh.",
			proTips: ["You can toggle between 2-space indentation, 4-space indentation, and tab-spacing options.", "If the JSON is invalid, a helpful error message with the character location will appear to guide your debugging."]
		}
	},
	{
		slug: "password-generator",
		title: "Secure Password Generator",
		description: "Generate strong, secure, random passwords instantly. Customize length and characters client-side with absolute safety.",
		category: "generators",
		keywords: [
			"password generator",
			"random password",
			"secure password",
			"password creator",
			"generate password",
			"strong password"
		],
		icon: "Key",
		faqs: [
			{
				question: "Are my generated passwords safe?",
				answer: "Yes. The passwords are generated entirely in your browser using the cryptographically secure Web Crypto API (`window.crypto.getRandomValues`). No passwords are ever sent over the internet or stored on our servers."
			},
			{
				question: "What makes a password strong?",
				answer: "A strong password is at least 12–16 characters long and contains a mix of uppercase letters, lowercase letters, numbers, and special symbols. Randomness is the most important factor in preventing brute-force attacks."
			},
			{
				question: "Can I generate multiple passwords at once?",
				answer: "This MVP generates one highly secure password at a time, allowing you to instantly tweak criteria, test its strength rating, and copy it in one click."
			}
		],
		educationalContent: {
			whatIsIt: "A Password Generator creates unpredictable strings of characters designed to secure accounts against hacking. By using cryptographically secure random number generators (CSPRNG), it ensures the output is mathematically resistant to prediction, unlike standard human-designed passwords.",
			howToUse: "1. Adjust the length slider to your desired character count (recommended: 16+ characters).\n2. Select which character sets to include (Uppercase, Lowercase, Numbers, and Symbols).\n3. Click \"Generate Password\" (or it will update automatically as you adjust options).\n4. Review the password strength indicator (Weak, Medium, Strong) and click \"Copy\" to save it securely.",
			proTips: ["Avoid using common dictionary words or personal info. The default settings of this generator create maximum entropy passwords.", "Always use a reputable password manager to store these generated passwords so you do not have to memorize them."]
		}
	},
	{
		slug: "base64-converter",
		title: "Base64 Encoder & Decoder",
		description: "Encode text to Base64 or decode Base64 back to plain text instantly. Safe, secure, client-side converter.",
		category: "converters",
		keywords: [
			"base64 encoder",
			"base64 decoder",
			"base64 convert",
			"text to base64",
			"base64 to text",
			"base64 tool"
		],
		icon: "RefreshCw",
		faqs: [
			{
				question: "Is my converted data secure?",
				answer: "Yes. All encoding and decoding happen directly inside your browser. No strings or data are sent to our servers."
			},
			{
				question: "What is Base64 encoding used for?",
				answer: "Base64 is a binary-to-text encoding scheme. It is widely used to represent binary data (like images or files) in an ASCII string format, making it safe for transmission over text-based protocols like email (MIME) or URL query parameters."
			},
			{
				question: "Does this handle Unicode/UTF-8 characters?",
				answer: "Yes. Our converter includes full UTF-8 character support, ensuring that accented characters, emojis, and international text encode and decode correctly without breaking."
			}
		],
		educationalContent: {
			whatIsIt: "Base64 represents data in a set of 64 characters (A-Z, a-z, 0-9, +, /). It is commonly used when raw binary needs to be transferred over media that are designed to handle text, ensuring data integrity during transfer.",
			howToUse: "1. Choose your mode: \"Encode\" (convert plain text to Base64) or \"Decode\" (convert Base64 back to plain text).\n2. Paste your text in the Input box.\n3. The result will render instantly in the Output box as you type.\n4. Click \"Copy\" to save your result, or \"Clear\" to reset the editor.",
			proTips: ["If you see a decoding error, verify that the input string is a valid Base64 string and does not contain illegal characters.", "Our tool uses an optimized UTF-8 encoding method to prevent standard browser errors when encoding non-ASCII symbols like emojis."]
		}
	},
	{
		slug: "character-remover",
		title: "Character Remover",
		description: "Remove specific characters, numbers, letters, symbols, punctuation, or custom text patterns from your blocks of text instantly.",
		category: "text",
		keywords: [
			"character remover",
			"strip text",
			"remove characters",
			"remove numbers",
			"remove spaces",
			"clean text",
			"remove punctuation"
		],
		icon: "Eraser",
		faqs: [
			{
				question: "Is my text sent to a server?",
				answer: "No. All processing is completed locally inside your browser using JavaScript. Your input text never leaves your device."
			},
			{
				question: "How do I remove specific custom characters?",
				answer: "Type the exact characters you want to strip (e.g. \"@#$\") into the \"Custom characters\" input field, and make sure the custom option is checked."
			},
			{
				question: "Does this support case-insensitive custom character removal?",
				answer: "Yes, there is a toggle for \"Case Sensitive\" which applies to custom characters."
			}
		],
		educationalContent: {
			whatIsIt: "The Character Remover is a text cleaning utility designed to strip unwanted characters from documents, CSVs, logs, or code. It lets you select pre-defined filters (like removing all digits or punctuation) or write custom sequences to strip matching characters from your text.",
			howToUse: "1. Paste your raw text into the input field.\n2. Choose which character types to remove using the checkboxes (Letters, Numbers, Punctuation, Whitespace, Newlines).\n3. Optionally type a list of custom characters to delete.\n4. Copy the cleaned output text instantly.",
			proTips: ["Checking \"Whitespace\" removes spaces and tab characters, while \"Newlines\" collapses line breaks.", "Use this tool to sanitize messy inputs, clean CSV separator conflicts, or strip formatting tags."]
		}
	},
	{
		slug: "duplicate-word-finder",
		title: "Duplicate Word Finder",
		description: "Identify, count, highlight, and remove duplicate words or repetitive phrases in your text documents automatically.",
		category: "text",
		keywords: [
			"duplicate word finder",
			"remove duplicate words",
			"find repetitive words",
			"word frequency",
			"clean repetitive text",
			"text redundancy checker"
		],
		icon: "ListFilter",
		faqs: [
			{
				question: "How are duplicate words counted?",
				answer: "The tool splits your text into words using spaces and punctuation boundaries. It groups matching words, counts their frequency, and displays all words with 2 or more occurrences."
			},
			{
				question: "What is the difference between Keep First and Remove All?",
				answer: "Keep First keeps the first occurrence of a duplicate word and deletes subsequent ones. Remove All completely removes the word from the text wherever it occurs."
			},
			{
				question: "Does it ignore punctuation or line breaks?",
				answer: "Yes. With the \"Ignore Punctuation\" option checked, punctuation marks next to words (e.g. \"word,\" vs \"word\") are ignored so they match as duplicates."
			}
		],
		educationalContent: {
			whatIsIt: "The Duplicate Word Finder scans text for redundant vocabulary and repeating words. This utility helps writers, editors, and coders find accidental repetitions (like \"the the\" or \"and and\") and clean up vocabulary to improve readability.",
			howToUse: "1. Paste your article, email, or text document in the Input field.\n2. Choose processing parameters: Ignore Case (case-insensitive search) and Ignore Punctuation.\n3. View duplicate word frequency stats on the right.\n4. Click \"Remove Duplicates\" to strip repetitive words, and copy the clean output.",
			proTips: ["Toggle case sensitivity if you want to distinguish capitalized words at the start of sentences.", "Check the duplicate words table to see exactly which words are most repeated in your writing."]
		}
	},
	{
		slug: "binary-code-translator",
		title: "Binary Code Translator",
		description: "Convert plain text into binary numbers (0s and 1s) and decode binary sequences back into human-readable text instantly.",
		category: "converters",
		keywords: [
			"binary translator",
			"text to binary",
			"binary to text",
			"binary decoder",
			"binary encoder",
			"ascii to binary",
			"0101 converter"
		],
		icon: "Binary",
		faqs: [
			{
				question: "How does text to binary conversion work?",
				answer: "Each character in your text is converted into its UTF-8 byte value. That byte value is then translated into its 8-bit binary representation (zeros and ones)."
			},
			{
				question: "Can I translate binary back to readable text?",
				answer: "Yes! Toggle the mode to \"Decode Binary\" or paste binary digits (separated by spaces or all run together) to get the original text back."
			},
			{
				question: "Does this tool support Unicode and Emojis?",
				answer: "Yes. By using the standard TextEncoder and TextDecoder APIs, it supports full UTF-8 character encoding, including emojis and international characters."
			}
		],
		educationalContent: {
			whatIsIt: "Binary code is the fundamental language used by computers to store and process information. It consists entirely of binary digits: 0 and 1. A Binary Code Translator helps users convert human languages into binary sequences and decode binary bytes back into legible text.",
			howToUse: "1. Select the conversion mode (Encode Text to Binary or Decode Binary to Text).\n2. Paste your text/binary into the input field.\n3. The result is calculated in real-time on the right.\n4. Click \"Copy\" to save your result.",
			proTips: ["The decoder is resilient and automatically removes non-binary characters before parsing.", "Check the binary output length: each UTF-8 character typically corresponds to an 8-bit byte block (separated by space)."]
		}
	},
	{
		slug: "hex-to-text-converter",
		title: "Hex to Text Converter",
		description: "Convert plain text into Hexadecimal (base 16) and decode Hex back to readable ASCII or UTF-8 text with customizable separators.",
		category: "converters",
		keywords: [
			"hex to text",
			"text to hex",
			"hexadecimal converter",
			"hex decoder",
			"hex encoder",
			"string to hex",
			"hex string converter"
		],
		icon: "Hash",
		faqs: [
			{
				question: "What formatting options does the Hex encoder support?",
				answer: "You can choose between space-separated hex bytes, no separators, comma-separated, C-style prefixes (0x41), or escape-style prefixes (\\x41)."
			},
			{
				question: "Is it case sensitive for decoding?",
				answer: "No. The Hex decoder parses both uppercase (e.g. A1, FF) and lowercase (e.g. a1, ff) hexadecimal characters automatically."
			},
			{
				question: "How does it handle non-ASCII text?",
				answer: "It translates the characters to UTF-8 byte sequences first, then encodes them to hex. Decoding converts those hex bytes back to UTF-8, supporting emojis and non-English scripts."
			}
		],
		educationalContent: {
			whatIsIt: "Hexadecimal (Hex) is a base-16 numbering system commonly used in computer science to represent binary data in a more human-friendly form. One hex digit represents 4 bits (a nibble), and two digits represent 8 bits (a byte). The Hex to Text Converter allows you to encode strings into hex values and decode hex representations back into readable text.",
			howToUse: "1. Select the conversion mode (Text to Hex or Hex to Text).\n2. Choose a separator format if encoding.\n3. Paste the content into the Input field.\n4. The converted output is immediately displayed. Click \"Copy\" to save it.",
			proTips: ["The Hex decoder automatically removes common separators and prefixes (0x, \\x, spaces, commas, colons) before translating.", "Hex values are useful for analyzing binary structures, encoding URLs, or debugging raw packet structures."]
		}
	},
	{
		slug: "html-to-markdown-converter",
		title: "HTML to Markdown Converter",
		description: "Convert HTML code into clean, standard Markdown syntax instantly. All processing is completed safely inside your browser.",
		category: "text",
		keywords: [
			"html to markdown",
			"convert html to md",
			"html tag stripper",
			"clean html markup",
			"rich text to markdown"
		],
		icon: "Markdown",
		faqs: [
			{
				question: "Which HTML elements are supported?",
				answer: "The converter supports headings (h1-h6), paragraphs, links (a), images (img), lists (ul, ol, li), blocks (pre, code, blockquote), horizontal lines (hr), line breaks (br), and bold/italic formatting."
			},
			{
				question: "How does it handle nested HTML lists?",
				answer: "It recursively parses lists and applies appropriate indentation (dashes for unordered lists and incrementing numbers for ordered lists)."
			},
			{
				question: "What happens to unsupported HTML tags?",
				answer: "Any unsupported tags (like divs, spans, sections, tables) are stripped, and their internal text or children are rendered directly as plaintext."
			}
		],
		educationalContent: {
			whatIsIt: "HTML (HyperText Markup Language) is the standard markup language for creating web documents, while Markdown is a lightweight markup language designed for easy writing and reading of rich text using plain text editors. Converting HTML to Markdown cleans up verbose tags into readable formatting.",
			howToUse: "1. Paste your HTML source code into the Input field.\n2. The tool parses and converts the elements to Markdown in real-time.\n3. Verify the Markdown structure in the Output editor.\n4. Click \"Copy\" to save the Markdown content.",
			proTips: ["Use this converter to extract article content from web pages, write documentation, or prepare text for static site generators like Astro.", "Inline style tags and script blocks are automatically ignored to keep the Markdown output clean."]
		}
	},
	{
		slug: "graphql-formatter",
		title: "GraphQL Formatter & Minifier",
		description: "Format, beautify, validate, or minify GraphQL queries and schemas instantly using standard indentation.",
		category: "json-yaml",
		keywords: [
			"graphql formatter",
			"prettify graphql",
			"beautify graphql",
			"minify graphql",
			"graphql query clean",
			"graphql validator"
		],
		icon: "Database",
		faqs: [
			{
				question: "Is my GraphQL query private?",
				answer: "Yes. All formatting and minification are executed 100% client-side in your browser using JavaScript. No queries or schemas are sent to our servers."
			},
			{
				question: "Does this formatter validate syntax?",
				answer: "It tokenizes and structures your query. If you have unclosed brackets or brace mismatches, the formatter helps align them, making visual debugging much easier."
			},
			{
				question: "What is the benefit of GraphQL minification?",
				answer: "Minifying GraphQL queries strips comments and collapsing whitespace. This reduces the size of your HTTP POST payload, saving bandwidth when queries are sent to your GraphQL API server."
			}
		],
		educationalContent: {
			whatIsIt: "GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. While query structures can grow deeply nested and hard to read, proper formatting (with indentation, fields alignment, and clean brackets) helps developers debug queries and mutations quickly.",
			howToUse: "1. Paste your disorganized or minified GraphQL query in the Input editor.\n2. Choose your preferred indentation level (2 spaces, 4 spaces, or tabs).\n3. Click \"Beautify\" to format the query, or \"Minify\" to compact it.\n4. Click \"Copy\" to save the output.",
			proTips: ["Minified queries are ideal for embedding directly in code strings or config files.", "Comments (lines starting with #) are preserved during formatting but stripped out entirely during minification."]
		}
	},
	{
		slug: "css-formatter",
		title: "CSS Formatter & Minifier",
		description: "Format, beautify, organize, or minify CSS style sheets instantly with custom tab or space spacing rules.",
		category: "text",
		keywords: [
			"css formatter",
			"prettify css",
			"beautify css",
			"minify css",
			"css clean",
			"css code formatter"
		],
		icon: "Brush",
		faqs: [
			{
				question: "Is my CSS processed on the server?",
				answer: "No. All CSS beautification and minification occur inside your browser via local JavaScript. No code is uploaded to external systems."
			},
			{
				question: "Does this tool support CSS minification?",
				answer: "Yes. By clicking \"Minify\", the tool removes all comments, unnecessary spaces, and trailing semicolons to compress your stylesheet for production."
			},
			{
				question: "Can I format nested css media queries?",
				answer: "Yes. The formatter handles selectors, media queries (@media), brackets, properties, and indentation levels cleanly."
			}
		],
		educationalContent: {
			whatIsIt: "CSS (Cascading Style Sheets) specifies the styling and layout of web pages. As stylesheets grow, they can become cluttered and unreadable. A CSS Formatter reorganizes rules, properties, and values, aligning brackets and indentation to make design sheets easy to inspect and edit.",
			howToUse: "1. Paste your raw, minified, or messy CSS rules into the Input text area.\n2. Choose spacing indentation (2 spaces, 4 spaces, or tabs).\n3. Click \"Beautify\" to format, or \"Minify\" to compress the stylesheet.\n4. Click \"Copy\" to save the formatted result.",
			proTips: ["Minified CSS reduces payload sizes, improving web page load times.", "Comments (/* comment */) are preserved when formatting but stripped during minification."]
		}
	},
	{
		slug: "json-stringify-text",
		title: "JSON Stringify Text",
		description: "Escape and stringify plain text or JSON structures into a single-line, fully escaped JSON string literal.",
		category: "json-yaml",
		keywords: [
			"json stringify",
			"escape json string",
			"string to json literal",
			"json escaper",
			"minify and escape json",
			"backslash escape"
		],
		icon: "Quote",
		faqs: [
			{
				question: "What is the purpose of JSON Stringify Text?",
				answer: "It takes text or code containing quotes, newlines, and backslashes, and encodes it into a safe JSON string literal representation that can be pasted directly into JSON configs, environment variables, or API payloads."
			},
			{
				question: "What is the difference between Raw Text and JSON Object modes?",
				answer: "Raw Text treats the entire input as a literal string. JSON Object parses the input first to validate its correctness, compresses it, and then turns the compressed JSON object into an escaped string."
			},
			{
				question: "Does this handle multi-line strings?",
				answer: "Yes. All line breaks are converted to literal \"\\n\" escapes inside the stringified JSON."
			}
		],
		educationalContent: {
			whatIsIt: "When embedding code, HTML, or JSON inside another JSON structure, quotes and line breaks can break syntax. JSON Stringify Text converts text into an escaped, double-quoted JSON string format (e.g. converting a newline to \\n, and double quotes to \\\"), ensuring the text remains a valid JSON string literal.",
			howToUse: "1. Paste your raw text or JSON object into the Input area.\n2. Choose a conversion mode (Escape Raw Text or Parse & Escape JSON Object).\n3. Click \"Stringify\" to perform the conversion.\n4. Copy the escaped string literal from the Output pane.",
			proTips: ["Use \"JSON Object\" mode to minify and escape configuration blobs before sending them as API parameters.", "To reverse this process and clean up backslashes, use the counterpart tool: JSON Unstringifier."]
		}
	},
	{
		slug: "json-unstringifier",
		title: "JSON Unstringifier & Unescaper",
		description: "Unescape stringified JSON objects back into readable, formatted JSON structures or plain text automatically.",
		category: "json-yaml",
		keywords: [
			"json unstringify",
			"unescape json",
			"parse escaped string",
			"json unescaper",
			"remove backslashes json",
			"unquote json string"
		],
		icon: "Braces",
		faqs: [
			{
				question: "How does the JSON Unstringifier work?",
				answer: "It parses string literals that contain escaped sequences (like \\\", \\n, \\\\). If the unescaped result itself is a valid JSON string (representing an object or array), the tool formats it as beautiful, indented JSON. Otherwise, it shows the plain text."
			},
			{
				question: "Can it handle multiple layers of stringification?",
				answer: "Yes! It recursively unescapes and parses nested stringified objects until they are fully unrolled into formatted JSON structure."
			},
			{
				question: "Is my data secure?",
				answer: "Yes. All parsing and formatting occur client-side in your web browser. No data is sent to external web servers."
			}
		],
		educationalContent: {
			whatIsIt: "In logs, databases, or API responses, you frequently find JSON objects wrapped as single strings with backslash escapes (e.g. \"{\\\"id\\\":1,\\\"name\\\":\\\"John\\\"}\"). The JSON Unstringifier reverses this escaping process, removing backslashes and quotes, and formats the result into a clean, readable JSON tree structure.",
			howToUse: "1. Paste your escaped, stringified JSON string into the Input field.\n2. The tool detects formatting and unescapes the content in real-time.\n3. The result is beautified with proper indentation.\n4. Click \"Copy\" to save the unescaped code.",
			proTips: ["This tool is highly useful for reading stringified JSON payloads from database fields or AWS CloudWatch log lines.", "Check the counterpart tool, JSON Stringify Text, if you want to encode objects into escaped string formats."]
		}
	},
	{
		slug: "unicode-to-text-converter",
		title: "Unicode to Text Converter",
		description: "Convert Unicode escape sequences (JavaScript \\uXXXX, HTML entities, CSS codes) back to readable text and vice-versa.",
		category: "converters",
		keywords: [
			"unicode to text",
			"text to unicode",
			"unicode escape converter",
			"html entity decoder",
			"unicode decoder",
			"css unicode converter"
		],
		icon: "Languages",
		faqs: [
			{
				question: "Which Unicode formats are supported?",
				answer: "This tool encodes to and decodes from JavaScript escape formats (\\uXXXX and \\u{XXXX}), HTML entity decimal (&#DD;) and hex (&#xXX;), CSS escapes (\\XXXX), and official Unicode notation (U+XXXX)."
			},
			{
				question: "How are emojis handled?",
				answer: "Emojis are fully supported. Since emojis are located in higher Unicode planes (astral planes), the tool translates them into appropriate code point escapes, such as JS braced escapes (\\u{1f600}) or HTML entities."
			},
			{
				question: "Does this tool decode mixed text?",
				answer: "Yes! The Unicode decoder detects escape sequences embedded in regular text and decodes them while leaving standard text intact."
			}
		],
		educationalContent: {
			whatIsIt: "Unicode is a universal character encoding standard that assigns a unique number (code point) to every character across languages, scripts, and symbols. In coding environments, special characters are represented as Unicode escape sequences. This tool translates escape formats into legible characters and encodes text back into safe escape codes.",
			howToUse: "1. Select the conversion direction (Unicode to Text or Text to Unicode).\n2. Choose the specific escape format (JS, HTML, CSS, or U+) when encoding.\n3. Paste the content in the Input box.\n4. Copy the converted text from the Output box.",
			proTips: ["Use HTML Entity Decimal or Hex formats to safely embed special characters and symbols in raw web page markup.", "CSS Unicode sequences require a space separator or trailing characters to delineate the escape code in styles."]
		}
	},
	{
		slug: "plain-text-converter",
		title: "Plain Text Converter",
		description: "Convert rich text, markdown, HTML, or styled mathematical Unicode letters into clean, unformatted plain text instantly.",
		category: "text",
		keywords: [
			"plain text converter",
			"strip styling",
			"remove rich text formatting",
			"html to plain text",
			"strip markdown",
			"normalize mathematical unicode",
			"de-format text"
		],
		icon: "FileText",
		faqs: [
			{
				question: "What formats can this tool strip?",
				answer: "It can strip HTML tags, Markdown markdown syntax, extra blank lines, duplicate lines, and normalize stylized/mathematical Unicode alphabets (like bold 𝕿𝖍𝖎𝖘 or script 𝓣𝓱𝓲𝓼)."
			},
			{
				question: "How does it normalize styled Unicode letters?",
				answer: "It uses standard compatibility decomposition (NFKD normalization) to map mathematical bold, italic, double-struck, fraktur, script, and monospace characters back to standard ASCII counterparts."
			},
			{
				question: "Is my input saved or sent online?",
				answer: "No. All conversions happen entirely on your computer using client-side JavaScript for complete privacy."
			}
		],
		educationalContent: {
			whatIsIt: "Copying text from websites, Word documents, or social platforms often carries hidden HTML markup, markdown codes, or styled symbols that break spacing and fonts. The Plain Text Converter cleans out all style layers, formatting codes, and odd spacing, outputting clean, unformatted text.",
			howToUse: "1. Paste your rich or styled text into the Input editor.\n2. Choose which filters to apply (Strip HTML, Strip Markdown, Normalize Unicode symbols, Trim whitespace, Remove duplicate lines).\n3. Click \"Convert\" or view the real-time cleaned result on the right.\n4. Copy the clean text to your clipboard.",
			proTips: ["Use the \"Normalize Unicode Symbols\" feature to convert fancy social media fonts (often used on Twitter or LinkedIn profiles) into regular text.", "Check the \"Trim Whitespace\" options to remove double spaces and collapse consecutive blank lines."]
		}
	},
	{
		slug: "online-notepad",
		title: "Online Notepad",
		description: "A client-side note-taking application and scratchpad featuring multi-note sidebar listing, character counts, and automatic local saving.",
		category: "text",
		keywords: [
			"online notepad",
			"scratchpad",
			"client-side notepad",
			"local notes",
			"text editor online",
			"notes word counter",
			"offline notes"
		],
		icon: "Notebook",
		faqs: [
			{
				question: "Where are my notes saved?",
				answer: "Your notes are saved directly in your web browser's LocalStorage. This means your notes persist even if you refresh or close the tab, but they remain entirely private to your device."
			},
			{
				question: "Can I download my notes?",
				answer: "Yes! You can click \"Download\" to export the active note as a standard .txt file, or click \"Export All\" to backup all your notes in a single JSON file."
			},
			{
				question: "Is there a limit to how many notes I can create?",
				answer: "There is no strict quantity limit, though standard browser LocalStorage has a total storage limit of about 5MB, which is equivalent to millions of characters of plain text."
			}
		],
		educationalContent: {
			whatIsIt: "Online Notepad is a sleek, simple, client-side note-taking application designed for writing quick text drafts, code snippets, or checklist dumps. It has a sidebar to manage multiple notes, auto-saves text as you type, and displays real-time statistics (words, characters, reading time).",
			howToUse: "1. Click \"+ New Note\" in the sidebar to start a new document.\n2. Enter a title and begin typing your notes in the editor area.\n3. The notepad will save your changes automatically.\n4. Use the sidebar to switch between or delete notes, and click \"Download\" to save notes to your desktop.",
			proTips: ["Pin important notes to keep them visible at the top of your notes list.", "Import a previously exported JSON backup file to restore notes across browsers or devices."]
		}
	},
	{
		slug: "uuid-generator",
		title: "UUID Generator",
		description: "Generate secure random UUIDs (v4) in bulk. Configure hyphens, uppercase casing, braces, and copy results instantly.",
		category: "generators",
		keywords: [
			"uuid generator",
			"guid generator",
			"generate uuid",
			"bulk uuid",
			"uuid v4",
			"online uuid generator"
		],
		icon: "Fingerprint",
		faqs: [
			{
				question: "Are the generated UUIDs secure?",
				answer: "Yes. The tool uses the cryptographically secure Web Crypto API (crypto.getRandomValues) natively supported in modern browsers."
			},
			{
				question: "What is a UUID v4?",
				answer: "A Version 4 UUID is a universally unique identifier generated using random numbers. It contains 122 bits of entropy, making collisions virtually impossible."
			},
			{
				question: "Is my generated data private?",
				answer: "Absolutely. All generation is done client-side within your browser. No data or identifiers are sent to our servers."
			}
		],
		educationalContent: {
			whatIsIt: "A UUID (Universally Unique Identifier) is a 128-bit label used to uniquely identify information in computer systems without significant central coordination.",
			howToUse: "Choose your desired output options (hyphens, uppercase, braces) and the quantity to generate. Click \"Generate\" to generate them. Use the Copy button to quickly copy the list to your clipboard.",
			proTips: ["Disable hyphens if you need a compact 32-character hexadecimal format.", "Use bulk generation (up to 100 at once) to prepare test datasets or database seeds quickly."]
		}
	},
	{
		slug: "case-converter",
		title: "Case Converter",
		description: "Convert text casing between UPPERCASE, lowercase, camelCase, PascalCase, snake_case, kebab-case, title case, and sentence case instantly.",
		category: "text",
		keywords: [
			"case converter",
			"text case converter",
			"change case",
			"camelcase",
			"snakecase",
			"lowercase to uppercase"
		],
		icon: "Type",
		faqs: [{
			question: "What cases are supported?",
			answer: "We support UPPERCASE, lowercase, camelCase, PascalCase, snake_case, kebab-case, Title Case, and Sentence case."
		}, {
			question: "Does this tool support bulk text?",
			answer: "Yes, you can paste large blocks of text, and convert their casing instantly. All conversions run locally in your browser."
		}],
		educationalContent: {
			whatIsIt: "A Case Converter transforms the capitalization patterns of words in a string. This is useful when formatting variables for code, writing headers, or cleaning up unstructured text.",
			howToUse: "Paste your text in the input area. Click any of the casing buttons (e.g., camelCase, UPPERCASE) to apply that transformation. Character, word, and line statistics will be displayed in real time.",
			proTips: ["Use camelCase or snake_case to convert descriptive names into programming variable styles.", "Use Title Case to quickly prepare blog post headlines or document titles."]
		}
	},
	{
		slug: "url-encoder-decoder",
		title: "URL Encoder & Decoder",
		description: "Encode or decode URL percent strings. Clean formatting, client-side execution, and mode configuration for components.",
		category: "converters",
		keywords: [
			"url encoder",
			"url decoder",
			"url encode",
			"url decode",
			"percent encoding",
			"url escape"
		],
		icon: "Link",
		faqs: [{
			question: "Why do we need URL encoding?",
			answer: "URLs can only contain standard ASCII characters. Characters outside this set (like spaces, emojis, or query symbols) must be converted to a percent-encoded format to be transmitted safely."
		}, {
			question: "What is the difference between URL encoding and URL component encoding?",
			answer: "Standard URL encoding leaves routing characters (like /, ?, :, @) intact. Component encoding converts all special characters including routing characters, which is required when embedding a URL inside a query parameter."
		}],
		educationalContent: {
			whatIsIt: "A URL Encoder and Decoder translates special characters into percent-encoded triplets (e.g. space to %20) and back, conforming to the RFC 3986 specification.",
			howToUse: "Enter the text or URL into the input field. Select the encoding mode (\"Standard\" or \"Encode All\"), and click \"Encode\" or \"Decode\". Copy the result instantly.",
			proTips: ["Choose \"Encode All\" when preparing a full URL to be passed inside a query parameter of another URL.", "Check the error banner for diagnostic info if the string contains invalid percent-escape sequences during decoding."]
		}
	},
	{
		slug: "epoch-converter",
		title: "Epoch Time Converter",
		description: "Convert Unix epoch timestamps to human-readable date-times (UTC and local) and vice versa. Includes a real-time updating Unix clock.",
		category: "dev-utils",
		keywords: [
			"epoch converter",
			"unix timestamp converter",
			"unix time",
			"epoch to date",
			"date to timestamp",
			"epoch clock"
		],
		icon: "Clock",
		faqs: [{
			question: "What is Unix Epoch time?",
			answer: "Unix time is a system for describing points in time, defined as the number of seconds (or milliseconds) that have elapsed since 00:00:00 UTC on Thursday, 1 January 1970."
		}, {
			question: "Does this tool support milliseconds?",
			answer: "Yes, it automatically detects whether your input is in seconds (10-digit number) or milliseconds (13-digit number) and parses it correctly."
		}],
		educationalContent: {
			whatIsIt: "An Epoch Time Converter maps Unix timestamps to human-readable calendar dates and times, adjusting for UTC and your local timezone.",
			howToUse: "To convert a timestamp, type or paste it into the \"Timestamp\" input field. The UTC and Local date representations will update instantly. To convert a date to a timestamp, enter the date/time parameters in the input fields below.",
			proTips: ["Use the pause button on the real-time Unix clock to freeze the current time and copy its exact value.", "Auto-detection works for epochs from 1970 to 2286 by parsing the digit length."]
		}
	},
	{
		slug: "hash-generator",
		title: "Hash Generator",
		description: "Generate cryptographic MD5, SHA-1, SHA-256, and SHA-512 hashes from input text. Fully secure and processed locally in your browser.",
		category: "security",
		keywords: [
			"hash generator",
			"sha256 generator",
			"md5 generator",
			"sha1 generator",
			"sha512",
			"hash string",
			"cryptographic hash"
		],
		icon: "Shield",
		faqs: [{
			question: "What is a cryptographic hash?",
			answer: "A cryptographic hash function maps input data of arbitrary size to a fixed-size bit string. It is a one-way function, meaning it is computationally infeasible to invert."
		}, {
			question: "Can the hashes be decrypted?",
			answer: "No. Cryptographic hashes are designed to be irreversible. However, weak algorithms like MD5 and SHA-1 can be vulnerable to collision attacks and pre-computed rainbow table lookups."
		}],
		educationalContent: {
			whatIsIt: "A Hash Generator computes digests (fingerprints) of text strings using secure algorithms. This is essential for verifying data integrity, checking password strengths, or generating unique cache keys.",
			howToUse: "Enter or paste your text in the input area. The tool will calculate the MD5, SHA-1, SHA-256, and SHA-512 hashes simultaneously in real-time. Use the Copy button next to each hash to copy it.",
			proTips: ["For cryptographic security or storing passwords/sensitive identifiers, always prefer SHA-256 or SHA-512 over MD5 or SHA-1.", "Copying is one-click; each hash output has its own dedicated clipboard copy button."]
		}
	},
	{
		slug: "sentence-counter",
		title: "Sentence Counter",
		description: "Count the number of sentences, words, characters, and paragraphs in your text instantly. Analyze average sentence lengths and estimated reading time.",
		category: "text",
		keywords: [
			"sentence counter",
			"count sentences",
			"paragraph counter",
			"word counter",
			"character count",
			"text analysis",
			"reading time calculator",
			"sentence length checker"
		],
		icon: "Type",
		faqs: [
			{
				question: "How does the tool define a sentence?",
				answer: "A sentence is defined as a sequence of characters ending with a period (.), exclamation mark (!), or question mark (?), followed by whitespace, a newline, or the end of the text. Common abbreviations like \"e.g.\" or \"Mr.\" are handled to prevent false positives."
			},
			{
				question: "Is my text sent to any server for analysis?",
				answer: "No. Just like all tools on Lowkeydevs, the Sentence Counter processes your text entirely client-side. Your text never leaves your browser, ensuring complete privacy."
			},
			{
				question: "How is the Reading Time calculated?",
				answer: "Reading time is calculated based on an average adult reading speed of 225 words per minute (WPM). The formula simply divides the total word count by 225."
			}
		],
		educationalContent: {
			whatIsIt: "The Sentence Counter is a text analysis utility designed for writers, students, editors, and marketers. It provides quick, precise structural metrics of any text body, helping you keep track of sentence structures, word limits, and reading readability.",
			howToUse: "1. Type or paste your document into the Input editor.\n2. The stats panel will update in real-time as you type.\n3. Review detailed metrics like sentences, paragraphs, words, and characters.\n4. Read the computed average sentence length and reading time predictions.",
			proTips: ["Aim for an average sentence length of 15–20 words to maximize readability and comprehension for general audiences.", "Use paragraph breaks every 3–4 sentences to make your digital content more scannable and user-friendly."]
		}
	},
	{
		slug: "sort-words-alphabetically",
		title: "Sort Words Alphabetically",
		description: "Sort list of words or text items alphabetically. Customize sort order, delimiters, case sensitivity, and duplicate removal instantly.",
		category: "text",
		keywords: [
			"sort words",
			"alphabetical sort",
			"sort list alphabetically",
			"sort words list",
			"alphabetize text",
			"a-z sort",
			"words sorter",
			"text line sorter"
		],
		icon: "SortAsc",
		faqs: [
			{
				question: "How do I sort words separated by commas or tabs?",
				answer: "Change the \"Separator\" dropdown setting to matches your input (e.g. \"Comma\" or \"Tab\"). The tool will split the text using that separator, sort the items, and join them back using the same separator."
			},
			{
				question: "Can I sort entire lines instead of words?",
				answer: "Yes! Select the \"Newline\" separator option, and the tool will treat each line as a single item and sort your entire list line-by-line."
			},
			{
				question: "Does this tool support natural number sorting?",
				answer: "Yes. Word items containing numbers will be sorted numerically/naturally (e.g. \"Item 2\" will come before \"Item 10\") rather than strictly alphabetically."
			}
		],
		educationalContent: {
			whatIsIt: "Sort Words Alphabetically is a utility that splits text into individual tokens (words, lines, or items) and arranges them in alphabetical (A-Z) or reverse-alphabetical (Z-A) order. It is ideal for cleaning up lists, organizing keywords, formatting tags, or preparing CSV data.",
			howToUse: "1. Paste your list or text into the Input pane.\n2. Choose your separating character (Newlines, Comma, Space, Tab, or Custom).\n3. Adjust the sorting options: Case Sensitivity, Remove Duplicates, or Ignore Punctuation.\n4. Click \"Sort Words\" or check the real-time sorted result in the right-hand editor.",
			proTips: ["Use the \"Remove Duplicates\" filter combined with sorting to clean keyword lists and remove repetitive terms.", "Check the \"Ignore Punctuation\" box if your text contains punctuation marks (like trailing periods or commas) that you do not want to interfere with alphabetical order."]
		}
	},
	{
		slug: "find-and-replace-text",
		title: "Find and Replace Text",
		description: "Search for words, characters, or pattern expressions (Regex) in your text and replace them instantly. Supports case-sensitivity and whole word matching.",
		category: "text",
		keywords: [
			"find and replace",
			"search and replace",
			"replace text",
			"word replacer",
			"regex replace",
			"replace string",
			"text replacer",
			"find replace regex"
		],
		icon: "Replace",
		faqs: [
			{
				question: "What is the \"Whole Word\" option?",
				answer: "When checked, the tool only replaces matches that stand as separate words. For example, searching for \"cat\" will match \"the cat\" but will ignore the \"cat\" inside \"category\" or \"concat\"."
			},
			{
				question: "How do I use Regular Expressions (Regex) in this tool?",
				answer: "Check the \"Regular Expression\" option, and enter your regex pattern in the \"Find\" input field. You can use standard regex groups (like $1, $2) in the \"Replace\" field to perform complex transformations."
			},
			{
				question: "Is there support for escape characters like newlines (\\n)?",
				answer: "Yes! In standard mode, you can search/replace normal text. In Regex mode, typing \"\\n\" or \"\\t\" in the search input matches actual line breaks or tabs respectively."
			}
		],
		educationalContent: {
			whatIsIt: "Find and Replace Text is a text editing utility that searches for specific sequences of characters (or patterns) and replaces them with another string. It is highly useful for mass-editing templates, updating variables in code, renaming terminology, or cleaning structured formatting.",
			howToUse: "1. Paste your text into the Input editor.\n2. Type the word or pattern to find, and what to replace it with.\n3. Configure options such as Case Sensitive, Whole Word, or Regular Expression.\n4. Click \"Replace\" or view the real-time changes on the right side, along with the total match count.",
			proTips: ["Use Regex mode with group captures (e.g. Find: `(\\w+)\\s+(\\w+)`, Replace: `$2, $1`) to quickly swap first and last names in lists.", "Leave the \"Replace\" input empty if you want to completely delete all occurrences of the \"Find\" term."]
		}
	},
	{
		slug: "remove-duplicate-lines",
		title: "Remove Duplicate Lines",
		description: "Clean your text files and lists by removing duplicate lines. Support options to keep first or last occurrence, remove all duplicates, and ignore case.",
		category: "text",
		keywords: [
			"remove duplicate lines",
			"dedupe lines",
			"strip duplicate lines",
			"unique lines finder",
			"remove repeating lines",
			"clean lists",
			"dedupe tool"
		],
		icon: "ListFilter",
		faqs: [
			{
				question: "What is the difference between \"Keep First\" and \"Keep Last\"?",
				answer: "\"Keep First\" retains the first time a duplicate line appears in the text and deletes any subsequent occurrences. \"Keep Last\" does the opposite, keeping the very last occurrence and deleting previous duplicates. This is useful when the ordering of your lines carries timeline or version relevance."
			},
			{
				question: "What does \"Remove All Duplicates\" do?",
				answer: "It completely deletes any line that appears more than once. For example, if \"Apple\" appears three times, all three \"Apple\" lines are deleted, leaving only lines that were completely unique from the start."
			},
			{
				question: "Can I preserve empty lines in my text?",
				answer: "Yes. Check the \"Ignore Empty Lines\" option. Empty lines or whitespace-only lines will be ignored by the duplicate-checking logic and will remain in their original positions."
			}
		],
		educationalContent: {
			whatIsIt: "Remove Duplicate Lines is a text cleaning utility that scans your lists, logs, or documents line-by-line, identifying and removing repeating duplicate values. It is highly effective for sanitizing data outputs, organizing code components, cleaning list directories, or removing repetitive items.",
			howToUse: "1. Paste your list or text into the Input panel.\n2. Choose options like Case Sensitivity, Ignore Empty Lines, and the duplicate line behavior (Keep First, Keep Last, Remove All).\n3. Optionally, check \"Sort Output\" to automatically sort the cleaned list alphabetically.\n4. Copy the deduplicated list from the Result panel.",
			proTips: ["Use this tool to clean up newsletter subscriber lists, SQL query inputs, CSV records, or server access log files.", "Checking \"Sort Output\" organizes the unique lines alphabetically, making it easier to scan and verify the clean data."]
		}
	},
	{
		slug: "remove-text-formatting",
		title: "Remove Text Formatting",
		description: "Strip HTML, Markdown, BBCode, and mathematical Unicode symbols back to standard unformatted plain text instantly.",
		category: "text",
		keywords: [
			"remove text formatting",
			"strip style",
			"strip HTML tags",
			"remove markdown",
			"bbcode cleaner",
			"normalize unicode fonts",
			"plain text maker",
			"clear font styles"
		],
		icon: "Brush",
		faqs: [
			{
				question: "What types of formatting does this tool strip?",
				answer: "It strips HTML elements, Markdown shorthand tags (like bold, italic, code brackets), BBCode styles (like [b] or [url]), and converts mathematical stylized fonts (bold, script, fraktur Unicode blocks) back to regular readable ASCII characters."
			},
			{
				question: "How does it normalize styled social media fonts?",
				answer: "It decomposes unicode compatibility forms (NFKD normalization) to map fancy mathematical, bold, double-struck, script, and monospace characters back to standard alphabetical letters."
			},
			{
				question: "Can this tool remove double spaces or multiple empty lines?",
				answer: "Yes! Check the \"Collapse Whitespace\" option to merge double spaces, trim trailing line-endings, and reduce multiple consecutive blank lines down to a single line break."
			}
		],
		educationalContent: {
			whatIsIt: "Remove Text Formatting is a sanitizing utility designed to strip away hidden layout metadata, markup tags, styling tokens, or decorative social fonts. It leaves you with raw, uniform plain text that paste-links cleanly into any compiler, email client, or word document.",
			howToUse: "1. Paste your rich or formatted text in the Input area.\n2. Select which styling codes to remove: HTML, Markdown, BBCode, or mathematical Unicode fonts.\n3. Turn on whitespace collapse if needed to normalize lines and paragraphs.\n4. Click \"Clear Formatting\" and copy the sanitized plain text output.",
			proTips: ["Use this tool before pasting text from MS Word, PDFs, or website pages into databases to prevent styling errors and strange character encodings.", "Normalize Unicode fonts is perfect for converting fancy bio fonts on Twitter/X, Instagram, or LinkedIn into standard searchable text."]
		}
	},
	{
		slug: "repeat-text-generator",
		title: "Repeat Text Generator",
		description: "Multiply and repeat a word, phrase, or line of text multiple times. Choose custom delimiters, add numbering indexes, and copy output instantly.",
		category: "generators",
		keywords: [
			"repeat text",
			"text multiplier",
			"word repeater",
			"text repeater",
			"duplicate text generator",
			"spam text generator",
			"multiply words list",
			"line repeater"
		],
		icon: "Repeat",
		faqs: [
			{
				question: "What is the limit for repeating text?",
				answer: "The tool supports repeating your input text up to 10,000 times. Going beyond this limit is capped to prevent browser tabs from freezing due to memory constraints."
			},
			{
				question: "How do I add list numbering to each repeated item?",
				answer: "Check the \"Prepend index numbers\" option. The generator will automatically prefix each repeated item with its index (e.g. \"1. Item\", \"2. Item\")."
			},
			{
				question: "Which separators can I use between repeated text blocks?",
				answer: "You can separate repeated blocks with spaces, commas, newlines, tabs, or a completely custom text string (such as \" | \" or \" AND \")."
			}
		],
		educationalContent: {
			whatIsIt: "The Repeat Text Generator is a convenience utility that replicates any input string or phrase a specified number of times. It is ideal for developers testing buffer limits, creating mock database entries, generating design placeholder strings, or creating repetitive formatting lists.",
			howToUse: "1. Enter the word or sentence you want to repeat in the Input field.\n2. Enter the repeat count (e.g., 50).\n3. Pick your separator (like a newline or comma) and decide if you want line numbering.\n4. Copy the generated block from the Result pane.",
			proTips: ["Use the Custom Separator option to create repeated separators like markdown lines or boundary walls (e.g., repeat \"=-=\" with no spacing to create lines).", "Use index numbers and newline separator to create a quick template lists for spreadsheets or document outlines."]
		}
	},
	{
		slug: "reverse-text-generator",
		title: "Reverse Text Generator",
		description: "Reverse text characters, reverse words, reverse entire lines, or flip your letters upside down instantly. Includes mirror writing options.",
		category: "generators",
		keywords: [
			"reverse text",
			"backwards text generator",
			"flip text",
			"upside down text",
			"mirror text generator",
			"text reverser",
			"reverse words",
			"reverse lines"
		],
		icon: "Reverse",
		faqs: [
			{
				question: "What is the \"Upside Down\" mode?",
				answer: "It uses special Unicode character replacements that resemble standard alphabet letters rotated 180 degrees (e.g., \"a\" becomes \"ɐ\"). This lets you create upside-down text blocks for passwords, social media, or fun formatting."
			},
			{
				question: "What is the difference between \"Reverse Characters\" and \"Reverse Words\"?",
				answer: "\"Reverse Characters\" flips every single letter backwards (e.g., \"Hello World\" to \"dlroW olleH\"). \"Reverse Words\" preserves individual word spellings but swaps the sequence of the words (e.g., \"Hello World\" to \"World Hello\")."
			},
			{
				question: "Does this tool support reversing paragraphs line-by-line?",
				answer: "Yes! Select the \"Reverse Lines\" mode. It will reverse the vertical sequence of the lines, meaning your last line becomes your first line, and your first becomes the last."
			}
		],
		educationalContent: {
			whatIsIt: "The Reverse Text Generator is a text manipulation utility that flips characters, word sequences, lines, or character structures. Writers, developers, and social media managers use it for security challenges, palindrome exploration, coding string tests, or decorative formatting.",
			howToUse: "1. Type or paste your text in the Input panel.\n2. Select your desired reversal mode: Reverse Characters, Reverse Words, Reverse Lines, or Flip Upside Down.\n3. The result is calculated and displayed instantly in the output window.\n4. Copy the reversed text to your clipboard.",
			proTips: ["Select \"Flip Upside Down\" to create secure, hard-to-guess password hints that are still readable by you.", "Reverse Words is highly useful for cleaning up formatted data columns or reading reverse-notated logs."]
		}
	},
	{
		slug: "invisible-text-generator",
		title: "Invisible Text Generator",
		description: "Generate blank spaces or hide secret messages inside text using zero-width invisible Unicode characters. Includes steganography encoding and decoding.",
		category: "generators",
		keywords: [
			"invisible text",
			"zero width space",
			"invisible characters",
			"hide message in text",
			"invisible steganography",
			"blank space copy",
			"form bypass",
			"hidden watermark"
		],
		icon: "EyeOff",
		faqs: [
			{
				question: "What are Zero-Width characters?",
				answer: "Zero-Width characters (like ZWSP, ZWNJ, and ZWJ) are non-printing Unicode characters used in typesetting to control formatting (e.g., word breaks, ligature connections) without taking up visual space on screen."
			},
			{
				question: "How does the Hidden Message (Steganography) feature work?",
				answer: "It converts your secret message into binary (0s and 1s) and represents those bits using zero-width spaces (ZWSP) and zero-width non-joiners (ZWNJ). It then embeds this invisible string inside your visible cover message. Anyone copy-pasting the text carries the hidden data, which you can extract here."
			},
			{
				question: "What can I use invisible text for?",
				answer: "It can be used to add hidden watermarks or signatures to your writing to track leaks/copyrights, to bypass name/length fields that do not allow normal spaces, or to create spacing formatting in markdown and platforms that strip regular space tokens."
			}
		],
		educationalContent: {
			whatIsIt: "The Invisible Text Generator is a creative utility that harnesses zero-width Unicode characters. It functions in two modes: generating empty/blank strings for layout and form bypasses, and text steganography (hiding secret watermarks or messages invisibly within standard readable text).",
			howToUse: "1. For blank spaces, select a character type and count, then click \"Generate & Copy\".\n2. For Steganography, open the \"Hide Message\" tab, type a public cover message and a secret private message, then click \"Encode\" to generate the combined text.\n3. To extract a secret, go to the \"Decode Message\" tab, paste the encoded text, and click \"Decode\".",
			proTips: ["Use zero-width spaces as invisible watermarks in drafts. If your content is copied and leaked, you can paste the text here to identify the source of the leak.", "If a social media platform or forum forbids duplicate usernames or blanks, copy-paste a few zero-width spaces to bypass their validation filters."]
		}
	},
	{
		slug: "fancy-text-generator",
		title: "Fancy Text Generator",
		description: "Convert plain text into styled Unicode fonts (cursive, gothic, bubble, bold, italic) that you can copy and paste on Instagram, Twitter, Facebook, or Discord.",
		category: "text",
		keywords: [
			"fancy text generator",
			"cool text",
			"instagram fonts",
			"twitter fonts",
			"font changer",
			"unicode text converter",
			"cursive generator",
			"gothic fonts copy paste"
		],
		icon: "Brush",
		faqs: [
			{
				question: "How do fancy text generators work?",
				answer: "They map standard ASCII characters (A-Z, a-z, 0-9) to alternative mathematical and decorative symbols in the Unicode standard. Because these characters are built-in symbols, they can be copied and pasted anywhere that supports Unicode, without needing font styling CSS."
			},
			{
				question: "Will these fonts work on Instagram, TikTok, and Twitter?",
				answer: "Yes! They work on almost all major social platforms, bios, usernames, and chat apps (like Discord, Telegram, and WhatsApp) because they are standard Unicode characters rather than proprietary styling fonts."
			},
			{
				question: "Why do some letters look like boxes or question marks?",
				answer: "This happens if the device or web browser you are viewing the text on does not have a font installed that supports those specific Unicode mathematical or script ranges. Modern operating systems and mobile devices have near-complete support."
			}
		],
		educationalContent: {
			whatIsIt: "The Fancy Text Generator is a utility to style your text with over 20 unique text decorations. It works entirely client-side using native Unicode mappings, meaning you do not need external CSS styling or special fonts to copy-paste the text across the web.",
			howToUse: "1. Enter the text you wish to format into the \"Input Text\" textarea.\n2. Scroll through the generated list of styles (such as Cursive, Bold Sans, Gothic, or Bubble).\n3. Click the \"Copy\" button next to any style to copy it to your clipboard instantly, or click \"Load Sample\" to see how it looks.",
			proTips: ["Use Cursive or Gothic text in your social media bios to stand out from other standard font profiles.", "Combine styled fonts with emojis to create eye-catching headings or separator lines in messages."]
		}
	},
	{
		slug: "bold-text-generator",
		title: "Bold Text Generator",
		description: "Convert standard text into various bold Unicode fonts. Copy and paste bold serif, bold sans-serif, bold script, and bold gothic styles anywhere.",
		category: "text",
		keywords: [
			"bold text generator",
			"bold text copy paste",
			"bold font converter",
			"how to bold text",
			"fb bold text",
			"instagram bold generator",
			"unicode bold"
		],
		icon: "Type",
		faqs: [{
			question: "How does the Bold Text Generator work?",
			answer: "It replaces regular alphabetic characters and numbers with corresponding bold symbols from the Unicode mathematical alphanumeric blocks. This allows the bold text to retain its formatting when copied and pasted."
		}, {
			question: "Where can I paste bold text?",
			answer: "You can paste it in social media posts, bios, user profiles, email subjects, chat platforms (like Slack, Discord, MS Teams), and anywhere else that supports standard Unicode text."
		}],
		educationalContent: {
			whatIsIt: "The Bold Text Generator is a simple tool to instantly bold your text in multiple aesthetic variations. It operates completely in the browser and requires no external stylesheets or libraries to render.",
			howToUse: "1. Enter your text in the input box.\n2. See the bold transformations update instantly in the results pane.\n3. Click \"Copy\" next to the bold style you like.",
			proTips: ["Use Serif Bold for academic or editorial contexts, and Sans-Serif Bold for modern, clean visual headlines.", "Bold text in email subject lines can help increase open rates, but use it sparingly to avoid spam filters."]
		}
	},
	{
		slug: "italic-text-generator",
		title: "Italic Text Generator",
		description: "Convert standard text into various italic Unicode font styles. Copy and paste serif italic, sans-serif italic, and bold italic fonts.",
		category: "text",
		keywords: [
			"italic text generator",
			"italic text copy paste",
			"italic font converter",
			"how to italic text",
			"slanted text generator",
			"instagram italic generator",
			"unicode italic"
		],
		icon: "Type",
		faqs: [{
			question: "How does the Italic Text Generator work?",
			answer: "It replaces normal alphabetic characters with corresponding slanted mathematical italic symbols defined in Unicode. No CSS is required to render these italics, making them fully copy-pasteable."
		}, {
			question: "Will italic text show up on mobile devices?",
			answer: "Yes! Android and iOS operating systems natively support mathematical Unicode character blocks, so the text will show up slanted on most mobile browsers and social apps."
		}],
		educationalContent: {
			whatIsIt: "The Italic Text Generator converts standard alphanumeric text into different slanted Unicode styles. Perfect for adding emphasis, citations, or stylized headers on platforms that do not support standard rich-text markdown.",
			howToUse: "1. Type or paste your text into the left pane.\n2. Instantly see the text transformed into multiple slanted styles.\n3. Click \"Copy\" next to your preferred style to save it to your clipboard.",
			proTips: ["Use Serif Italic for titles or academic quotations, and Sans-Serif Italic for modern, clean emphasis in text posts.", "Bold Italic combines both bold and italic weights for maximum emphasis on headings."]
		}
	},
	{
		slug: "underline-text-generator",
		title: "Underline Text Generator",
		description: "Generate underlined text styles (single, double, wave, dotted) online using Unicode combining characters. Copy and paste underlined words anywhere.",
		category: "text",
		keywords: [
			"underline text generator",
			"underlined text copy paste",
			"underlined words",
			"how to underline text",
			"double underline generator",
			"wavy underline text"
		],
		icon: "Type",
		faqs: [{
			question: "How does combining underline Unicode work?",
			answer: "It appends special Unicode diacritical marks (e.g., low lines, double low lines, wave marks) to each individual letter. Devices and browsers parse these characters and display them with an underline drawn underneath the base glyph."
		}, {
			question: "Will underlined text show up correctly on social media?",
			answer: "Yes! Most modern apps like Instagram, Facebook, and Twitter support Unicode combining marks, though double or wave underlines might render slightly differently depending on the device's font engine."
		}],
		educationalContent: {
			whatIsIt: "The Underline Text Generator uses Unicode combining low line diacritics to draw lines under your characters without using HTML CSS styling, making it compatible with chat clients and social posts.",
			howToUse: "1. Enter your text in the input area.\n2. Select an underline style (Single, Double, Wave, Dotted, or Under-bar).\n3. Copy the underlined result directly from the output box.",
			proTips: ["Use wave (tilde) underlines for a playful or error-like emphasis in drafts.", "Dotted underlines are great for indicating abbreviations or hover terms in plain text documents."]
		}
	},
	{
		slug: "strikethrough-text-generator",
		title: "Strikethrough Text Generator",
		description: "Generate strikethrough text styles (long strike, short strike, slash, tilde) online using Unicode combining characters. Copy and paste strikethrough words anywhere.",
		category: "text",
		keywords: [
			"strikethrough text generator",
			"strikethrough copy paste",
			"cross out text",
			"how to cross out text",
			"slash text generator",
			"tilde strikethrough"
		],
		icon: "Type",
		faqs: [{
			question: "How does strikethrough Unicode work?",
			answer: "It combines standard ASCII characters with overlay diacritical marks like the combining long stroke overlay (\\u0336). When rendered, the system overlay draws a line directly through the middle of the preceding character."
		}, {
			question: "Where can I use strikethrough text?",
			answer: "Strikethrough text works on YouTube comments, Instagram bios, Twitter posts, email titles, Reddit, and forums that do not support markdown syntax like ~~text~~."
		}],
		educationalContent: {
			whatIsIt: "The Strikethrough Text Generator is an online utility to cross out text using standard Unicode overlays. It offers standard, short, slash-through, and tilde overlays that work across web applications.",
			howToUse: "1. Enter the text you want to cross out.\n2. Choose a strikethrough style from the dropdown list (e.g., Slash-through, Tilde, Standard long line).\n3. Copy the crossed-out text from the output field.",
			proTips: ["Strikethrough is often used in social media or chat messaging to indicate humor, sarcasm, or editing correction.", "Slash-through (solidus overlay) can be used to style coding variables or create unique usernames."]
		}
	},
	{
		slug: "bubble-text-generator",
		title: "Bubble Text Generator",
		description: "Convert regular text into circled bubble letters (white/black circles) or squared fonts. Easy copy and paste bubble fonts.",
		category: "text",
		keywords: [
			"bubble text generator",
			"circled letters",
			"bubble font copy paste",
			"circle text generator",
			"squared text",
			"black bubble text",
			"cool text bubbles"
		],
		icon: "Type",
		faqs: [{
			question: "What is bubble text?",
			answer: "Bubble text is text generated using circled Unicode symbols. Instead of rendering standard letters, it maps them to specific code points that display enclosing circles or squares."
		}, {
			question: "Does bubble text support numbers?",
			answer: "Yes! Our bubble text generator supports numbers 0-9 by mapping them to their corresponding circled number symbols (e.g., ① or ❶)."
		}],
		educationalContent: {
			whatIsIt: "The Bubble Text Generator is a decorative font tool that encloses letters and numbers in circles or squares. It uses standard Unicode characters, so you can copy and paste the styled bubbles into social media or chats.",
			howToUse: "1. Paste your message in the input text area.\n2. Choose a bubble style (e.g., Circled White, Circled Black, Squared White, Squared Black).\n3. Copy the bubble-styled text output.",
			proTips: ["Circled black (solid) bubbles are highly visible and look great for highlighting short words or tags in bios.", "Use circled letters to write standout bullet lists: Ⓐ, Ⓑ, Ⓒ instead of standard bullets."]
		}
	},
	{
		slug: "small-text-generator",
		title: "Small Text Generator",
		description: "Convert regular text into tiny text formats like small caps, superscript, and subscript. Copy and paste small letters anywhere.",
		category: "text",
		keywords: [
			"small text generator",
			"tiny text",
			"small caps generator",
			"superscript generator",
			"subscript generator",
			"small letters copy paste",
			"tiny font maker"
		],
		icon: "Type",
		faqs: [{
			question: "Why are some subscript/superscript letters missing?",
			answer: "Unicode does not define a complete, standardized set of subscript characters for the entire English alphabet (missing letters like q, w, g, etc. are substituted or mapped to their closest match). Superscript has better coverage, but also contains minor layout variations."
		}, {
			question: "What are Small Caps?",
			answer: "Small Caps are lowercase characters designed to look like miniaturized capital letters (e.g., sᴍᴀʟʟ). Unlike standard CSS text-transform: small-caps, these are actual Unicode characters that remain formatted when copy-pasted."
		}],
		educationalContent: {
			whatIsIt: "The Small Text Generator turns standard text into three different miniaturized font formats: Small Capitals, Superscript (raised), and Subscript (lowered) using Unicode symbols.",
			howToUse: "1. Enter the text in the input box.\n2. Select Small Caps, Superscript, or Subscript in the option dropdown.\n3. The generated tiny text is updated in real-time, ready to copy.",
			proTips: ["Superscript is great for writing math exponents or footnote symbols in text messages: x³ + y².", "Small Caps are popular for branding, aesthetic descriptions, and clean layout subheadings on social profiles."]
		}
	},
	{
		slug: "big-text-generator",
		title: "Big Text Generator",
		description: "Convert standard text into giant ASCII Art banner fonts (Block, Slant). Copy and paste retro text art to comments, emails, or code reviews.",
		category: "text",
		keywords: [
			"big text generator",
			"ascii art generator",
			"giant letters copy paste",
			"large text generator",
			"text banner maker",
			"word art generator",
			"block letters ascii"
		],
		icon: "Terminal",
		faqs: [{
			question: "What is ASCII Art text?",
			answer: "ASCII Art text uses combinations of characters, slashes, and blocks to represent larger geometric shapes or words. It has been used since early computer networking to display graphic banners in plain text formats."
		}, {
			question: "Will Big Text wrap on small screens?",
			answer: "Yes. ASCII art relies on horizontal alignment, so if the viewport is too small or the font is not monospace, the letters will split or warp. It is best to display ASCII art inside preformatted (<pre>) text tags."
		}],
		educationalContent: {
			whatIsIt: "The Big Text Generator translates standard alphanumeric characters into large multi-line ASCII art text blocks using custom-mapped retro blocky fonts.",
			howToUse: "1. Enter the word or short phrase you want to magnify.\n2. Choose an ASCII font style (e.g., Block, Slant) from the options.\n3. Copy the rendered preformatted text block from the output screen.",
			proTips: ["Keep your inputs short (e.g., 5-10 characters) to prevent the ASCII banner from wrapping and breaking its shape on target platforms.", "Use ASCII art to create gorgeous, readable comment blocks in your code files to separate sections!"]
		}
	},
	{
		slug: "gothic-text-generator",
		title: "Gothic Text Generator",
		description: "Convert plain text into medieval Fraktur or Gothic letters online. Copy and paste old english gothic fonts to bios, titles, and usernames.",
		category: "text",
		keywords: [
			"gothic text generator",
			"fraktur generator",
			"old english font copy paste",
			"medieval text generator",
			"gothic letters",
			"blackletter font maker"
		],
		icon: "Type",
		faqs: [{
			question: "What is Fraktur or Gothic text?",
			answer: "Fraktur is a blackletter style of the Latin alphabet. The Gothic Text Generator maps standard letters to Gothic/Fraktur mathematical symbols defined in Unicode, meaning they can be displayed without loading any font files."
		}, {
			question: "Why are some Gothic letters not standard sizes?",
			answer: "Unicode defines separate blocks for Fraktur symbols. A few capital letters (like C, H, I, R, Z) belong to the earlier \"Letterlike Symbols\" Unicode block, which makes them render slightly differently on older devices."
		}],
		educationalContent: {
			whatIsIt: "The Gothic Text Generator converts plain English characters into medieval-style Fraktur or Old English letters using Unicode blackletter character equivalents.",
			howToUse: "1. Paste your text in the input area.\n2. Instantly see the text rendered in Normal Fraktur and Bold Fraktur.\n3. Click \"Copy\" next to the gothic style you want to use.",
			proTips: ["Gothic characters are popular for heavy metal band names, dark aesthetic social posts, and stylized game handles.", "Bold Gothic is extremely visible and can be used to emphasize titles or section headers in plain text."]
		}
	},
	{
		slug: "mirror-text-generator",
		title: "Mirror Text Generator",
		description: "Flip, rotate, reverse, or mirror text characters. Copy and paste upside-down and mirrored text online.",
		category: "text",
		keywords: [
			"mirror text generator",
			"upside down text",
			"flip text generator",
			"reverse text copy paste",
			"backwards text generator",
			"mirrored writing maker"
		],
		icon: "Reverse",
		faqs: [{
			question: "What is mirror text?",
			answer: "Mirror text is text generated using character glyphs that look like horizontal or vertical reflections of standard Latin characters (e.g., ɒ for a, d for b)."
		}, {
			question: "What is the difference between Reverse and Mirror?",
			answer: "Reverse text simply prints the character sequence backwards (e.g., \"abc\" -> \"cba\"). Mirror text flips the individual character glyphs horizontally so they look like they are viewed in a mirror."
		}],
		educationalContent: {
			whatIsIt: "The Mirror Text Generator allows you to distort text in multiple ways: reversing the spelling, flipping letters upside-down (vertical reflection), mirroring characters (horizontal reflection), or rotating it 180 degrees.",
			howToUse: "1. Enter the text you wish to flip or mirror.\n2. Choose a transformation mode (Mirror, Upside Down, Reverse, or Rotate Both).\n3. Copy the mirrored output text.",
			proTips: ["Use horizontal mirror writing to write hidden texts that can only be read easily when held up to a real mirror!", "Upside-down text is popular for creating funny status updates or hard-to-guess, memorable passwords."]
		}
	},
	{
		slug: "fonts-for-instagram",
		title: "Fonts for Instagram",
		description: "Generate stylish and cool fonts for your Instagram bio, captions, and comments. Instantly convert plain text into cursive, bold, gothic, and bubble fonts to copy & paste.",
		category: "text",
		keywords: [
			"instagram fonts",
			"instagram bio fonts",
			"ig font generator",
			"fancy text instagram",
			"cool text for instagram",
			"font changer for instagram",
			"instagram caption generator"
		],
		icon: "instagram",
		faqs: [
			{
				question: "How do I change the font on my Instagram Bio?",
				answer: "Simply type your text into this generator, choose a style you like, click \"Copy\", then open Instagram, go to \"Edit Profile\", and paste the text into the Bio field. Click save and your bio will now show the new styled font!"
			},
			{
				question: "Are these fonts safe to use on Instagram?",
				answer: "Yes! These fonts use standard Unicode characters rather than custom web fonts or external stylesheets. Since Instagram natively supports Unicode symbols, these fonts will show up correctly for everyone visiting your profile."
			},
			{
				question: "Why do some fonts look like blank boxes in my Bio?",
				answer: "This happens if a user is viewing your profile from a very old device that doesn't support the specific Unicode characters. However, 99% of modern smartphones (iOS and Android) support all these characters fully."
			}
		],
		educationalContent: {
			whatIsIt: "Fonts for Instagram is a tool that allows you to convert plain ASCII text into stylish, decorative symbols that can be copied and pasted directly into your Instagram Bio, captions, comments, and direct messages. It makes your profile stand out and look aesthetic without requiring any special app installations.",
			howToUse: "1. Enter the text or bio content you want to convert in the input box.\n2. See the live preview in the simulated Instagram Profile Bio card to check how it looks on mobile.\n3. Scroll down and click the \"Copy\" button next to any font style you like.\n4. Paste the copied text directly into your Instagram app.",
			proTips: ["Mix and match different font styles for your name and your bio description to create a clean hierarchy.", "Use bold serif or sans-serif for headings, cursive/script for details, and add aesthetic symbols or emojis to separate lines."]
		}
	},
	{
		slug: "whatsapp-font-generator",
		title: "WhatsApp Font Generator",
		description: "Generate stylish and formatted text for WhatsApp messages. Convert plain text into WhatsApp markdown (bold, italic, strikethrough, monospace) and unicode fonts.",
		category: "text",
		keywords: [
			"whatsapp font generator",
			"whatsapp bold text",
			"whatsapp italic converter",
			"whatsapp text styles",
			"whatsapp font changer",
			"cool whatsapp fonts"
		],
		icon: "messagesquare",
		faqs: [
			{
				question: "How do you bold text on WhatsApp?",
				answer: "To make text bold natively on WhatsApp, place an asterisk (*) on both sides of the text, like this: *text*. This tool automates that and provides styled unicode options too."
			},
			{
				question: "How do you do other formats like italic and strikethrough natively in WhatsApp?",
				answer: "Use underscores (_) for italics, like _text_. Use tildes (~) for strikethrough, like ~text~. Use three backticks (```) for monospace, like ```text```."
			},
			{
				question: "Do other people see these fancy fonts in chat?",
				answer: "Yes! Whether you copy the WhatsApp native markdown shortcuts (which WhatsApp renders as rich text on delivery) or the fancy Unicode fonts, other chat participants will see the formatting correctly on their phones."
			}
		],
		educationalContent: {
			whatIsIt: "WhatsApp Font Generator is a utility to format chat messages. It compiles the native markdown syntax used by WhatsApp and generates a selection of decorative unicode fonts that can be copied and pasted straight into your WhatsApp chats.",
			howToUse: "1. Enter your text in the input box.\n2. Preview how your message will look in the simulated WhatsApp mobile chat screen.\n3. Copy the native markdown styled text or any of the aesthetic unicode font styles.\n4. Paste and send the message on WhatsApp!",
			proTips: ["Combine native bold and italics (e.g. *_text_*) for maximum emphasis in group chats.", "Use monospace text for sending clean tables, code, addresses, or alignment-sensitive text in chat."]
		}
	},
	{
		slug: "tiktok-font-generator",
		title: "TikTok Font Generator",
		description: "Generate cool and stylish fonts for your TikTok bio, captions, and comments. Instantly copy and paste aesthetic unicode text to style your TikTok profile.",
		category: "text",
		keywords: [
			"tiktok font generator",
			"tiktok bio fonts",
			"tiktok captions font",
			"cool fonts for tiktok",
			"tiktok nickname fonts",
			"font changer for tiktok"
		],
		icon: "brush",
		faqs: [
			{
				question: "How do I change my TikTok font styling?",
				answer: "Write your text in this generator, select and copy the styled font you want, open TikTok, go to \"Edit Profile\" -> \"Bio\" (or \"Name\"), and paste the styled text. Save it to update your profile!"
			},
			{
				question: "Do these fonts work in TikTok video captions?",
				answer: "Yes! They work in video captions, text overlays (by copy-pasting), and comments, helping your content get noticed by viewers."
			},
			{
				question: "Are there characters TikTok does not support?",
				answer: "TikTok supports the vast majority of Unicode block characters. However, very complex diacritics or combining symbols can sometimes trigger automatic moderation filters or appear broken. Clean bold, cursive, and simple bubble/gothic fonts work flawlessly."
			}
		],
		educationalContent: {
			whatIsIt: "TikTok Font Generator is a client-side utility to convert plain text into bold, script, gothic, circled, and decorated text symbols specifically tuned to work on TikTok. It helps make your username, bio, and captions visually stand out.",
			howToUse: "1. Enter the text you want to use on TikTok.\n2. Review the simulated mobile TikTok Profile Bio preview to see how it renders.\n3. Scroll down and copy your preferred font style.\n4. Open TikTok and paste the text.",
			proTips: ["Use small caps or bold sans-serif for your TikTok profile Name to make it prominent.", "In captions, use fancy fonts on keywords to catch attention in the first three seconds of a user scrolling their FYP."]
		}
	},
	{
		slug: "discord-font-generator",
		title: "Discord Font Generator",
		description: "Generate styled unicode fonts, markdown styling, and ANSI colored text for Discord. Elevate your chat messages, profile status, and server layout.",
		category: "text",
		keywords: [
			"discord font generator",
			"discord markdown generator",
			"discord colored text",
			"discord text formatting",
			"discord font changer",
			"ansi color codes discord"
		],
		icon: "messagesquare",
		faqs: [
			{
				question: "How do you generate colored text on Discord?",
				answer: "Discord supports color formatting using ANSI escape codes in triple-backtick code blocks (e.g. ```ansi). This generator automatically outputs the required formatting blocks for various colors."
			},
			{
				question: "Will these fonts work in Discord channel names and profile status?",
				answer: "Yes! Unicode styled fonts will work in channel names, server roles, nickname settings, and custom profile statuses. Discord native markdown (like bold, italics) only works in actual chat messages."
			},
			{
				question: "What markdown formatting does Discord support natively?",
				answer: "Discord supports: **bold**, *italics*, __underline__, ~~strikethrough~~, ||spoiler||, > blockquotes, `inline code`, and ```code blocks```."
			}
		],
		educationalContent: {
			whatIsIt: "Discord Font Generator is a specialized formatter for Discord users and server admins. It produces native markdown, Unicode fonts, and ANSI color escape sequences that let you colorize and style your text inside chat channels, bios, status settings, and channel lists.",
			howToUse: "1. Type your message in the input text area.\n2. Choose between Light/Dark theme inside the live simulated Discord Chat preview to see how your text appears.\n3. Scroll down and browse Unicode fonts, native Discord markdown shortcuts, or the ANSI Color block options.\n4. Click \"Copy\" on your preferred style and paste it into Discord.",
			proTips: ["Use ANSI color block generators to create eye-catching announcements, notices, and rules in your server.", "Use double-struck or cursive fonts for channel names to organize your Discord server categories in a clean, aesthetic layout."]
		}
	},
	{
		slug: "facebook-font-generator",
		title: "Facebook Font Generator",
		description: "Generate stylish and eye-catching fonts for your Facebook posts, comments, bios, and messages. Convert plain text into cursive, bold, and bubble unicode fonts.",
		category: "text",
		keywords: [
			"facebook font generator",
			"facebook bold text",
			"fb font changer",
			"stylish text for facebook",
			"copy paste facebook fonts",
			"cool text fb"
		],
		icon: "facebook",
		faqs: [
			{
				question: "How do I bold text in a Facebook post?",
				answer: "Facebook does not support standard markdown bolding in standard user posts. However, you can use this generator to convert your text into Unicode bold characters (e.g., 𝐁𝐨𝐥𝐝), which render as bold text on Facebook."
			},
			{
				question: "Do these fonts work in Facebook Messenger and comments?",
				answer: "Yes! They work perfectly in Messenger chats, group comments, posts, and your personal profile Bio because they are encoded as standard Unicode symbols."
			},
			{
				question: "Will these fonts hurt my post reach or accessibility?",
				answer: "Screen readers for visually impaired users read Unicode math symbols literally (e.g., \"Mathematical Bold Capital A\"), which can make accessibility challenging. We recommend using styled fonts on key terms or phrases rather than formatting entire long posts."
			}
		],
		educationalContent: {
			whatIsIt: "Facebook Font Generator is an online utility that transforms ordinary text into beautiful decorative characters. It works client-side to generate styles like Blackboard Bold, Cursive Script, gothic blackletter, bubble text, and bracket frames that can be pasted directly into Facebook.",
			howToUse: "1. Enter the text you wish to format.\n2. Preview how your post will look in the simulated Facebook desktop post widget.\n3. Scroll down and browse the font styles.\n4. Click \"Copy\" next to the font you want and paste it into Facebook.",
			proTips: ["Use bold sans-serif fonts for the first line of your posts to act as an eye-catching headline.", "Wrap important call-to-actions (like links or discount codes) in bubble or squared fonts to drive clicks."]
		}
	},
	{
		slug: "twitter-font-generator",
		title: "Twitter Font Generator",
		description: "Generate fancy unicode fonts for Twitter (X) tweets, bios, and handles. Stand out on the timeline with bold, italic, gothic, and cursive styles.",
		category: "text",
		keywords: [
			"twitter font generator",
			"twitter bio fonts",
			"x font changer",
			"cool twitter fonts",
			"copy paste twitter fonts",
			"bold text on twitter"
		],
		icon: "twitter",
		faqs: [
			{
				question: "How do I bold text in a Tweet or Twitter Bio?",
				answer: "Since Twitter (X) does not offer a rich text markdown editor in standard tweets, you can paste text into this generator, convert it to mathematical bold characters, copy it, and paste it directly into your tweet or bio."
			},
			{
				question: "Will these fonts look good on mobile phones?",
				answer: "Yes! They are encoded as standard Unicode glyphs which are fully supported by the official Twitter mobile apps on both iOS and Android."
			},
			{
				question: "Do these fonts affect Twitter search indexability?",
				answer: "Yes. Because search engines and Twitter's internal algorithms look for standard ASCII letters, searching for \"lowkey devs\" might not match \"𝐥𝐨𝐰𝐤𝐞𝐲 𝐝𝐞𝐯𝐬\" in a tweet. It is best to use styled fonts for visual aesthetics and emphasis on key adjectives, rather than indexable hashtags or search-critical terms."
			}
		],
		educationalContent: {
			whatIsIt: "Twitter Font Generator is a browser-based text styling helper that transforms standard text into unicode-based styling variations. It makes it easy to format tweets, bios, and user handles with cursive script, gothic blackletter, bold face, bubble text, and mini superscript.",
			howToUse: "1. Input your tweet text.\n2. Preview how it fits inside the simulated Twitter/X Post card mockup.\n3. Scroll down and look through the generated fonts.\n4. Click \"Copy\" on the styled text and paste it into your tweet box.",
			proTips: ["Use bold serif characters to highlight key statistics or numbers in your tweets.", "Use cursive/script text in your Twitter name/handle to give your profile a unique, stylish touch."]
		}
	},
	{
		slug: "cute-font-generator",
		title: "Cute Font Generator",
		description: "Generate cute, aesthetic, and kaomoji-decorated fonts with hearts, stars, flowers, and wings. Copy and paste sweet fonts for bios and usernames.",
		category: "text",
		keywords: [
			"cute font generator",
			"aesthetic fonts",
			"cute text generator",
			"kaomoji generator",
			"sparkle fonts copy paste",
			"hearts font generator"
		],
		icon: "sparkles",
		faqs: [
			{
				question: "What are cute fonts?",
				answer: "Cute fonts combine mathematical script and bubble character ranges in Unicode with decorative symbols (like hearts, wings, stars, flowers, and emojis) and Japanese kaomojis to create high-aesthetic, sweet text styles."
			},
			{
				question: "Where can I use these cute fonts?",
				answer: "They work on almost all social media and messaging platforms, including Instagram bios, TikTok captions, Roblox/Minecraft nicknames, Twitter status updates, and Discord channels."
			},
			{
				question: "Will the hearts and sparkles render for everyone?",
				answer: "Yes! These decorative characters are standard parts of the Unicode system, meaning they are native text characters that render on any modern browser or smartphone without needing image uploads."
			}
		],
		educationalContent: {
			whatIsIt: "Cute Font Generator is an aesthetic text decorator designed for users who want to add a playful, sweet, or cozy style to their digital presence. It combines standard alphanumeric conversions with creative embellishments (such as bows, flowers, stars, wings, and kaomojis).",
			howToUse: "1. Enter your name, username, or short message in the text field.\n2. Preview the live conversion instantly.\n3. Browse the list of pre-decorated cute designs.\n4. Click the \"Copy\" button to save a design to your clipboard.",
			proTips: ["Use the wing or heart symbols to frame your name in gaming or social media profiles (e.g., ʚ♡⃛ɞ Name ʚ♡⃛ɞ).", "Mix in Japanese kaomojis (like ✿◠‿◠) to express your mood alongside your styled text."]
		}
	},
	{
		slug: "unicode-text-converter",
		title: "Unicode Text Converter",
		description: "Convert standard text into various styling glyphs using the full range of Unicode mathematical alphanumeric symbols. Generate bold, italic, script, gothic, and bubble styles.",
		category: "text",
		keywords: [
			"unicode text converter",
			"unicode translator",
			"convert text to unicode",
			"fancy unicode text",
			"mathematical alphanumeric symbols",
			"unicode fonts"
		],
		icon: "sparkles",
		faqs: [
			{
				question: "What is a Unicode Text Converter?",
				answer: "Unicode Text Converter maps ASCII letters (A-Z, a-z, 0-9) to specific block ranges in Unicode designed for mathematical equations, scripts, and alternative lettering systems. This renders as styled text across websites without stylesheet changes."
			},
			{
				question: "Where can I paste these Unicode styles?",
				answer: "You can paste them into social media posts (Facebook, Twitter, Instagram), chat clients (Discord, WhatsApp, Telegram, Slack), forums, online games, and emails."
			},
			{
				question: "Why are some symbols displayed as rectangles/question marks?",
				answer: "If you or your viewers see empty boxes or question marks (known as \"tofu\"), it means the operating system or browser font does not have support for those specific Unicode blocks. Modern devices on iOS, Android, macOS, and Windows 10/11 have near-complete support."
			}
		],
		educationalContent: {
			whatIsIt: "Unicode Text Converter is a developer and creator tool that maps ordinary text into unique mathematical alphanumeric font ranges defined in standard Unicode. It produces true text styles that don't require stylesheets or custom font files to render.",
			howToUse: "1. Type or paste your alphanumeric text into the input field.\n2. Preview the converted Unicode strings instantly.\n3. Browse the extensive collection of output styles.\n4. Click \"Copy\" next to any style to copy it to your clipboard.",
			proTips: ["Use Double-Struck (Blackboard Bold) fonts (e.g. 𝔾𝕠) to style names in code documentation or headings.", "Use Unicode strike-throughs or underlines to simulate formatting on websites that only accept plain text."]
		}
	},
	{
		slug: "double-struck-text",
		title: "Double-Struck Text Generator",
		description: "Convert standard text into hollow/double-struck characters (also known as Blackboard Bold). Perfect for mathematical symbols, usernames, and stylish bios.",
		category: "text",
		keywords: [
			"double struck text",
			"blackboard bold generator",
			"hollow letters",
			"outline text generator",
			"unicode outline font",
			"math blackboard bold"
		],
		icon: "sparkles",
		faqs: [
			{
				question: "What is Double-Struck (Blackboard Bold) text?",
				answer: "In mathematics, blackboard bold (double-struck) is a typeface style often used for designating number sets (such as ℝ for real numbers, ℤ for integers, and ℂ for complex numbers). The Unicode standard includes a complete set of double-struck capital and lowercase Latin letters, as well as digits."
			},
			{
				question: "Where can I paste double-struck text?",
				answer: "Since these are official Unicode symbols, they work on Twitter/X, Instagram, TikTok, Discord, Facebook, Reddit, and in emails or developer document headers."
			},
			{
				question: "Why do some letters look slightly different in Double-Struck?",
				answer: "Certain capital blackboard bold characters (like C, H, N, P, Q, R, Z) were defined in Unicode early on in the Letterlike Symbols block (U+2100 to U+214F) before the main Mathematical Alphanumeric Symbols block (U+1D400+) was added. Our mapping utility correctly handles these legacy codepoints so that characters display correctly across all devices."
			}
		],
		educationalContent: {
			whatIsIt: "Double-Struck Text Generator is a specialized conversion tool that translates standard English letters and numbers into their corresponding double-struck outline glyphs from the Unicode specification.",
			howToUse: "1. Enter the text you wish to convert.\n2. Preview the hollow, outline-style text in real time.\n3. Click \"Copy\" to save the converted blackboard bold text to your clipboard.",
			proTips: ["Use double-struck digits (e.g. 𝟘𝟙𝟚) to create stylish numbers in list headings.", "Combine blackboard bold symbols with standard serif text for elegant typography setups."]
		}
	},
	{
		slug: "wide-text-generator",
		title: "Wide Text Generator",
		description: "Convert regular text into wide, fullwidth text (ａｅｓｔｈｅｔｉｃ) or custom-spaced text. Perfect for vaporwave, memes, and eye-catching headers.",
		category: "text",
		keywords: [
			"wide text generator",
			"fullwidth text converter",
			"vaporwave text generator",
			"aesthetic text generator",
			"spaced text generator",
			"l o w k e y"
		],
		icon: "sparkles",
		faqs: [
			{
				question: "What is Fullwidth (Wide) text?",
				answer: "Fullwidth text uses character codes from the Halfwidth and Fullwidth Forms Unicode block. In CJK (Chinese, Japanese, Korean) typography, characters are written inside square cells. To make Latin characters match this grid, fullwidth versions were created with wider horizontal spacing."
			},
			{
				question: "Where can I use vaporwave wide text?",
				answer: "It is highly popular in Tumblr posts, vaporwave music titles, YouTube descriptions, Twitter/X captions, and gaming usernames."
			},
			{
				question: "Does this generator just add spaces?",
				answer: "It depends on the selected mode. The \"Fullwidth (Unicode)\" mode actually changes the character code of each letter to its native wide equivalent (e.g. ａ instead of a), while other modes like \"Custom Spaced\" insert actual space characters between standard letters."
			}
		],
		educationalContent: {
			whatIsIt: "Wide Text Generator is a dual-method formatting utility. It can either convert standard characters to fullwidth CJK forms or insert custom-sized spacers between letters to yield the classic aesthetic spread look.",
			howToUse: "1. Enter your text in the input box.\n2. Choose a widening method (e.g. Fullwidth Unicode, double-spaced, or custom spacer).\n3. Adjust the slider to set the spacing width for custom spacers.\n4. Click \"Copy\" to copy your stylized text.",
			proTips: ["Use Fullwidth Unicode (ａｅｓｔｈｅｔｉｃ) for profiles and names where regular spaces are collapsed or stripped by the platform.", "Use standard spaced text with a custom bullet spacer (e.g. l・o・w・k・e・y) for elegant menu tabs."]
		}
	},
	{
		slug: "image-to-text-ocr",
		title: "Image to Text Converter (OCR)",
		description: "Extract text from images, photos, scans, and screenshots instantly. Fully client-side OCR tool protecting your privacy.",
		category: "image",
		keywords: [
			"image to text converter",
			"ocr online",
			"extract text from image",
			"scan image to text",
			"picture to text reader",
			"privacy first ocr"
		],
		icon: "image",
		faqs: [
			{
				question: "Is my uploaded image secure and private?",
				answer: "Yes! The OCR extraction runs entirely inside your browser using Tesseract.js. No images or text are uploaded to any server, keeping your sensitive documents completely private."
			},
			{
				question: "What image formats are supported?",
				answer: "We support all standard web formats, including PNG, JPEG, WebP, BMP, and GIF."
			},
			{
				question: "How accurate is the text extraction?",
				answer: "The accuracy depends on the quality, contrast, and alignment of the text within the image. Clear black-on-white printed text yields near 100% accuracy, while handwriting or low-contrast text might require manual edits."
			}
		],
		educationalContent: {
			whatIsIt: "Image to Text Converter (OCR) utilizes optical character recognition algorithms running locally in your browser to detect alphanumeric shapes in pixels and translate them into selectable, editable text strings.",
			howToUse: "1. Drag and drop or browse to select your image file.\n2. Adjust the language settings (defaults to English).\n3. Click \"Extract Text\" and watch the progress bar.\n4. Edit or copy the retrieved text to your clipboard.",
			proTips: ["For best results, crop out unnecessary margins or background elements before running OCR.", "Ensure the text is rotated upright for the optical character recognition model to align correctly."]
		}
	},
	{
		slug: "jpg-to-png",
		title: "JPG to PNG Converter",
		description: "Convert JPG/JPEG images to PNG format instantly. High quality conversion running entirely inside your browser for complete privacy.",
		category: "image",
		keywords: [
			"jpg to png",
			"jpeg to png converter",
			"convert jpg to png online",
			"transparency converter",
			"image converter",
			"client side converter"
		],
		icon: "image",
		faqs: [
			{
				question: "Is my image uploaded to any server?",
				answer: "No. The conversion is performed locally in your browser using HTML5 Canvas. Your image files never leave your device, ensuring maximum privacy and security."
			},
			{
				question: "Will I lose image quality during conversion?",
				answer: "PNG is a lossless compression format, meaning it preserves all pixel data. However, since the source JPG is already lossy, converting it to PNG will not restore lost data, but it will prevent any further compression artifacts."
			},
			{
				question: "What is the file size limit?",
				answer: "Since the conversion runs client-side in your browser, there is no strict server limit. It can handle images up to 50MB or more depending on your device's system memory."
			}
		],
		educationalContent: {
			whatIsIt: "JPG to PNG Converter translates JPEG compression maps into standard portable network graphics (PNG) lossless pixel grids, retaining pixel-perfect color depth.",
			howToUse: "1. Select or drag and drop a JPG image.\n2. Preview the original image details.\n3. Click \"Convert to PNG\" to process the file.\n4. Click \"Download\" to save your high-quality PNG image.",
			proTips: ["Use PNG format if you plan to edit the image further, as it prevents generation loss when re-saving.", "PNG files are generally larger than JPGs because they are lossless. For web optimization, check the output file sizes."]
		}
	},
	{
		slug: "png-to-jpg",
		title: "PNG to JPG Converter",
		description: "Convert PNG images to JPG format online. Reduce file sizes, adjust quality levels, and process everything locally in your browser.",
		category: "image",
		keywords: [
			"png to jpg",
			"convert png to jpg",
			"png to jpeg converter",
			"compress image",
			"browser conversion",
			"privacy image tool"
		],
		icon: "image",
		faqs: [
			{
				question: "Will transparent areas remain transparent in JPG?",
				answer: "No. The JPG format does not support transparency. Any transparent or semi-transparent regions in your source PNG will be filled with a solid white background color."
			},
			{
				question: "How does this tool help optimize my website images?",
				answer: "PNG files containing photos or complex gradients are often unnecessarily large. Converting them to JPG significantly reduces file size (often by 70-80%), making your web pages load much faster."
			},
			{
				question: "Is my data safe?",
				answer: "Yes! The conversion occurs strictly inside your browser. No files are uploaded to our servers."
			}
		],
		educationalContent: {
			whatIsIt: "PNG to JPG Converter converts lossless portable network graphics (PNG) files into joint photographic experts group (JPG) compression format, applying a high-performance rendering canvas with custom backgrounds.",
			howToUse: "1. Select a PNG file.\n2. Preview its current details.\n3. Click \"Convert to JPG\".\n4. Download the compressed JPG output file.",
			proTips: ["For screenshots or diagrams containing text, PNG is preferred to avoid JPG ringing artifacts.", "For photographs, JPG is almost always superior in terms of size and visual compression."]
		}
	},
	{
		slug: "jpg-to-webp",
		title: "JPG to WebP Converter",
		description: "Convert JPG/JPEG images to WebP format instantly. Speed up your website loading times by converting images to Google's modern, highly optimized WebP format.",
		category: "image",
		keywords: [
			"jpg to webp",
			"convert jpeg to webp",
			"modern image format",
			"compress jpg to webp",
			"seo image optimizer",
			"client side webp converter"
		],
		icon: "image",
		faqs: [
			{
				question: "Why should I convert my JPGs to WebP?",
				answer: "WebP is a modern image format developed by Google that provides superior lossy and lossless compression. WebP images are typically 25-35% smaller in file size compared to JPGs at equivalent quality, leading to faster web downloads and improved page speeds."
			},
			{
				question: "Is WebP widely supported by browsers?",
				answer: "Yes! WebP is fully supported by all modern web browsers, including Google Chrome, Apple Safari, Mozilla Firefox, Microsoft Edge, and Opera on both desktop and mobile platforms."
			},
			{
				question: "How secure is this conversion tool?",
				answer: "Completely secure. The translation takes place inside your browser context. No servers are involved."
			}
		],
		educationalContent: {
			whatIsIt: "JPG to WebP Converter translates joint photographic experts group (JPG) compression tables into WebP predictive encoding structures, delivering smaller file sizes for web delivery.",
			howToUse: "1. Select a JPG image.\n2. Click \"Convert to WebP\".\n3. View the compression size savings instantly.\n4. Download your new WebP image.",
			proTips: ["Use WebP format for all background images and article covers on your website to improve Google PageSpeed Insights scores.", "Check the size comparison table to see how many kilobytes were saved during conversion."]
		}
	},
	{
		slug: "webp-to-jpg",
		title: "WebP to JPG Converter",
		description: "Convert WebP images to JPG format instantly. Perfect for compatibility issues when uploading files to legacy platforms that do not yet support modern formats.",
		category: "image",
		keywords: [
			"webp to jpg",
			"convert webp to jpeg",
			"change webp to jpg online",
			"webp compatibility",
			"image converter",
			"client side webp converter"
		],
		icon: "image",
		faqs: [
			{
				question: "Why should I convert WebP to JPG?",
				answer: "While WebP offers superior compression, some older email clients, content management systems (CMS), or legacy printing services do not support the WebP format. Converting it to JPG makes it globally compatible."
			},
			{
				question: "Will the image size change?",
				answer: "Usually, yes. WebP has better compression, so when you convert it back to JPG, the file size will often increase even though the visual quality remains the same or slightly lower due to JPG compression loss."
			},
			{
				question: "Is my data secure?",
				answer: "Yes! The conversion happens entirely locally inside your browser."
			}
		],
		educationalContent: {
			whatIsIt: "WebP to JPG Converter translates WebP predictive frame streams back into the classic joint photographic experts group (JPG) compression format, applying standard white background overlays.",
			howToUse: "1. Select a WebP image.\n2. Click \"Convert to JPG\".\n3. Click \"Download\" to save your high-quality JPG image.",
			proTips: ["If your WebP image has transparent parts, keep in mind they will be replaced with a solid white background in the resulting JPG.", "To maintain transparency, consider converting WebP to PNG instead."]
		}
	},
	{
		slug: "png-to-webp",
		title: "PNG to WebP Converter",
		description: "Convert PNG images to WebP format instantly while preserving transparency. Shrink image files sizes without sacrificing details.",
		category: "image",
		keywords: [
			"png to webp",
			"convert png to webp",
			"transparency webp",
			"transparent image converter",
			"image compression",
			"client side webp"
		],
		icon: "image",
		faqs: [
			{
				question: "Will my converted WebP image preserve transparency?",
				answer: "Yes! WebP fully supports transparency (alpha channel) in both lossy and lossless modes. Converting your transparent PNG to WebP will keep all transparent details perfectly intact."
			},
			{
				question: "How much smaller will the WebP file be compared to PNG?",
				answer: "For transparent graphics, WebP images are typically 25% to 30% smaller than standard PNGs. This is extremely valuable for reducing page weight on websites that feature layered graphic elements."
			},
			{
				question: "Are my images processed securely?",
				answer: "Yes, absolutely. The conversion operates strictly within your local browser context."
			}
		],
		educationalContent: {
			whatIsIt: "PNG to WebP Converter maps the lossless portable network graphics (PNG) data into standard WebP format, carrying over transparency layers seamlessly.",
			howToUse: "1. Choose a PNG file.\n2. Click \"Convert to WebP\".\n3. Click \"Download\" to fetch your highly compressed transparent WebP file.",
			proTips: ["Use WebP format for transparent logos and UI icons to save bandwidth.", "Check the size comparison display to confirm your file optimization."]
		}
	},
	{
		slug: "webp-to-png",
		title: "WebP to PNG Converter",
		description: "Convert WebP images to PNG format instantly while preserving transparency. Best for viewing WebP images on older software.",
		category: "image",
		keywords: [
			"webp to png",
			"convert webp to png",
			"transparency converter",
			"image converter",
			"client side converter"
		],
		icon: "image",
		faqs: [
			{
				question: "Will transparency be lost when converting WebP to PNG?",
				answer: "No. Both WebP and PNG formats fully support transparency. The converter preserves the transparency details (alpha channel) from your source WebP image."
			},
			{
				question: "Why does the PNG output file sometimes look larger than the WebP?",
				answer: "PNG uses lossless compression (DEFLATE), whereas WebP can use highly efficient lossy compression. When converting from lossy WebP to lossless PNG, the PNG encoder must define every exact pixel explicitly without losing any details, which often results in a larger file size."
			},
			{
				question: "Is my data secure?",
				answer: "Yes! The conversion happens entirely locally inside your browser."
			}
		],
		educationalContent: {
			whatIsIt: "WebP to PNG Converter translates WebP pixels into portable network graphics (PNG) lossless compression arrays, carrying over transparency elements.",
			howToUse: "1. Select a WebP file.\n2. Click \"Convert to PNG\".\n3. Click \"Download\" to save your high-quality transparent PNG image.",
			proTips: ["Use PNG format if you need to open the image in legacy graphics editors like older versions of Photoshop that don't support WebP.", "Check the final file sizes if storage space is critical."]
		}
	},
	{
		slug: "svg-to-png",
		title: "SVG to PNG Converter",
		description: "Convert scalable vector graphics (SVG) into rasterized PNG format. Render clean vector shapes into high resolution static pixels.",
		category: "image",
		keywords: [
			"svg to png",
			"convert svg to png online",
			"vector to raster",
			"svg render",
			"scalable vector graphics converter",
			"client side svg conversion"
		],
		icon: "image",
		faqs: [
			{
				question: "Will my converted PNG image support scaling without quality loss?",
				answer: "No. PNG is a raster format made of static pixels. Once you convert the vector SVG to PNG, it becomes fixed at a specific resolution and will pixelate if stretched."
			},
			{
				question: "Can I define the dimensions of the output PNG?",
				answer: "Yes! The converter automatically reads the SVG's viewBox/width/height and scales the render, but you can also input custom resolutions if you need a high-res print-ready PNG."
			},
			{
				question: "Is it safe to convert corporate logos here?",
				answer: "Yes. The entire rendering process takes place locally inside your browser via the HTML5 canvas API. Nothing is sent to external servers."
			}
		],
		educationalContent: {
			whatIsIt: "SVG to PNG Converter converts XML-based scalable vector graphics (SVG) shapes, curves, and layers into standard lossless portable network graphics (PNG) raster grids.",
			howToUse: "1. Select or drop your SVG file.\n2. Preview the rendering.\n3. Adjust the target width/height if needed.\n4. Click \"Convert to PNG\" and download.",
			proTips: ["For crisp icon renders, double the width and height parameters before converting to create high-DPI \"@2x\" graphics.", "Make sure all fonts used inside the SVG are system-installed or inline-styled, otherwise they may fall back to default serif/sans fonts during canvas drawing."]
		}
	},
	{
		slug: "image-to-ascii",
		title: "Image to ASCII Art Generator",
		description: "Convert any image or photo into retro ASCII text art. Customize density scales, resolutions, color displays, and download your art as plain text.",
		category: "image",
		keywords: [
			"image to ascii art",
			"picture to text art",
			"ascii generator",
			"retro text art",
			"convert photo to text code",
			"ansi art generator"
		],
		icon: "image",
		faqs: [
			{
				question: "What is ASCII Art?",
				answer: "ASCII art is a graphic design technique that uses printable characters from the ASCII specification (such as letters, numbers, and symbols) to form a visual pattern or picture when viewed in a monospace font."
			},
			{
				question: "Can I generate colored ASCII art?",
				answer: "Yes! Our generator features a \"Colored\" mode that styles each character with the exact pixel color from your source image, making it render in full color."
			},
			{
				question: "Why does the text art look stretched or compressed?",
				answer: "Monospace text characters are taller than they are wide (usually about a 1:1.6 or 1:2 ratio). To prevent your image from looking vertically stretched, our generator automatically scales down the vertical dimension by a correction factor when mapping pixels to characters."
			}
		],
		educationalContent: {
			whatIsIt: "Image to ASCII Art Generator maps the pixel grids of an image onto a set of ASCII text symbols sorted by brightness (optical density), producing retro text-based graphics.",
			howToUse: "1. Select an image file.\n2. Choose a density scale (standard, blocky, or simple) and set your target width/resolution.\n3. Adjust the brightness, contrast, or color toggle settings.\n4. Click \"Generate ASCII\" to view the render.\n5. Click \"Copy\" or \"Download\" to save your art.",
			proTips: ["For best results, use high-contrast images with clean backgrounds (like logos or portrait silhouettes).", "If copying to platforms like Discord, wrap the text inside triple backticks (```) to enforce a monospace layout."]
		}
	},
	{
		slug: "camelcase-converter",
		title: "camelCase Converter",
		description: "Convert any text, phrase, or lists of variable names to camelCase format online instantly. Ideal for developers and programmers.",
		category: "text",
		icon: "Type",
		keywords: [
			"camelcase converter",
			"convert to camelcase",
			"camel case text generator",
			"casing converter",
			"variable naming tool"
		],
		faqs: [{
			question: "What is camelCase?",
			answer: "camelCase is a casing convention where the first word starts with a lowercase letter, and all subsequent words start with an uppercase letter, with no spaces or punctuation between them."
		}, {
			question: "Why is it called camelCase?",
			answer: "It is named after camels because the uppercase letters resemble the humps on a camel's back (e.g. \"myCamelHumps\")."
		}],
		educationalContent: {
			whatIsIt: "A camelCase Converter converts input strings into camelCase, which is the standard variable naming convention in languages like JavaScript, Java, and TypeScript.",
			howToUse: "Enter your text in the input box, select if you want line-by-line conversion or full block conversion, and copy the formatted camelCase text."
		}
	},
	{
		slug: "kebab-case-converter",
		title: "kebab-case Converter",
		description: "Convert any text or lists of words into kebab-case (spinal-case) online instantly. Perfect for generating clean URLs and CSS class names.",
		category: "text",
		icon: "Type",
		keywords: [
			"kebabcase converter",
			"convert to kebabcase",
			"spinal case generator",
			"url slug generator",
			"css class naming tool"
		],
		faqs: [{
			question: "What is kebab-case?",
			answer: "kebab-case (sometimes called spinal-case) is a naming convention where all letters are lowercased and spaces or underscores are replaced with hyphens (e.g. \"kebab-case-example\")."
		}, {
			question: "Why is it called kebab-case?",
			answer: "It gets its name because the words resemble chunks of meat skewered on a skewer (the hyphens)."
		}],
		educationalContent: {
			whatIsIt: "A kebab-case Converter transforms ordinary text into lowercased words joined by hyphens. This format is widely used in CSS class naming, URL slug creation, and command-line interface arguments.",
			howToUse: "Paste your input text, check the line-by-line option if you want to process multiple lines separately, and copy the kebab-case output."
		}
	},
	{
		slug: "dot-case-converter",
		title: "dot.case Converter",
		description: "Convert any text, variables, or lists into dot.case format online instantly. Ideal for configuration files, properties, and metric keys.",
		category: "text",
		icon: "Type",
		keywords: [
			"dot case converter",
			"convert to dot case",
			"dot case generator",
			"dot notation tool",
			"property key generator"
		],
		faqs: [{
			question: "What is dot.case?",
			answer: "dot.case is a casing convention where all words are lowercased and separated by a dot or period character (e.g. \"config.database.url\")."
		}, {
			question: "Where is dot.case commonly used?",
			answer: "It is widely used in property files (like Java .properties files), configuration keys (e.g., Spring Boot, PHP dotenv), translation keys (i18n), and metrics namespaces (like Graphite or Prometheus)."
		}],
		educationalContent: {
			whatIsIt: "A dot.case Converter transforms input strings into lowercased words separated by dots. This is extremely helpful for setting up structured dot-notated naming structures.",
			howToUse: "Paste your input text, check the line-by-line option if you want to process multiple lines separately, and copy the dot.case output."
		}
	},
	{
		slug: "caesar-cipher-tool",
		title: "Caesar Cipher Tool",
		description: "Encrypt or decrypt text online using the classic Caesar Cipher algorithm. Customize shift values and encoding instantly.",
		category: "security",
		icon: "Shield",
		keywords: [
			"caesar cipher",
			"caesar shift converter",
			"rot13 tool",
			"classic cryptography",
			"text encryptor"
		],
		faqs: [{
			question: "What is a Caesar Cipher?",
			answer: "The Caesar Cipher is one of the earliest and simplest cryptographic methods. It is a type of substitution cipher in which each letter in the plaintext is shifted a fixed number of positions down the alphabet."
		}, {
			question: "How secure is a Caesar Cipher?",
			answer: "It is highly insecure and can be easily broken. Since there are only 25 possible shift keys, a simple brute-force attack can decode it in milliseconds. It is primarily used for educational and recreational purposes today."
		}],
		educationalContent: {
			whatIsIt: "A Caesar Cipher Tool shifts each alphabetical character in a string by a specified number of places. It was named after Julius Caesar, who used it to communicate with his generals.",
			howToUse: "1. Enter the text you want to process.\n2. Choose the shift key (value from 1 to 25).\n3. Toggle between \"Encrypt\" and \"Decrypt\" modes.\n4. Copy the resulting encoded or decoded text."
		}
	},
	{
		slug: "nato-phonetic-alphabet-translator",
		title: "NATO Phonetic Alphabet Translator",
		description: "Convert words, names, or letters into the NATO Phonetic Alphabet online. Customize separators and casing for clear voice spelling.",
		category: "text",
		icon: "Languages",
		keywords: [
			"nato phonetic alphabet",
			"nato spelling translator",
			"phonetic alphabet converter",
			"spelling alphabet decoder",
			"voice spelling tool"
		],
		faqs: [{
			question: "What is the NATO Phonetic Alphabet?",
			answer: "It is a spelling alphabet used by radio operators, pilots, and military personnel to communicate letters clearly, especially over static-heavy voice channels. It maps A to Alpha, B to Bravo, C to Charlie, etc."
		}, {
			question: "Are numbers supported?",
			answer: "Yes, numbers are mapped to their standard phonetic equivalents (e.g. 0 to Zero, 1 to One, etc.)."
		}],
		educationalContent: {
			whatIsIt: "A NATO Phonetic Alphabet Translator converts standard text letters into spelling words, preventing confusion during voice transmissions or telephone conversations.",
			howToUse: "Input the text or word you want to spell out, select the separator character, choose the casing option, and copy the phonetic result."
		}
	},
	{
		slug: "pig-latin-translator",
		title: "Pig Latin Translator",
		description: "Translate English text to Pig Latin and vice-versa online instantly. Perfect for games, wordplay, and linguistic fun.",
		category: "text",
		icon: "Languages",
		keywords: [
			"pig latin translator",
			"english to pig latin",
			"pig latin decoder",
			"pig latin generator",
			"word game translator"
		],
		faqs: [{
			question: "What is Pig Latin?",
			answer: "Pig Latin is a language game or argot in which English words are altered, usually by moving the first consonant sound to the end of the word and adding \"ay\"."
		}, {
			question: "What are the rules of Pig Latin?",
			answer: "1. If a word begins with a consonant sound, move it to the end and add \"ay\" (e.g., \"beast\" -> \"eastbay\"). 2. If a word begins with a vowel sound, simply add \"way\" or \"yay\" to the end (e.g., \"eagle\" -> \"eagleway\")."
		}],
		educationalContent: {
			whatIsIt: "A Pig Latin Translator instantly encodes normal English sentences into Pig Latin sentences or decodes them back to English, preserving punctuation and capitalization.",
			howToUse: "Enter your message, select the translation direction (English to Pig Latin or Pig Latin to English), and copy the translated result."
		}
	},
	{
		slug: "roman-numeral-dates",
		title: "Roman Numeral Dates Converter",
		description: "Convert standard dates to Roman numerals and vice-versa online instantly. Customize formatting and separators.",
		category: "converters",
		icon: "Clock",
		keywords: [
			"roman numeral dates",
			"date to roman numerals",
			"roman date converter",
			"roman numeral date generator",
			"convert date to roman"
		],
		faqs: [{
			question: "How do you write dates in Roman numerals?",
			answer: "Standard date components (month, day, year) are converted individually into Roman numerals and joined by separators. For example, July 5, 2026 is VII.V.MMXXVI (Month 7 = VII, Day 5 = V, Year 2026 = MMXXVI)."
		}, {
			question: "What separators can I use?",
			answer: "You can use dots (.), slashes (/), hyphens (-), or spaces ( ) to separate the month, day, and year."
		}],
		educationalContent: {
			whatIsIt: "A Roman Numeral Dates Converter translates standard dates into classical Roman numeral notation, commonly used for monuments, cornerstones, tattoos, and formal invitations.",
			howToUse: "1. Select the conversion direction (Standard to Roman or Roman to Standard).\n2. Set the separator and date format (MDY, DMY, YMD).\n3. Input the date to convert.\n4. Copy the result."
		}
	},
	{
		slug: "unicode-converter",
		title: "Unicode Character Converter & Analyzer",
		description: "Convert text to Unicode code points, HTML entities, binary, hex, and decimal. Analyze character properties and detailed Unicode mappings instantly.",
		category: "converters",
		icon: "Binary",
		keywords: [
			"unicode converter",
			"unicode character analyzer",
			"text to code points",
			"html entity converter",
			"binary character viewer"
		],
		faqs: [{
			question: "What does this Unicode Converter do?",
			answer: "It breaks down your text into individual characters (including emojis and surrogate pairs) and details their numeric mappings: Unicode Code Point (U+XXXX), Hexadecimal, Decimal, Binary, and HTML entity representations."
		}, {
			question: "Does it support multi-byte characters and emojis?",
			answer: "Yes! The tool uses modern JavaScript code point iteration to correctly inspect complex characters, surrogate pairs, and emojis without splitting them."
		}],
		educationalContent: {
			whatIsIt: "A Unicode Converter and Analyzer is an essential utility for developers to inspect character encoding, find escape representations, and resolve formatting issues.",
			howToUse: "1. Paste your text in the input box.\n2. Instantly view the character-by-character detailed table.\n3. Choose from various output formats (Hex, Code Point, Entities, Binary) and copy the result."
		}
	},
	{
		slug: "remove-underscores",
		title: "Remove Underscores Tool",
		description: "Remove underscores from text or code online instantly. Replace underscores with spaces, hyphens, or custom text characters.",
		category: "text",
		icon: "Eraser",
		keywords: [
			"remove underscores",
			"replace underscore with space",
			"underscore remover",
			"strip underscores",
			"text cleaner"
		],
		faqs: [{
			question: "Can I replace underscores with custom text?",
			answer: "Yes, you can choose to replace all underscores with spaces, hyphens, remove them completely, or replace them with any custom character/string."
		}, {
			question: "Is this tool safe for source code?",
			answer: "Yes, but be aware that it will replace ALL underscores. If you paste programming code, variable names using snake_case (like user_id) will be modified."
		}],
		educationalContent: {
			whatIsIt: "A Remove Underscores Tool strips underscores (`_`) from text strings or replaces them with an alternative delimiter like a space or a dash.",
			howToUse: "1. Paste your text in the input box.\n2. Choose what to replace underscores with (Spaces, Hyphens, Custom or Strip).\n3. Copy the processed text."
		}
	},
	{
		slug: "remove-em-dash",
		title: "Remove Em Dash / En Dash Tool",
		description: "Remove em dashes (—) and en dashes (–) from text online instantly. Replace dashes with standard hyphens, double hyphens, spaces, or strip them.",
		category: "text",
		icon: "Eraser",
		keywords: [
			"remove em dash",
			"replace en dash",
			"dash remover",
			"clean typography",
			"em dash replacement"
		],
		faqs: [{
			question: "What is the difference between Em Dash and En Dash?",
			answer: "An em dash (—) is long and typically indicates a break in thought or parenthesis. An en dash (–) is shorter and commonly indicates a range of numbers or dates."
		}, {
			question: "Why should I remove or replace them?",
			answer: "Some legacy systems, database columns, SMS networks, or command-line parsers do not support Unicode dash characters. Replacing them with standard ASCII hyphens prevents decoding or formatting issues."
		}],
		educationalContent: {
			whatIsIt: "A Remove Em Dash / En Dash Tool replaces typographic dash characters (`—` and `–`) with safe ASCII equivalents like a standard hyphen `-` or space.",
			howToUse: "1. Paste your text in the input box.\n2. Choose what to replace em/en dashes with (Hyphens, Double Hyphens, Spaces, Custom or Strip).\n3. Copy the clean text."
		}
	},
	{
		slug: "random-number-generator",
		title: "Random Number Generator",
		description: "Generate lists of secure random numbers online. Set range limits, quantities, uniqueness constraints, and sort order.",
		category: "generators",
		icon: "Hash",
		keywords: [
			"random number generator",
			"rng tool",
			"random integer generator",
			"pick random numbers",
			"secure rng"
		],
		faqs: [{
			question: "Is this random number generator secure?",
			answer: "Yes, it uses the Web Crypto API (`crypto.getRandomValues`) supported in modern browsers to generate cryptographically secure pseudo-random values."
		}, {
			question: "Can I generate unique numbers without duplicates?",
			answer: "Absolutely. Check the \"Unique numbers\" option to ensure all generated numbers in the list are distinct."
		}],
		educationalContent: {
			whatIsIt: "A Random Number Generator (RNG) generates sequences of numbers within a specified range, useful for statistical sampling, giveaways, gaming, and simulation.",
			howToUse: "1. Enter the Minimum and Maximum values of the range.\n2. Choose the quantity of numbers to generate.\n3. Configure uniqueness, sorting, and separator options.\n4. Click \"Generate\" and copy the results."
		}
	},
	{
		slug: "random-password-generator",
		title: "Random Password Generator (Bulk)",
		description: "Generate secure random passwords in bulk online. Customize password lengths, quantity, character sets, and exclusion options.",
		category: "generators",
		icon: "Key",
		keywords: [
			"random password generator",
			"bulk password generator",
			"secure password lists",
			"generate random passwords",
			"mass password generator"
		],
		faqs: [{
			question: "How is this different from the Strong Password Generator?",
			answer: "This bulk generator is designed to create lists of multiple passwords (up to 100 at a time) for setting up multiple accounts, database seeds, or system installations. The Strong Password Generator focuses on crafting a single passphrase or high-entropy credentials with interactive strength scoring."
		}, {
			question: "Is it safe to generate passwords here?",
			answer: "Absolutely. All passwords are generated fully client-side inside your browser using the cryptographically secure Web Crypto API. No passwords are sent to our servers."
		}],
		educationalContent: {
			whatIsIt: "A Random Password Generator is a tool that creates secure, high-entropy password strings using cryptographically secure random sequences to avoid human predictability.",
			howToUse: "1. Choose the number of passwords to generate.\n2. Set the desired character length and include sets like uppercase, lowercase, numbers, and symbols.\n3. Turn on similar/ambiguous characters exclusions if needed.\n4. Click \"Generate\" and copy the full list."
		}
	},
	{
		slug: "random-choice-generator",
		title: "Random Choice Picker",
		description: "Pick random items, names, or winners from a list of choices online instantly. Set pick quantity and duplicates toggle.",
		category: "generators",
		icon: "Shuffle",
		keywords: [
			"random choice picker",
			"name picker",
			"random selector",
			"raffle picker",
			"pick from list"
		],
		faqs: [{
			question: "How do I input my choices?",
			answer: "Simply type or paste your choices in the input text area, entering one choice per line."
		}, {
			question: "Is the picker completely fair?",
			answer: "Yes. It uses the Web Crypto API (`window.crypto.getRandomValues`) to select items randomly, ensuring unbiased selection."
		}],
		educationalContent: {
			whatIsIt: "A Random Choice Picker selects one or more items out of a list of custom inputs, ideal for raffles, deciding what to eat, drawing winners, or making neutral decisions.",
			howToUse: "1. Enter your options in the input box, one per line.\n2. Choose how many items to pick.\n3. Decide if you want to allow duplicate picks.\n4. Click \"Pick Winner\" to run the selection."
		}
	},
	{
		slug: "random-date-generator",
		title: "Random Date Generator",
		description: "Generate secure random dates within a custom date range online. Choose output formats and quantity easily.",
		category: "generators",
		icon: "Clock",
		keywords: [
			"random date generator",
			"generate random dates",
			"date picker tool",
			"random birthdays generator",
			"mock date generator"
		],
		faqs: [{
			question: "Can I generate dates in a specific format?",
			answer: "Yes, we support YYYY-MM-DD, MM/DD/YYYY, DD/MM/YYYY, and full ISO 8601 strings."
		}, {
			question: "What range of years can I use?",
			answer: "You can generate dates across any range supported by standard Date objects (typically years 100 to 9999)."
		}],
		educationalContent: {
			whatIsIt: "A Random Date Generator creates list of dates within a range, useful for mock datasets, software testing, database seeds, and scheduling examples.",
			howToUse: "1. Select the start and end dates of the range.\n2. Choose the quantity of dates to generate.\n3. Select the preferred date format.\n4. Click \"Generate\" and copy the list."
		}
	},
	{
		slug: "random-letter-generator",
		title: "Random Letter Generator",
		description: "Generate sequences of random letters online. Choose casing, unique alphabet outputs, quantities, and separators.",
		category: "generators",
		icon: "Type",
		keywords: [
			"random letter generator",
			"pick random letters",
			"alphabet picker",
			"random letter selector",
			"random character generator"
		],
		faqs: [{
			question: "Can I generate unique letters without duplicates?",
			answer: "Yes, just check the \"Unique Letters\" option to prevent any repeats. Note that the output quantity will be capped at the character pool size (26 for single casing, 52 for mixed casing)."
		}, {
			question: "Is it possible to customize the separators?",
			answer: "Yes, you can choose to separate letters with spaces, commas, new lines, or have no separator at all."
		}],
		educationalContent: {
			whatIsIt: "A Random Letter Generator creates sequences of characters from the English alphabet, useful for games (like Scattergories or Wordle styling), education, and statistical sampling.",
			howToUse: "1. Select upper, lower, or both letter sets.\n2. Choose the quantity of letters to generate.\n3. Enable uniqueness or sorting if desired.\n4. Click \"Generate\" and copy the sequence."
		}
	},
	{
		slug: "random-month-generator",
		title: "Random Month Generator",
		description: "Generate sequences of random months online. Choose between full names, abbreviated names, or numeric representations.",
		category: "generators",
		icon: "Clock",
		keywords: [
			"random month generator",
			"generate random months",
			"month picker",
			"month selector",
			"mock month generator"
		],
		faqs: [{
			question: "Which month formats are supported?",
			answer: "We support full names (e.g. \"January\"), abbreviated names (e.g. \"Jan\"), and standard 2-digit numbers (e.g. \"01\")."
		}, {
			question: "Can I generate unique months without duplicates?",
			answer: "Yes. Checking \"Unique Months\" prevents repeats, capping output at a maximum of 12 months."
		}],
		educationalContent: {
			whatIsIt: "A Random Month Generator generates random month lists, helpful for software testing, date simulation, statistical distributions, and scheduling practice.",
			howToUse: "1. Select the month formatting (Full, Short, or Numeric).\n2. Set the quantity to generate.\n3. Toggle duplicates uniqueness.\n4. Click \"Generate\" and copy results."
		}
	},
	{
		slug: "random-ip-address-generator",
		title: "Random IP Address Generator",
		description: "Generate lists of secure random IPv4 and IPv6 addresses online. Configure quantity and copy results instantly.",
		category: "generators",
		icon: "Sliders",
		keywords: [
			"random ip generator",
			"generate random ip",
			"ipv4 generator",
			"ipv6 generator",
			"mock ip address"
		],
		faqs: [{
			question: "Which IP versions are supported?",
			answer: "We support both IPv4 (32-bit addresses formatted as four octets, e.g. 192.168.1.1) and IPv6 (128-bit hexadecimal addresses formatted as eight blocks, e.g. 2001:db8::8a2e:370:7334)."
		}, {
			question: "Are the IP addresses active?",
			answer: "No, these IP addresses are generated mathematically at random using browser entropy. They are meant for testing, database mock values, or networking design demonstration."
		}],
		educationalContent: {
			whatIsIt: "A Random IP Address Generator creates mock IPv4/IPv6 networks and nodes for developers, system administrators, and network engineers to use in testing environments.",
			howToUse: "1. Select the IP version (IPv4 or IPv6).\n2. Choose the quantity of addresses to generate.\n3. Click \"Generate IPs\" and copy the resulting list."
		}
	},
	{
		slug: "nanoid-generator",
		title: "Nano ID Generator",
		description: "Generate secure, URL-friendly unique identifiers (Nano IDs) in bulk online. Customize length, alphabets, and quantity.",
		category: "generators",
		icon: "Fingerprint",
		keywords: [
			"nanoid generator",
			"secure id generator",
			"url friendly unique id",
			"generate nanoid",
			"nano id creator"
		],
		faqs: [{
			question: "What is a Nano ID?",
			answer: "Nano ID is a tiny, secure, URL-friendly, unique string ID generator for JavaScript. It is safer than UUID v4 in terms of collision rate and is faster to generate."
		}, {
			question: "Can I use a custom alphabet?",
			answer: "Yes! You can specify your own set of characters (e.g. only numbers, only uppercase letters, or custom symbol sets) to generate unique IDs custom-suited for your application."
		}],
		educationalContent: {
			whatIsIt: "A Nano ID Generator creates unique identifiers that are more compact and URL-friendly than traditional UUIDs, while keeping identical collision safety.",
			howToUse: "1. Set the character length (default is 21).\n2. Optionally define a custom alphabet of characters to draw from.\n3. Choose the quantity to generate.\n4. Click \"Generate\" and copy the IDs."
		}
	},
	{
		slug: "strong-password-generator",
		title: "Strong Password Generator",
		description: "Generate high-entropy secure random passwords or memorable word-based passphrases. Check strength score and cracking times instantly.",
		category: "generators",
		icon: "Lock",
		keywords: [
			"strong password generator",
			"secure password generator",
			"diceware passphrase generator",
			"password entropy tool",
			"random passcode generator"
		],
		faqs: [{
			question: "What is a memorable passphrase?",
			answer: "A memorable passphrase consists of several random words joined together (e.g., \"Apple-Cedar-Chair-Dream\"). According to security guidelines (like NIST), these are often easier for humans to remember while being mathematically extremely difficult for computers to crack."
		}, {
			question: "What is entropy in passwords?",
			answer: "Entropy measures the unpredictability of a password in bits. Higher entropy means it would take much longer for a hacker to crack via brute-force or dictionary attacks."
		}],
		educationalContent: {
			whatIsIt: "A Strong Password Generator creates passwords or passphrases with maximum mathematical randomness to secure sensitive logins, offering visual feedback on password strength.",
			howToUse: "1. Select the generator mode (Random Characters or Memorable Passphrase).\n2. Adjust the length slider or word count.\n3. Customize settings (separators, capitalization, symbols).\n4. View the live strength meter and click \"Copy Password\"."
		}
	},
	{
		slug: "apa-citation-generator",
		title: "APA 7th Edition Citation Generator",
		description: "Generate APA 7th Edition citations for books, websites, and journal articles online instantly. Copy formatted HTML references.",
		category: "dev-utils",
		icon: "FileText",
		keywords: [
			"apa citation generator",
			"apa reference maker",
			"apa 7 bibliography creator",
			"citation generator online",
			"academic reference tool"
		],
		faqs: [{
			question: "Which edition of APA is supported?",
			answer: "We support the APA 7th Edition (released in late 2019), which is the current formatting standard for academic papers and journals."
		}, {
			question: "How do I generate an in-text citation?",
			answer: "An APA in-text citation typically uses the author's last name and publication year, for example: (Smith, 2026). This tool builds the full reference page citation."
		}],
		educationalContent: {
			whatIsIt: "An APA Citation Generator helps researchers, students, and writers format bibliographic references correctly according to the American Psychological Association (APA) guidelines.",
			howToUse: "1. Select the citation source type (Book, Website, or Journal).\n2. Fill in the source details (Authors, Year, Title, URL).\n3. View the live formatted citation preview.\n4. Copy the citation as plain text or italicized HTML."
		}
	},
	{
		slug: "merge-pdf",
		title: "Merge PDF",
		description: "Combine multiple PDF files into one document quickly and securely. 100% private conversion running entirely in your browser.",
		category: "pdf",
		keywords: [
			"merge pdf",
			"combine pdf files",
			"join pdfs online",
			"pdf merger",
			"client side pdf merger",
			"combine multiple pdfs"
		],
		icon: "FileText",
		faqs: [
			{
				question: "Is there a limit on how many PDF files I can merge?",
				answer: "Since the merging process runs entirely inside your browser, there is no strict upload limit. You can merge as many files as your device's memory (RAM) can support, typically dozens of files up to 100MB+ in total."
			},
			{
				question: "Will my merged PDFs have any watermarks?",
				answer: "No. This tool is completely free and does not add any watermarks or modifications to your documents."
			},
			{
				question: "Is it safe to merge confidential documents here?",
				answer: "Yes, absolutely. The merging process runs locally on your computer using JavaScript. Your files are never uploaded to any server, meaning your private data remains completely secure and confidential."
			}
		],
		educationalContent: {
			whatIsIt: "Merge PDF is a client-side utility that joins multiple PDF documents together into a single continuous file. It uses pdf-lib to merge the page streams without re-compressing them, preserving the original formatting, fonts, and quality.",
			howToUse: "1. Drag and drop multiple PDF files into the dropzone.\n2. Reorder the files by using the \"Move Up\" and \"Move Down\" buttons.\n3. Remove any unwanted files by clicking the \"✕\" button.\n4. Click \"Merge PDFs\" to compile them.\n5. Click the \"Download\" button to save your merged PDF document.",
			proTips: ["Make sure to arrange the files in the correct sequence before clicking merge.", "Merging works best on standard PDFs. If any file is password-protected, unlock it first using our Unlock PDF tool."]
		}
	},
	{
		slug: "split-pdf",
		title: "Split PDF",
		description: "Split PDF files into separate pages or extract specific page ranges instantly. 100% secure client-side splitting.",
		category: "pdf",
		keywords: [
			"split pdf",
			"extract pdf pages",
			"cut pdf pages online",
			"pdf splitter",
			"client side pdf splitter",
			"separate pdf pages"
		],
		icon: "FileText",
		faqs: [
			{
				question: "How does the page range extraction work?",
				answer: "You can extract specific pages by entering ranges like \"1-3, 5, 8-10\". This would extract pages 1, 2, 3, 5, 8, 9, and 10 into a new PDF document."
			},
			{
				question: "Can I extract all pages as individual PDFs?",
				answer: "Yes! Select the \"Extract all pages\" option. It will generate individual PDF files for each page and pack them into a single, easy-to-download ZIP file."
			},
			{
				question: "Is my data secure?",
				answer: "Yes. The splitting is processed locally in your browser. Your PDF document is never sent to any external servers, maintaining absolute data privacy."
			}
		],
		educationalContent: {
			whatIsIt: "Split PDF isolates specific page collections from a source document and compiles them into new standalone PDF files. This is executed inside the browser using pdf-lib.",
			howToUse: "1. Select or drag & drop a PDF file into the dropzone.\n2. Choose a split option: \"Extract all pages\", \"Extract specific range\" (e.g., 1-5, 8), or \"Split every N pages\".\n3. Click \"Split PDF\" to process the request.\n4. Click \"Download\" to save the resulting PDF or ZIP file containing the split files.",
			proTips: ["Enter page numbers carefully. The page numbering is 1-indexed (starting from 1 up to the total page count).", "For batch processing, \"Extract all pages\" creates a ZIP archive automatically so you don't have to save dozens of files individually."]
		}
	},
	{
		slug: "compress-pdf",
		title: "Compress PDF",
		description: "Reduce the file size of your PDF documents locally. Choose between structural and image rasterization compression levels.",
		category: "pdf",
		keywords: [
			"compress pdf",
			"reduce pdf size",
			"shrink pdf document",
			"pdf size reducer",
			"local pdf compressor",
			"compress pdf online"
		],
		icon: "FileText",
		faqs: [
			{
				question: "What is the difference between standard and maximum compression?",
				answer: "Standard compression recreates the PDF structure (using copyPages), stripping redundant metadata, unused fonts, and duplicate resource mappings while keeping vector graphic and text sharpness. Maximum compression converts PDF pages into compressed JPEG images at a selected resolution, which works incredibly well for large, scanned, or image-heavy PDFs."
			},
			{
				question: "Will text remain selectable after maximum compression?",
				answer: "No, maximum compression rasterizes the pages into images. If you need text search and selection to work, use the Standard compression option."
			},
			{
				question: "Are my PDF documents uploaded to any external server?",
				answer: "No. The compression happens entirely client-side using JavaScript. Your files never leave your computer, ensuring absolute security and privacy."
			}
		],
		educationalContent: {
			whatIsIt: "Compress PDF decreases file size using structural cleanup (standard) or page rasterization at reduced DPI and JPEG quality (maximum). All calculations run inside the browser context.",
			howToUse: "1. Drag and drop your PDF file into the dropzone.\n2. Choose a compression level: Standard (ideal for text PDFs, keeps vector quality) or Maximum (ideal for scanned/image-heavy PDFs, downsamples pages).\n3. Click \"Compress PDF\" to start optimization.\n4. View the original vs. compressed file sizes and download your optimized PDF.",
			proTips: ["For presentation slides containing lots of large images, Standard compression can often halve the file size without any pixelation.", "If you choose Maximum compression, 150 DPI is generally the sweet spot for print quality, while 96 DPI is optimal for sharing on mobile/web."]
		}
	},
	{
		slug: "word-to-pdf",
		title: "Word to PDF Converter",
		description: "Convert Microsoft Word (.docx) documents to PDF format instantly. High quality offline conversion running entirely in your browser.",
		category: "pdf",
		keywords: [
			"word to pdf",
			"convert docx to pdf",
			"convert word to pdf online",
			"docx to pdf converter",
			"client side docx converter"
		],
		icon: "FileText",
		faqs: [
			{
				question: "Which Word formats are supported?",
				answer: "This converter supports modern Word XML documents with the \".docx\" extension. Legacy binary \".doc\" files are not supported directly; you can resave them as docx in word processors first."
			},
			{
				question: "How is the document layout preserved?",
				answer: "The converter parses docx structure elements (including lists, bold/italics, font structures, tables, and spacing margins), builds a page-mapped HTML mockup, and draws a print-ready PDF using canvas vectorization."
			},
			{
				question: "Is my document private?",
				answer: "Yes. The parsing, HTML rendering, and PDF compilation are executed entirely inside your web browser locally. Your documents are never sent to external servers."
			}
		],
		educationalContent: {
			whatIsIt: "Word to PDF is a client-side conversion utility that reads Word .docx files, converts their structured XML nodes into HTML styling elements (via mammoth.js), and outputs a vector PDF using html2canvas & jsPDF.",
			howToUse: "1. Select or drag & drop a Word (.docx) document.\n2. Preview the parsed document text to ensure readability.\n3. Click \"Convert to PDF\".\n4. Download your high-quality PDF document instantly.",
			proTips: ["Docx layouts containing tables and structured paragraphs convert with high accuracy. Ensure standard fonts are used for optimal layout matching.", "Check the page preview before generating the final PDF to ensure table cells align correctly."]
		}
	},
	{
		slug: "jpg-to-pdf",
		title: "JPG to PDF Converter",
		description: "Convert JPG, PNG, and other images to a single PDF document. Customizable page sizes, orientation, and margins. 100% private.",
		category: "pdf",
		keywords: [
			"jpg to pdf",
			"convert images to pdf",
			"png to pdf",
			"webp to pdf",
			"images to pdf converter",
			"online image to pdf"
		],
		icon: "FileText",
		faqs: [
			{
				question: "Which image formats are supported?",
				answer: "You can upload JPG, JPEG, PNG, WebP, SVG, and GIF. The tool processes them locally and outputs a standard, high-quality PDF document."
			},
			{
				question: "Can I reorder my images before merging them into a PDF?",
				answer: "Yes! After uploading, you will see a list of images. You can use the \"Move Up\" and \"Move Down\" buttons to arrange them in your preferred sequence."
			},
			{
				question: "Can I customize the page sizes and margins?",
				answer: "Yes. You can select page formats like A4, Letter, or choose \"Auto\" to match the page size to the exact size of the image. Margins can be adjusted to None, Small, or Large."
			}
		],
		educationalContent: {
			whatIsIt: "JPG to PDF is a client-side utility that compiles multiple images into a single formatted PDF document. It converts all images into high-compression JPEG streams and embeds them into pages utilizing pdf-lib.",
			howToUse: "1. Upload or drag and drop one or more image files.\n2. Reorder them as needed using the up/down controls.\n3. Customize settings: Page Size (Auto, A4, Letter), Orientation, and Margins.\n4. Click \"Generate PDF\" to render.\n5. Click the \"Download\" button to save your PDF file.",
			proTips: ["Choose \"Auto\" page size and \"None\" margins to create a presentation-like PDF where images fit the screen perfectly without white borders.", "For printing, choose A4 page size, Portrait orientation, and Small margins to align images cleanly on pages."]
		}
	},
	{
		slug: "pdf-to-jpg",
		title: "PDF to JPG Converter",
		description: "Convert PDF pages into high-quality JPG images locally in your browser. Extract individual page images or download all as a ZIP.",
		category: "pdf",
		keywords: [
			"pdf to jpg",
			"convert pdf to image",
			"extract pdf images",
			"pdf to jpeg",
			"convert pdf to jpg online",
			"client side pdf to jpg"
		],
		icon: "FileText",
		faqs: [
			{
				question: "Can I choose which pages to convert?",
				answer: "Yes! You can specify a custom page range (e.g. \"1, 3-5\") or choose to convert all pages of the document."
			},
			{
				question: "What image quality options are available?",
				answer: "You can convert at Standard Quality (1x scale), High Quality (2x scale), or Ultra Quality (3x scale) for high-resolution vector text zoom details."
			},
			{
				question: "Is my PDF content uploaded to a server?",
				answer: "No. The conversion is processed completely locally in your browser. Your private document pages are drawn on local canvas buffers, protecting your confidential information."
			}
		],
		educationalContent: {
			whatIsIt: "PDF to JPG renders PDF document pages onto HTML5 canvas surfaces and exports them as high-quality JPEG image formats (using pdfjs-dist and JSZip).",
			howToUse: "1. Select or drag & drop a PDF document.\n2. Preview the page thumbnails in the grid.\n3. Choose output resolution (Standard, High, Ultra) and page ranges.\n4. Click \"Convert to Images\".\n5. Download individual pages as JPEGs or click \"Download All (ZIP)\" to save all pages.",
			proTips: ["For presentations or graphic-heavy PDFs, 2x scale (High Quality) is recommended to keep texts legible.", "If you only need a single page, you can click \"Download Page\" directly on that page thumbnail to save time."]
		}
	},
	{
		slug: "edit-pdf",
		title: "Edit PDF",
		description: "Add text notes, freehand drawing annotations, and basic shapes onto your PDF documents locally. 100% private PDF editor.",
		category: "pdf",
		keywords: [
			"edit pdf",
			"annotate pdf",
			"pdf editor online",
			"write on pdf",
			"draw on pdf",
			"local pdf editor",
			"client side pdf editor"
		],
		icon: "FileText",
		faqs: [
			{
				question: "What edits can I perform with this tool?",
				answer: "You can add text blocks (customizing text contents, font size, and text color), draw freehand annotations directly on top of pages, insert rectangles/circles, and navigation pages."
			},
			{
				question: "Does this editor support editing existing text inside the PDF?",
				answer: "No. This editor is designed for adding new annotations, drawings, notes, and shapes on top of existing PDF layers. It does not rewrite or edit the pre-existing embedded PDF text structures."
			},
			{
				question: "Is my data secure?",
				answer: "Yes. The PDF is rendered and edited entirely on your device using canvas overlays. Your modified document never touches a server."
			}
		],
		educationalContent: {
			whatIsIt: "Edit PDF is a client-side layout editor that overlays text boxes and custom drawing nodes onto PDF page coordinate surfaces and merges them into the final file stream using pdf-lib.",
			howToUse: "1. Drag and drop a PDF file to upload.\n2. Select an editing tool from the toolbar: Text, Draw, or Clear.\n3. Click on the document page to add text, or drag to sketch freehand.\n4. Navigate pages using the page controls.\n5. Click \"Save PDF\" to permanently embed your changes and download the edited file.",
			proTips: ["Click the page viewport precisely when placing text. Double check font sizes and colors before saving.", "Use the freehand tool with red ink to highlight parts of the text or sign documents directly."]
		}
	},
	{
		slug: "sign-pdf",
		title: "Sign PDF",
		description: "Sign PDF documents online securely. Draw your signature, type it using elegant script fonts, or upload a signature image. 100% local.",
		category: "pdf",
		keywords: [
			"sign pdf",
			"electronic signature",
			"e-sign pdf online",
			"digital signature",
			"add signature to pdf",
			"local pdf signer"
		],
		icon: "FileText",
		faqs: [
			{
				question: "Is my electronic signature legally binding?",
				answer: "Yes, electronic signatures are legally recognized in most countries under laws such as the ESIGN Act (US) and eIDAS Regulation (EU) for standard contracts, agreements, and waivers."
			},
			{
				question: "Can I reuse my signature across different pages?",
				answer: "Yes. Once you create your signature (by drawing, typing, or uploading), you can place multiple copies of it on different pages and resize them individually."
			},
			{
				question: "Is my signature data private?",
				answer: "Absolutely. The signature creation, placing, and final rendering are processed entirely client-side. Your signature drawings and PDF documents are never uploaded to any external server."
			}
		],
		educationalContent: {
			whatIsIt: "Sign PDF allows adding electronic signatures (drawn, typed, or uploaded) onto PDF documents locally using canvas coordinates positioning and pdf-lib image embedding.",
			howToUse: "1. Select and upload your PDF document.\n2. Click \"Create Signature\" to draw a freehand signature, type it in an elegant script font, or upload an image.\n3. Click \"Place Signature\" to overlay it onto the current page.\n4. Drag and resize the signature box on any page. Navigate pages as needed.\n5. Click \"Apply & Download\" to compile and save your signed PDF document.",
			proTips: ["For typed signatures, try different cursive fonts to find the style that fits your document style.", "If you upload a signature image, use a PNG with transparent background for the cleanest look."]
		}
	},
	{
		slug: "unlock-pdf",
		title: "Unlock PDF",
		description: "Remove password protection and decryption locks from PDF files instantly. Runs 100% locally in your browser for total security.",
		category: "pdf",
		keywords: [
			"unlock pdf",
			"remove pdf password",
			"decrypt pdf online",
			"pdf restriction remover",
			"local pdf unlocker",
			"free pdf unlocker"
		],
		icon: "FileText",
		faqs: [
			{
				question: "Can I unlock a PDF if I do not know the password?",
				answer: "No. To unlock a password-protected PDF, you must enter the correct password. This tool decrypts the document using the password and saves a copy without restrictions so you do not have to type the password every time."
			},
			{
				question: "Which restrictions does this tool remove?",
				answer: "It removes owner passwords, user passwords, printing locks, editing blocks, and copy-paste restrictions."
			},
			{
				question: "Is it safe to type my password here?",
				answer: "Yes, completely. The decryption happens entirely client-side on your local device. Your password and PDF files are never uploaded to any servers, ensuring absolute privacy and security."
			}
		],
		educationalContent: {
			whatIsIt: "Unlock PDF removes security layers, passwords, and user restrictions from standard PDF files. It decrypts page objects and structures locally using pdf-lib.",
			howToUse: "1. Select and upload a password-protected PDF file.\n2. When prompted, type the document password.\n3. Click \"Unlock & Decrypt\".\n4. Download the decrypted PDF document to save it password-free.",
			proTips: ["If your document has printing locked, this tool removes it instantly so you can print it freely.", "Unlocking the document beforehand is recommended if you plan to edit or merge it using our other PDF tools."]
		}
	},
	{
		slug: "protect-pdf",
		title: "Protect PDF",
		description: "Encrypt your PDF documents with a secure password locally in your browser. Complete client-side security.",
		category: "pdf",
		keywords: [
			"protect pdf",
			"encrypt pdf",
			"add password to pdf",
			"lock pdf",
			"secure pdf online",
			"client side pdf protection"
		],
		icon: "FileText",
		faqs: [
			{
				question: "What is the difference between open password and owner password?",
				answer: "An Open (User) Password is required to open and view the PDF document. An Owner (Permissions) Password is required to modify restrictions like printing, copying text, or editing."
			},
			{
				question: "Is it safe to enter my confidential passwords here?",
				answer: "Yes, 100%. The encryption runs entirely inside your browser using local web crypto wrappers. Your password and PDF data never touch any server."
			},
			{
				question: "Can I remove the password later?",
				answer: "Yes! You can remove the password at any time using our Unlock PDF tool, provided you know the original password."
			}
		],
		educationalContent: {
			whatIsIt: "Protect PDF encrypts document streams using RC4 or AES algorithms. This prevents unauthorized users from opening, printing, or copying the file contents.",
			howToUse: "1. Select and upload your PDF file.\n2. Enter a secure password to restrict viewing.\n3. Optionally, configure an owner password to block editing/printing.\n4. Click \"Encrypt & Protect PDF\".\n5. Save your secure, password-locked PDF document.",
			proTips: ["Use a strong password combining uppercase, lowercase, numbers, and symbols to ensure protection against brute-force attacks.", "Note down your password carefully, as it cannot be recovered if forgotten."]
		}
	},
	{
		slug: "excel-to-pdf",
		title: "Excel to PDF Converter",
		description: "Convert Excel spreadsheets (.xlsx, .xls, .csv) into PDF format locally. High quality offline conversion running entirely in your browser.",
		category: "pdf",
		keywords: [
			"excel to pdf",
			"convert xlsx to pdf",
			"csv to pdf",
			"convert spreadsheet to pdf",
			"local excel converter",
			"client side excel to pdf"
		],
		icon: "FileText",
		faqs: [
			{
				question: "Which spreadsheet formats can I convert?",
				answer: "You can convert modern Excel spreadsheets (.xlsx), legacy spreadsheets (.xls), and comma-separated text values (.csv)."
			},
			{
				question: "Will all sheets in the workbook be converted?",
				answer: "Yes! The tool parses all sheets in your Excel file, formats them into structured pages, and combines them sequentially into the final PDF."
			},
			{
				question: "Is my data secure?",
				answer: "Absolutely. The spreadsheet parsing and PDF compilation happen entirely inside your web browser. No details are uploaded to any external server."
			}
		],
		educationalContent: {
			whatIsIt: "Excel to PDF is an offline conversion tool that parses Excel tabular grid cells (via mammoth/SheetJS), structures them in styled responsive HTML table blocks, and writes them into A4 documents using html2canvas & jsPDF.",
			howToUse: "1. Select and upload your Excel (.xlsx, .xls, or .csv) file.\n2. Preview the worksheets in the browser frame.\n3. Click \"Convert to PDF\".\n4. Download the print-ready PDF file instantly.",
			proTips: ["For wide sheets containing dozens of columns, the table preview fits columns to the page width. Set printing orientations to landscape to avoid columns being squished.", "Check all sheet tabs in the preview block before saving the PDF."]
		}
	},
	{
		slug: "powerpoint-to-pdf",
		title: "PowerPoint to PDF Converter",
		description: "Convert PowerPoint presentations (.pptx) to PDF format instantly. Processes entirely inside your browser for total security.",
		category: "pdf",
		keywords: [
			"powerpoint to pdf",
			"convert pptx to pdf",
			"ppt to pdf converter",
			"convert slides to pdf",
			"client side pptx converter"
		],
		icon: "FileText",
		faqs: [
			{
				question: "Which presentation formats are supported?",
				answer: "This converter supports modern PowerPoint XML slideshows with the \".pptx\" extension. Legacy \".ppt\" binary formats are not supported directly; re-save them as pptx first."
			},
			{
				question: "How is the layout preserved in the output PDF?",
				answer: "The converter extracts text lines and layouts from the slide XML nodes, maps them onto widescreen slide previews, and compiles them into landscape PDF pages."
			},
			{
				question: "Is my document private?",
				answer: "Yes, absolutely. The presentation parsing and PDF assembly are executed entirely client-side. No files are uploaded to any external server."
			}
		],
		educationalContent: {
			whatIsIt: "PowerPoint to PDF reads slide nodes from OpenXML presentation .pptx archives, converts their text nodes into widescreen presentation mockups, and prints them to landscape PDFs using html2canvas & jsPDF.",
			howToUse: "1. Select and upload your PowerPoint (.pptx) file.\n2. Preview the parsed slides in the browser.\n3. Click \"Convert to PDF\".\n4. Download the generated PDF document.",
			proTips: ["For best results, use standard fonts and layouts in your slides.", "Check the slide previews before generating the final PDF."]
		}
	},
	{
		slug: "organize-pdf",
		title: "Organize PDF",
		description: "Rearrange pages, delete pages, rotate pages, or add blank pages to your PDF locally in the browser. 100% private.",
		category: "pdf",
		keywords: [
			"organize pdf",
			"rearrange pdf pages",
			"delete pdf pages",
			"rotate pdf pages",
			"reorder pdf pages online",
			"client side pdf organizer"
		],
		icon: "FileText",
		faqs: [
			{
				question: "How do I rearrange the PDF pages?",
				answer: "After uploading your PDF, you will see a thumbnail of each page. Simply use the \"◀\" and \"▶\" buttons on any page thumbnail card to move that page backward or forward in the sequence."
			},
			{
				question: "Can I add blank pages or delete unwanted pages?",
				answer: "Yes! Click the \"Add Blank Page\" button to insert a blank page at the end of the document, which you can then rearrange. To delete a page, click the \"✕ Delete\" button on that page's thumbnail card."
			},
			{
				question: "Is my document private?",
				answer: "Yes. The rendering, page mapping, rotations, reordering, and final PDF generation are executed entirely inside your web browser. No files are uploaded to any external server."
			}
		],
		educationalContent: {
			whatIsIt: "Organize PDF is an interactive browser utility that copies original PDF page structures, adjusts their rotations and ordering sequences, and generates a new compiled PDF document using pdf-lib.",
			howToUse: "1. Select and upload your PDF file.\n2. In the page grid, rearrange pages using the left/right arrow buttons, delete pages with the \"✕\" button, or rotate pages using the rotate button.\n3. Click \"Add Blank Page\" to insert empty pages if needed.\n4. Click \"Apply & Save PDF\" to build and download your organized document.",
			proTips: ["Rotating pages CW (clockwise) adds 90 degrees to their orientation. You can click it multiple times to rotate 180 or 270 degrees.", "Always verify that all pages are in the correct sequence before clicking save."]
		}
	},
	{
		slug: "add-page-numbers",
		title: "Add Page Numbers",
		description: "Add dynamic, customizable page numbers (e.g. \"Page X of Y\" or numeric digits) to your PDF documents locally.",
		category: "pdf",
		keywords: [
			"add page numbers",
			"pdf page numbers",
			"number pdf pages",
			"insert page numbers pdf",
			"local page numbering",
			"client side pdf tool"
		],
		icon: "FileText",
		faqs: [
			{
				question: "Which numbering formats can I choose?",
				answer: "You can choose between simple numbers (\"1\"), page labels (\"Page 1\"), or full pagination counts (\"Page 1 of 12\")."
			},
			{
				question: "Can I omit the page number on the first page?",
				answer: "Yes! You can choose to skip the first page, which is ideal if your PDF has a title page or a table of contents."
			},
			{
				question: "Where can I position the page numbers?",
				answer: "You can position numbers in the headers or footers, aligned to the Left, Center, or Right."
			}
		],
		educationalContent: {
			whatIsIt: "Add Page Numbers loops through page sizes and dynamically overlays styled text runs in the document coordinates using pdf-lib.",
			howToUse: "1. Select and upload your PDF file.\n2. Choose layout settings (number format, position alignments, fonts, margins, and ranges).\n3. Click \"Add Page Numbers\".\n4. Download the updated, numbered PDF document.",
			proTips: ["Standard footers use a 20-point margin from page boundaries. Increase this padding if the text overlaps with existing page contents.", "Use contrasting colors (e.g. black or dark blue) for visibility."]
		}
	},
	{
		slug: "add-watermark",
		title: "Add Watermark to PDF",
		description: "Overlay custom text or image watermarks on your PDF pages locally. Supports text angle, size, color, and opacity adjustments.",
		category: "pdf",
		keywords: [
			"add watermark to pdf",
			"pdf watermark creator",
			"watermark pdf online",
			"insert image watermark pdf",
			"confidential stamp pdf",
			"local pdf watermark"
		],
		icon: "FileText",
		faqs: [
			{
				question: "Can I add image watermarks (like logos)?",
				answer: "Yes! You can upload custom PNG or JPG images to use as watermarks, and adjust their scale and transparency layers."
			},
			{
				question: "Can I choose the rotation angle of text watermarks?",
				answer: "Yes. You can rotate text watermarks to any angle (typically diagonal at -45 degrees) to make them span across the page."
			},
			{
				question: "Will my watermark affect text editing?",
				answer: "The watermark is overlaid on top of page contents with a customizable opacity level so that the text underneath remains visible and readable."
			}
		],
		educationalContent: {
			whatIsIt: "Add Watermark imports PDF pages and embeds dynamic transparent text layers or rasterized images as overlays at computed page centers using pdf-lib.",
			howToUse: "1. Select and upload your PDF file.\n2. Choose watermark type (Text vs. Image).\n3. Input text stamp (e.g. \"DRAFT\") or upload watermark picture.\n4. Set styling (size, angle, color, opacity).\n5. Click \"Add Watermark\" and save your document.",
			proTips: ["An opacity level of 0.2 to 0.3 is recommended to prevent the watermark from obstructing main text readability.", "Diagonal angles (-45 or -30 degrees) look the most professional for text stamps like \"CONFIDENTIAL\"."]
		}
	},
	{
		slug: "rotate-pdf",
		title: "Rotate PDF Pages",
		description: "Rotate individual, all, or specific ranges of pages in a PDF document (90° CW, 90° CCW, or 180°) locally in your browser.",
		category: "pdf",
		keywords: [
			"rotate pdf",
			"turn pdf pages",
			"pdf page rotator",
			"change pdf orientation",
			"local pdf rotator",
			"offline pdf page turner"
		],
		icon: "FileText",
		faqs: [
			{
				question: "Can I rotate only specific pages rather than the whole document?",
				answer: "Yes! You can choose to rotate all pages, odd pages only, even pages only, or enter a custom range (e.g., \"1-3, 5\") to change orientations selectively."
			},
			{
				question: "What angles can I rotate my PDF by?",
				answer: "You can rotate pages by 90° Clockwise, 90° Counter-Clockwise, or 180° (upside down)."
			},
			{
				question: "Is it safe to upload confidential files here?",
				answer: "Yes, absolutely. The document loading, page modifications, rotation calculation, and saving are executed client-side in your browser. No files are uploaded to any server."
			}
		],
		educationalContent: {
			whatIsIt: "Rotate PDF parses document structures, calculates current page angle metrics, applies target rotation degrees, and re-saves the updated PDF using pdf-lib.",
			howToUse: "1. Select and upload your PDF file.\n2. Choose rotation angle (90° CW, 90° CCW, 180°).\n3. Choose page selection (All, Odd, Even, Custom Range).\n4. Click \"Rotate & Save PDF\" to download the updated document.",
			proTips: ["PDF coordinates and content are automatically re-aligned to the new orientation. Text remains copyable and selectable.", "If you have scanned landscape documents showing up vertically, rotate them 90° CW or CCW to make them readable."]
		}
	},
	{
		slug: "pdf-to-pdfa",
		title: "PDF to PDF/A",
		description: "Convert standard PDF documents into ISO-compliant PDF/A archive documents. Adds necessary metadata structures completely locally in your browser.",
		category: "pdf",
		keywords: [
			"pdf to pdfa",
			"pdf to pdf/a converter",
			"archive pdf",
			"iso pdfa",
			"client side pdfa converter",
			"convert pdf to pdf-a"
		],
		icon: "FileText",
		faqs: [
			{
				question: "What is PDF/A?",
				answer: "PDF/A is an ISO-standardized version of the PDF format specialized for the digital preservation and long-term archiving of electronic documents. It guarantees that files can be opened and rendered exactly the same way regardless of future software updates."
			},
			{
				question: "How does client-side PDF/A conversion work?",
				answer: "This tool uses pdf-lib to load your document and injects an XMP (Extensible Metadata Platform) metadata stream. This stream contains standard XML headers identifying the document as compliant with PDF/A specifications (e.g. PDF/A-1b or PDF/A-2b)."
			},
			{
				question: "Does this tool embed fonts?",
				answer: "Yes, if fonts are already embedded in the original PDF, they are maintained. The conversion marks standard font tags, colorspace dictionaries, and catalog dictionaries as conformant to PDF/A standards."
			}
		],
		educationalContent: {
			whatIsIt: "PDF to PDF/A is a formatting tool that adapts standard PDF structures for archive compliance. By creating a custom XML-based metadata stream and attaching it to the catalog of the document, it marks the file as archive-ready for enterprise and government storage systems.",
			howToUse: "1. Select and upload the PDF file you wish to convert.\n2. Choose your compliance level (e.g., PDF/A-1b or PDF/A-2b).\n3. Click \"Convert to PDF/A\".\n4. Download the newly marked PDF/A compliant document.",
			proTips: ["PDF/A-1b is the most common standard and ensures basic visual conformance.", "PDF/A-2b adds support for newer PDF features like layers, transparency, and JPEG2000 compression profiles."]
		}
	},
	{
		slug: "html-to-pdf",
		title: "HTML to PDF",
		description: "Convert custom HTML code or entire web structures into styled PDF documents. Fully client-side rendering with options for sizing, margins, and orientation.",
		category: "pdf",
		keywords: [
			"html to pdf",
			"convert html code to pdf",
			"webpage to pdf converter",
			"online html to pdf",
			"render html as pdf client side"
		],
		icon: "FileText",
		faqs: [
			{
				question: "How does client-side HTML to PDF conversion work?",
				answer: "This tool renders your custom HTML into an isolated sandboxed iframe. It then uses html2pdf.js, which captures the visual styles using html2canvas and translates them into vector PDF components using jsPDF, compiling the file directly in your browser."
			},
			{
				question: "Does it support external CSS styles, Google Fonts, and images?",
				answer: "Yes! You can load external stylesheets (like Tailwind or Bootstrap) and Google Fonts via `<link>` tags, and include inline images. Make sure external resources are CORS-enabled so the canvas renderer can read them."
			},
			{
				question: "What page sizes and formats are supported?",
				answer: "You can choose between A4, Letter, and Legal formats, configure margins (None, Small, or Standard), and set the document orientation to either Portrait or Landscape."
			}
		],
		educationalContent: {
			whatIsIt: "HTML to PDF is a compiler that translates standard web formatting (HTML/CSS) into structured PDF pages. It provides a real-time sandboxed preview window where you can test code, templates, and designs before downloading them as print-ready PDF files.",
			howToUse: "1. Paste or write your HTML code directly into the editor pane.\n2. Choose page layout options (Size, Margins, and Orientation).\n3. Click \"Generate PDF Preview\" to view the layout.\n4. Click \"Download PDF\" to save the compiled document.",
			proTips: ["Use inline styles or a `<style>` block inside the HTML for the most reliable CSS rendering.", "Add the CSS rule `page-break-after: always;` to force manual page breaks inside your PDF document."]
		}
	},
	{
		slug: "remove-pdf-pages",
		title: "Remove PDF Pages",
		description: "Delete unwanted pages from your PDF file. Select pages visually via thumbnails or type page numbers to compile a new PDF in your browser.",
		category: "pdf",
		keywords: [
			"remove pdf pages",
			"delete pages from pdf",
			"pdf page remover",
			"online pdf page deleter",
			"client side pdf editor"
		],
		icon: "FileText",
		faqs: [
			{
				question: "How do I remove pages from a PDF?",
				answer: "Simply upload your PDF document. The tool will render interactive page thumbnails. Select the pages you want to remove by clicking on them, or write page numbers in the text box (e.g. 1-3, 5). When ready, click \"Remove Pages\" and download your clean PDF."
			},
			{
				question: "Does this re-compress my PDF or lower quality?",
				answer: "No. The deletion logic uses pdf-lib, which deletes the page nodes directly from the internal PDF document catalog structure without editing page images or text content, ensuring 100% original quality is preserved."
			},
			{
				question: "Is there a page or size limit?",
				answer: "Since the removal runs entirely locally on your device, there are no upload limits. It easily handles large documents up to dozens of pages and 100MB+ in size."
			}
		],
		educationalContent: {
			whatIsIt: "Remove PDF Pages is a direct document compiler. It loads a PDF file stream, identifies page descriptors, and removes reference branches for selected pages, generating a new streamlined PDF document.",
			howToUse: "1. Select and upload your PDF document.\n2. Click page thumbnails to highlight and select them for deletion.\n3. Alternatively, type specific ranges (e.g. \"1-2, 5\") to select them.\n4. Click \"Delete Selected Pages\" to run the modification.\n5. Download the new PDF document.",
			proTips: ["Hover over a thumbnail to see its page number.", "Double check your selection before deleting, as the deleted pages cannot be recovered after you click compile (you would have to upload the file again)."]
		}
	},
	{
		slug: "extract-pdf-pages",
		title: "Extract PDF Pages",
		description: "Extract specific pages from your PDF file. Select pages visually via thumbnails or type page numbers to create a new PDF document in your browser.",
		category: "pdf",
		keywords: [
			"extract pdf pages",
			"extract pages from pdf",
			"pdf page extractor",
			"online pdf page splitter",
			"client side pdf parser"
		],
		icon: "FileText",
		faqs: [
			{
				question: "How do I extract pages from a PDF?",
				answer: "Simply upload your PDF document. The tool will render interactive page thumbnails. Select the pages you want to extract by clicking on them, or write page numbers in the text box (e.g. 1-3, 5). When ready, click \"Extract Pages\" and download your newly compiled PDF containing only the selected pages."
			},
			{
				question: "Does this keep the quality and form features of original pages?",
				answer: "Yes. The extraction logic uses pdf-lib copyPages mechanism, which preserves the original vector geometries, embedded fonts, image compressions, and resource references."
			},
			{
				question: "Is my data secure?",
				answer: "Absolutely. The extraction process is done completely client-side in Javascript, so your documents never leave your computer."
			}
		],
		educationalContent: {
			whatIsIt: "Extract PDF Pages is a direct document compiler. It loads a source PDF file stream, identifies user-selected page references, copies them into a brand-new PDF context catalog, and compiles a streamlined file.",
			howToUse: "1. Select and upload your PDF document.\n2. Click page thumbnails to highlight and select them for extraction.\n3. Alternatively, type specific ranges (e.g. \"1-2, 5\") to select them.\n4. Click \"Extract Selected Pages\" to run the compilation.\n5. Download the new PDF document.",
			proTips: ["Hover over a thumbnail to see its page number.", "Double check your selection before extracting, as only the selected pages will be included in the downloaded document."]
		}
	},
	{
		slug: "pdf-forms",
		title: "PDF Forms",
		description: "Fill interactive AcroForm fields in any PDF file directly in your browser. Complete forms, check boxes, select dropdowns, and download flattened or interactive PDFs.",
		category: "pdf",
		keywords: [
			"pdf form filler",
			"fill pdf forms online",
			"acroforms filler",
			"pdf form editor",
			"flatten pdf forms",
			"client side pdf form filler"
		],
		icon: "FileText",
		faqs: [
			{
				question: "How do I fill out form fields in a PDF?",
				answer: "Upload your PDF containing form fields. The tool will parse and render an easy-to-use visual HTML form corresponding to the PDF fields. Fill out the fields, choose whether to flatten the form, and download the updated PDF."
			},
			{
				question: "What does \"Flatten Form Fields\" mean?",
				answer: "Flattening merges the form fields directly into the PDF content stream, making the text and checkmarks permanent. This prevents other users from editing or changing the values later and ensures correct rendering across all PDF viewers."
			},
			{
				question: "Is it safe to type sensitive information in these forms?",
				answer: "Yes. All parsing, filling, and rendering occurs 100% in your local browser using client-side JavaScript. None of your inputs are ever sent to a server."
			}
		],
		educationalContent: {
			whatIsIt: "PDF Forms is a document field mapper. It reads the interactive forms catalog (AcroForms) embedded inside a PDF file, renders them as a standard web form, updates the field dictionaries with user values, and writes a compliant PDF stream.",
			howToUse: "1. Select and upload your PDF form file.\n2. Fill out the fields (text boxes, drop-downs, checkmarks) in the generated form panel.\n3. Optionally check \"Flatten Form Fields\" for read-only security.\n4. Click \"Fill & Download PDF\".",
			proTips: ["If your PDF doesn't have interactive fields, you can use our Edit PDF tool to add text layers manually.", "Checkboxes and radio buttons are fully supported alongside text inputs."]
		}
	},
	{
		slug: "redact-pdf",
		title: "Redact PDF",
		description: "Permanently remove sensitive information, text, and images from your PDF files. Visually draw black boxes to redact content locally in your browser.",
		category: "pdf",
		keywords: [
			"redact pdf",
			"remove sensitive info pdf",
			"black out text pdf",
			"pdf content remover",
			"sanitize pdf online",
			"client side pdf redaction"
		],
		icon: "FileText",
		faqs: [
			{
				question: "How do I redact a PDF?",
				answer: "Upload your PDF document. The editor will display your PDF pages. Drag your mouse to draw rectangles over text, images, or figures you wish to redact. You can select your redaction color (black, white, or red/gray). When finished, click \"Apply Redactions\" to generate a securely sanitized PDF."
			},
			{
				question: "Is the redacted content actually removed or just hidden?",
				answer: "Content is permanently covered! The tool uses pdf-lib to draw solid, opaque vector rectangle shapes onto the page stream. This physically burns the colored box over the underlying pixels and text blocks, rendering it unrecoverable."
			},
			{
				question: "Can I redact multiple pages?",
				answer: "Yes! You can browse page-by-page, draw multiple redaction boxes on any page, and apply them all at once when generating the file."
			}
		],
		educationalContent: {
			whatIsIt: "Redact PDF is a sanitization utility designed to mask private identifiers (like SSNs, phone numbers, names, or bank details). It overlays opaque blocking vector paths on the PDF document coordinates.",
			howToUse: "1. Select and upload the PDF file you wish to sanitize.\n2. Navigate through the document pages using the navigation bar.\n3. Click and drag on the page canvas to draw redaction rectangles.\n4. Select your preferred blackout color.\n5. Click \"Apply & Download Redacted PDF\".",
			proTips: ["Draw boxes slightly larger than the text you want to hide to make sure no letters or word edges peek out.", "Unlike simple PDF annotation editors, this tool embeds the redaction rectangles as solid vector objects in the page streams, preventing readers from \"moving\" the box to see what is underneath."]
		}
	}
];
var categories = [
	{
		slug: "json-yaml",
		title: "JSON & YAML Tools",
		description: "Format, validate, parse, and convert JSON or YAML structure strings.",
		icon: "Braces"
	},
	{
		slug: "generators",
		title: "Generators",
		description: "Generate passwords, hashes, UUIDs, QR codes, or dummy text on the fly.",
		icon: "Key"
	},
	{
		slug: "converters",
		title: "Converters",
		description: "Convert data representation between Base64, Hex, URL encoding, or different measurement units.",
		icon: "RefreshCw"
	},
	{
		slug: "text",
		title: "Text Tools",
		description: "Manipulate casing, check diffs, count lines, or filter text data.",
		icon: "Info"
	},
	{
		slug: "image",
		title: "Image Tools",
		description: "Perform local OCR conversions, image format translations, and render ASCII art.",
		icon: "Image"
	},
	{
		slug: "dev-utils",
		title: "Developer Utilities",
		description: "Useful utilities like Epoch converters, crontab editors, and regex checkers.",
		icon: "Terminal"
	},
	{
		slug: "security",
		title: "Security & Cryptography",
		description: "Generate secure hashes, inspect JWTs, encrypt/decrypt text, and verify signatures.",
		icon: "Shield"
	},
	{
		slug: "pdf",
		title: "PDF Utilities",
		description: "Merge, split, compress, sign, edit, or unlock PDF files directly in your browser.",
		icon: "FileText"
	}
];
//#endregion
//#region src/components/Header.astro
var $$Header = createComponent(($$result, $$props, $$slots) => {
	const searchIndex = registry.map((tool) => ({
		title: tool.title,
		slug: tool.slug,
		description: tool.description,
		keywords: tool.keywords,
		category: tool.category,
		icon: tool.icon
	}));
	return renderTemplate`${maybeRenderHead($$result)}<header class="site-header" id="site-header"><div class="container nav-container"><a href="/" class="logo" aria-label="Lowkeydevs Homepage">${renderComponent($$result, "Icon", $$Icon, {
		"name": "Logo",
		"size": 26,
		"class": "logo-icon"
	})}<span class="logo-text">Lowkey<span class="logo-accent">devs</span></span></a><!-- Desktop Navigation --><nav class="nav-links" aria-label="Main navigation"><a href="/" class="nav-link">Home</a><a href="/about" class="nav-link">About</a></nav><!-- Right Actions --><div class="right-header-group"><button class="nav-icon-btn" id="search-toggle-btn" aria-label="Search tools" title="Search tools (/)">${renderComponent($$result, "Icon", $$Icon, {
		"name": "Search",
		"size": 18
	})}</button><!-- Mobile menu button --><button class="nav-icon-btn mobile-menu-btn" id="mobile-menu-btn" aria-label="Open menu" aria-expanded="false"><svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg><svg class="close-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none;"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button></div></div></header><!-- Mobile Drawer --><div class="mobile-drawer-overlay" id="mobile-drawer-overlay"><nav class="mobile-drawer" aria-label="Mobile navigation"><div class="mobile-drawer-header"><div class="logo">${renderComponent($$result, "Icon", $$Icon, {
		"name": "Logo",
		"size": 26,
		"class": "logo-icon"
	})}<span class="logo-text">Lowkey<span class="logo-accent">devs</span></span></div><button class="nav-icon-btn" id="mobile-drawer-close" aria-label="Close menu"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button></div><div class="mobile-drawer-body"><div class="mobile-nav-links"><a href="/" class="mobile-nav-link">Home</a><a href="/about" class="mobile-nav-link">About</a><a href="/privacy" class="mobile-nav-link">Privacy</a></div><div class="drawer-divider"></div><div class="drawer-categories-section"><div class="drawer-section-header"><h3 class="drawer-section-title">Categories</h3></div><div class="drawer-search-wrapper">${renderComponent($$result, "Icon", $$Icon, {
		"name": "Search",
		"class": "drawer-search-icon",
		"size": 14
	})}<input type="text" id="drawer-search" placeholder="Search categories..." autocomplete="off" aria-label="Search categories"></div><div class="drawer-categories-list" id="drawer-categories-list">${categories.map((cat) => renderTemplate`<a${addAttribute(`/tools/category/${cat.slug}`, "href")} class="drawer-category-item"${addAttribute(cat.title.toLowerCase(), "data-category-title")}${addAttribute(cat.description.toLowerCase(), "data-category-desc")}><span class="drawer-category-icon">${renderComponent($$result, "Icon", $$Icon, {
		"name": cat.icon,
		"size": 16
	})}</span><span class="drawer-category-title">${cat.title}</span><span class="drawer-category-chevron">${renderComponent($$result, "Icon", $$Icon, {
		"name": "ChevronRight",
		"size": 14
	})}</span></a>`)}</div><div class="drawer-categories-empty" id="drawer-categories-empty" style="display: none;">No categories found.</div></div></div></nav></div><!-- Search Overlay Modal --><div class="search-overlay" id="search-overlay"><div class="search-modal"><div class="search-modal-header"><div class="search-modal-input-wrapper">${renderComponent($$result, "Icon", $$Icon, {
		"name": "Search",
		"class": "search-modal-icon",
		"size": 18
	})}<input type="text" id="search-input" placeholder="Search tools..." autocomplete="off" aria-label="Search tools"></div><button class="search-close-btn" id="search-close-btn" aria-label="Close search"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button></div><!-- Results Container --><div class="search-results" id="search-results" hidden><ul id="results-list" role="listbox" aria-label="Search results"></ul><div class="search-empty" id="search-empty" hidden>No tools found. Try a different search term.</div></div></div></div><script>(function(){${defineScriptVars({ searchIndex })}
  // --- Header scroll behavior ---
  const header = document.getElementById('site-header');
  let ticking = false;

  function updateHeader() {
    if (window.scrollY > 10) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }, { passive: true });

  updateHeader();

  // --- Mobile Drawer ---
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawerOverlay = document.getElementById('mobile-drawer-overlay');
  const mobileDrawerClose = document.getElementById('mobile-drawer-close');
  const drawerSearchInput = document.getElementById('drawer-search');
  const drawerCategoriesList = document.getElementById('drawer-categories-list');
  const drawerCategoriesEmpty = document.getElementById('drawer-categories-empty');
  const drawerCategoryItems = drawerCategoriesList ? drawerCategoriesList.getElementsByClassName('drawer-category-item') : [];

  function openDrawer() {
    mobileDrawerOverlay?.classList.add('active');
    mobileMenuBtn?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileDrawerOverlay?.classList.remove('active');
    mobileMenuBtn?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    
    // Reset search input and category visibility on close
    if (drawerSearchInput) {
      drawerSearchInput.value = '';
    }
    for (let i = 0; i < drawerCategoryItems.length; i++) {
      drawerCategoryItems[i].style.display = '';
    }
    if (drawerCategoriesEmpty) {
      drawerCategoriesEmpty.style.display = 'none';
    }
  }

  mobileMenuBtn?.addEventListener('click', openDrawer);
  mobileDrawerClose?.addEventListener('click', closeDrawer);

  mobileDrawerOverlay?.addEventListener('click', (e) => {
    if (e.target === mobileDrawerOverlay) closeDrawer();
  });

  // Category filtering inside mobile drawer
  drawerSearchInput?.addEventListener('input', (e) => {
    const term = e.target.value.trim().toLowerCase();
    let hasVisible = false;

    for (let i = 0; i < drawerCategoryItems.length; i++) {
      const item = drawerCategoryItems[i];
      const title = item.getAttribute('data-category-title') || '';
      const desc = item.getAttribute('data-category-desc') || '';
      
      if (title.includes(term) || desc.includes(term)) {
        item.style.display = '';
        hasVisible = true;
      } else {
        item.style.display = 'none';
      }
    }

    if (drawerCategoriesEmpty) {
      drawerCategoriesEmpty.style.display = hasVisible ? 'none' : 'block';
    }
  });

  // --- Search Overlay ---
  const searchToggleBtn = document.getElementById('search-toggle-btn');
  const searchCloseBtn = document.getElementById('search-close-btn');
  const searchOverlay = document.getElementById('search-overlay');
  const searchInput = document.getElementById('search-input');
  const resultsContainer = document.getElementById('search-results');
  const resultsList = document.getElementById('results-list');
  const searchEmpty = document.getElementById('search-empty');

  let activeIndex = -1;
  let items = [];

  function openSearch() {
    searchOverlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      searchInput?.focus();
    }, 50);
  }

  function closeSearch() {
    searchOverlay?.classList.remove('active');
    document.body.style.overflow = '';
    if (searchInput) searchInput.value = '';
    hideResults();
    searchInput?.blur();
  }

  searchToggleBtn?.addEventListener('click', openSearch);
  searchCloseBtn?.addEventListener('click', closeSearch);

  searchOverlay?.addEventListener('click', (e) => {
    if (e.target === searchOverlay) closeSearch();
  });

  // Keyboard triggers: '/' to open, Escape to close
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault();
      openSearch();
    } else if (e.key === 'Escape') {
      if (searchOverlay?.classList.contains('active')) {
        closeSearch();
      } else if (mobileDrawerOverlay?.classList.contains('active')) {
        closeDrawer();
      }
    }
  });

  function performSearch(query) {
    const term = query.trim().toLowerCase();
    if (!term) {
      hideResults();
      return;
    }

    const filtered = searchIndex.filter(tool => {
      return (
        tool.title.toLowerCase().includes(term) ||
        tool.description.toLowerCase().includes(term) ||
        tool.category.toLowerCase().includes(term) ||
        tool.keywords.some(kw => kw.toLowerCase().includes(term))
      );
    });

    renderResults(filtered);
  }

  function renderResults(results) {
    resultsList.innerHTML = '';
    activeIndex = -1;

    if (results.length === 0) {
      searchEmpty?.removeAttribute('hidden');
      resultsList.style.display = 'none';
      resultsContainer?.removeAttribute('hidden');
      items = [];
      return;
    }

    searchEmpty?.setAttribute('hidden', 'true');
    resultsList.style.display = 'block';
    resultsContainer?.removeAttribute('hidden');

    results.forEach((tool, idx) => {
      const li = document.createElement('li');
      li.className = 'search-item';
      li.setAttribute('role', 'option');
      li.id = \`search-item-\${idx}\`;

      li.innerHTML = \`
        <a href="/tools/\${tool.slug}">
          <div style="display: flex; align-items: center; justify-content: center; width: 24px; height: 24px; color: var(--accent); flex-shrink: 0;">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
              <path d="M9 17H7A2 2 0 0 1 5 15V9A2 2 0 0 1 7 7h2"/>
              <path d="m15 7 5 5-5 5"/>
            </svg>
          </div>
          <span style="font-weight: 500; font-size: 14px;">\${tool.title}</span>
        </a>
      \`;
      resultsList.appendChild(li);
    });

    items = resultsList.querySelectorAll('.search-item');
  }

  function hideResults() {
    resultsContainer?.setAttribute('hidden', 'true');
    activeIndex = -1;
  }

  // Keyboard navigation inside search results
  searchInput?.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (items.length === 0) return;
      if (activeIndex !== -1) items[activeIndex].classList.remove('active');
      activeIndex = (activeIndex + 1) % items.length;
      items[activeIndex].classList.add('active');
      items[activeIndex].scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (items.length === 0) return;
      if (activeIndex !== -1) items[activeIndex].classList.remove('active');
      activeIndex = (activeIndex - 1 + items.length) % items.length;
      items[activeIndex].classList.add('active');
      items[activeIndex].scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'Enter') {
      if (activeIndex !== -1 && items[activeIndex]) {
        e.preventDefault();
        items[activeIndex].querySelector('a')?.click();
      }
    } else if (e.key === 'Escape') {
      closeSearch();
    }
  });

  searchInput?.addEventListener('input', (e) => {
    performSearch(e.target.value);
  });
})();<\/script>`;
}, "C:/Users/gurpr/lowkeydevs/src/components/Header.astro", void 0);
//#endregion
//#region src/components/Footer.astro
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	const footerCategories = categories.slice(0, 5);
	return renderTemplate`${maybeRenderHead($$result)}<footer class="site-footer" data-astro-cid-jo6i4kqk><div class="container footer-container" data-astro-cid-jo6i4kqk><div class="footer-brand" data-astro-cid-jo6i4kqk><a href="/" class="logo" aria-label="Lowkeydevs Homepage" data-astro-cid-jo6i4kqk>${renderComponent($$result, "Icon", $$Icon, {
		"name": "Logo",
		"size": 26,
		"class": "logo-icon",
		"data-astro-cid-jo6i4kqk": true
	})}<span class="logo-text" data-astro-cid-jo6i4kqk>Lowkey<span class="logo-accent" data-astro-cid-jo6i4kqk>devs</span></span></a><p class="brand-tagline" data-astro-cid-jo6i4kqk>The fastest, cleanest collection of 100% private client-side utilities. Zero trackers, zero server logs.</p><div class="trust-badges" data-astro-cid-jo6i4kqk><div class="trust-badge" data-astro-cid-jo6i4kqk>${renderComponent($$result, "Icon", $$Icon, {
		"name": "Shield",
		"size": 14,
		"class": "badge-icon",
		"data-astro-cid-jo6i4kqk": true
	})}<span data-astro-cid-jo6i4kqk>100% Client-Side</span></div><div class="trust-badge" data-astro-cid-jo6i4kqk>${renderComponent($$result, "Icon", $$Icon, {
		"name": "Lock",
		"size": 14,
		"class": "badge-icon",
		"data-astro-cid-jo6i4kqk": true
	})}<span data-astro-cid-jo6i4kqk>Zero Server Logs</span></div></div></div><div class="footer-links" data-astro-cid-jo6i4kqk><h3 class="footer-heading" data-astro-cid-jo6i4kqk>Categories</h3><ul data-astro-cid-jo6i4kqk>${footerCategories.map((cat) => renderTemplate`<li data-astro-cid-jo6i4kqk><a${addAttribute(`/tools/category/${cat.slug}`, "href")} class="footer-link-item" data-astro-cid-jo6i4kqk>${renderComponent($$result, "Icon", $$Icon, {
		"name": cat.icon,
		"size": 14,
		"class": "link-icon",
		"data-astro-cid-jo6i4kqk": true
	})}<span data-astro-cid-jo6i4kqk>${cat.title}</span></a></li>`)}</ul></div><div class="footer-links" data-astro-cid-jo6i4kqk><h3 class="footer-heading" data-astro-cid-jo6i4kqk>Popular Tools</h3><ul data-astro-cid-jo6i4kqk>${[
		{
			title: "Merge PDF",
			slug: "merge-pdf"
		},
		{
			title: "JSON Formatter",
			slug: "json-formatter"
		},
		{
			title: "Case Converter",
			slug: "case-converter"
		},
		{
			title: "Password Generator",
			slug: "password-generator"
		},
		{
			title: "Image to Text (OCR)",
			slug: "image-to-text-ocr"
		}
	].map((tool) => renderTemplate`<li data-astro-cid-jo6i4kqk><a${addAttribute(`/tools/${tool.slug}`, "href")} class="footer-link-item" data-astro-cid-jo6i4kqk>${renderComponent($$result, "Icon", $$Icon, {
		"name": "Sparkles",
		"size": 12,
		"class": "link-icon accent-icon",
		"data-astro-cid-jo6i4kqk": true
	})}<span data-astro-cid-jo6i4kqk>${tool.title}</span></a></li>`)}</ul></div><div class="footer-newsletter" data-astro-cid-jo6i4kqk><h3 class="footer-heading" data-astro-cid-jo6i4kqk><span class="new-tools-badge" data-astro-cid-jo6i4kqk>New tools</span>Stay updated</h3><p class="newsletter-text" data-astro-cid-jo6i4kqk>Receive updates when new offline tools are added.</p><form class="newsletter-form" onsubmit="event.preventDefault(); alert('Subscribed!');" data-astro-cid-jo6i4kqk><input type="email" placeholder="your@email.com" required aria-label="Email address" class="newsletter-input" data-astro-cid-jo6i4kqk><button type="submit" class="newsletter-submit" aria-label="Subscribe" data-astro-cid-jo6i4kqk>${renderComponent($$result, "Icon", $$Icon, {
		"name": "ArrowRight",
		"size": 16,
		"data-astro-cid-jo6i4kqk": true
	})}</button></form></div></div><div class="footer-bottom" data-astro-cid-jo6i4kqk><div class="container footer-bottom-container" data-astro-cid-jo6i4kqk><div class="footer-copyright" data-astro-cid-jo6i4kqk><p data-astro-cid-jo6i4kqk>&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Lowkeydevs. All rights reserved.</p></div><div class="footer-bottom-links" data-astro-cid-jo6i4kqk><a href="/" data-astro-cid-jo6i4kqk>Home</a><span class="sep" data-astro-cid-jo6i4kqk>•</span><a href="/about" data-astro-cid-jo6i4kqk>About us</a><span class="sep" data-astro-cid-jo6i4kqk>•</span><a href="/privacy" data-astro-cid-jo6i4kqk>Privacy policy</a></div><p class="footer-heart" data-astro-cid-jo6i4kqk>Made with ${renderComponent($$result, "Icon", $$Icon, {
		"name": "Heart",
		"size": 12,
		"class": "heart-icon",
		"data-astro-cid-jo6i4kqk": true
	})} for developers</p></div></div></footer>`;
}, "C:/Users/gurpr/lowkeydevs/src/components/Footer.astro", void 0);
//#endregion
//#region src/pages/admin/suggestions.astro
var suggestions_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Suggestions,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
var $$Suggestions = createComponent(async ($$result, $$props, $$slots) => {
	let suggestions = [];
	let fetchError = null;
	try {
		if (!supabase) fetchError = "Supabase environment variables (SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY) are missing or not loaded. Please configure them in your .env file and restart your dev server.";
		else {
			const { data, error } = await supabase.from("suggestions").select("*").order("created_at", { ascending: false });
			if (error) fetchError = error.message;
			else suggestions = data || [];
		}
	} catch (err) {
		fetchError = err.message || "Unknown error occurred.";
	}
	const uniqueTools = Array.from(new Set(suggestions.map((s) => s.tool_slug).filter(Boolean))).sort();
	const uniqueBrowsers = Array.from(new Set(suggestions.map((s) => s.browser).filter(Boolean))).sort();
	const uniqueOS = Array.from(new Set(suggestions.map((s) => s.os).filter(Boolean))).sort();
	const uniqueDevices = Array.from(new Set(suggestions.map((s) => s.device_type).filter(Boolean))).sort();
	const totalCount = suggestions.length;
	const emailCount = suggestions.filter((s) => s.email).length;
	const emailRate = totalCount ? Math.round(emailCount / totalCount * 100) : 0;
	const avgScroll = totalCount ? Math.round(suggestions.reduce((acc, s) => acc + (s.scroll_percent || 0), 0) / totalCount) : 0;
	const avgTime = totalCount ? Math.round(suggestions.reduce((acc, s) => acc + (s.time_on_page || 0), 0) / totalCount) : 0;
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Suggestions Admin Dashboard - Lowkeydevs",
		"data-astro-cid-bwd7mdwm": true
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Header", $$Header, { "data-astro-cid-bwd7mdwm": true })}${maybeRenderHead($$result)}<main id="main-content" class="container admin-container" data-astro-cid-bwd7mdwm><div class="admin-header" data-astro-cid-bwd7mdwm><div data-astro-cid-bwd7mdwm><h1 class="admin-title" data-astro-cid-bwd7mdwm>Suggestions Dashboard</h1><p class="admin-subtitle" data-astro-cid-bwd7mdwm>Monitor and analyze feature suggestions and user feedback.</p></div><button id="export-csv-btn" class="btn btn-primary" title="Export current filtered data to CSV" data-astro-cid-bwd7mdwm>${renderComponent($$result, "Icon", $$Icon, {
		"name": "Download",
		"size": 16,
		"data-astro-cid-bwd7mdwm": true
	})}Export to CSV</button></div>${fetchError ? renderTemplate`<div class="error-banner" data-astro-cid-bwd7mdwm>${renderComponent($$result, "Icon", $$Icon, {
		"name": "AlertCircle",
		"size": 20,
		"data-astro-cid-bwd7mdwm": true
	})}<div data-astro-cid-bwd7mdwm><strong data-astro-cid-bwd7mdwm>Failed to load suggestions:</strong> ${fetchError}<p style="margin-top: 4px; font-size: 13px;" data-astro-cid-bwd7mdwm>Please make sure your Supabase environment variables are set and the suggestions table exists.</p></div></div>` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<div class="stats-grid" data-astro-cid-bwd7mdwm><div class="stat-card" data-astro-cid-bwd7mdwm><div class="stat-icon-wrapper purple" data-astro-cid-bwd7mdwm>${renderComponent($$result, "Icon", $$Icon, {
		"name": "MessageSquare",
		"size": 20,
		"data-astro-cid-bwd7mdwm": true
	})}</div><div data-astro-cid-bwd7mdwm><div class="stat-label" data-astro-cid-bwd7mdwm>Total Suggestions</div><div class="stat-value" id="stat-total" data-astro-cid-bwd7mdwm>${totalCount}</div></div></div><div class="stat-card" data-astro-cid-bwd7mdwm><div class="stat-icon-wrapper green" data-astro-cid-bwd7mdwm>${renderComponent($$result, "Icon", $$Icon, {
		"name": "Mail",
		"size": 20,
		"data-astro-cid-bwd7mdwm": true
	})}</div><div data-astro-cid-bwd7mdwm><div class="stat-label" data-astro-cid-bwd7mdwm>Contact Rate</div><div class="stat-value" id="stat-email-rate" data-astro-cid-bwd7mdwm>${emailRate}%</div><div class="stat-desc" data-astro-cid-bwd7mdwm>${emailCount} suggestions with email</div></div></div><div class="stat-card" data-astro-cid-bwd7mdwm><div class="stat-icon-wrapper orange" data-astro-cid-bwd7mdwm>${renderComponent($$result, "Icon", $$Icon, {
		"name": "TrendingUp",
		"size": 20,
		"data-astro-cid-bwd7mdwm": true
	})}</div><div data-astro-cid-bwd7mdwm><div class="stat-label" data-astro-cid-bwd7mdwm>Avg. Scroll Depth</div><div class="stat-value" id="stat-scroll" data-astro-cid-bwd7mdwm>${avgScroll}%</div></div></div><div class="stat-card" data-astro-cid-bwd7mdwm><div class="stat-icon-wrapper blue" data-astro-cid-bwd7mdwm>${renderComponent($$result, "Icon", $$Icon, {
		"name": "Clock",
		"size": 20,
		"data-astro-cid-bwd7mdwm": true
	})}</div><div data-astro-cid-bwd7mdwm><div class="stat-label" data-astro-cid-bwd7mdwm>Avg. Time on Page</div><div class="stat-value" id="stat-time" data-astro-cid-bwd7mdwm>${avgTime}s</div></div></div></div><div class="filters-card" data-astro-cid-bwd7mdwm><div class="filters-header" data-astro-cid-bwd7mdwm><h2 class="filters-title" data-astro-cid-bwd7mdwm>${renderComponent($$result, "Icon", $$Icon, {
		"name": "Filter",
		"size": 16,
		"data-astro-cid-bwd7mdwm": true
	})}Filters & Search</h2><button id="clear-filters-btn" class="btn-text" data-astro-cid-bwd7mdwm>Clear Filters</button></div><div class="filters-grid" data-astro-cid-bwd7mdwm><div class="form-group search-group" data-astro-cid-bwd7mdwm><label for="search-input" class="label" data-astro-cid-bwd7mdwm>Search</label><div class="search-input-wrapper" data-astro-cid-bwd7mdwm>${renderComponent($$result, "Icon", $$Icon, {
		"name": "Search",
		"class": "search-icon",
		"size": 16,
		"data-astro-cid-bwd7mdwm": true
	})}<input type="text" id="search-input" placeholder="Search suggestion, email, page, tool..." autocomplete="off" data-astro-cid-bwd7mdwm></div></div><div class="form-group" data-astro-cid-bwd7mdwm><label for="filter-date" class="label" data-astro-cid-bwd7mdwm>Date Range</label><select id="filter-date" data-astro-cid-bwd7mdwm><option value="all" data-astro-cid-bwd7mdwm>All Time</option><option value="today" data-astro-cid-bwd7mdwm>Today</option><option value="week" data-astro-cid-bwd7mdwm>Last 7 Days</option><option value="month" data-astro-cid-bwd7mdwm>Last 30 Days</option></select></div><div class="form-group" data-astro-cid-bwd7mdwm><label for="filter-tool" class="label" data-astro-cid-bwd7mdwm>Tool</label><select id="filter-tool" data-astro-cid-bwd7mdwm><option value="all" data-astro-cid-bwd7mdwm>All Tools</option><option value="none" data-astro-cid-bwd7mdwm>No Tool (Generic)</option>${uniqueTools.map((tool) => renderTemplate`<option${addAttribute(tool, "value")} data-astro-cid-bwd7mdwm>${tool}</option>`)}</select></div><div class="form-group" data-astro-cid-bwd7mdwm><label for="filter-browser" class="label" data-astro-cid-bwd7mdwm>Browser</label><select id="filter-browser" data-astro-cid-bwd7mdwm><option value="all" data-astro-cid-bwd7mdwm>All Browsers</option>${uniqueBrowsers.map((b) => renderTemplate`<option${addAttribute(b, "value")} data-astro-cid-bwd7mdwm>${b}</option>`)}</select></div><div class="form-group" data-astro-cid-bwd7mdwm><label for="filter-os" class="label" data-astro-cid-bwd7mdwm>Operating System</label><select id="filter-os" data-astro-cid-bwd7mdwm><option value="all" data-astro-cid-bwd7mdwm>All OS</option>${uniqueOS.map((os) => renderTemplate`<option${addAttribute(os, "value")} data-astro-cid-bwd7mdwm>${os}</option>`)}</select></div><div class="form-group" data-astro-cid-bwd7mdwm><label for="filter-device" class="label" data-astro-cid-bwd7mdwm>Device Type</label><select id="filter-device" data-astro-cid-bwd7mdwm><option value="all" data-astro-cid-bwd7mdwm>All Devices</option>${uniqueDevices.map((d) => renderTemplate`<option${addAttribute(d, "value")} data-astro-cid-bwd7mdwm>${d}</option>`)}</select></div><div class="form-group" data-astro-cid-bwd7mdwm><label for="filter-theme" class="label" data-astro-cid-bwd7mdwm>Theme</label><select id="filter-theme" data-astro-cid-bwd7mdwm><option value="all" data-astro-cid-bwd7mdwm>All Themes</option><option value="light" data-astro-cid-bwd7mdwm>Light</option><option value="dark" data-astro-cid-bwd7mdwm>Dark</option></select></div><div class="form-group" data-astro-cid-bwd7mdwm><label for="filter-email" class="label" data-astro-cid-bwd7mdwm>Email Contact</label><select id="filter-email" data-astro-cid-bwd7mdwm><option value="all" data-astro-cid-bwd7mdwm>All Suggestions</option><option value="has_email" data-astro-cid-bwd7mdwm>Has Email</option><option value="no_email" data-astro-cid-bwd7mdwm>No Email</option></select></div><div class="form-group" data-astro-cid-bwd7mdwm><label for="sort-by" class="label" data-astro-cid-bwd7mdwm>Sort By</label><select id="sort-by" data-astro-cid-bwd7mdwm><option value="newest" data-astro-cid-bwd7mdwm>Newest First</option><option value="oldest" data-astro-cid-bwd7mdwm>Oldest First</option><option value="time" data-astro-cid-bwd7mdwm>Time on Page</option><option value="scroll" data-astro-cid-bwd7mdwm>Scroll Depth</option></select></div></div></div><div class="table-container" data-astro-cid-bwd7mdwm><table id="suggestions-table" data-astro-cid-bwd7mdwm><thead data-astro-cid-bwd7mdwm><tr data-astro-cid-bwd7mdwm><th data-astro-cid-bwd7mdwm>Suggestion</th><th data-astro-cid-bwd7mdwm>Details</th><th data-astro-cid-bwd7mdwm>Context</th><th data-astro-cid-bwd7mdwm>Platform</th><th data-astro-cid-bwd7mdwm>Metrics</th><th data-astro-cid-bwd7mdwm>Timestamp / ID</th></tr></thead><tbody id="table-body" data-astro-cid-bwd7mdwm></tbody></table><div id="empty-state" class="empty-state" style="display: none;" data-astro-cid-bwd7mdwm><span class="empty-icon" data-astro-cid-bwd7mdwm>💡</span><h3 data-astro-cid-bwd7mdwm>No suggestions match the filters</h3><p data-astro-cid-bwd7mdwm>Try clearing your search query or choosing different filters.</p></div></div>` })}`}</main>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-bwd7mdwm": true })}` })}<script>(function(){${defineScriptVars({ suggestions })}
  // Standard Client-Side Dashboard Controller (Runs completely in browser)
  if (typeof window !== 'undefined') {
    const tableBody = document.getElementById('table-body');
    const emptyState = document.getElementById('empty-state');
    
    // Filters elements
    const searchInput = document.getElementById('search-input');
    const filterDate = document.getElementById('filter-date');
    const filterTool = document.getElementById('filter-tool');
    const filterBrowser = document.getElementById('filter-browser');
    const filterOs = document.getElementById('filter-os');
    const filterDevice = document.getElementById('filter-device');
    const filterTheme = document.getElementById('filter-theme');
    const filterEmail = document.getElementById('filter-email');
    const sortBy = document.getElementById('sort-by');
    const clearBtn = document.getElementById('clear-filters-btn');
    const exportBtn = document.getElementById('export-csv-btn');

    let currentFiltered = [...suggestions];

    function renderTable() {
      if (!tableBody) return;
      tableBody.innerHTML = '';

      if (currentFiltered.length === 0) {
        emptyState.style.display = 'flex';
        return;
      }
      emptyState.style.display = 'none';

      currentFiltered.forEach(s => {
        const tr = document.createElement('tr');
        const formattedDate = new Date(s.created_at).toLocaleDateString(undefined, {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });

        const safeReferrer = s.referrer ? (s.referrer.length > 30 ? s.referrer.substring(0, 30) + '...' : s.referrer) : 'None';

        tr.innerHTML = \`
          <td>
            <div class="cell-suggestion">\${escapeHtml(s.suggestion)}</div>
          </td>
          <td>
            <div class="cell-meta-group">
              <div class="cell-meta-item">
                <span class="cell-meta-label">Email</span>
                <span class="\${s.email ? 'cell-email' : 'cell-uuid'}">\${s.email ? escapeHtml(s.email) : 'None'}</span>
              </div>
              <div class="cell-meta-item">
                <span class="cell-meta-label">Anon ID</span>
                <span class="cell-uuid" onclick="navigator.clipboard.writeText('\${s.anonymous_id}').then(() => alert('Copied ID!'))" title="Click to copy">\${s.anonymous_id ? s.anonymous_id.substring(0, 8) + '...' : 'Unknown'}</span>
              </div>
            </div>
          </td>
          <td>
            <div class="cell-meta-group">
              <div class="cell-meta-item">
                <span class="cell-meta-label">Page URL</span>
                <a href="\${s.page_url || '#'}" target="_blank" class="btn-text" style="padding: 0; font-size: 13px;" title="\${s.page_url || ''}">\${s.route || '/'}</a>
              </div>
              <div class="cell-meta-item">
                <span class="cell-meta-label">Referrer</span>
                <span title="\${s.referrer || 'None'}" style="font-size: 12px; max-width: 150px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">\${safeReferrer}</span>
              </div>
            </div>
          </td>
          <td>
            <div>
              <span class="cell-badge accent">\${s.tool_slug || 'Generic Page'}</span>
              \${s.tool_category ? \`<span class="cell-badge">\${s.tool_category}</span>\` : ''}
            </div>
          </td>
          <td>
            <div style="display: flex; flex-direction: column; gap: 2px;">
              <div>
                <span class="cell-badge">\${s.device_type || 'Desktop'}</span>
                <span class="cell-badge">\${s.os || 'Unknown OS'}</span>
              </div>
              <div style="font-size: 11px; color: var(--text-tertiary);">
                \${s.browser || 'Unknown'} (\${s.browser_version ? s.browser_version.split('.')[0] : '?'})
              </div>
            </div>
          </td>
          <td>
            <div class="cell-meta-group">
              <div class="cell-meta-item">
                <span class="cell-meta-label">Scroll Depth</span>
                <span class="cell-badge \${s.scroll_percent >= 50 ? 'success' : ''}">\${s.scroll_percent || 0}%</span>
              </div>
              <div class="cell-meta-item">
                <span class="cell-meta-label">Time spent</span>
                <span>\${s.time_on_page || 0}s</span>
              </div>
            </div>
          </td>
          <td>
            <div style="font-size: 12px; font-weight: 500; color: var(--text-primary);">\${formattedDate}</div>
            <div style="font-size: 11px; color: var(--text-tertiary); margin-top: 2px; font-family: var(--font-mono);">\${s.timezone || 'UTC'}</div>
          </td>
        \`;
        tableBody.appendChild(tr);
      });
    }

    function escapeHtml(str) {
      if (!str) return '';
      return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;');
    }

    function applyFilters() {
      const search = searchInput.value.toLowerCase().trim();
      const dateVal = filterDate.value;
      const toolVal = filterTool.value;
      const browserVal = filterBrowser.value;
      const osVal = filterOs.value;
      const deviceVal = filterDevice.value;
      const themeVal = filterTheme.value;
      const emailVal = filterEmail.value;
      const sortVal = sortBy.value;

      currentFiltered = suggestions.filter(s => {
        // Search Filter (Suggestion, Email, URL/Route, Tool Slug)
        if (search) {
          const contentMatch = s.suggestion && s.suggestion.toLowerCase().includes(search);
          const emailMatch = s.email && s.email.toLowerCase().includes(search);
          const pageMatch = s.page_url && s.page_url.toLowerCase().includes(search);
          const toolMatch = s.tool_slug && s.tool_slug.toLowerCase().includes(search);
          if (!contentMatch && !emailMatch && !pageMatch && !toolMatch) return false;
        }

        // Date Filter
        if (dateVal !== 'all') {
          const dateLimit = new Date();
          if (dateVal === 'today') {
            dateLimit.setHours(0, 0, 0, 0);
          } else if (dateVal === 'week') {
            dateLimit.setDate(dateLimit.getDate() - 7);
          } else if (dateVal === 'month') {
            dateLimit.setDate(dateLimit.getDate() - 30);
          }
          if (new Date(s.created_at) < dateLimit) return false;
        }

        // Tool Filter
        if (toolVal !== 'all') {
          if (toolVal === 'none') {
            if (s.tool_slug) return false;
          } else {
            if (s.tool_slug !== toolVal) return false;
          }
        }

        // Browser Filter
        if (browserVal !== 'all' && s.browser !== browserVal) return false;

        // OS Filter
        if (osVal !== 'all' && s.os !== osVal) return false;

        // Device Filter
        if (deviceVal !== 'all' && s.device_type !== deviceVal) return false;

        // Theme Filter
        if (themeVal !== 'all' && s.theme !== themeVal) return false;

        // Email Filter
        if (emailVal !== 'all') {
          if (emailVal === 'has_email' && !s.email) return false;
          if (emailVal === 'no_email' && s.email) return false;
        }

        return true;
      });

      // Apply Sorting
      currentFiltered.sort((a, b) => {
        if (sortVal === 'newest') {
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        } else if (sortVal === 'oldest') {
          return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
        } else if (sortVal === 'time') {
          return (b.time_on_page || 0) - (a.time_on_page || 0);
        } else if (sortVal === 'scroll') {
          return (b.scroll_percent || 0) - (a.scroll_percent || 0);
        }
        return 0;
      });

      // Update Summary metrics client-side based on filtered dataset
      updateMetrics();

      // Render
      renderTable();
    }

    function updateMetrics() {
      const countEl = document.getElementById('stat-total');
      const rateEl = document.getElementById('stat-email-rate');
      const scrollEl = document.getElementById('stat-scroll');
      const timeEl = document.getElementById('stat-time');

      if (!countEl) return;

      const total = currentFiltered.length;
      const hasEmail = currentFiltered.filter(s => s.email).length;
      const rate = total ? Math.round((hasEmail / total) * 100) : 0;
      const scroll = total ? Math.round(currentFiltered.reduce((acc, s) => acc + (s.scroll_percent || 0), 0) / total) : 0;
      const time = total ? Math.round(currentFiltered.reduce((acc, s) => acc + (s.time_on_page || 0), 0) / total) : 0;

      countEl.textContent = total;
      rateEl.textContent = \`\${rate}%\`;
      scrollEl.textContent = \`\${scroll}%\`;
      timeEl.textContent = \`\${time}s\`;
    }

    // CSV Exporter (Client-side)
    function exportToCSV() {
      if (currentFiltered.length === 0) {
        alert('No suggestions to export.');
        return;
      }

      const headers = [
        'ID', 'Suggestion', 'Email', 'Page URL', 'Route', 'Tool Slug', 'Tool Category', 
        'Browser', 'Browser Version', 'OS', 'Device Type', 'Screen Width', 'Screen Height', 
        'Language', 'Timezone', 'Theme', 'Referrer', 'Time on Page (s)', 'Scroll Depth (%)', 
        'Anonymous ID', 'Session ID', 'Created At'
      ];

      const rows = currentFiltered.map(s => [
        s.id,
        s.suggestion || '',
        s.email || '',
        s.page_url || '',
        s.route || '',
        s.tool_slug || '',
        s.tool_category || '',
        s.browser || '',
        s.browser_version || '',
        s.os || '',
        s.device_type || '',
        s.screen_width || '',
        s.screen_height || '',
        s.language || '',
        s.timezone || '',
        s.theme || '',
        s.referrer || '',
        s.time_on_page || '0',
        s.scroll_percent || '0',
        s.anonymous_id || '',
        s.session_id || '',
        s.created_at || ''
      ]);

      const csvContent = [
        headers.join(','),
        ...rows.map(row => row.map(val => \`"\${String(val).replace(/"/g, '""')}"\`).join(','))
      ].join('\\n');

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', \`suggestions_export_\${new Date().toISOString().split('T')[0]}.csv\`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    function clearFilters() {
      searchInput.value = '';
      filterDate.value = 'all';
      filterTool.value = 'all';
      filterBrowser.value = 'all';
      filterOs.value = 'all';
      filterDevice.value = 'all';
      filterTheme.value = 'all';
      filterEmail.value = 'all';
      sortBy.value = 'newest';
      applyFilters();
    }

    // Attach Listeners
    searchInput.addEventListener('input', applyFilters);
    filterDate.addEventListener('change', applyFilters);
    filterTool.addEventListener('change', applyFilters);
    filterBrowser.addEventListener('change', applyFilters);
    filterOs.addEventListener('change', applyFilters);
    filterDevice.addEventListener('change', applyFilters);
    filterTheme.addEventListener('change', applyFilters);
    filterEmail.addEventListener('change', applyFilters);
    sortBy.addEventListener('change', applyFilters);
    clearBtn.addEventListener('click', clearFilters);
    exportBtn.addEventListener('click', exportToCSV);

    // Initial render
    renderTable();
  }
})();<\/script>`;
}, "C:/Users/gurpr/lowkeydevs/src/pages/admin/suggestions.astro", void 0);
var $$file = "C:/Users/gurpr/lowkeydevs/src/pages/admin/suggestions.astro";
var $$url = "/admin/suggestions";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/suggestions@_@astro
var page = () => suggestions_exports;
//#endregion
export { page };
