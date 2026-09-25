/**
 * Rounded white form panel (radius 22, padding 32) with paired input rows and near-black pill submit. Place on deep green or stone sections.
 * @startingPoint section="Forms" subtitle="Contact / demo request form" viewport="700x520"
 */
export interface ContactField {
  label: string;
  type?: string;
  multiline?: boolean;
  required?: boolean;
  placeholder?: string;
}
export interface ContactFormCardProps {
  title?: string;
  /** rows of fields; each row renders as up to 2 columns */
  fields?: ContactField[][];
  submitLabel?: string;
  onSubmit?: (e: React.FormEvent) => void;
  legal?: React.ReactNode;
}
export declare function ContactFormCard(props: ContactFormCardProps): JSX.Element;
