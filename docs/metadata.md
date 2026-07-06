# Metadata Standards
Version: 1.0
Project: LowKeyDevs

---

# Purpose

This document defines the metadata standards for every public page on LowKeyDevs.

Metadata must accurately describe the page for search engines, browsers, and social platforms.

Every page must generate metadata automatically from reusable metadata objects whenever possible.

Metadata must never be manually duplicated across pages.

---

# Core Principles

Metadata must be

- Accurate
- Unique
- Concise
- Human readable
- Search engine friendly

Metadata exists to improve discoverability, sharing, accessibility, and indexing.

Never generate metadata solely for keyword stuffing.

---

# Required Metadata

Every public page MUST include

- title
- description
- canonical
- robots
- language
- charset
- viewport
- theme-color
- favicon
- manifest
- author
- generator
- Open Graph
- Twitter Card

---

# Title

Length

50–60 characters

Pattern

{Primary Keyword} | LowKeyDevs

Examples

JSON Formatter | LowKeyDevs

UUID Generator | LowKeyDevs

Password Generator | LowKeyDevs

Rules

Unique on every page.

Readable.

No emojis.

No ALL CAPS.

No duplicate titles.

Never exceed 60 characters unless necessary.

---

# Meta Description

Length

140–160 characters

Requirements

Explain what the page does.

Mention the primary keyword naturally.

Describe one clear benefit.

Encourage interaction without clickbait.

Example

Format, validate, and beautify JSON instantly with a free browser-based JSON Formatter. Fast, private, and requires no downloads.

Never

Repeat keywords.

Use marketing hype.

Use misleading claims.

---

# Canonical URL

Every page must define one canonical URL.

Rules

Always absolute.

Always HTTPS.

Never include

tracking parameters

session IDs

temporary URLs

Example

https://lowkeydevs.com/tools/json-formatter

---

# Robots

Default

index, follow

Only use

noindex

for

drafts

private pages

experimental pages

Never accidentally noindex production pages.

---

# Charset

Always

UTF-8

---

# Viewport

Always include

width=device-width, initial-scale=1

---

# Language

Every page must define

lang

using ISO language codes.

Example

en

---

# Theme Color

Use the primary LowKeyDevs brand color.

Maintain consistency across the site.

---

# Author

Use

LowKeyDevs

unless real author pages are introduced.

Do not invent authors.

---

# Generator

Identify Astro when appropriate.

Avoid exposing unnecessary build information.

---

# Favicon

Provide

SVG

ICO

Apple Touch Icon

Android Icons

Pinned Tab Icon

Mask Icon

---

# Manifest

Every page should reference the site manifest.

Required for

PWA

installability

mobile experience

---

# Open Graph

Every page requires

og:title

og:description

og:type

og:image

og:url

og:site_name

og:locale

Defaults

site_name

LowKeyDevs

locale

en_US

Type

Homepage

website

Tool

website

Blog

article

Documentation

article

---

# Open Graph Image

Required

1200 × 630

Preferred

WebP

PNG acceptable.

Image should contain

Tool name

LowKeyDevs branding

Readable typography

Simple background

Avoid excessive text.

---

# Twitter Metadata

Required

twitter:card

twitter:title

twitter:description

twitter:image

twitter:site

Card Type

summary_large_image

---

# Apple Metadata

Support

Apple Touch Icon

Mobile Web App

Status Bar Style

Theme Color

---

# Mobile Metadata

Support

Android

iOS

Desktop browsers

PWA installation

---

# Homepage Metadata

Homepage should emphasize

Online Tools

Free Browser Tools

Developer Utilities

Productivity

Do not optimize the homepage around a single tool.

---

# Tool Page Metadata

Metadata should emphasize

Primary keyword

Primary function

Speed

Privacy

Browser based

Free

No installation

---

# Category Metadata

Should describe

Category purpose

Types of tools

Who the tools help

Avoid listing every tool name.

---

# Blog Metadata

Should summarize

Topic

Purpose

Target audience

Never duplicate article introductions.

---

# Image Metadata

Every image should include

Meaningful filename

Alt text

Width

Height

Loading strategy

Use descriptive filenames.

Good

json-formatter-preview.webp

Bad

image1.webp

---

# Alternate Languages

When multilingual support exists

Provide hreflang metadata.

Never generate hreflang for languages that do not exist.

---

# Pagination

If pagination exists

Generate proper canonical URLs.

Avoid duplicate metadata across paginated pages.

---

# Social Sharing

Metadata should produce attractive previews on

Discord

Slack

WhatsApp

Telegram

Facebook

LinkedIn

X

---

# AI Generation Rules

Metadata must always be generated from page data.

Never manually duplicate metadata.

Never copy metadata from another page.

Never fabricate information.

Never create generic descriptions.

Every page deserves unique metadata.

---

# Validation

Metadata should pass

Google Rich Results Test

Facebook Sharing Debugger

X Card Validator

Lighthouse SEO Audit

---

# Absolute Rules

Never duplicate titles.

Never duplicate descriptions.

Never leave metadata empty.

Never exceed reasonable length.

Never use placeholder text.

Never use Lorem Ipsum.

Never use "Untitled Page".

Never expose internal development URLs.

---

# Metadata Generation Priority

Metadata should be generated in this order

1. Tool-specific metadata
2. Category defaults
3. Site defaults

Page-specific values always override global defaults.

---

# Final Principle

Metadata should accurately represent the page.

A user should understand exactly what the page offers before clicking.

If metadata exaggerates or misrepresents the page, it should be rejected.