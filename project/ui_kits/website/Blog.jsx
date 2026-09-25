function BlogScreen() {
  const { BlogFilterChip, HeroPhotoCard, Button } = window.CohereDesignSystem_1d137d;
  const cats = ['All', 'Product', 'Research', 'Company', 'Customers'];
  const [cat, setCat] = React.useState('All');
  const posts = [
    { c: 'Product', t: 'Article title placeholder for a product announcement', d: 'Sep 18, 2026', tone: 'blue' },
    { c: 'Research', t: 'Article title placeholder for a research write-up', d: 'Sep 10, 2026', tone: 'stone' },
    { c: 'Company', t: 'Article title placeholder for company news', d: 'Aug 30, 2026', tone: 'navy' },
    { c: 'Customers', t: 'Article title placeholder for a customer story', d: 'Aug 21, 2026', tone: 'stone' },
    { c: 'Product', t: 'Another product article title placeholder', d: 'Aug 12, 2026', tone: 'green' },
    { c: 'Research', t: 'Another research article title placeholder', d: 'Aug 02, 2026', tone: 'blue' },
  ].filter((p) => cat === 'All' || p.c === cat);
  return (
    <main style={{ padding: '96px 40px 80px' }}>
      <h1 style={{ margin: '0 0 40px', fontFamily: 'var(--font-display)', fontSize: 72, lineHeight: 1, letterSpacing: -1.44, fontWeight: 400 }}>Blog</h1>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 64 }}>{cats.map((c) => <BlogFilterChip key={c} active={cat === c} onClick={() => setCat(c)}>{c}</BlogFilterChip>)}</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: '48px 24px' }}>
        {posts.map((p, i) => (
          <a key={i} href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: 'none', color: 'var(--cohere-ink)', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <HeroPhotoCard tone={p.tone} label="Article image" height={240} radius={8} />
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}><span style={{ fontSize: 12, color: 'var(--cohere-coral)', border: '1px solid var(--cohere-coral-soft)', borderRadius: 8, padding: '2px 8px' }}>{p.c}</span><span style={{ fontSize: 12, color: 'var(--text-meta)' }}>{p.d}</span></div>
            <div style={{ fontSize: 24, lineHeight: 1.3 }}>{p.t}</div>
          </a>
        ))}
      </div>
      <section style={{ marginTop: 96, background: 'var(--cohere-pale-blue)', borderRadius: 22, padding: 56, display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 40, alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'flex-start' }}><h2 style={{ margin: 0, fontSize: 48, lineHeight: 1.2, letterSpacing: -0.48, fontWeight: 400 }}>Build with our models</h2><Button>Try the Playground</Button></div>
        <HeroPhotoCard tone="blue" label="3D abstract" height={280} style={{ background: 'rgba(255,255,255,0.5)' }} />
      </section>
    </main>
  );
}
window.BlogScreen = BlogScreen;
