import React from 'react';
import { StatusChip } from './StatusChip.jsx';
import { Icon } from '../core/Icon.jsx';
export function AgentConsoleCard({ agent = 'Agent', status = 'Running', integrations = [], prompt, responses = [], width = 380, style }) {
  return (
    <div style={{ width, maxWidth: '100%', background: 'var(--cohere-primary)', color: '#fff', borderRadius: 8, padding: 24, display: 'flex', flexDirection: 'column', gap: 16, ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <span style={{ fontSize: 16 }}>{agent}</span>
        <StatusChip tone="live">{status}</StatusChip>
      </div>
      {integrations.length > 0 && <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>{integrations.map((i) => <StatusChip key={i} dot={false}>{i}</StatusChip>)}</div>}
      {prompt && <div style={{ display: 'flex', alignItems: 'center', gap: 10, border: '1px solid rgba(255,255,255,0.16)', borderRadius: 8, padding: '10px 12px', fontSize: 14, color: 'rgba(255,255,255,0.72)' }}><span style={{ flex: 1 }}>{prompt}</span><Icon name="arrow-up" size={16} /></div>}
      {responses.map((r, i) => (
        <div key={i} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 8, padding: 14, fontSize: 14, lineHeight: 1.4 }}>
          {r.title && <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 0.28, textTransform: 'uppercase', color: 'rgba(255,255,255,0.56)', marginBottom: 6 }}>{r.title}</div>}
          {r.body}
        </div>
      ))}
    </div>
  );
}
