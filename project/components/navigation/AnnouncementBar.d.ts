/** Full-width 36px black strip above the nav with centered microcopy, underlined link and close control. */
export interface AnnouncementBarProps {
  children?: React.ReactNode;
  linkLabel?: string;
  href?: string;
  onClose?: () => void;
}
export declare function AnnouncementBar(props: AnnouncementBarProps): JSX.Element | null;
