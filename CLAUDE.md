# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start dev server at localhost:4321
- `npm run build` - Build production site to `./dist/`
- `npm run preview` - Preview production build locally

## Architecture

This is an **Astro 5** static site for Japanezy Arts, a kawaii/Japanese-inspired art brand with a YouTube channel and product shop.

### Product data flow

Products are defined in `src/data/products.ts` as a typed array with `Product` and `ProductVariant` interfaces. This single data source drives:
- `src/pages/index.astro` - Homepage product cards grouped by category (horizontal scroll)
- `src/pages/product/[slug].astro` - Dynamic product detail pages generated via `getStaticPaths()`

Products support optional `variants` (e.g. different sizes/flavors) with per-variant pricing, images, and sale prices. Variant data is passed to client JS via `data-*` attributes on buttons.

### Cart system

Client-side cart using vanilla JS and `localStorage`:
- **`japanezy-cart`** - Array of `{name, price, image, appliedRewards?}` objects
- **`japanezy-sold-out`** - Array of product name strings; checked on homepage, product pages, and checkout
- Cart page (`src/pages/cart.astro`) renders items via DOM manipulation
- Checkout page (`src/pages/checkout.astro`) calculates totals with 8.25% tax, supports discount rewards, and marks purchased items as sold out

Items are added from both the homepage (base product only) and product detail pages (with variant label appended to name).

### Key files

- `src/layouts/Layout.astro` - Single shared layout with global styles, sticky nav, floating decorations (hearts/stars), and footer
- `src/data/products.ts` - Product catalog with types, categories array, and product data
- `src/pages/product/[slug].astro` - Product detail with variant switching, sale badges, and sold-out detection

### Design system

- Color palette: pink (`#fce4ec`, `#f8bbd0`), purple (`#d5b3f5`, `#9b59b6`), blue (`#b3d4fc`)
- Fonts: `Noto Serif JP` for headings, `Inter` for body text (loaded from Google Fonts)
- All styling is scoped `<style>` blocks per component, plus `<style is:global>` in the layout
- No CSS framework or component library
