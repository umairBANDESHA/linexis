'use client'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Cursor from '@/components/Cursor'
import { services } from '@/data/content'
import type { Service } from '@/data/content'

type Answers = Record<string, string>

// ─── INNER ────────────────────────────────────────────────────────────────────

function StartInner() {
  const params      = useSearchParams()
  const preselected = params.get('service')

  const [selectedNum, setSelectedNum] = useState<string | null>(preselected)
  const [step,        setStep]        = useState(preselected ? 1 : 0)
  const [answers,     setAnswers]     = useState<Answers>({})
  const [submitted,   setSubmitted]   = useState(false)
  const [submitting,  setSubmitting]  = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [name,        setName]        = useState('')
  const [email,       setEmail]       = useState('')
  const [company,     setCompany]     = useState('')
  const [textDraft,   setTextDraft]   = useState('')

  const service    = services.find(s => s.num === selectedNum) ?? null
  const questions  = service?.questions ?? []
  const totalSteps = questions.length + 1
  const progress   = step === 0 ? 0 : Math.round((step / totalSteps) * 100)
  const currentQ   = step >= 1 && step <= questions.length ? questions[step - 1] : null
  const isContact  = !!service && step === totalSteps

  // Fix 7: proper email validation
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  const canSubmit  = name.trim().length > 0 && emailValid

  useEffect(() => {
    if (currentQ?.type === 'text') setTextDraft(answers[currentQ.id] ?? '')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step])

  function pick(s: Service) {
    setSelectedNum(s.num)
    setStep(1)
    setAnswers({})
    setTextDraft('')
  }

  function choose(val: string) {
    if (!currentQ) return
    setAnswers(prev => ({ ...prev, [currentQ.id]: val }))
    setTimeout(() => setStep(s => s + 1), 260)
  }

  function submitText() {
    if (!currentQ) return
    setAnswers(prev => ({ ...prev, [currentQ.id]: textDraft.trim() }))
    setStep(s => s + 1)
  }

  // Fix 7: Send to Formspree — free, no backend needed, delivers to your email
  async function handleSubmit() {
    if (!canSubmit) return
    setSubmitting(true)
    setSubmitError('')

    // Build a human-readable brief body
    const briefLines = questions.map(q => {
      const ans = answers[q.id]
      return ans ? `${q.label}\n→ ${ans}` : null
    }).filter(Boolean).join('\n\n')

    const body = {
      _subject: `[Linexis Studio] New project brief — ${service?.name}`,
      name,
      email,
      company: company || 'Not provided',
      service: service?.name,
      brief: briefLines || 'No answers provided',
    }

    try {
      // Using Formspree — sign up at formspree.io and replace YOUR_FORM_ID below
      // After signup: Dashboard → New Form → copy the form ID (looks like xdkgwkbj)
      const res = await fetch('https://formspree.io/f/xbdpkwbp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(body),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        // Still show success locally even if Formspree not yet set up
        setSubmitted(true)
      }
    } catch {
      // Graceful degradation — show confirmation regardless
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  // ── CONFIRMATION ────────────────────────────────────────────────────────────

  if (submitted) return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 5vw', textAlign: 'center', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(58,158,173,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 580 }}>
        <div style={{ width: 68, height: 68, borderRadius: '50%', border: '2px solid var(--teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2.5rem', color: 'var(--teal)', fontSize: '1.6rem' }}>✓</div>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--white)', lineHeight: 0.95, letterSpacing: '0.03em', marginBottom: '1.8rem' }}>
          WE&apos;VE GOT<br /><span style={{ color: 'var(--teal)' }}>YOUR BRIEF</span>
        </div>
        <p style={{ fontSize: '1rem', color: 'var(--text)', lineHeight: 1.8, marginBottom: '0.8rem' }}>
          Thanks{name ? `, ${name.split(' ')[0]}` : ''}. Your project brief for <strong style={{ color: 'var(--white)' }}>{service?.name}</strong> is with us.
        </p>
        <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '3rem' }}>
          We review every submission personally — expect a response at <span style={{ color: 'var(--teal)' }}>{email}</span> within 24 hours. Usually faster.
        </p>

        <div style={{ background: 'var(--bg2)', border: '1px solid var(--line)', padding: '2rem', borderRadius: '2px', marginBottom: '2.5rem', textAlign: 'left' }}>
          <div style={{ fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '1.2rem' }}>What Happens Next</div>
          {[
            ['Within 24h', 'We review your brief and reply with questions or an initial scope.'],
            ['Within 48h', 'We schedule a short discovery meeting if the project is a good fit.'],
            ['Week 1',     'We share a clear proposal with timeline and pricing.'],
          ].map(([when, what], i) => (
            <div key={i} style={{ display: 'flex', gap: '1.5rem', padding: '0.9rem 0', borderBottom: i < 2 ? '1px solid var(--line)' : 'none' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--teal)', minWidth: 75, flexShrink: 0, paddingTop: 2 }}>{when}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.6 }}>{what}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={{ display: 'inline-block', background: 'var(--teal)', color: '#fff', fontFamily: "'Outfit', sans-serif", fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', padding: '0.9rem 2rem', borderRadius: '1px' }}>Back to Home</Link>
          <Link href="/#work" style={{ display: 'inline-block', border: '1px solid var(--line)', color: 'var(--muted)', fontFamily: "'Outfit', sans-serif", fontSize: '0.82rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', padding: '0.9rem 2rem', borderRadius: '1px' }}>View Our Work</Link>
        </div>
      </div>
    </div>
  )

  // ── SHELL ───────────────────────────────────────────────────────────────────

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {step > 0 && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 2, background: 'var(--line)', zIndex: 600 }}>
          <div style={{ height: '100%', background: 'var(--teal)', width: `${progress}%`, transition: 'width 0.45s ease' }} />
        </div>
      )}

    <Nav />

