import Link from 'next/link'

const FOOTER_SERVICES = ['Mobile Applications','Web Applications','ERP & Business Systems','Cross-Platform & Migration','AI Integration','UI/UX Design']

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg2)', borderTop: '1px solid var(--line)' }}>

      {/* CTA STRIP */}
      <div className="footer-cta" style={{ borderBottom: '1px solid var(--line)', padding: '3.5rem 5vw', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '0.6rem' }}>Ready to build?</div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.7rem, 4vw, 3.2rem)', color: 'var(--white)', letterSpacing: '0.03em', lineHeight: 1.05 }}>
            LET&apos;S TALK ABOUT YOUR PROJECT
          </div>
        </div>
        <Link href="/start" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: 'var(--teal)', color: '#fff', fontFamily: "'Outfit', sans-serif", fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', padding: '1rem 2.2rem', borderRadius: '1px', whiteSpace: 'nowrap', flexShrink: 0 }}>Start a Project →</Link>
      </div>

      {/* MAIN GRID */}
      <div className="footer-grid" style={{ padding: 'clamp(3rem, 5vw, 5rem) 5vw 3rem', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.2fr', gap: '3rem' }}>
        <div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.55rem', letterSpacing: '0.1em', color: 'var(--white)', marginBottom: '1.1rem' }}>
            <span style={{ color: 'var(--teal)' }}>LINEXIS</span> STUDIO
          </div>
          <p style={{ fontSize: '0.87rem', color: 'var(--text)', lineHeight: 1.8, maxWidth: 260, marginBottom: '1.8rem' }}>
            A digital product studio based in Islamabad, Pakistan — building mobile apps, web platforms, ERP systems, and AI tools for clients worldwide.
          </p>
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            {[
              { label: 'LinkedIn', href: 'https://www.linkedin.com/company/linexis-studio' },
              { label: 'Email', href: 'mailto:linexisstudio@gmail.com ' },
            ].map(({ label, href }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none', padding: '0.32rem 0.7rem', border: '1px solid var(--line)', borderRadius: '1px', transition: 'color 0.2s, border-color 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--teal)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--line-teal)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--muted)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--line)' }}
              >{label}</a>
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.2rem' }}>Services</div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {FOOTER_SERVICES.map(s => (
              <li key={s}><a href="/#services" style={{ fontSize: '0.87rem', color: 'var(--text)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => (e.currentTarget.style.color = 'var(--teal)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--text)')}>{s}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.2rem' }}>Navigation</div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {[['Services','/#services'],['Work','/#work'],['Studio','/#studio'],['Contact','/#contact']].map(([l,h]) => (
              <li key={l}><a href={h} style={{ fontSize: '0.87rem', color: 'var(--text)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => (e.currentTarget.style.color = 'var(--teal)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--text)')}>{l}</a></li>
            ))}
            <li><Link href="/start" style={{ fontSize: '0.87rem', color: 'var(--teal)', textDecoration: 'none' }}>Start a Project →</Link></li>
          </ul>
        </div>

        <div>
          <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.2rem' }}>Get in Touch</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            {/* Fix 5: real WhatsApp number */}
            {[
  { l: 'Email', v: 'linexisstudio@gmail.com', h: 'mailto:linexisstudio@gmail.com' },
  { 
    l: 'Contact', 
    // Array of objects to keep values and their specific links together
    items: [
      { label: '+92 320 3887279', link: 'https://wa.me/923203887279' }, // WhatsApp
      { label: '+92 320 3887279', link: 'tel:+923203887279' }           // Direct Call
    ] 
  },
].map((group) => (
  <div key={group.l} style={{ marginBottom: '1rem' }}>
    {/* Section Label (Email or Contact) */}
    <div style={{ fontSize: '0.65rem', color: 'var(--muted)', marginBottom: '0.25rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
      {group.l}
    </div>

    {/* Render either a single link or a list of links */}
    {(group.items || [{ label: group.v, link: group.h }]).map((item, index) => (
      <a 
        key={index}
        href={item.link} 
        target={item.link.startsWith('http') ? '_blank' : undefined} 
        rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
        style={{ 
          display: 'block', // Forces each number onto its own line
          fontSize: '0.87rem', 
          color: 'var(--text)', 
          textDecoration: 'none', 
          transition: 'color 0.2s', 
          wordBreak: 'break-all',
          marginBottom: '2px'
        }} 
        onMouseEnter={e => (e.currentTarget.style.color = 'var(--teal)')} 
        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text)')}
      >
        {item.label}
        {/* Optional: Add a small hint for the user */}
        {item.link.startsWith('tel:') && <span style={{ fontSize: '0.7rem', opacity: 0.6, marginLeft: '5px' }}></span>}
      </a>
    ))}
  </div>
))}
            <div>
              <div style={{ fontSize: '0.65rem', color: 'var(--muted)', marginBottom: '0.25rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Location</div>
              <div style={{ fontSize: '0.87rem', color: 'var(--text)' }}>Islamabad, Pakistan</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>Remote-first, global clients</div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div style={{ borderTop: '1px solid var(--line)', padding: '1.4rem 5vw', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
        <div style={{ fontSize: '0.73rem', color: 'var(--muted)' }}>© 2025 Linexis Studio. All rights reserved.</div>
        <div style={{ fontSize: '0.73rem', color: 'var(--muted)' }}>Designed & built by Linexis Studio</div>
        {/* Fix 4: Privacy and Terms link to actual pages */}
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {[['Privacy Policy','/privacy'],['Terms','/terms']].map(([l, h]) => (
            <a key={l} href={h} style={{ fontSize: '0.7rem', color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>{l}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
