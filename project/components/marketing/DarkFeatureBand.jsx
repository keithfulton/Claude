import React from 'react';
export function DarkFeatureBand({ tone = 'green', eyebrow, title, lead, children, style }) {
  return (
    <section style={{ background: tone === 'navy' ? 'var(--cohere-dark-navy)' : 'var(--cohere-deep-green)', color: '#fff', borderRadius: 22, padding: 80, display: 'flex', flexDirection: 'column', gap: 24, ...style }}>
      {eyebrow && <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, letterSpacing: 0.28, textTransform: 'uppercase', color: 'rgba(255,255,255,0.64)' }}>{eyebrow}</div>}
      {title && <h2 style={{ margin: 0, fontSize: 48, lineHeight: 1.2, letterSpacing: -0.48, fontWeight: 400, maxWidth: 820, textWrap: 'balance' }}>{title}</h2>}
      {lead && <p style={{ margin: 0, fontSize: 18, lineHeight: 1.4, color: 'rgba(255,255,255,0.72)', maxWidth: 640 }}>{lead}</p>}
      {children && <div style={{ marginTop: 32 }}>{children}</div>}
    </section>
  );
}
