import type { ReactElement, ReactNode } from 'react';

/** Small mono status chip for dark agent-console surfaces. */
export interface StatusChipProps {
  children?: ReactNode;
  tone?: 'neutral' | 'live' | 'warm' | 'info';
  dot?: boolean;
}

const dots = { neutral: 'rgba(255,255,255,0.72)', live: '#7be38f', warm: 'var(--cohere-coral)', info: '#8fb3ff' };

export function StatusChip({ children, tone = 'neutral', dot = true }: StatusChipProps): ReactElement {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, height: 22, padding: '0 8px', borderRadius: 9999, background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.88)', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 0.28, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: 9999, background: dots[tone] }} />}{children}
    </span>
  );
}
