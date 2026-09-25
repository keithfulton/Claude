/**
 * Warm stone product/model summary card: name, description, small pill button, divider, checkmark rows.
 * @startingPoint section="Marketing" subtitle="3-up stone product cards" viewport="700x420"
 */
export interface ProductCardProps {
  eyebrow?: string;
  name: React.ReactNode;
  description?: React.ReactNode;
  ctaLabel?: string;
  onCta?: () => void;
  /** checkmark bullet rows */
  features?: string[];
}
export declare function ProductCard(props: ProductCardProps): JSX.Element;
