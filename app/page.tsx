'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Cursor from '@/components/Cursor'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { services, projects } from '@/data/content'
import type { Project, Service } from '@/data/content'

const MARQUEE = ['Mobile Apps','Web Platforms','ERP Systems','AI Integration','Flutter','React Native','Offline-first','Cross-Platform','Full Stack']

const STATS = [
  { target: 5,     suffix: '+',  label: 'Products shipped to production', fixed: false },
  { target: 20700, suffix: '+',  label: 'End users across deployed systems', compact: true, fixed: false },
  { target: 189,   suffix: '',   label: 'Schools running our software', fixed: false },
  { target: 24,    suffix: 'h',  label: 'Average response time', fixed: true },
]

function useCountUp(target: number, duration = 1800, skip = false) {
  const [count, setCount] = useState(skip ? target : 0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)
  useEffect(() => {
    if (skip) { setCount(target); return }
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const start = Date.now()
        const tick = () => {
          const elapsed = Date.now() - start
          const progress = Math.min(elapsed / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.floor(eased * target))
          if (progress < 1) requestAnimationFrame(tick)
          else setCount(target)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.3 })
    io.observe(el)
    return () => io.disconnect()
  }, [target, duration, skip])
  return { count, ref }
}

function formatCount(n: number, compact?: boolean) {
  if (!compact) return n.toLocaleString()
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
  return n.toString()
}

type ContactForm = { name: string; email: string; subject: string; message: string }

