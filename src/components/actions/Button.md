Cohere's action set — use `primary` for the single highest-priority CTA, `secondary` (underlined text) for the companion action, `pill-outline` for filters and lightweight tags.

```jsx
<Button>Request a demo</Button>
<Button variant="secondary" icon="arrow-right">Explore products</Button>
<Button variant="pill-outline">Agents</Button>
<Button onDark>Contact sales</Button>
```

- primary: #17171c, 14px/500, 12px 24px, radius 32.
- secondary: no fill, 16px, underlined, 8px 0.
- pill-outline: 1px border, radius 30, 6px 12px.
- `onDark` swaps to white for green/navy/black bands.
