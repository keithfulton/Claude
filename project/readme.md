# Cohere Design System

Cohere is an enterprise AI company: foundation models (Command, Embed, Rerank), the North AI workspace, and agents deployed privately inside regulated businesses. Its 2026 web system reads as a sober enterprise AI command center with editorial restraint — stark white canvases, deep green-black product bands, soft mineral surfaces, rounded media cards, and a type split between monospaced-feeling display headlines and precise grotesk UI text.

## Sources
- `uploads/DESIGN-cohere.md` — "Cohere-design-analysis" (version alpha), a public design analysis of the 2026 site: tokens (colors, type, radii, spacing), component specs, do/don'ts, responsive notes. **This is the only source.** No codebase, Figma, screenshots, logos, fonts or imagery were provided.

Surfaces represented: marketing home, product pages (North / Command, deep green; financial services & security, navy), blog, research publications, contact/demo form, footer.

## Index
- `styles.css` — entry point (imports only) → `tokens/fonts.css`, `colors.css`, `typography.css`, `spacing.css` (spacing, radii, elevation, motion, layout), `base.css`
- `guidelines/` — 16 foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/` — React primitives (see below), one card per directory
- `ui_kits/website/` — click-through marketing site (Home, Product, Blog, Research, Contact)
- `thumbnail.html` — project tile
- `SKILL.md` — Agent Skill wrapper

## Components
Built from the DESIGN.md component inventory:
- `actions/` **Button** — `primary` (button-primary), `secondary` (button-secondary), `pill-outline` (button-pill-outline); `onDark`
- `navigation/` **AnnouncementBar** (announcement-bar), **NavBar** (global three-zone nav from Layout)
- `marketing/` **HeroPhotoCard** (hero-photo-card), **TrustLogoStrip** (trust-logo-strip), **CapabilityCard** (capability-card), **DarkFeatureBand** (dark-feature-band), **ProductCard** (product-card)
- `product/` **AgentConsoleCard** (agent-console-card), **StatusChip** (its status chips / integration badges)
- `editorial/` **BlogFilterChip** (blog-filter-chip), **ResearchTable** (research-table)
- `forms/` **TextField** (contact-form inputs), **ContactFormCard** (contact-form-card)
- `footer/` **FooterNewsletter** (footer-newsletter)

### Intentional additions
- **Icon** (`core/`) — wrapper that renders Lucide glyphs, standing in for Cohere's proprietary icon font.
- **StatusChip**, **TextField**, **NavBar** — split out as standalone parts of documented components so they can be reused.

## CONTENT FUNDAMENTALS
- **Voice:** calm, declarative, enterprise-credible. Claims read like infrastructure promises, not hype: "private", "secure", "deployed where your data lives". Avoid exclamation marks and superlatives.
- **Person:** "we" for Cohere, "you/your" for the customer ("your data", "your business"). Rarely "I".
- **Casing:** sentence case for headlines and buttons ("Request a demo", "Explore products", "Try the Playground", "Learn more"). UPPERCASE only in mono labels (category and system markers: `RESEARCH`, `NORTH`).
- **Length:** one oversized headline per page, then short 1–2 sentence leads. CTAs are 2–3 words, verb first.
- **Editorial:** blog taxonomy words are short nouns (Product, Research, Company). The footer says "AI moves fast" in coral above the newsletter headline.
- **Emoji:** none. Unicode arrows are not used as icons; the arrow marker is an icon glyph.
- **Data:** don't invent dashboard metrics. Placeholder product frames are preferred to fake numbers.

## VISUAL FOUNDATIONS
- **Color:** white canvas dominates. Near-black `#17171c` for CTAs and footer, pure black for the announcement bar. Full-width **deep green `#003c33`** (product) and **dark navy `#071829`** (financial / security) bands. Warm **soft stone `#eeece7`** for product cards; pale green / pale blue washes behind dark panels and blog CTAs. Accents are narrow: **coral `#ff7759`** for editorial taxonomy, **action blue `#1863dc`** for editorial links/pagination. Never use coral or blue as broad surfaces.
- **Type:** CohereText display (96/72px, line-height 1, tracking −2%) for heroes; Unica77 for everything else (60 → 12px), weight 400 throughout, 500 only on button labels. CohereMono uppercase labels, +0.28px. No heavy bold weights; hierarchy is size and space.
- **Spacing:** 8px base with one-offs (2, 6, 10, 20, 22, 28, 36…). Sections breathe at 80px+, with very large empty intervals between claim, proof and CTA — whitespace as a trust signal. Dense only where information demands it (research rows, blog grids, forms).
- **Backgrounds:** flat fields. No repeating patterns or textures. Color and richness come from **media**: photography, abstract 3D renders, particle fields, red-orange video posters, green-to-black product environments.
- **Gradients:** never as UI fills. Only inside media panels and CTA image bands.
- **Imagery vibe:** enterprise photography plus tactile abstract 3D; sits in rounded cards with visible corners, rarely full-bleed behind text (only CTA bands).
- **Corner radii:** 4 (search, thumbnails, capability card), 8 (cards, chips, dialogs, console), 16 (medium cards), **22 (signature media cards, dark bands, form card)**, 30 (filter pills), 32 (CTA pill), 9999 (status dots). Major media never below 8.
- **Cards:** flat, no shadow. Stone fill (product), white with 1px `#f2f2f2` border, or unboxed with a top hairline (capability). On dark bands: translucent white (6%) with 16% white borders.
- **Borders/rules:** 1px `#d9d9dd` hairlines for lists and dividers; `#e5e7eb` secondary.
- **Shadows/elevation:** essentially none. Depth = surface alternation, media contrast, radii, thin borders.
- **Transparency & blur:** translucent white overlays on dark surfaces only; no glassmorphism/backdrop blur documented.
- **Layout:** 3-zone nav (logo / centered menu / sign-in + CTA); centered hero text over 2:1 media composition; 3-column card grids; research as full-width lists; forms as 2-column rows in a rounded white card. Nav is not documented as sticky.
- **Animation:** not documented. Keep to quick (150–240ms) color/opacity transitions with a standard ease; no bounces.
- **Hover:** (assumed, not documented) primary pill darkens to pure black; text links thicken their underline; outline pills get a 4% tint. **Press:** no shrink. **Focus:** 2px `#4c6ee6` ring; inputs switch border to violet `#9b60aa`; errors `#b30000`.

## ICONOGRAPHY
- Cohere uses **custom icon fonts** and **thin-line geometric illustrations** (research/capability icons). Neither was provided.
- **Substitute:** [Lucide](https://lucide.dev) via CDN (`https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js`), stroke 1.5 (1.25 at 32px capability size), `currentColor`. Rendered through the `Icon` component. ⚠️ Flagged substitution.
- Common glyphs: arrow-right (secondary CTAs, newsletter submit), x (announcement close), check (product card bullets), search, shield-check / database / layers (capabilities).
- No emoji, no PNG icons, no unicode-as-icon.

## Brand assets
- **No logo was supplied.** Wherever a mark would go, the name "cohere" is set in plain display type. Replace with the official wordmark SVG in `assets/` when available.
- No photography or illustrations were supplied; `HeroPhotoCard` shows labelled placeholder slots.

## Fonts
CohereText, Unica77 Cohere Web and CohereMono are proprietary and not bundled. Tokens reference the real families first, then fall back to Google Fonts substitutes loaded in `tokens/fonts.css`: **Space Grotesk** (display), **Inter** (UI/body), **Space Mono** (labels). ⚠️ Flagged substitution — add real `.woff2` files + `@font-face` rules to replace.
