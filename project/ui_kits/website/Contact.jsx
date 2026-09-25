function ContactScreen() {
  const { ContactFormCard } = window.CohereDesignSystem_1d137d;
  const [sent, setSent] = React.useState(false);
  return (
    <main style={{ background: 'var(--cohere-deep-green)', color: '#fff', padding: '96px 40px 120px', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 64, alignItems: 'start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <h1 style={{ margin: 0, fontSize: 60, lineHeight: 1, letterSpacing: -1.2, fontWeight: 400 }}>Talk to our team</h1>
        <p style={{ margin: 0, fontSize: 18, lineHeight: 1.4, color: 'rgba(255,255,255,0.72)', maxWidth: 440 }}>Tell us about your use case and we'll connect you with the right specialist.</p>
      </div>
      {sent ? <div style={{ background: '#fff', color: 'var(--cohere-ink)', borderRadius: 22, padding: 32, fontSize: 24, lineHeight: 1.3 }}>Thanks. A member of our team will be in touch.</div>
        : <ContactFormCard title={null} onSubmit={() => setSent(true)} legal="By submitting this form, you agree to our privacy policy." />}
    </main>
  );
}
window.ContactScreen = ContactScreen;
