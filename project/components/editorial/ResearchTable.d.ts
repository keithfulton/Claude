/**
 * Rule-separated publication list: title left, topic pills center, date right.
 * @startingPoint section="Editorial" subtitle="Research publication list" viewport="1000x360"
 */
export interface ResearchRow {
  title: string;
  topics?: string[];
  date?: string;
  href?: string;
}
export interface ResearchTableProps {
  rows?: ResearchRow[];
  onRowClick?: (row: ResearchRow) => void;
}
export declare function ResearchTable(props: ResearchTableProps): JSX.Element;