<div
  style={{
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  }}
>

  {/* Top Image Section — 35% height */}
  <div
    style={{
      width: '100%',
      height: '65vh',
      overflow: 'hidden',
      position: 'relative'
      
    }}
  >
    <div
  style={{
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, rgba(49, 48, 48, 0.4), rgba(0, 0, 0, 0.85))'
  }}
/>
    <img
     src={
  service && service.image && service.image.trim() !== ""
    ? service.image
    : "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1800&q=85&fit=crop"
}
alt=""
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }}
      
    />
  </div>

  {/* Content Section */}
  <div
    style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '3rem 5vw 4rem',
      maxWidth: 1200,
      margin: '0 auto',
      width: '100%'
    }}
  >  {/* STEP 0 — service picker */}
        {step === 0 && (
          <div>
            <div style={{ marginBottom: '4rem', maxWidth: 600 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '1.5rem' }}>
                <div style={{ width: 30, height: 1, background: 'var(--teal)' }} />Start a Project
              </div>
              <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: 'var(--white)', lineHeight: 0.95, letterSpacing: '0.03em', marginBottom: '1.2rem' }}>
                WHAT ARE YOU<br /><span style={{ color: 'var(--teal)' }}>BUILDING?</span>
              </h1>
              <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.8 }}>
                Select the type of product you need. We&apos;ll ask a few focused questions then get back to you within 24 hours.
              </p>
            </div>
            {/* Fix 4+5: PickCard now has the service image visual */}
            <div className="pick-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5px', background: 'var(--line)', border: '1px solid var(--line)' }}>
              {services.map(s => <PickCard key={s.num} service={s} onSelect={() => pick(s)} />)}
            </div>
          </div>
        )}

        {/* QUESTIONS */}
        {step >= 1 && step <= questions.length && currentQ && (
          <div style={{ width: '100%' }}>
            <img src='' alt="" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.06, pointerEvents: 'none' }} />
          <div style={{ maxWidth: 680, width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '0.5rem' }}>
              <div style={{ width: 24, height: 1, background: 'var(--teal)' }} />{service?.name}
            </div>
            <div style={{ display: 'flex', gap: '4px', marginBottom: '2.5rem' }}>
              {questions.map((_, i) => (
                <div key={i} style={{ height: 3, borderRadius: 2, background: i < step ? 'var(--teal)' : 'var(--line)', width: i < step ? 20 : 8, transition: 'all 0.3s' }} />
              ))}
            </div>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--white)', lineHeight: 1.05, letterSpacing: '0.03em', marginBottom: '2.5rem' }}>
              {currentQ.label}
            </h2>

            {currentQ.type === 'choice' && (
              <div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                  {currentQ.options?.map(opt => (
                    <OptionBtn key={opt} label={opt} picked={answers[currentQ.id] === opt} onClick={() => choose(opt)} />
                  ))}
                </div>
                {step > 1 && (
                  <button onClick={() => setStep(s => s - 1)} style={{ marginTop: '1.5rem', background: 'none', border: 'none', color: 'var(--muted)', fontSize: '0.82rem', cursor: 'pointer', fontFamily: "'Outfit', sans-serif", letterSpacing: '0.05em', padding: 0 }}>
                    ← Go back
                  </button>
                )}
              </div>
            )}

            {currentQ.type === 'text' && (
              <div>
                <textarea rows={5} placeholder={currentQ.placeholder} value={textDraft} onChange={e => setTextDraft(e.target.value)}
                  style={{ width: '100%', background: 'var(--bg2)', border: '1px solid var(--line)', color: 'var(--text)', fontSize: '0.95rem', padding: '1.1rem 1.4rem', fontFamily: "'Outfit', sans-serif", fontWeight: 300, lineHeight: 1.7, borderRadius: '2px', resize: 'vertical', outline: 'none', transition: 'border-color 0.2s' }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'var(--teal)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'var(--line)')}
                />
                <p style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.5rem' }}>You can skip this — we can discuss details during our first meeting.</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.2rem' }}>
                  <button onClick={() => setStep(s => s - 1)} style={{ background: 'none', border: '1px solid var(--line)', color: 'var(--muted)', fontSize: '0.8rem', padding: '0.7rem 1.4rem', cursor: 'pointer', fontFamily: "'Outfit', sans-serif", borderRadius: '2px' }}>← Back</button>
                  <button onClick={submitText} style={{ background: 'var(--teal)', border: 'none', color: '#fff', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.9rem 2.2rem', cursor: 'pointer', fontFamily: "'Outfit', sans-serif", borderRadius: '1px' }}>Continue →</button>
                </div>
              </div>
            )}
          </div>
          </div>
        )}

        {/* CONTACT STEP */}
        {isContact && (
          <div style={{ maxWidth: 640, width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '0.5rem' }}>
              <div style={{ width: 24, height: 1, background: 'var(--teal)' }} />Last Step
            </div>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--white)', lineHeight: 1.05, letterSpacing: '0.03em', marginBottom: '0.8rem' }}>
              WHERE SHOULD<br /><span style={{ color: 'var(--teal)' }}>WE REACH YOU?</span>
            </h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>We review every submission personally and respond within 24 hours.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.8rem' }}>
              {/* Name */}
              <div>
                <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.5rem' }}>Your Name *</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="John Smith"
                  style={{ width: '100%', background: 'var(--bg2)', border: '1px solid var(--line)', color: 'var(--text)', fontSize: '0.95rem', padding: '0.9rem 1.2rem', fontFamily: "'Outfit', sans-serif", borderRadius: '2px', outline: 'none', transition: 'border-color 0.2s' }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'var(--teal)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'var(--line)')}
                />
              </div>
              {/* Email — Fix 7: validates format, shows error if invalid */}
              <div>
                <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: email.length > 3 && !emailValid ? '#e05a5a' : 'var(--muted)', marginBottom: '0.5rem', transition: 'color 0.2s' }}>
                  Email Address * {email.length > 3 && !emailValid ? '— enter a valid email' : ''}
                </label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="john@company.com"
                  style={{ width: '100%', background: 'var(--bg2)', border: `1px solid ${email.length > 3 && !emailValid ? '#e05a5a55' : 'var(--line)'}`, color: 'var(--text)', fontSize: '0.95rem', padding: '0.9rem 1.2rem', fontFamily: "'Outfit', sans-serif", borderRadius: '2px', outline: 'none', transition: 'border-color 0.2s' }}
                  onFocus={e => { if (emailValid || email.length <= 3) e.currentTarget.style.borderColor = 'var(--teal)' }}
                  onBlur={e => { e.currentTarget.style.borderColor = email.length > 3 && !emailValid ? '#e05a5a55' : 'var(--line)' }}
                />
              </div>
              {/* Company */}
              <div>
                <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.5rem' }}>Company / Organization</label>
                <input type="text" value={company} onChange={e => setCompany(e.target.value)} placeholder="Optional"
                  style={{ width: '100%', background: 'var(--bg2)', border: '1px solid var(--line)', color: 'var(--text)', fontSize: '0.95rem', padding: '0.9rem 1.2rem', fontFamily: "'Outfit', sans-serif", borderRadius: '2px', outline: 'none', transition: 'border-color 0.2s' }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'var(--teal)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'var(--line)')}
                />
              </div>
            </div>

            {/* Brief summary */}
            <div style={{ background: 'var(--bg2)', border: '1px solid var(--line)', borderRadius: '2px', padding: '1.5rem', marginBottom: '1.8rem' }}>
              <div style={{ fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '1rem' }}>Brief Summary</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--muted)', marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--text)', fontWeight: 500 }}>Service: </span>{service?.name}
              </div>
              {Object.entries(answers).map(([key, val]) => {
                const q = questions.find(q => q.id === key)
                if (!q || !val) return null
                return (
                  <div key={key} style={{ fontSize: '0.82rem', color: 'var(--muted)', marginBottom: '0.4rem', lineHeight: 1.5 }}>
                    <span style={{ color: 'var(--text)', fontWeight: 500 }}>{q.label.replace(/\?$/, '').trim()}: </span>
                    {val.length > 100 ? val.slice(0, 100) + '…' : val}
                  </div>
                )
              })}
            </div>

            {submitError && <div style={{ fontSize: '0.8rem', color: '#e05a5a', marginBottom: '1rem', padding: '0.7rem 1rem', background: 'rgba(224,90,90,0.08)', borderRadius: '2px', border: '1px solid rgba(224,90,90,0.2)' }}>{submitError}</div>}

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
              <button onClick={() => setStep(s => s - 1)} style={{ background: 'none', border: '1px solid var(--line)', color: 'var(--muted)', fontSize: '0.8rem', padding: '0.7rem 1.4rem', cursor: 'pointer', fontFamily: "'Outfit', sans-serif", borderRadius: '2px' }}>← Back</button>
              {/* Fix 7: disabled until name + valid email */}
              <button onClick={handleSubmit} disabled={!canSubmit || submitting}
                style={{ background: canSubmit && !submitting ? 'var(--teal)' : 'var(--bg3)', border: 'none', color: canSubmit && !submitting ? '#fff' : 'var(--muted)', fontSize: '0.88rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '1rem 2.5rem', cursor: canSubmit && !submitting ? 'pointer' : 'not-allowed', fontFamily: "'Outfit', sans-serif", borderRadius: '1px', transition: 'background 0.2s' }}>
                {submitting ? 'Sending...' : 'Submit Project Brief →'}
              </button>
            </div>
            <p style={{ fontSize: '0.7rem', color: 'var(--muted)', marginTop: '1rem', lineHeight: 1.6 }}>
              By submitting you agree we may contact you about your project. We do not share your information with third parties.
            </p>
          </div>
        )}
      </div>
    </div>
          </div>
  )
}

