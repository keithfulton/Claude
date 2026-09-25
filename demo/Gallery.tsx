import { useState, type CSSProperties, type ReactNode } from 'react';
import {
  AgentConsoleCard, AnnouncementBar, BlogFilterChip, Button, CapabilityCard, ContactFormCard, DarkFeatureBand,
  FooterNewsletter, HeroPhotoCard, Icon, NavBar, ProductCard, ResearchTable, StatusChip, TextField, TrustLogoStrip,
} from '../src';

// One section per component directory, mirroring the design's *.card.html previews.
const label: CSSProperties = { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 0.28, textTransform: 'uppercase', color: 'var(--text-meta)', margin: '0 0 var(--space-md)' };

function Card({ name, children }: { name: string; children: ReactNode }) {
  return (
    <section style={{ padding: 'var(--space-40) 0', borderTop: '1px solid var(--border-rule)' }}>
      <h2 style={label}>{name}</h2>
      {children}
    </section>
  );
}

function Editorial() {
  const [a, setA] = useState('All');
  return (
    <div style={{ display: 'grid', gap: 20 }}>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>{['All', 'Product', 'Research', 'Company'].map((t) => <BlogFilterChip key={t} active={a === t} onClick={() => setA(t)}>{t}</BlogFilterChip>)}</div>
      <div style={{ display: 'flex', gap: 8 }}><Button variant="pill-outline">Safety</Button><Button variant="pill-outline">Multilingual</Button><Button variant="pill-outline">Retrieval</Button></div>
      <ResearchTable rows={[{ title: 'Publication title placeholder', topics: ['Safety'], date: 'Sep 12, 2026' }, { title: 'Second publication title placeholder', topics: ['Retrieval', 'Evaluation'], date: 'Aug 28, 2026' }]} />
    </div>
  );
}

export function Gallery() {
  return (
    <main style={{ maxWidth: 1200, margin: '0 auto', padding: 'var(--space-64) var(--space-40)' }}>
      <h1 style={{ margin: '0 0 var(--space-40)', fontFamily: 'var(--font-display)', fontSize: 60, lineHeight: 1, letterSpacing: -1.2, fontWeight: 400 }}>Components</h1>

      <Card name="Buttons">
        <div style={{ display: 'grid', gap: 16 }}>
          <div style={label}>On light</div>
          <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}><Button>Request a demo</Button><Button variant="secondary" icon="arrow-right">Explore products</Button><Button variant="pill-outline">Agents</Button><Button disabled>Disabled</Button></div>
          <div style={{ background: 'var(--cohere-deep-green)', borderRadius: 8, padding: 16, display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}><Button onDark>Contact sales</Button><Button onDark variant="secondary">Try the Playground</Button><Button onDark variant="pill-outline">Security</Button></div>
        </div>
      </Card>

      <Card name="Icon">
        <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>{['arrow-right', 'arrow-up-right', 'check', 'x', 'search', 'shield-check', 'database', 'cpu', 'globe', 'layers', 'file-text', 'message-square'].map((n) => <Icon key={n} name={n} size={24} />)}</div>
      </Card>

      <Card name="Navigation">
        <AnnouncementBar>Introducing our latest model for enterprise agents.</AnnouncementBar>
        <NavBar active="Products" />
        <div style={{ background: 'var(--cohere-deep-green)' }}><NavBar onDark /></div>
      </Card>

      <Card name="Marketing blocks">
        <div style={{ display: 'grid', gap: 24 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16 }}><HeroPhotoCard tone="blue" label="3D abstract" height={300}><AgentConsoleCard agent="Research agent" integrations={['Drive']} prompt="Ask anything" /></HeroPhotoCard><HeroPhotoCard height={300} /></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>{['Command', 'Embed', 'Rerank'].map((n) => <ProductCard key={n} eyebrow="Model" name={n} description="Placeholder description." features={['Feature one', 'Feature two']} />)}</div>
          <DarkFeatureBand eyebrow="Platform" title="Deep green product band"><div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}><CapabilityCard onDark boxed icon="shield-check" title="Private deployment">Short supporting copy.</CapabilityCard><CapabilityCard onDark boxed icon="database" title="Grounded answers">Short supporting copy.</CapabilityCard><CapabilityCard onDark boxed icon="layers" title="Integrations">Short supporting copy.</CapabilityCard></div></DarkFeatureBand>
          <DarkFeatureBand tone="navy" eyebrow="Security" title="Dark navy band for financial services and security" />
          <TrustLogoStrip caption="Trusted by industry leaders" logos={['Logo', 'Logo', 'Logo', 'Logo', 'Logo']} />
        </div>
      </Card>

      <Card name="Agent console">
        <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
          <AgentConsoleCard agent="Contracts agent" status="Running" integrations={['Drive', 'Salesforce', 'Slack']} prompt="Summarize renewal terms for Q3" responses={[{ title: 'Response', body: 'Placeholder generated summary block.' }, { title: 'Sources', body: 'Placeholder citation list.' }]} />
          <div style={{ background: 'var(--cohere-primary)', borderRadius: 8, padding: 16, display: 'flex', flexDirection: 'column', gap: 8 }}><StatusChip tone="live">Running</StatusChip><StatusChip tone="warm">Review</StatusChip><StatusChip tone="info">Queued</StatusChip><StatusChip>Idle</StatusChip></div>
        </div>
      </Card>

      <Card name="Editorial"><Editorial /></Card>

      <Card name="Forms">
        <div style={{ background: 'var(--cohere-deep-green)', borderRadius: 22, padding: 24, maxWidth: 700 }}>
          <ContactFormCard legal="By submitting, you agree to our privacy policy." fields={[[{ label: 'First name', required: true }, { label: 'Last name', required: true }], [{ label: 'Work email', type: 'email', required: true }, { label: 'Company', required: true }]]} />
          <div style={{ marginTop: 16, background: 'var(--surface-card)', borderRadius: 8, padding: 16 }}><TextField label="With error" value="not-an-email" error="Enter a valid work email" onChange={() => {}} /></div>
        </div>
      </Card>

      <Card name="Footer">
        <FooterNewsletter legal="By subscribing you agree to our privacy policy." columns={[{ title: 'Products', links: ['Command', 'Embed', 'Rerank', 'North'] }, { title: 'Solutions', links: ['Financial services', 'Public sector', 'Healthcare'] }, { title: 'Company', links: ['About', 'Careers', 'Blog', 'Research'] }]} />
      </Card>
    </main>
  );
}
