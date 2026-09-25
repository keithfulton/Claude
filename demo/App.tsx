import { useState } from 'react';
import { AnnouncementBar, FooterNewsletter, NavBar } from '../src';
import { toPage, type Page } from './routes';
import { HomeScreen } from './screens/Home';
import { ProductScreen } from './screens/Product';
import { BlogScreen } from './screens/Blog';
import { ResearchScreen } from './screens/Research';
import { ContactScreen } from './screens/Contact';

const KEY = 'cohere-kit-page';
const load = (): Page => { try { return toPage(localStorage.getItem(KEY) ?? 'home'); } catch { return 'home'; } };

const footerColumns = [
  { title: 'Products', links: ['North', 'Command', 'Embed', 'Rerank'] },
  { title: 'Solutions', links: ['Financial services', 'Public sector', 'Healthcare'] },
  { title: 'Resources', links: ['Blog', 'Research', 'Docs'] },
  { title: 'Company', links: ['About', 'Careers', 'Security'] },
];

export function App() {
  const [page, setPage] = useState<Page>(load);
  const go = (link: string) => {
    const next = toPage(link);
    setPage(next);
    try { localStorage.setItem(KEY, next); } catch { /* storage unavailable */ }
    window.scrollTo(0, 0);
  };
  const dark = page === 'Products' || page === 'Contact';
  return (
    <>
      <AnnouncementBar>Introducing our newest model for enterprise agents.</AnnouncementBar>
      <div style={{ background: dark ? 'var(--cohere-deep-green)' : 'var(--surface-page)' }}><NavBar onDark={dark} active={page} onNavigate={go} onCta={() => go('Contact')} /></div>
      {page === 'home' && <HomeScreen go={go} />}
      {page === 'Products' && <ProductScreen go={go} />}
      {page === 'Research' && <ResearchScreen />}
      {page === 'Resources' && <BlogScreen />}
      {page === 'Contact' && <ContactScreen />}
      <FooterNewsletter legal="By subscribing, you agree to receive emails and accept our privacy policy." columns={footerColumns} />
    </>
  );
}
