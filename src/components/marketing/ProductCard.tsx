import type { ReactElement, ReactNode } from 'react';
import { Button } from '../actions/Button';
import { Icon } from '../core/Icon';

/**
 * Warm stone product/model summary card: name, description, small pill button, divider, checkmark rows.
 * @startingPoint section="Marketing" subtitle="3-up stone product cards" viewport="700x420"
 */
export interface ProductCardProps {
  eyebrow?: string;
  name: ReactNode;
  description?: ReactNode;
  ctaLabel?: string;
  onCta?: () => void;
  /** checkmark bullet rows */
  features?: string[];
}

export function ProductCard({ eyebrow, name, description, ctaLabel = 'Learn more', onCta, features = [] }: ProductCardProps): ReactElement {
  return (
    <div style={{ background: 'var(--cohere-soft-stone)', color: 'var(--cohere-ink)', borderRadius: 8, padding: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
      {eyebrow && <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: 0.28, textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>{eyebrow}</div>}
      <h3 style={{ margin: 0, fontSize: 32, lineHeight: 1.2, letterSpacing: -0.32, fontWeight: 400 }}>{name}</h3>
      {description && <p style={{ margin: 0, fontSize: 16, lineHeight: 1.5, color: 'var(--text-secondary)' }}>{description}</p>}
      <div><Button variant="pill-outline" onClick={onCta}>{ctaLabel}</Button></div>
      {features.length > 0 && <div style={{ borderTop: '1px solid var(--border-rule)', paddingTop: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {features.map((f) => <div key={f} style={{ display: 'flex', gap: 10, fontSize: 14, lineHeight: 1.4 }}><Icon name="check" size={16} style={{ marginTop: 1 }} />{f}</div>)}
      </div>}
    </div>
  );
}
