function HomeScreen({ go }) {
  const { Button, HeroPhotoCard, AgentConsoleCard, TrustLogoStrip, CapabilityCard } = window.CohereDesignSystem_1d137d;
  return (
    <main>
      <section style={{ padding: '120px 40px 64px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32 }}>
        <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 96, lineHeight: 1, letterSpacing: -1.92, fontWeight: 400, color: '#000', maxWidth: 1100, textWrap: 'balance' }}>The all-in-one platform for private and secure AI</h1>
        <p style={{ margin: 0, fontSize: 18, lineHeight: 1.4, maxWidth: 560, color: 'var(--text-secondary)' }}>Models, search and agents built for the enterprise, deployed where your data lives.</p>
        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}><Button onClick={() => go('Contact')}>Request a demo</Button><Button variant="secondary" icon="arrow-right" onClick={() => go('Products')}>Explore products</Button></div>
      </section>
      <section style={{ padding: '0 40px', display: 'grid', gridTemplateColumns: 'minmax(0,2fr) minmax(0,1fr)', gap: 16 }}>
        <HeroPhotoCard tone="blue" label="Product media" height={560}>
          <AgentConsoleCard agent="Research agent" status="Running" integrations={['Drive', 'Salesforce', 'Slack']} prompt="Summarize this quarter's contract renewals" responses={[{ title: 'Response', body: 'Generated response placeholder.' }]} />
        </HeroPhotoCard>
        <HeroPhotoCard label="Photography" height={560} />
      </section>
      <div style={{ height: 80 }} />
      <TrustLogoStrip caption="Trusted by industry leaders and developers worldwide" logos={['Logo', 'Logo', 'Logo', 'Logo', 'Logo', 'Logo']} />
      <section style={{ padding: '80px 40px', display: 'flex', flexDirection: 'column', gap: 48 }}>
        <h2 style={{ margin: 0, fontSize: 48, lineHeight: 1.2, letterSpacing: -0.48, fontWeight: 400, maxWidth: 760 }}>AI that fits the way your business already works</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 24 }}>
          <CapabilityCard icon="shield-check" title="Private by default" linkLabel="Security" href="#">Deploy in your VPC, on-premises or in air-gapped environments.</CapabilityCard>
          <CapabilityCard icon="database" title="Grounded in your data" linkLabel="Search" href="#">Retrieval with citations across the systems your teams use.</CapabilityCard>
          <CapabilityCard icon="globe" title="Multilingual" linkLabel="Models" href="#">Models built to serve global businesses in their own languages.</CapabilityCard>
        </div>
      </section>
    </main>
  );
}
window.HomeScreen = HomeScreen;
