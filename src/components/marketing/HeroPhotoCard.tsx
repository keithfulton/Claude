import type { CSSProperties, ReactElement, ReactNode } from 'react';

/** Rounded media card (22px) holding photography / 3D imagery, optionally overlaid with an AgentConsoleCard. Renders a labelled placeholder surface when no src. */
export interface HeroPhotoCardProps {
  src?: string;
  alt?: string;
  /** placeholder label when src is empty */
  label?: string;
  /** placeholder surface color */
  tone?: 'stone' | 'blue' | 'green' | 'navy';
  height?: number | string;
  /** 22 for large cards, 8 for thumbnails */
  radius?: number;
  /** overlay content (e.g. AgentConsoleCard) */
  children?: ReactNode;
  style?: CSSProperties;
}

const tones = { stone: 'var(--cohere-soft-stone)', blue: 'var(--cohere-pale-blue)', green: 'var(--cohere-deep-green)', navy: 'var(--cohere-dark-navy)' };

export function HeroPhotoCard({ src, alt = '', label = 'Photography', tone = 'stone', height = 480, radius = 22, children, style }: HeroPhotoCardProps): ReactElement {
  const dark = tone === 'green' || tone === 'navy';
  return (
    <div style={{ position: 'relative', height, borderRadius: radius, overflow: 'hidden', background: tones[tone], ...style }}>
      {src ? <img src={src} alt={alt} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        : <span style={{ position: 'absolute', left: 20, bottom: 18, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: 0.28, textTransform: 'uppercase', color: dark ? 'rgba(255,255,255,0.6)' : 'var(--text-tertiary)' }}>{label} slot</span>}
      {children && <div style={{ position: 'absolute', inset: 24, display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start' }}>{children}</div>}
    </div>
  );
}
