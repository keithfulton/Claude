import stylesUrl from '../src/styles.css?url';

// The design's foundation specimen cards, rendered as-is. Each file's first line is
// <!-- @dsCard group="…" viewport="WxH" name="…" subtitle="…" -->.
const files = import.meta.glob('../project/guidelines/*.html', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

const attr = (tag: string, key: string) => tag.match(new RegExp(key + '="([^"]*)"'))?.[1] ?? '';
const cards = Object.entries(files).map(([path, html]) => {
  const tag = html.split('\n', 1)[0];
  const [w, h] = attr(tag, 'viewport').split('x').map(Number);
  return { path, html: html.replace('href="../styles.css"', `href="${new URL(stylesUrl, location.href).href}"`), group: attr(tag, 'group'), name: attr(tag, 'name'), subtitle: attr(tag, 'subtitle'), w: w || 700, h: h || 200 };
});
const groups = ['Colors', 'Type', 'Spacing', 'Brand'];

export function Foundations() {
  return (
    <main style={{ maxWidth: 1200, margin: '0 auto', padding: 'var(--space-64) var(--space-40)' }}>
      <h1 style={{ margin: '0 0 var(--space-40)', fontFamily: 'var(--font-display)', fontSize: 60, lineHeight: 1, letterSpacing: -1.2, fontWeight: 400 }}>Foundations</h1>
      {groups.map((g) => (
        <section key={g} style={{ padding: 'var(--space-40) 0', borderTop: '1px solid var(--border-rule)' }}>
          <h2 style={{ margin: '0 0 var(--space-xl)', fontSize: 32, lineHeight: 1.2, letterSpacing: -0.32, fontWeight: 400 }}>{g}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32 }}>
            {cards.filter((c) => c.group === g).map((c) => (
              <figure key={c.path} style={{ margin: 0, width: c.w }}>
                <iframe title={c.name} srcDoc={c.html} width={c.w} height={c.h} style={{ border: '1px solid var(--border-card)', borderRadius: 8, display: 'block' }} />
                <figcaption style={{ marginTop: 10, fontSize: 14, lineHeight: 1.4 }}>{c.name} <span style={{ color: 'var(--text-meta)' }}>· {c.subtitle}</span></figcaption>
              </figure>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
