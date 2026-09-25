import React from 'react';
export function BlogFilterChip({ children, active = false, onClick }) {
  return (
    <button onClick={onClick} aria-pressed={active} style={{ fontFamily: 'var(--font-sans)', fontSize: 32, lineHeight: 1.2, letterSpacing: -0.32, fontWeight: 400, padding: '8px 14px', borderRadius: 8, cursor: 'pointer', border: '1px solid var(--cohere-coral)', background: active ? 'var(--cohere-coral)' : 'rgba(255,119,89,0.06)', color: active ? 'var(--cohere-ink)' : 'var(--cohere-coral)', transition: 'background var(--duration-fast) var(--ease-standard)' }}>{children}</button>
  );
}
