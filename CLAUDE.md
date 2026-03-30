# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # dev server with live reload at http://localhost:3000
npm run build     # compile + minify SCSS → assets/css/style.min.css
npm run generate  # generate Mainul-Hassan-Resume.pdf via Puppeteer
```

## Architecture

Static single-page resume site. No JavaScript framework — pure HTML/SCSS.

**SCSS structure:**
- Entry point: `assets/scss/style.scss` — imports all partials
- Partials in `assets/scss/partials/`: one file per resume section (`_header`, `_summary`, `_experience`, `_skills`, `_project`, `_certificate`, `_education`)
- Compiled output: `assets/css/style.css` (dev) and `assets/css/style.min.css` (production)

**Resume sections** correspond directly to their SCSS partial names. When editing the visual styling of a section, find the matching partial.

**PDF/print:** `index.html` includes `@media print` and `@page` rules for A4 formatting. The compiled CSS (`style.css`, not `.min.css`) is what `index.html` links to for dev; `generate.js` renders the page via Puppeteer to produce the PDF.

**Code style:** Prettier — 2-space indent, 80-char print width (see `.prettierrc`).
