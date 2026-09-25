/**
 * Global three-zone nav: wordmark left, menu centered, sign-in + primary CTA right.
 * @startingPoint section="Navigation" subtitle="Announcement bar + global nav" viewport="1200x200"
 */
export interface NavBarProps {
  links?: string[];
  /** currently active link label (underlined) */
  active?: string;
  onNavigate?: (link: string) => void;
  /** white text over dark bands */
  onDark?: boolean;
  ctaLabel?: string;
  onCta?: () => void;
}
export declare function NavBar(props: NavBarProps): JSX.Element;
