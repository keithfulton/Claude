import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function CapabilityCard({ icon, title, children, linkLabel, href = '#', onDark = false, boxed = false }) {
  const fg = onDark ? '#fff' : 'var(--cohere-ink)';
  return (
    <div style={{ padding: 24, borderRadius: 4, color: fg, borderTop: boxed ? 0 : '1px solid ' + (onDark ? 'rgba(255,255,255,0.16)' : 'var(--border-rule)'), background: boxed ? (onDark ? 'rgba(255,255,255,0.06)' : 'var(--surface-card)') : 'transparent', boxShadow: boxed ? 'inset 0 0 0 1px ' + (onDark ? 'rgba(255,255,255,0.16)' : 'var(--border-card)') : 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
      {icon && <Icon name={icon} size={32} strokeWidth={1.25} />}
      <h3 style={{ margin: icon ? '12px 0 0' : 0, fontSize: 24, lineHeight: 1.3, fontWeight: 400 }}>{title}</h3>
      {children && <p style={{ margin: 0, fontSize: 16, lineHeight: 1.5, color: onDark ? 'rgba(255,255,255,0.72)' : 'var(--text-secondary)' }}>{children}</p>}
      {linkLabel && <a href={href} style={{ color: fg, fontSize: 16, textUnderlineOffset: 4 }}>{linkLabel}</a>}
    </div>
  );
}
