import { Button, CapabilityCard, DarkFeatureBand, HeroPhotoCard, ProductCard, TrustLogoStrip } from '../../src';
import type { Go } from '../routes';

export function ProductScreen({ go }: { go: Go }) {
  return (
    <main>
      <section style={{ background: 'var(--cohere-deep-green)', color: 'var(--text-on-dark)', padding: '120px var(--space-40) var(--space-section)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32, textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, letterSpacing: 0.28, textTransform: 'uppercase', color: 'rgba(255,255,255,0.64)' }}>North</div>
        <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 72, lineHeight: 1, letterSpacing: -1.44, fontWeight: 400, maxWidth: 960, textWrap: 'balance' }}>The AI workspace for getting work done</h1>
        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}><Button onDark onClick={() => go('Contact')}>Request a demo</Button><Button onDark variant="secondary">Watch the video</Button></div>
        <HeroPhotoCard tone="navy" label="Product video" height={520} style={{ width: '100%', maxWidth: 1200, marginTop: 40 }} />
      </section>
      <TrustLogoStrip caption="Built for the world's most regulated industries" logos={['Logo', 'Logo', 'Logo', 'Logo', 'Logo']} />
      <section style={{ background: 'var(--cohere-pale-green)', padding: 'var(--space-section) var(--space-40)' }}>
        <DarkFeatureBand eyebrow="Capabilities" title="Agents, search and chat in one secure workspace" lead="Connect your tools and let teams automate routine work with the controls IT requires.">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 16 }}>
            <CapabilityCard onDark boxed icon="message-square" title="Chat">Ask questions across your company's knowledge.</CapabilityCard>
            <CapabilityCard onDark boxed icon="search" title="Search">Find answers with verifiable citations.</CapabilityCard>
            <CapabilityCard onDark boxed icon="cpu" title="Agents">Automate multi-step work across systems.</CapabilityCard>
          </div>
        </DarkFeatureBand>
      </section>
      <section style={{ padding: 'var(--space-section) var(--space-40)', display: 'flex', flexDirection: 'column', gap: 40 }}>
        <h2 style={{ margin: 0, fontSize: 48, lineHeight: 1.2, letterSpacing: -0.48, fontWeight: 400 }}>Powered by our models</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 16 }}>
          <ProductCard eyebrow="Generative" name="Command" description="Models for agentic, enterprise workloads." features={['Tool use', 'Long context', 'Multilingual']} />
          <ProductCard eyebrow="Retrieval" name="Embed" description="Represent text and images for search." features={['Multimodal', 'Compressed vectors', '100+ languages']} />
          <ProductCard eyebrow="Retrieval" name="Rerank" description="Improve search relevance in one call." features={['Semi-structured data', 'Low latency', 'Drop-in']} />
        </div>
      </section>
    </main>
  );
}
