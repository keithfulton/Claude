/**
 * Dark near-black product mockup panel: agent name, status chip, integration badges, prompt field, generated response cards.
 * @startingPoint section="Product" subtitle="Dark agent console mockup" viewport="700x360"
 */
export interface AgentConsoleCardProps {
  agent?: string;
  status?: string;
  /** integration badge labels */
  integrations?: string[];
  /** placeholder prompt text */
  prompt?: string;
  responses?: { title?: string; body: React.ReactNode }[];
  width?: number | string;
  style?: React.CSSProperties;
}
export declare function AgentConsoleCard(props: AgentConsoleCardProps): JSX.Element;
