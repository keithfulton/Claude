import { useState, type ReactElement, type ReactNode } from 'react';
import { Icon } from '../core/Icon';

export interface FooterColumn { title: string; links: string[] }

/**
 * Dark near-black footer with coral label, newsletter field + arrow submit, and muted link columns.
 * @startingPoint section="Footer" subtitle="Dark newsletter footer" viewport="1200x460"
 */
export interface FooterNewsletterProps {
  /** coral eyebrow, default "AI moves fast" */
  label?: string;
  headline?: string;
  legal?: ReactNode;
  columns?: FooterColumn[];
  onSubscribe?: (email: string) => void;
}

export function FooterNewsletter({ label = 'AI moves fast', headline = 'Stay ahead with our newsletter', legal, columns = [], onSubscribe }: FooterNewsletterProps): ReactElement {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  return (
    <footer style={{ background: 'var(--cohere-primary)', color: '#fff', padding: '80px 40px 40px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,2fr)', gap: 64 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ color: 'var(--cohere-coral)', fontSize: 14 }}>{label}</div>
          <div style={{ fontSize: 32, lineHeight: 1.2, letterSpacing: -0.32, textWrap: 'balance' }}>{headline}</div>
          <form onSubmit={(e) => { e.preventDefault(); if (email) { setDone(true); onSubscribe?.(email); } }} style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.32)', marginTop: 8 }}>
            <input value={done ? '' : email} onChange={(e) => setEmail(e.target.value)} placeholder={done ? 'Thanks — you are subscribed.' : 'Email address'} type="email" aria-label="Email address" style={{ flex: 1, background: 'transparent', border: 0, outline: 'none', color: '#fff', fontFamily: 'var(--font-sans)', fontSize: 16, padding: '12px 0' }} />
            <button type="submit" aria-label="Subscribe" style={{ background: 'none', border: 0, color: '#fff', cursor: 'pointer', padding: 8 }}><Icon name="arrow-right" size={18} /></button>
          </form>
          {legal && <p style={{ margin: 0, fontSize: 12, lineHeight: 1.4, color: 'var(--cohere-muted)' }}>{legal}</p>}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(' + Math.max(columns.length, 1) + ',minmax(0,1fr))', gap: 24 }}>
          {columns.map((c) => (
            <div key={c.title} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ fontSize: 14, color: '#fff', marginBottom: 4 }}>{c.title}</div>
              {c.links.map((l) => <a key={l} href="#" style={{ fontSize: 12, lineHeight: 1.4, color: 'var(--cohere-muted)', textDecoration: 'none' }}>{l}</a>)}
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 80, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', fontSize: 12, color: 'var(--cohere-muted)' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: '#fff', letterSpacing: -0.5 }}>cohere</span>
        <span>© 2026 Cohere Inc.</span>
      </div>
    </footer>
  );
}
