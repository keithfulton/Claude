import { useState, type CSSProperties, type MouseEvent, type ReactElement, type ReactNode } from 'react';
import { Icon } from '../core/Icon';

/**
 * Cohere action. primary = near-black pill CTA (white on dark); secondary = underlined text link; pill-outline = 1px outlined filter/tag pill.
 * @startingPoint section="Actions" subtitle="Pill CTA, text link and outline pill" viewport="700x220"
 */
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'pill-outline';
  /** invert colors for dark green / navy / near-black surfaces */
  onDark?: boolean;
  /** trailing Lucide icon name, e.g. "arrow-right" */
  icon?: string;
  children?: ReactNode;
  disabled?: boolean;
  href?: string;
  onClick?: (e: MouseEvent) => void;
  type?: 'button' | 'submit';
  style?: CSSProperties;
}

const base: CSSProperties = { display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-sans)', border: 0, cursor: 'pointer', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard), opacity var(--duration-fast)' };

export function Button({ variant = 'primary', onDark = false, icon, children, disabled, href, onClick, type = 'button', style }: ButtonProps): ReactElement {
  const [hover, setHover] = useState(false);
  const v: CSSProperties = {
    primary: { background: onDark ? '#fff' : (hover ? 'var(--cohere-black)' : 'var(--cohere-primary)'), color: onDark ? 'var(--cohere-primary)' : '#fff', fontSize: 14, fontWeight: 500, lineHeight: 1.71, padding: '12px 24px', borderRadius: 32, opacity: onDark && hover ? 0.88 : 1 },
    secondary: { background: 'transparent', color: onDark ? '#fff' : 'var(--cohere-ink)', fontSize: 16, lineHeight: 1.5, padding: '8px 0', borderRadius: 4, textDecoration: 'underline', textUnderlineOffset: 4, textDecorationThickness: hover ? 2 : 1 },
    'pill-outline': { background: hover ? (onDark ? 'rgba(255,255,255,0.08)' : 'rgba(23,23,28,0.04)') : 'transparent', color: onDark ? '#fff' : 'var(--cohere-primary)', fontSize: 14, fontWeight: 500, lineHeight: 1.71, padding: '6px 12px', borderRadius: 30, boxShadow: 'inset 0 0 0 1px ' + (onDark ? 'rgba(255,255,255,0.6)' : 'var(--cohere-primary)') },
  }[variant];
  const Tag = href ? 'a' : 'button';
  return (
    <Tag href={href} type={href ? undefined : type} onClick={disabled ? undefined : onClick} disabled={href ? undefined : disabled} aria-disabled={disabled || undefined}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ ...base, ...v, ...(disabled ? { opacity: 0.4, cursor: 'not-allowed' } : null), ...style }}>
      {children}{icon && <Icon name={icon} size={variant === 'secondary' ? 18 : 16} />}
    </Tag>
  );
}
