import { useState, type ChangeEvent, type CSSProperties, type ReactElement } from 'react';

/** Rectangular text input with thin grey border, violet focus border, red error. */
export interface TextFieldProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
  multiline?: boolean;
  /** error message; turns border red */
  error?: string;
  required?: boolean;
  name?: string;
  style?: CSSProperties;
}

export function TextField({ label, placeholder, value, onChange, type = 'text', multiline = false, error, required, name, style }: TextFieldProps): ReactElement {
  const [focus, setFocus] = useState(false);
  const fieldStyle: CSSProperties = { fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.5, color: 'var(--cohere-ink)', padding: '12px 16px', borderRadius: 4, background: '#fff', outline: 'none', resize: 'vertical', border: '1px solid ' + (error ? 'var(--cohere-error)' : focus ? 'var(--cohere-form-focus)' : 'var(--border-rule)') };
  const shared = { name, placeholder, value, onChange, 'aria-invalid': error ? true : undefined, onFocus: () => setFocus(true), onBlur: () => setFocus(false), style: fieldStyle };
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14, lineHeight: 1.4, color: 'var(--cohere-ink)', ...style }}>
      {label && <span>{label}{required && <span style={{ color: 'var(--text-meta)' }}> *</span>}</span>}
      {multiline ? <textarea rows={4} {...shared} /> : <input type={type} {...shared} />}
      {error && <span style={{ fontSize: 12, color: 'var(--cohere-error)' }}>{error}</span>}
    </label>
  );
}
