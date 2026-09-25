import React from 'react';
export function ResearchTable({ rows = [], onRowClick }) {
  return (
    <div style={{ borderTop: '1px solid var(--border-rule)' }}>
      {rows.map((r, i) => (
        <a key={i} href={r.href || '#'} onClick={(e) => { if (onRowClick) { e.preventDefault(); onRowClick(r); } }} style={{ display: 'grid', gridTemplateColumns: 'minmax(0,2fr) minmax(0,1fr) 140px', gap: 24, alignItems: 'center', padding: '28px 0', borderBottom: '1px solid var(--border-rule)', color: 'var(--cohere-ink)', textDecoration: 'none' }}>
          <span style={{ fontSize: 18, lineHeight: 1.4, textWrap: 'pretty' }}>{r.title}</span>
          <span style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>{(r.topics || []).map((t) => <span key={t} style={{ fontSize: 12, lineHeight: 1.4, padding: '4px 10px', borderRadius: 30, border: '1px solid var(--cohere-ink)' }}>{t}</span>)}</span>
          <span style={{ fontSize: 14, color: 'var(--text-meta)', textAlign: 'right' }}>{r.date}</span>
        </a>
      ))}
    </div>
  );
}
