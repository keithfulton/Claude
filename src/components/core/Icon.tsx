import type { CSSProperties, ReactElement } from 'react';
import {
  ArrowRight, ArrowUp, ArrowUpRight, Check, Cpu, Database, FileText, Globe, Layers, MessageSquare, Search, ShieldCheck, X,
  type LucideIcon,
} from 'lucide-react';

/** Thin-line icon. Renders a Lucide glyph (substitute for Cohere's proprietary icon font). */
export interface IconProps {
  /** Lucide icon name in kebab-case, e.g. "arrow-right" */
  name: string;
  /** px, default 20 */
  size?: number;
  /** default 1.5 — keep thin */
  strokeWidth?: number;
  color?: string;
  style?: CSSProperties;
}

// Glyphs the design system uses. Importing them by name keeps the rest of Lucide out of the bundle.
const registry: Record<string, LucideIcon> = {
  'arrow-right': ArrowRight, 'arrow-up': ArrowUp, 'arrow-up-right': ArrowUpRight, check: Check, cpu: Cpu, database: Database,
  'file-text': FileText, globe: Globe, layers: Layers, 'message-square': MessageSquare, search: Search, 'shield-check': ShieldCheck, x: X,
};

/** Add more Lucide glyphs by kebab-case name, e.g. `registerIcons({ 'bar-chart': BarChart })`. */
export function registerIcons(icons: Record<string, LucideIcon>): void {
  Object.assign(registry, icons);
}

export function Icon({ name, size = 20, strokeWidth = 1.5, color = 'currentColor', style }: IconProps): ReactElement {
  const Glyph = registry[name];
  const s: CSSProperties = { flex: 'none', display: 'inline-block', verticalAlign: 'middle', ...style };
  // Unknown names render an empty box of the same size so layout does not shift.
  if (!Glyph) return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" style={s} />;
  return <Glyph size={size} strokeWidth={strokeWidth} color={color} aria-hidden="true" style={s} />;
}
