import React from 'react';
export function TextField({ label, placeholder, value, onChange, type = 'text', multiline = false, error, required, name, style }) {
  const [focus, setFocus] = React.useState(false);
  const Tag = multiline ? 'textarea' : 'input';
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14, lineHeight: 1.4, color: 'var(--cohere-ink)', ...style }}>
      {label && <span>{label}{required && <span style={{ color: 'var(--text-meta)' }}> *</span>}</span>}
      <Tag name={name} type={multiline ? undefined : type} placeholder={placeholder} value={value} onChange={onChange} rows={multiline ? 4 : undefined}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{ fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.5, color: 'var(--cohere-ink)', padding: '12px 16px', borderRadius: 4, background: '#fff', outline: 'none', resize: 'vertical', border: '1px solid ' + (error ? 'var(--cohere-error)' : focus ? 'var(--cohere-form-focus)' : 'var(--border-rule)') }} />
      {error && <span style={{ fontSize: 12, color: 'var(--cohere-error)' }}>{error}</span>}
    </label>
  );
}