export default function Home() {
  const router = useRouter()
  const [contactForm, setContactForm] = useState<ContactForm>({ name: '', email: '', subject: '', message: '' })
  const [contactSent, setContactSent] = useState(false)
  const [contactSending, setContactSending] = useState(false)
  const [contactError, setContactError] = useState('')
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email)

  async function sendContact() {
    if (!contactForm.name.trim() || !emailValid || !contactForm.message.trim()) return
    setContactSending(true)
    setContactError('')
    try {
      const res = await fetch('https://formspree.io/f/xbdpkwbp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ name: contactForm.name, email: contactForm.email, subject: contactForm.subject || 'General enquiry', message: contactForm.message }),
      })
      if (res.ok) setContactSent(true)
      else setContactError('Something went wrong. Please email us directly at linexisstudio@gmail.com')
    } catch {
      setContactError('Network error. Please email us directly.')
    } finally {
      setContactSending(false)
    }
  }

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach((e, i) => { if (e.isIntersecting) setTimeout(() => e.target.classList.add('on'), i * 70) }),
      { threshold: 0.07 }
    )
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Cursor />
      <Nav />

      {/* ── HERO — full-bleed bg, 3-row grid: label / headline / bottom-bar ── */}
      <section style={{
        height: '100svh', minHeight: 580,
        display: 'grid',
        gridTemplateRows: '1fr auto auto',
        position: 'relative', overflow: 'hidden'
      }}>
        {/* BG image — fills section completely */}
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1800&q=85&fit=crop"
          alt=""
          aria-hidden
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', filter: 'brightness(0.35) saturate(0.65)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 0%, rgba(8,10,11,0.5) 60%, rgba(8,10,11,0.95) 100%)' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'var(--teal)', zIndex: 3 }} />

        {/* ROW 1: spacer — label floats at top via padding */}
        <div style={{ position: 'relative', zIndex: 2, padding: '7rem 5vw 0', display: 'flex', alignItems: 'flex-start', opacity: 0, animation: 'up 0.7s 0.15s forwards' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
            <div style={{ width: 36, height: 1, background: 'var(--teal)', flexShrink: 0 }} />
            <span style={{ fontSize: '0.67rem', fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--teal)' }}>Digital Product Studio — Est. 2024</span>
          </div>
        </div>

        {/* ROW 2: headline — naturally centred by the grid */}
        <div style={{ position: 'relative', zIndex: 2, padding: '0 5vw', display: 'flex', alignItems: 'center', opacity: 0, animation: 'up 0.85s 0.3s forwards' }}>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3.8rem, 10vw, 11rem)', lineHeight: 0.88, letterSpacing: '0.015em', color: '#f0f2f4', margin: 0 }}>
            WE BUILD<br />
            <span style={{ WebkitTextStroke: '1.5px rgba(240,242,244,0.2)', color: 'transparent' }}>DIGITAL</span><br />
            <span style={{ color: 'var(--teal)' }}>PRODUCTS</span>
          </h1>
        </div>

        {/* ROW 3: bottom bar — always at bottom regardless of screen height */}
        <div style={{ position: 'relative', zIndex: 2, padding: '1.5rem 5vw 3.5rem', opacity: 0, animation: 'up 0.8s 0.48s forwards' }}>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.6rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 280px' }}>
              <p style={{ fontSize: 'clamp(0.8rem, 1.3vw, 0.93rem)', color: 'rgba(200,205,209,0.78)', lineHeight: 1.8, maxWidth: 480, marginBottom: '1.2rem' }}>
                <strong style={{ color: '#f0f2f4', fontWeight: 500 }}>Linexis Studio</strong> designs and builds software that runs real operations — mobile apps, web platforms, ERP systems, and AI-integrated tools.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {['Mobile Apps','Web Platforms','ERP Systems','AI Integration'].map(tag => (
                  <span key={tag} style={{ fontSize: '0.63rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.25rem 0.65rem', border: '1px solid rgba(58,158,173,0.32)', color: 'rgba(76,189,204,0.85)', borderRadius: '1px' }}>{tag}</span>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', alignItems: 'flex-end', flexShrink: 0 }}>
              <Link href="/start" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--teal)', color: '#fff', fontFamily: "'Outfit', sans-serif", fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', padding: '0.9rem 2rem', borderRadius: '1px', whiteSpace: 'nowrap' }}>Start a Project →</Link>
              <a href="#work" style={{ fontSize: '0.78rem', fontWeight: 500, color: 'rgba(200,205,209,0.45)', textDecoration: 'none', letterSpacing: '0.05em' }}>See Our Work ↓</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ───────────────────────────────────────────────── */}
      <div style={{ overflow: 'hidden', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: '1rem 0', background: 'var(--bg2)' }}>
        <div style={{ display: 'flex', whiteSpace: 'nowrap', animation: 'marquee 28s linear infinite' }}>
          {[...MARQUEE, ...MARQUEE].map((item, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '1.2rem', padding: '0 1.8rem', fontFamily: "'Bebas Neue', sans-serif", fontSize: '0.9rem', letterSpacing: '0.15em', color: 'var(--muted)' }}>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--teal)', display: 'inline-block', flexShrink: 0 }} />{item}
            </span>
          ))}
        </div>
      </div>

      {/* ── SERVICES ──────────────────────────────────────────────── */}
      <section id="services" className="services-section" style={{ padding: '9rem 5vw' }}>
        <div className="reveal section-header" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '4rem', gap: '2rem', flexWrap: 'wrap' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '1.2rem' }}>
              <div style={{ width: 28, height: 1, background: 'var(--teal)', flexShrink: 0 }} />What We Do
            </div>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', letterSpacing: '0.03em', lineHeight: 0.95, color: 'var(--white)' }}>OUR<br />SERVICES</div>
          </div>
          <p style={{ maxWidth: 360, fontSize: '0.95rem', color: 'var(--text)', lineHeight: 1.8, paddingTop: '0.5rem' }}>
            End-to-end digital products — mobile, web, and everything in between. Select any service to start your project brief.
          </p>
        </div>
        <div className="reveal service-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5px', background: 'var(--line)', border: '1px solid var(--line)' }}>
          {services.map(s => <ServiceCard key={s.num} service={s} onClick={() => router.push(`/start?service=${s.num}`)} />)}
        </div>
      </section>

      {/* ── WORK ──────────────────────────────────────────────────── */}
      <section id="work" className="work-section" style={{ padding: '0 5vw 9rem' }}>
        <div className="reveal section-header" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '4rem', gap: '2rem', flexWrap: 'wrap' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '1.2rem' }}>
              <div style={{ width: 28, height: 1, background: 'var(--teal)', flexShrink: 0 }} />Selected Work
            </div>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', letterSpacing: '0.03em', lineHeight: 0.95, color: 'var(--white)' }}>OUR<br />WORK</div>
          </div>
          <p style={{ maxWidth: 360, fontSize: '0.95rem', color: 'var(--text)', lineHeight: 1.8, paddingTop: '0.5rem' }}>
            Real products built for real clients. Full ownership from concept to deployment.
          </p>
        </div>
        <div className="reveal work-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5px', background: 'var(--line)', border: '1px solid var(--line)' }}>
          {projects.map(p => <WorkCard key={p.slug} project={p} />)}
        </div>
      </section>

      {/* ── STUDIO ────────────────────────────────────────────────── */}
      <section id="studio" className="studio-grid" style={{ padding: '9rem 5vw', background: 'var(--bg2)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '7rem', alignItems: 'center' }}>
        <div className="reveal">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '1.2rem' }}>
            <div style={{ width: 28, height: 1, background: 'var(--teal)', flexShrink: 0 }} />The Studio
          </div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '0.03em', lineHeight: 0.95, color: 'var(--white)', marginBottom: '2rem' }}>HOW<br />WE WORK</div>
          <p style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.05rem)', lineHeight: 1.9, color: 'var(--text)', marginBottom: '1.2rem' }}>
            Linexis Studio builds software that runs real operations. We take full ownership — from architecture to deployment. You bring the problem, we build the solution.
          </p>
          <p style={{ fontSize: '0.92rem', lineHeight: 1.85, color: 'var(--text)', marginBottom: '1.2rem' }}>
            Our work runs in production at scale — systems managing hundreds of schools, thousands of users, live business operations. That is the standard we hold every project to.
          </p>
          <Link href="/start" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.8rem', color: 'var(--teal)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.05em', borderBottom: '1px solid var(--line-teal)', paddingBottom: '2px' }}>Meet Us →</Link>
        </div>
        <div className="reveal">
          {STATS.map((stat, i) => <StatCounter key={i} stat={stat} index={i} />)}
        </div>
      </section>

      {/* ── CONTACT — form only, no channel cards ─────────────────── */}
      <section id="contact" className="contact-section" style={{ padding: '9rem 5vw', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(58,158,173,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="reveal" style={{ position: 'relative', zIndex: 1, maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '1.2rem' }}>Get In Touch</div>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3.2rem, 10vw, 8rem)', letterSpacing: '0.02em', lineHeight: 0.9, color: 'var(--white)', marginBottom: '1.2rem' }}>
              LET&apos;S<br /><span style={{ color: 'var(--teal)' }}>TALK</span>
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--text)', maxWidth: 440, margin: '0 auto 2rem', lineHeight: 1.8 }}>
              Have a project in mind? Send a brief below. Or just say hello — we reply to everything.
            </p>
            <Link href="/start" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: 'var(--teal)', color: '#fff', fontFamily: "'Outfit', sans-serif", fontSize: '0.88rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', padding: '1rem 2.5rem', borderRadius: '1px' }}>
              Start a Project Brief →
            </Link>
          </div>

          {/* Contact form — centered, no channel cards */}
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            <div style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem', textAlign: 'center' }}>Or send us a message directly</div>

            {contactSent ? (
              <div style={{ padding: '3rem 2rem', background: 'var(--bg2)', border: '1px solid var(--line-teal)', borderRadius: '2px', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', color: 'var(--teal)', marginBottom: '0.8rem' }}>✓</div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.8rem', color: 'var(--white)', letterSpacing: '0.05em', marginBottom: '0.6rem' }}>MESSAGE SENT</div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text)', lineHeight: 1.7 }}>We&apos;ll get back to you at <span style={{ color: 'var(--teal)' }}>{contactForm.email}</span> within 24 hours.</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }} className="form-row">
                  <ContactInput label="Your Name *" value={contactForm.name} onChange={v => setContactForm(f => ({ ...f, name: v }))} placeholder="John Smith" />
                  <ContactInput label="Email *" value={contactForm.email} onChange={v => setContactForm(f => ({ ...f, email: v }))} placeholder="john@company.com" type="email" invalid={contactForm.email.length > 3 && !emailValid} />
                </div>
                <ContactInput label="Subject" value={contactForm.subject} onChange={v => setContactForm(f => ({ ...f, subject: v }))} placeholder="What&apos;s this about?" />
                <div>
                  <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.45rem' }}>Message *</label>
                  <textarea rows={5} value={contactForm.message} onChange={e => setContactForm(f => ({ ...f, message: e.target.value }))} placeholder="Tell us what you have in mind..."
                    style={{ width: '100%', background: 'var(--bg2)', border: '1px solid var(--line)', color: 'var(--text)', fontSize: '0.92rem', padding: '0.85rem 1.1rem', fontFamily: "'Outfit', sans-serif", fontWeight: 300, lineHeight: 1.7, borderRadius: '2px', resize: 'vertical', outline: 'none', transition: 'border-color 0.2s' }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'var(--teal)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'var(--line)')}
                  />
                </div>
                {contactError && <div style={{ fontSize: '0.8rem', color: '#e05a5a', padding: '0.7rem 1rem', background: 'rgba(224,90,90,0.08)', borderRadius: '2px', border: '1px solid rgba(224,90,90,0.2)' }}>{contactError}</div>}
                <button onClick={sendContact} disabled={!contactForm.name.trim() || !emailValid || !contactForm.message.trim() || contactSending}
                  style={{ background: contactForm.name.trim() && emailValid && contactForm.message.trim() ? 'var(--teal)' : 'var(--bg3)', border: 'none', color: contactForm.name.trim() && emailValid && contactForm.message.trim() ? '#fff' : 'var(--muted)', fontSize: '0.88rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '1rem 2rem', cursor: 'pointer', fontFamily: "'Outfit', sans-serif", borderRadius: '1px', transition: 'background 0.2s', width: '100%' }}>
                  {contactSending ? 'Sending...' : 'Send Message →'}
                </button>
                <p style={{ fontSize: '0.7rem', color: 'var(--muted)', textAlign: 'center', lineHeight: 1.6 }}>Or email us directly at <a href="mailto:contact@linexisstudio.com" style={{ color: 'var(--teal)', textDecoration: 'none' }}>linexisstudio@gmail.com</a> · WhatsApp <a href="https://wa.me/923203887279" style={{ color: 'var(--teal)', textDecoration: 'none' }}>+92 320 3887279</a></p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .hero-ghost-word {
          -webkit-text-stroke: 1px rgba(255,255,255,0.14);
          color: transparent;
        }
        html.light .hero-ghost-word {
          -webkit-text-stroke: 1px rgba(0,0,0,0.18) !important;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @media (max-width: 900px) {
          .hero-bottom { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}

// ─── STAT COUNTER ─────────────────────────────────────────────────────────────

function StatCounter({ stat, index }: { stat: typeof STATS[0]; index: number }) {
  const { count, ref } = useCountUp(stat.target, 1800, stat.fixed)
  return (
    <div ref={ref} style={{ padding: '2rem 0', borderBottom: '1px solid var(--line)', borderTop: index === 0 ? '1px solid var(--line)' : 'none' }}>
      <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: 'var(--white)', lineHeight: 1, marginBottom: '0.3rem' }}>
        {formatCount(count, stat.compact)}<span style={{ color: 'var(--teal)' }}>{stat.suffix}</span>
      </div>
      <div style={{ fontSize: '0.85rem', color: 'var(--text)' }}>{stat.label}</div>
    </div>
  )
}

// ─── SERVICE CARD ─────────────────────────────────────────────────────────────

function ServiceCard({ service, onClick }: { service: Service; onClick: () => void }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div onClick={onClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background: hovered ? 'var(--bg2)' : 'var(--bg)', cursor: 'pointer', position: 'relative', overflow: 'hidden', transition: 'background 0.25s', display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'var(--teal)', transform: hovered ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.35s ease', zIndex: 2 }} />
      <div style={{ position: 'relative', height: 160, overflow: 'hidden', flexShrink: 0 }}>
        <img src={service.image} alt={service.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease', transform: hovered ? 'scale(1.06)' : 'scale(1)', filter: 'brightness(0.7) saturate(0.85)' }} loading="lazy" />
        <div style={{ position: 'absolute', inset: 0, background: hovered ? 'rgba(58,158,173,0.18)' : 'rgba(0,0,0,0.12)', transition: 'background 0.3s' }} />
        <div style={{ position: 'absolute', top: '0.8rem', left: '1rem', fontFamily: "'Bebas Neue', sans-serif", fontSize: '0.7rem', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.8)', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)', padding: '0.15rem 0.5rem', borderRadius: '1px' }}>{service.num}</div>
      </div>
      <div style={{ padding: '1.4rem 1.4rem 1.6rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.1rem, 1.5vw, 1.45rem)', letterSpacing: '0.04em', color: 'var(--white)', lineHeight: 1.05, marginBottom: '0.45rem' }}>{service.name}</div>
        <div style={{ fontSize: '0.82rem', color: 'var(--text)', lineHeight: 1.65, flex: 1 }}>{service.short}</div>
        <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--teal)', fontSize: '0.74rem', fontWeight: 500 }}>
          Start brief <span style={{ transition: 'transform 0.2s', transform: hovered ? 'translateX(4px)' : 'none', display: 'inline-block' }}>→</span>
        </div>
      </div>
    </div>
  )
}

// ─── WORK CARD ────────────────────────────────────────────────────────────────

function WorkCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false)
  const inner = (
    <>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'var(--teal)', transform: hovered ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.4s ease' }} />
      {project.inProgress && <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', background: 'rgba(245,167,66,0.1)', color: '#f5a742', border: '1px solid rgba(245,167,66,0.3)', padding: '0.3rem 0.75rem', borderRadius: '1px' }}>In Progress</div>}
      {project.live && !project.inProgress && <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', background: 'var(--teal-glow)', color: 'var(--teal)', border: '1px solid var(--line-teal)', padding: '0.3rem 0.75rem', borderRadius: '1px' }}>Live</div>}
      <div className={project.featured ? 'work-card-inner-featured' : ''} style={{ display: project.featured ? 'grid' : 'block', gridTemplateColumns: project.featured ? '1fr 1fr' : undefined, gap: '2.5rem', alignItems: 'center' }}>
        <div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.8rem', color: hovered ? 'rgba(58,158,173,0.2)' : 'var(--line)', lineHeight: 1, marginBottom: '1.2rem', transition: 'color 0.3s' }}>{project.index}</div>
          <div style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--teal)', background: 'var(--teal-glow)', padding: '0.25rem 0.7rem', borderRadius: '1px', display: 'inline-block', marginBottom: '0.8rem' }}>{project.type}</div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', letterSpacing: '0.04em', color: 'var(--white)', marginBottom: '0.7rem', lineHeight: 1.05 }}>{project.title}</div>
          <div style={{ fontSize: '0.88rem', color: 'var(--text)', lineHeight: 1.75, marginBottom: '1.2rem' }}>{project.desc}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {project.stack.map(t => <span key={t} style={{ fontSize: '0.68rem', padding: '0.2rem 0.55rem', background: 'var(--bg3)', color: 'var(--muted)', borderRadius: '1px', border: '1px solid var(--line)' }}>{t}</span>)}
          </div>
        </div>
        {project.featured && project.stats && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5px', background: 'var(--line)', border: '1px solid var(--line)' }}>
            {project.stats.map((stat, i) => (
              <div key={i} style={{ background: 'var(--bg3)', padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.6rem, 2vw, 2rem)', color: 'var(--teal)', lineHeight: 1, marginBottom: '0.4rem' }}>{stat.num}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text)', lineHeight: 1.4 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      {!project.inProgress && <div style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--teal)', fontSize: '0.75rem', fontWeight: 500, opacity: hovered ? 1 : 0, transition: 'opacity 0.3s' }}>View Product ↗</div>}
    </>
  )
  const cardStyle: React.CSSProperties = { background: hovered ? 'var(--bg2)' : 'var(--bg)', padding: 'clamp(1.8rem, 3vw, 2.8rem)', position: 'relative', overflow: 'hidden', textDecoration: 'none', color: 'inherit', gridColumn: project.featured ? '1 / -1' : 'auto', transition: 'background 0.3s', display: 'block' }
  if (project.inProgress) return <div style={cardStyle} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>{inner}</div>
  return <a href={project.url} target="_blank" rel="noopener noreferrer" style={cardStyle} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>{inner}</a>
}

// ─── CONTACT INPUT ────────────────────────────────────────────────────────────

function ContactInput({ label, value, onChange, placeholder, type = 'text', invalid = false }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string; invalid?: boolean }) {
  return (
    <div>
      <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: invalid ? '#e05a5a' : 'var(--muted)', marginBottom: '0.45rem', transition: 'color 0.2s' }}>{label}{invalid ? ' — enter a valid email' : ''}</label>
      <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        style={{ width: '100%', background: 'var(--bg2)', border: `1px solid ${invalid ? '#e05a5a55' : 'var(--line)'}`, color: 'var(--text)', fontSize: '0.92rem', padding: '0.85rem 1.1rem', fontFamily: "'Outfit', sans-serif", borderRadius: '2px', outline: 'none', transition: 'border-color 0.2s' }}
        onFocus={e => { if (!invalid) e.currentTarget.style.borderColor = 'var(--teal)' }}
        onBlur={e => { e.currentTarget.style.borderColor = invalid ? '#e05a5a55' : 'var(--line)' }}
      />
    </div>
  )
}
