/** Quiet centered customer-proof strip: caption above a widely spaced row of monochrome logos. No cards or borders. */
export interface TrustLogoStripProps {
  caption?: string;
  /** logo nodes (monochrome <img>) or plain names as stand-ins */
  logos?: (string | React.ReactNode)[];
  onDark?: boolean;
}
export declare function TrustLogoStrip(props: TrustLogoStripProps): JSX.Element;
