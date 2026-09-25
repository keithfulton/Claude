import { useState, type ReactElement, type ReactNode } from 'react';
import { Icon } from '../core/Icon';

/** Full-width 36px black strip above the nav with centered microcopy, underlined link and close control. */
export interface AnnouncementBarProps {
  children?: ReactNode;
  linkLabel?: string;
  href?: string;
  onClose?: () => void;
}

export function AnnouncementBar({ children, linkLabel = 'Learn more', href = '#', onClose }: AnnouncementBarProps): ReactElement | null {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div style={{ position: 'relative', height: 36, background: 'var(--cohere-black)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: 12, lineHeight: 1.4, padding: '0 48px' }}>
      <span>{children}</span>
      <a href={href} style={{ color: '#fff', textDecoration: 'underline', textUnderlineOffset: 3 }}>{linkLabel}</a>
      <button type="button" aria-label="Close" onClick={() => { setOpen(false); onClose?.(); }} style={{ position: 'absolute', right: 16, top: 0, height: 36, background: 'none', border: 0, color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center' }}><Icon name="x" size={16} /></button>
    </div>
  );
}
