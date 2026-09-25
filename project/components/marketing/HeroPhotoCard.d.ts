/** Rounded media card (22px) holding photography / 3D imagery, optionally overlaid with an AgentConsoleCard. Renders a labelled placeholder surface when no src. */
export interface HeroPhotoCardProps {
  src?: string;
  alt?: string;
  /** placeholder label when src is empty */
  label?: string;
  /** placeholder surface color */
  tone?: 'stone' | 'blue' | 'green' | 'navy';
  height?: number | string;
  /** 22 for large cards, 8 for thumbnails */
  radius?: number;
  /** overlay content (e.g. AgentConsoleCard) */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function HeroPhotoCard(props: HeroPhotoCardProps): JSX.Element;
