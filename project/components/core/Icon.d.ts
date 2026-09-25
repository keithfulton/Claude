/** Thin-line icon. Renders a Lucide glyph (substitute for Cohere's proprietary icon font). Requires the Lucide UMD script on the page. */
export interface IconProps {
  /** Lucide icon name in kebab-case, e.g. "arrow-right" */
  name: string;
  /** px, default 20 */
  size?: number;
  /** default 1.5 — keep thin */
  strokeWidth?: number;
  color?: string;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
