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
  children?: React.ReactNode;
  disabled?: boolean;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: 'button' | 'submit';
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
