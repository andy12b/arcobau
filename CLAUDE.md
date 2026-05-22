# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **Important:** This project uses Next.js 16.2.6 with React 19 and Tailwind CSS v4 — all have breaking changes from earlier versions. Read `node_modules/next/dist/docs/` before writing Next.js-specific code and heed deprecation notices.

---

## Commands

```bash
npm run dev       # local dev server at localhost:3000
npm run build     # static export to out/
npm run lint      # eslint
```

### Deploy to GitHub Pages

After every change, run both steps:

```bash
npm run build
npx gh-pages -d out
```

This pushes the `out/` folder to the `gh-pages` branch. The live site is at:
**`https://andy12b.github.io/arcobau/`**

The `out/` folder is in `.gitignore` — source changes go to `main`, built output goes to `gh-pages` via the command above.

---

## Architecture

### Static Export for GitHub Pages

`next.config.ts` exports static HTML with:
- `output: "export"` — no server, pure static
- `basePath: "/arcobau"` and `assetPrefix: "/arcobau"` in production (required for GitHub Pages sub-path)
- Custom image loader at `lib/image-loader.ts` that prepends `/arcobau` to all image paths in production

**Critical:** Never use `max-w-xl` or `max-w-2xl` Tailwind classes — Tailwind v4's `@theme` defines `--spacing-xl: 112px` which overrides those utilities to wrong values. Use `style={{ maxWidth: "640px" }}` inline instead.

### Page Structure Pattern

Each route has two files:
- `app/[route]/page.tsx` — server component, exports `metadata`, renders the `*Page` client component
- `app/[route]/[Route]Page.tsx` — `"use client"` component with all UI logic

All page components call `useLanguage()` for translated text. Never put translation strings directly in JSX.

### Multi-language System (`lib/`)

- `lib/translations.ts` — all UI strings for EN, FR, DE, RO, IT
- `lib/LanguageContext.tsx` — React context, persists choice in `localStorage` under key `arcobau_lang`, auto-detects browser language on first visit
- Access via `const { t } = useLanguage()` in any client component

To add/change text: edit only `lib/translations.ts` — all 5 language keys must be kept in sync.

### Animations (`components/AnimatedSection.tsx`)

Wraps content in a `<div>` with GSAP + ScrollTrigger scroll-in animations. Props:
- `animation`: `"fade-up"` | `"fade-in"` | `"slide-left"` | `"slide-right"` | `"scale-in"`
- `delay`: stagger delay in seconds
- `className` / `id`: passed to wrapper div

**Important:** `AnimatedSection` does NOT accept a `style` prop. To constrain width/centering on the content inside, wrap children in a plain `<div style={...}>` instead.

Elements already visible in the viewport on page load are skipped (no `opacity: 0` flash). `ScrollTrigger.refresh()` fires on `window load` to handle layout shifts from image loading.

### Tailwind v4 Custom Theme (`app/globals.css`)

Design tokens defined via `@theme {}` (v4 syntax, not `tailwind.config.js`):
- Colors: `charcoal` (#2C3539), `gold-ochre` (#C5A059), `pure-white`, `off-white`, `surface-*`, `on-surface-*`
- Custom utilities defined in `@layer utilities`: `max-w-content` (1200px), `px-margin-mobile/desktop`, `text-display-xl`, `text-headline-lg`, `text-body-base`, `text-label-caps`

### Images

All images are in `public/images/` organized by category (`case/`, `apartamente/`, `finisaje/`, `podele/`). Use `next/image` with the custom loader — paths are written as `/images/...` (loader handles the `/arcobau` prefix automatically).

Use `loading="eager"` on images inside animated sections to prevent lazy-loading from interfering with GSAP opacity animations.
