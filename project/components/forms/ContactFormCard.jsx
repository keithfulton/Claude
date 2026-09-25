import React from 'react';
import { TextField } from './TextField.jsx';
import { Button } from '../actions/Button.jsx';
export function ContactFormCard({ title = 'Talk to our team', fields, submitLabel = 'Submit', onSubmit, legal }) {
  const f = fields || [[{ label: 'First name', required: true }, { label: 'Last name', required: true }], [{ label: 'Work email', type: 'email', required: true }, { label: 'Company', required: true }], [{ label: 'How can we help?', multiline: true }]];
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit && onSubmit(e); }} style={{ background: '#fff', borderRadius: 22, padding: 32, display: 'flex', flexDirection: 'column', gap: 20, color: 'var(--cohere-ink)' }}>
      {title && <h3 style={{ margin: 0, fontSize: 24, lineHeight: 1.3, fontWeight: 400 }}>{title}</h3>}
      {f.map((row, i) => <div key={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 16 }}>{row.map((fld) => <TextField key={fld.label} {...fld} />)}</div>)}
      {legal && <p style={{ margin: 0, fontSize: 12, lineHeight: 1.4, color: 'var(--text-secondary)' }}>{legal}</p>}
      <div><Button type="submit">{submitLabel}</Button></div>
    </form>
  );
}
