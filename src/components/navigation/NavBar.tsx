import type { ReactElement } from 'react';
import { Button } from '../actions/Button';

/**
 * Global three-zone nav: wordmark left, menu centered, sign-in + primary CTA right.
 * @startingPoint section="Navigation" subtitle="Announcement bar + global nav" viewport="1200x200"
 */
export interface NavBarProps {
  links?: string[];
  /** currently active link label (underlined) */
  active?: string;
  onNavigate?: (link: string) => void;
  /** white text over dark bands */
  onDark?: boolean;
  ctaLabel?: string;
  onCta?: () => void;
}

const defaultLinks = ['Products', 'Solutions', 'Research', 'Resources', 'Company'];

export function NavBar({ links = defaultLinks, active, onNavigate, onDark = false, ctaLabel = 'Request a demo', onCta }: NavBarProps): ReactElement {
  const fg = onDark ? '#fff' : 'var(--cohere-ink)';
  return (
    <nav style={{ height: 64, display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', padding: '0 40px', color: fg, background: onDark ? 'transparent' : 'var(--surface-page)' }}>
      <a href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('home'); }} style={{ fontFamily: 'var(--font-display)', fontSize: 26, letterSpacing: -0.5, color: onDark ? '#fff' : '#000', textDecoration: 'none', justifySelf: 'start' }}>cohere</a>
      <div style={{ display: 'flex', gap: 28 }}>
        {links.map((l) => (
          <a key={l} href="#" aria-current={active === l ? 'page' : undefined} onClick={(e) => { e.preventDefault(); onNavigate?.(l); }} style={{ fontSize: 14, color: fg, textDecoration: active === l ? 'underline' : 'none', textUnderlineOffset: 6 }}>{l}</a>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 20, alignItems: 'center', justifySelf: 'end' }}>
        <a href="#" style={{ fontSize: 14, color: fg, textDecoration: 'none' }}>Sign in</a>
        <Button onDark={onDark} onClick={onCta}>{ctaLabel}</Button>
      </div>
    </nav>
  );
}
