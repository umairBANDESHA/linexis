'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function PrivacyPage() {
  return (
    <>
      <Nav back />
      <main style={{ maxWidth: 780, margin: '0 auto', padding: '10rem 5vw 7rem' }}>
        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '1rem' }}>Legal</div>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', letterSpacing: '0.03em', lineHeight: 0.95, color: 'var(--white)', marginBottom: '1rem' }}>PRIVACY<br />POLICY</h1>
          <p style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Last updated: March 2025</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', fontSize: '0.95rem', color: 'var(--text)', lineHeight: 1.85 }}>
          <Section title="1. Who We Are">
            Linexis Studio is a digital product studio based in Islamabad, Pakistan. We design and build mobile applications, web platforms, ERP systems, and AI-integrated tools. You can reach us at{' '}
            <a href="mailto:contact@linexisstudio.com" style={{ color: 'var(--teal)', textDecoration: 'none' }}>contact@linexisstudio.com</a>.
          </Section>

          <Section title="2. Information We Collect">
            <p>We collect information you provide directly when you fill out our project brief form, send us a message through the contact form, or email or message us directly. This includes your name, email address, company name, and project details.</p>
            <p style={{ marginTop: '0.8rem' }}>We do not use cookies for tracking, analytics platforms, or any passive data collection.</p>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use the information you provide solely to respond to your project enquiry or message, discuss and scope a potential project with you, and send you a proposal if you request one.</p>
            <p style={{ marginTop: '0.8rem' }}>We will not add you to any mailing list or send you unsolicited marketing without your explicit consent.</p>
          </Section>

          <Section title="4. Information Sharing">
            <p>We do not sell, rent, or share your personal information with third parties. The only exception is Formspree, which we use to process form submissions — your data passes through their servers in transit. If required by applicable law, we may disclose information to comply with legal obligations.</p>
          </Section>

          <Section title="5. Data Retention">
            We retain enquiry information for as long as necessary to manage our client relationships and for up to 2 years after our last communication. You can request deletion at any time by emailing us.
          </Section>

          <Section title="6. Your Rights">
            <p>You have the right to access, correct, or request deletion of your personal information. To exercise any of these rights, email{' '}
            <a href="mailto:contact@linexisstudio.com" style={{ color: 'var(--teal)', textDecoration: 'none' }}>contact@linexisstudio.com</a>. We will respond within 30 days.</p>
          </Section>

          <Section title="7. Security">
            We take reasonable measures to protect your information. Our website is served over HTTPS and form submissions are encrypted in transit. However, no method of transmission over the internet is 100% secure.
          </Section>

          <Section title="8. Changes to This Policy">
            We may update this policy from time to time. The date at the top of this page reflects the most recent revision. Continued use of our website after changes constitutes acceptance of the updated policy.
          </Section>

          <Section title="9. Contact">
            <p>If you have questions about this policy, contact us at:</p>
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
