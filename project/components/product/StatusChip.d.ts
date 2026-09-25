/** Small mono status chip for dark agent-console surfaces. */
export interface StatusChipProps {
  children?: React.ReactNode;
  tone?: 'neutral' | 'live' | 'warm' | 'info';
  dot?: boolean;
}
export declare function StatusChip(props: StatusChipProps): JSX.Element;
