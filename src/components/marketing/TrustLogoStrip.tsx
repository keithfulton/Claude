import type { ReactElement, ReactNode } from 'react';

/** Quiet centered customer-proof strip: caption above a widely spaced row of monochrome logos. No cards or borders. */
export interface TrustLogoStripProps {
  caption?: string;
  /** logo nodes (monochrome <img>) or plain names as stand-ins */
  logos?: ReactNode[];
  onDark?: boolean;
}

export function TrustLogoStrip({ caption, logos = [], onDark = false }: TrustLogoStripProps): ReactElement {
  return (
    <section style={{ padding: '80px 40px', textAlign: 'center', color: onDark ? '#fff' : 'var(--cohere-ink)' }}>
      {caption && <p style={{ margin: '0 0 40px', fontSize: 14, lineHeight: 1.4 }}>{caption}</p>}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '32px 64px' }}>
        {logos.map((l, i) => typeof l === 'string'
          ? <span key={i} style={{ fontSize: 22, letterSpacing: -0.2, color: onDark ? '#fff' : '#000', opacity: 0.9 }}>{l}</span>
          : <span key={i} style={{ display: 'inline-flex' }}>{l}</span>)}
      </div>
    </section>
  );
}
