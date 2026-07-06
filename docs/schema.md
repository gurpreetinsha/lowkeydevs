# Structured Data Standards
Version: 1.0
Project: LowKeyDevs

---

# Purpose

This document defines the structured data (JSON-LD) standards for every page on LowKeyDevs.

Structured data exists to help search engines understand page content, improve indexing, and qualify pages for rich search features.

All structured data must follow Schema.org specifications.

JSON-LD is the only accepted format.

Never use Microdata or RDFa.

---

# General Rules

Every public page MUST include structured data.

Only include schemas that accurately describe the page.

Never create fake ratings.

Never create fake reviews.

Never fabricate download counts.

Never invent prices.

Never generate placeholder values.

Every schema must use

https://schema.org

---

# Global Website Schema

Include on every page.

Required

Website

Purpose

Defines the overall website.

Properties

- @context
- @type
- name
- url
- description
- inLanguage
- publisher
- potentialAction (SearchAction)

---

# Organization Schema

Include on every page.

Purpose

Defines LowKeyDevs as the publisher.

Properties

- name
- url
- logo
- sameAs
- description

Do not include fake social profiles.

---

# WebPage Schema

Every page.

Required

- name
- description
- url
- inLanguage
- isPartOf
- primaryImageOfPage

---

# BreadcrumbList

Every page except homepage.

Purpose

Improve navigation understanding.

Hierarchy example

Home

↓

Tools

↓

JSON Formatter

Never skip levels.

---

# CollectionPage

Use for

Categories

Examples

Image Tools

Developer Tools

Text Tools

Converters

Calculators

Contains

description

mainEntity

hasPart

---

# SoftwareApplication

Required on every interactive tool.

Examples

JSON Formatter

UUID Generator

QR Code Generator

Password Generator

Age Calculator

Image Compressor

Base64 Encoder

Properties

- name

- applicationCategory

- operatingSystem

- browserRequirements

- offers

- description

- featureList

- url

Operating system should usually be

Web Browser

Price

Free

unless paid.

---

# FAQPage

Only include if the page actually contains FAQ.

Every question must appear visibly on the page.

Do not generate invisible FAQs.

Recommended

4–8 questions.

---

# HowTo

Only when the page teaches a process.

Examples

How to use JSON Formatter

How to convert PNG to JPG

Must include

steps

tools required

estimated time (if applicable)

Do not use for simple calculators.

---

# Article

Only for blog posts.

Required

headline

author

datePublished

dateModified

image

description

publisher

mainEntityOfPage

---

# TechArticle

Use when explaining technical concepts.

Examples

What is Base64

How SHA-256 Works

JSON vs XML

---

# SearchAction

Include once in Website schema.

Represents internal search.

Never fake external search engines.

---

# Person

Only if a real author exists.

Never invent authors.

---

# ImageObject

Use for important featured images.

Must include

url

width

height

caption

---

# VideoObject

Only when embedded videos exist.

Do not create fake videos.

---

# WebSite Search

Homepage should expose SearchAction.

Only if search actually exists.

---

# Tool Requirements

Every tool page should include

Website

Organization

WebPage

BreadcrumbList

SoftwareApplication

FAQPage (optional)

HowTo (optional)

---

# Homepage Requirements

Homepage should include

Website

Organization

WebPage

SearchAction

---

# Category Requirements

CollectionPage

BreadcrumbList

WebPage

Website

Organization

---

# Blog Requirements

Article

BreadcrumbList

WebPage

Organization

Website

---

# Required Properties

Every schema should include

@context

@type

name

description

url

---

# URLs

Always absolute URLs.

Never relative paths.

Correct

https://lowkeydevs.com/tools/json-formatter

Incorrect

/tools/json-formatter

---

# Dates

Use ISO-8601.

Example

2025-06-12

---

# Images

Absolute URL.

High resolution.

Minimum

1200 × 630

Preferred

WebP

---

# Validation

Every generated schema must pass

Google Rich Results Test

and

Schema.org Validator

before deployment.

---

# AI Rules

AI must never

Generate fake reviews.

Generate AggregateRating without real ratings.

Generate Review schema without visible reviews.

Generate Product schema for free browser tools.

Generate Event schema.

Generate LocalBusiness schema.

Generate JobPosting schema.

Generate fake download counts.

Generate placeholder data.

---

# Future Compatibility

When new page types are added,

define a dedicated schema profile

instead of modifying existing ones.

Maintain backward compatibility whenever possible.

---

# Final Principle

Structured data exists to describe reality.

If information is not visible on the page or cannot be verified, it must not appear in the schema.