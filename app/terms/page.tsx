'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function TermsPage() {
  return (
    <>
      <Nav back />
      <main style={{ maxWidth: 780, margin: '0 auto', padding: '10rem 5vw 7rem' }}>
        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '1rem' }}>Legal</div>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', letterSpacing: '0.03em', lineHeight: 0.95, color: 'var(--white)', marginBottom: '1rem' }}>TERMS OF<br />SERVICE</h1>
          <p style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Last updated: March 2025</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', fontSize: '0.95rem', color: 'var(--text)', lineHeight: 1.85 }}>
          <Section title="1. Agreement">
            By accessing this website or engaging Linexis Studio for services, you agree to these terms. If you do not agree, please do not use this website or our services.
          </Section>

          <Section title="2. Services">
            <p>Linexis Studio provides custom software development services including mobile applications, web platforms, ERP systems, and AI integration. The specific scope, deliverables, timeline, and payment terms for any project are agreed in a separate written proposal or contract.</p>
            <p style={{ marginTop: '0.8rem' }}>These terms govern the website and general engagement; they do not replace any project-specific agreement.</p>
          </Section>

          <Section title="3. Website Use">
            <p>You may use this website for lawful purposes only. You must not use it in any way that violates applicable laws, attempt unauthorized access to any part of the website, transmit harmful or disruptive content via our forms, or copy our website content, design, or branding without permission.</p>
          </Section>

          <Section title="4. Intellectual Property">
            <p>All content on this website — including design, text, graphics, and code — is the property of Linexis Studio and protected by applicable copyright and intellectual property laws.</p>
            <p style={{ marginTop: '0.8rem' }}>For client projects: intellectual property ownership is defined in the individual project contract. By default, upon full payment, clients own the final deliverables. Linexis Studio retains the right to reference the work in its portfolio unless otherwise agreed in writing.</p>
          </Section>

          <Section title="5. Project Briefs & Enquiries">
            Submitting a project brief or contact form on this website does not constitute a binding contract or guarantee of engagement. A project is only confirmed when both parties have signed a written proposal or contract and the agreed advance payment has been received.
          </Section>

          <Section title="6. Limitation of Liability">
            This website and its content are provided as-is without warranties of any kind. Linexis Studio shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website.
          </Section>

          <Section title="7. Third-Party Links">
            This website may contain links to third-party websites such as the Google Play Store or LinkedIn. We are not responsible for the content or practices of those sites.
          </Section>

          <Section title="8. Governing Law">
            These terms are governed by the laws of Pakistan. Any disputes shall be subject to the jurisdiction of the courts of Islamabad, Pakistan.
          </Section>

          <Section title="9. Changes to These Terms">
            We reserve the right to update these terms at any time. The date at the top of this page reflects the most recent revision. Continued use of this website after changes constitutes acceptance of the updated terms.
          </Section>

          <Section title="10. Contact">
            <p>For questions about these terms, contact us at:</p>
            <div style={{ marginTop: '0.8rem', padding: '1.2rem 1.5rem', background: 'var(--bg2)', border: '1px solid var(--line)', borderRadius: '2px' }}>
              <div style={{ fontWeight: 500, color: 'var(--white)' }}>Linexis Studio</div>
              <div>Islamabad, Pakistan</div>
              <a href="mailto:contact@linexisstudio.com" style={{ color: 'var(--teal)', textDecoration: 'none' }}>contact@linexisstudio.com</a>
            </div>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ paddingBottom: '2rem', borderBottom: '1px solid var(--line)' }}>
      <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.2rem, 2vw, 1.7rem)', letterSpacing: '0.05em', color: 'var(--white)', marginBottom: '0.9rem' }}>{title}</h2>
      <div>{children}</div>
    </div>
  )
}
