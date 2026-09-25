/** Oversized coral taxonomy chip for the blog index. Active = coral fill + dark text; inactive = coral outline + pale fill. */
export interface BlogFilterChipProps {
  children?: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}
export declare function BlogFilterChip(props: BlogFilterChipProps): JSX.Element;
