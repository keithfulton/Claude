Thin-line Lucide icon wrapper — use for arrows, checks, close and capability glyphs; substitute for Cohere's custom icon font.

```jsx
<Icon name="arrow-right" size={16} />
```

Glyphs come from the `lucide-react` dependency, so no script tag is needed. Built in: arrow-right, arrow-up, arrow-up-right, check, cpu, database, file-text, globe, layers, message-square, search, shield-check, x. Add others with `registerIcons({ 'bar-chart': BarChart })` (import the glyph from `lucide-react`). Unknown names render an empty box of the same size. Keep strokeWidth at 1.5 (1.25 at the 32px capability size).
