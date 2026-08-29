---
title: "Language learning journey"
description: "A short one or two sentence summary that appears in the articles list."
date: "2026-08-29"
author: "Tanya Nam"
category: "learning"
readTime: ""
featured: false
---

Write your opening paragraph here. This is regular body text — just write naturally and separate paragraphs with a blank line.

## Your First Section Heading

More paragraphs go here. Use `##` for section headings throughout the article.

### A Sub-heading (optional)

Use `###` for smaller sub-sections if needed.

## Adding Images

A single full-width image:

![Description of the image](/images/your-image.jpg)

Two images side by side (stacks on mobile):

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 not-prose">
  <img src="/images/your-image-1.jpg" alt="Description 1" class="rounded-lg shadow-sm w-full h-72 object-cover" />
  <img src="/images/your-image-2.jpg" alt="Description 2" class="rounded-lg shadow-sm w-full h-72 object-cover" />
</div>

Three images in a row (stacks on mobile):

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-8 not-prose">
  <img src="/images/your-image-1.jpg" alt="Description 1" class="rounded-lg shadow-sm w-full h-64 object-cover" />
  <img src="/images/your-image-2.jpg" alt="Description 2" class="rounded-lg shadow-sm w-full h-64 object-cover" />
  <img src="/images/your-image-3.jpg" alt="Description 3" class="rounded-lg shadow-sm w-full h-64 object-cover" />
</div>

## Formatting Cheatsheet

- **Bold text** with `**double asterisks**`
- _Italic text_ with `*single asterisks*`
- [A link](https://example.com)
- Bullet lists like this one
- > A blockquote for pull quotes

---

**To publish this article:**

1. Duplicate this file and rename it, e.g. `my-new-article.md` (remove the `_` prefix — files starting with `_` are drafts and hidden from the site)
2. Replace the frontmatter values (title, description, date) and the body content
3. Add your images to `public/images/` and update the image paths
