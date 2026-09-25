export type Page = 'home' | 'Products' | 'Research' | 'Resources' | 'Contact';
export type Go = (link: string) => void;

// Nav labels that have no screen of their own fall back to the closest one, as in the design.
const map: Record<string, Page> = { home: 'home', Products: 'Products', Solutions: 'Products', Research: 'Research', Resources: 'Resources', Company: 'Resources', Contact: 'Contact' };

export const toPage = (link: string): Page => map[link] ?? 'home';
