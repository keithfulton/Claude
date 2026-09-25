/** Capability block: thin-line icon, 24px heading, body, text link. Unboxed with a top rule by default. */
export interface CapabilityCardProps {
  /** Lucide icon name */
  icon?: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  linkLabel?: string;
  href?: string;
  onDark?: boolean;
  /** full 1px containment instead of top rule (use inside dark bands) */
  boxed?: boolean;
}
export declare function CapabilityCard(props: CapabilityCardProps): JSX.Element;
