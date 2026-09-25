import type { FormEvent, ReactElement, ReactNode } from 'react';
import { TextField } from './TextField';
import { Button } from '../actions/Button';

export interface ContactField {
  label: string;
  type?: string;
  multiline?: boolean;
  required?: boolean;
  placeholder?: string;
}

/**
 * Rounded white form panel (radius 22, padding 32) with paired input rows and near-black pill submit. Place on deep green or stone sections.
 * @startingPoint section="Forms" subtitle="Contact / demo request form" viewport="700x520"
 */
export interface ContactFormCardProps {
  /** pass null to hide the heading */
  title?: string | null;
  /** rows of fields; each row renders as up to 2 columns */
  fields?: ContactField[][];
  submitLabel?: string;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  legal?: ReactNode;
}

const defaultFields: ContactField[][] = [
  [{ label: 'First name', required: true }, { label: 'Last name', required: true }],
  [{ label: 'Work email', type: 'email', required: true }, { label: 'Company', required: true }],
  [{ label: 'How can we help?', multiline: true }],
];

export function ContactFormCard({ title = 'Talk to our team', fields = defaultFields, submitLabel = 'Submit', onSubmit, legal }: ContactFormCardProps): ReactElement {
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit?.(e); }} style={{ background: '#fff', borderRadius: 22, padding: 32, display: 'flex', flexDirection: 'column', gap: 20, color: 'var(--cohere-ink)' }}>
      {title && <h3 style={{ margin: 0, fontSize: 24, lineHeight: 1.3, fontWeight: 400 }}>{title}</h3>}
      {fields.map((row, i) => <div key={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 16 }}>{row.map((fld) => <TextField key={fld.label} {...fld} />)}</div>)}
      {legal && <p style={{ margin: 0, fontSize: 12, lineHeight: 1.4, color: 'var(--text-secondary)' }}>{legal}</p>}
      <div><Button type="submit">{submitLabel}</Button></div>
    </form>
  );
}
