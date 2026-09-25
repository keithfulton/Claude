# Cohere Design System — React

Tokens, fonts and React components for Cohere's 2026 web system, built from the Claude Design export in `project/`. The design guide (voice, visual foundations, iconography, fonts) is in [DESIGN.md](DESIGN.md).

## Use it

```tsx
import '@cohere-design/react/styles.css'; // once, at the app root
import { Button, NavBar, DarkFeatureBand, CapabilityCard } from '@cohere-design/react';

<NavBar onCta={() => navigate('/contact')} />
<Button variant="secondary" icon="arrow-right">Explore products</Button>
```

`react` and `react-dom` (18 or newer) are peer dependencies. Icons come from `lucide-react`; the `Icon` component ships the glyphs the system uses, and `registerIcons({ 'bar-chart': BarChart })` adds more.

The CSS is custom properties on `:root`: base values (`--cohere-deep-green`, `--font-display`, `--space-xl`, `--radius-lg`) and semantic aliases (`--surface-card`, `--text-secondary`, `--border-rule`). Use them in your own styles too.

## Components

| Group | Components |
| --- | --- |
| actions | `Button` (primary, secondary, pill-outline; `onDark`) |
| core | `Icon`, `registerIcons` |
| navigation | `AnnouncementBar`, `NavBar` |
| marketing | `HeroPhotoCard`, `TrustLogoStrip`, `CapabilityCard`, `DarkFeatureBand`, `ProductCard` |
| product | `AgentConsoleCard`, `StatusChip` |
| editorial | `BlogFilterChip`, `ResearchTable` |
| forms | `TextField`, `ContactFormCard` |
| footer | `FooterNewsletter` |

Props are typed and documented in each `src/components/<group>/<Name>.tsx`; a short usage note sits next to it as `<Name>.md`.

## Develop

```sh
npm install
npm run dev         # demo: website kit at /, /components.html, /foundations.html, /thumbnail.html
npm run build       # library → dist/index.js, dist/styles.css, dist/types
npm run build:demo  # static demo → dist-demo/
npm test            # component behaviour + parity with the design export
npm run typecheck
npm run lint        # oxlint with the design-system adherence rules
```

### Adherence lint

`.oxlintrc.json` carries the rules from the export's `_adherence.oxlintrc.json`: import components from the package entry, use color and spacing tokens rather than raw hex/px strings, use the system's font families, and pass only the props and enum values each component declares. oxlint has no `no-restricted-syntax`, so those selectors run through a small JS plugin (`lint/adherence.js`, selectors in `lint/adherence-rules.json`). The rules are off for `src/`, where the tokens and components themselves are defined. Copy both files into a consuming app to lint it the same way.

## Placeholders

The export shipped no logo, photography, customer logos or font files:

- **Fonts:** CohereText, Unica77 Cohere Web and CohereMono are referenced first; Space Grotesk, Inter and Space Mono (Google Fonts) stand in. To use the real ones, add the `.woff2` files under `src/assets/fonts/` and replace the Google Fonts `@import` in `src/tokens/fonts.css` with `@font-face` rules.
- **Logo:** "cohere" is set in the display face wherever the wordmark goes (`NavBar`, `FooterNewsletter`, thumbnail).
- **Imagery:** `HeroPhotoCard` shows a labelled slot until you pass `src`.

## Source

`project/` is the unmodified Claude Design export (HTML/JSX prototypes, specimen cards, generated `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json`, and the only brand source, `uploads/DESIGN-cohere.md`). `chats/` holds the design conversation and `HANDOFF.md` the export's instructions.
