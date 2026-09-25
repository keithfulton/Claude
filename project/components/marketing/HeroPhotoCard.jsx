import React from 'react';
export function HeroPhotoCard({ src, alt = '', label = 'Photography', tone = 'stone', height = 480, radius = 22, children, style }) {
  const bg = { stone: 'var(--cohere-soft-stone)', blue: 'var(--cohere-pale-blue)', green: 'var(--cohere-deep-green)', navy: 'var(--cohere-dark-navy)' }[tone];
  const dark = tone === 'green' || tone === 'navy';
  return (
    <div style={{ position: 'relative', height, borderRadius: radius, overflow: 'hidden', background: bg, ...style }}>
      {src ? <img src={src} alt={alt} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        : <span style={{ position: 'absolute', left: 20, bottom: 18, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: 0.28, textTransform: 'uppercase', color: dark ? 'rgba(255,255,255,0.6)' : 'var(--text-tertiary)' }}>{label} slot</span>}
      {children && <div style={{ position: 'absolute', inset: 24, display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start' }}>{children}</div>}
    </div>
  );
}