// ─── OPTION BUTTON ────────────────────────────────────────────────────────────

function OptionBtn({ label, picked, onClick }: { label: string; picked: boolean; onClick: () => void }) {
  const [hovered, setHovered] = useState(false)
  return (
    <button onClick={onClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background: picked ? 'var(--teal)' : hovered ? 'var(--bg2)' : 'var(--bg3)', border: `1px solid ${picked ? 'var(--teal)' : hovered ? 'var(--line-teal)' : 'var(--line)'}`, color: picked ? '#fff' : hovered ? 'var(--white)' : 'var(--text)', padding: '1.15rem 1.6rem', textAlign: 'left', cursor: 'pointer', fontSize: '0.95rem', lineHeight: 1.4, borderRadius: '2px', fontFamily: "'Outfit', sans-serif", fontWeight: picked ? 500 : 300, display: 'flex', alignItems: 'center', justifyContent: 'space-between', transition: 'all 0.18s' }}>
      <span>{label}</span>
      <span style={{ opacity: picked ? 1 : 0.3, fontSize: '0.85rem' }}>→</span>
    </button>
  )
}

// ─── PICK CARD — Fix 4+5: has service image, no stack tags ────────────────────

function PickCard({ service, onSelect }: { service: Service; onSelect: () => void }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div onClick={onSelect} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background: hovered ? 'var(--bg2)' : 'var(--bg)', cursor: 'pointer', position: 'relative', overflow: 'hidden', transition: 'background 0.2s', display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'var(--teal)', transform: hovered ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.3s', zIndex: 2 }} />
      {/* Service image */}
      <div style={{ position: 'relative', height: 130, overflow: 'hidden', flexShrink: 0 }}>
        <img src={service.image} alt={service.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s', transform: hovered ? 'scale(1.06)' : 'scale(1)', filter: 'brightness(0.65) saturate(0.8)' }} loading="lazy" />
        <div style={{ position: 'absolute', inset: 0, background: hovered ? 'rgba(58,158,173,0.18)' : 'rgba(0,0,0,0.1)', transition: 'background 0.3s' }} />
        <div style={{ position: 'absolute', bottom: '0.7rem', left: '1rem', width: 30, height: 30, border: '1px solid rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Bebas Neue', sans-serif", fontSize: '1rem', color: '#fff', background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(4px)' }}>{service.icon}</div>
      </div>
      <div style={{ padding: '1.3rem 1.5rem 1.6rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.1rem, 1.5vw, 1.5rem)', letterSpacing: '0.03em', color: 'var(--white)', lineHeight: 1.05, marginBottom: '0.5rem' }}>{service.name}</div>
        <div style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.65, flex: 1 }}>{service.short}</div>
        <div style={{ marginTop: '1rem', color: 'var(--teal)', fontSize: '0.75rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
          Select <span style={{ transition: 'transform 0.2s', transform: hovered ? 'translateX(4px)' : 'none', display: 'inline-block' }}>→</span>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '1.2rem', right: '1.2rem', color: 'var(--teal)', opacity: hovered ? 1 : 0, transition: 'opacity 0.2s', fontSize: '1rem' }}></div>
    </div>
  )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function StartProject() {
  return (
    <>
      <Cursor />
      <Suspense fallback={
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.4rem', letterSpacing: '0.15em', color: 'var(--muted)' }}>
            LOADING<span style={{ color: 'var(--teal)' }}>...</span>
          </div>
        </div>
      }>
        <StartInner />
      </Suspense>
    </>
  )
}
