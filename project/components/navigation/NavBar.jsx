import React from 'react';
import { Button } from '../actions/Button.jsx';
export function NavBar({ links = ['Products', 'Solutions', 'Research', 'Resources', 'Company'], active, onNavigate, onDark = false, ctaLabel = 'Request a demo', onCta }) {
  const fg = onDark ? '#fff' : 'var(--cohere-ink)';
  return (
    <nav style={{ height: 64, display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', padding: '0 40px', color: fg, background: onDark ? 'transparent' : 'var(--surface-page)' }}>
      <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('home'); }} style={{ fontFamily: 'var(--font-display)', fontSize: 26, letterSpacing: -0.5, color: onDark ? '#fff' : '#000', textDecoration: 'none', justifySelf: 'start' }}>cohere</a>
      <div style={{ display: 'flex', gap: 28 }}>
        {links.map((l) => (
          <a key={l} href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(l); }} style={{ fontSize: 14, color: fg, textDecoration: active === l ? 'underline' : 'none', textUnderlineOffset: 6 }}>{l}</a>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 20, alignItems: 'center', justifySelf: 'end' }}>
        <a href="#" style={{ fontSize: 14, color: fg, textDecoration: 'none' }}>Sign in</a>
        <Button onDark={onDark} onClick={onCta}>{ctaLabel}</Button>
      </div>
    </nav>
  );
}
