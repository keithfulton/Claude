/**
 * Deep green or navy band (radius 22, padding 80) for product capabilities and security claims.
 * @startingPoint section="Marketing" subtitle="Deep green product band with capability grid" viewport="1200x520"
 */
export interface DarkFeatureBandProps {
  tone?: 'green' | 'navy';
  /** uppercase mono label */
  eyebrow?: string;
  title?: React.ReactNode;
  lead?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function DarkFeatureBand(props: DarkFeatureBandProps): JSX.Element;
