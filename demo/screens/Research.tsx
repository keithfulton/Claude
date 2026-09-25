import { useState } from 'react';
import { Button, ResearchTable, type ResearchRow } from '../../src';

const topics = ['All', 'Safety', 'Multilingual', 'Retrieval', 'Evaluation', 'Efficiency', 'Open science'];
const allRows: (ResearchRow & { topics: string[] })[] = [
  { title: 'Publication title placeholder on model safety', topics: ['Safety'], date: 'Sep 12, 2026' },
  { title: 'Publication title placeholder on multilingual evaluation', topics: ['Multilingual', 'Evaluation'], date: 'Aug 28, 2026' },
  { title: 'Publication title placeholder on retrieval quality', topics: ['Retrieval'], date: 'Aug 04, 2026' },
  { title: 'Publication title placeholder on efficient inference', topics: ['Efficiency'], date: 'Jul 19, 2026' },
  { title: 'Publication title placeholder from open science', topics: ['Open science', 'Multilingual'], date: 'Jun 30, 2026' },
];

export function ResearchScreen() {
  const [t, setT] = useState('All');
  const [q, setQ] = useState('');
  const rows = allRows.filter((r) => (t === 'All' || r.topics.includes(t)) && r.title.toLowerCase().includes(q.toLowerCase()));
  return (
    <main style={{ padding: '96px var(--space-40) var(--space-section)' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, letterSpacing: 0.28, textTransform: 'uppercase', color: 'var(--text-meta)', marginBottom: 16 }}>Research</div>
      <h1 style={{ margin: '0 0 var(--space-56)', fontFamily: 'var(--font-display)', fontSize: 72, lineHeight: 1, letterSpacing: -1.44, fontWeight: 400, maxWidth: 900 }}>Publications</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 24, alignItems: 'center', flexWrap: 'wrap', marginBottom: 32 }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>{topics.map((x) => <Button key={x} variant="pill-outline" onClick={() => setT(x)} style={t === x ? { background: 'var(--cohere-primary)', color: 'var(--text-on-dark)' } : undefined}>{x}</Button>)}</div>
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search publications" aria-label="Search publications" style={{ width: 280, fontFamily: 'var(--font-sans)', fontSize: 14, padding: 'var(--space-10) 14px', border: '1px solid var(--border-rule)', borderRadius: 4, outline: 'none' }} />
      </div>
      <ResearchTable rows={rows} />
      {rows.length === 0 && <p style={{ color: 'var(--text-meta)', padding: 'var(--space-28) 0' }}>No publications match.</p>}
    </main>
  );
}
