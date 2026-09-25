/**
 * Dark near-black footer with coral label, newsletter field + arrow submit, and muted link columns.
 * @startingPoint section="Footer" subtitle="Dark newsletter footer" viewport="1200x460"
 */
export interface FooterColumn { title: string; links: string[] }
export interface FooterNewsletterProps {
  /** coral eyebrow, default "AI moves fast" */
  label?: string;
  headline?: string;
  legal?: React.ReactNode;
  columns?: FooterColumn[];
  onSubscribe?: (email: string) => void;
}
export declare function FooterNewsletter(props: FooterNewsletterProps): JSX.Element;
