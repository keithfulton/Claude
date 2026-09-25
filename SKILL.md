---
name: cohere-design
description: Use this skill to generate well-branded interfaces and assets for Cohere, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read DESIGN.md in this skill first (brand context, content and visual foundations, iconography, fonts), then explore the other files: tokens in `src/tokens/`, React components in `src/components/` (each has a `.md` usage note), and full screens in `demo/screens/`.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets and token values out and create static HTML files for the user to view. If working on production code, install this package (`@cohere-design/react`), import `@cohere-design/react/styles.css` once, and compose the exported components; follow the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
