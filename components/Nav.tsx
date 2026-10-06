'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Nav({ back }: { back?: boolean }) {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [isLight,   setIsLight]   = useState(false) // default DARK

  // Read saved theme on mount
  useEffect(() => {
    const saved = localStorage.getItem('linexis-theme')
    const light = saved === 'light' // only light if explicitly saved
    setIsLight(light)
    if (light) document.documentElement.classList.add('light')
    else document.documentElement.classList.remove('light')
  }, [])

  // Scroll listener
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Body scroll lock when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  function toggleTheme() {
    const next = !isLight
    setIsLight(next)
    if (next) {
      document.documentElement.classList.add('light')
      localStorage.setItem('linexis-theme', 'light')
    } else {
      document.documentElement.classList.remove('light')
      localStorage.setItem('linexis-theme', 'dark')
    }
  }

  const NAV_LINKS = [
    { l: 'Services', h: '/#services' },
    { l: 'Work',     h: '/#work'     },
    { l: 'Studio',   h: '/#studio'   },
  ]

  const navBg = scrolled || menuOpen
    ? isLight
      ? 'rgba(244,244,240,0.97)'
      : 'rgba(8,10,11,0.97)'
    : '#00000036'

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1.1rem 5vw',
        background: '#00000036',
        borderBottom: scrolled || menuOpen ? '1px solid var(--line)' : '1px solid #ffffff38',
        backdropFilter: scrolled || menuOpen ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease',
      }}>

        {/* LOGO */}
        <Link href="/" onClick={() => setMenuOpen(false)} style={{
          fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.35rem',
          letterSpacing: '0.12em', color: 'var(--white)', textDecoration: 'none',
          zIndex: 600, position: 'relative',
        }}>
          <span style={{ color: 'var(--teal)' }}>LINEXIS</span>
          <span style={{ color: 'var(--line)', margin: '0 5px' }}>·</span>
          STUDIO
        </Link>

        {back ? (
          <Link href="/" style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'black',  padding: 8, borderRadius:3, textDecoration: 'none' }}>← Back</Link>
        ) : (
          <>
            {/* DESKTOP NAV */}
            <ul id="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '2rem', listStyle: 'none' }}>
              {NAV_LINKS.map(({ l, h }) => (
                <li key={l}>
                  <a href={h} style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--white)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                  >{l}</a>
                </li>
              ))}

              {/* THEME TOGGLE */}
              <li>
                <button
                  onClick={toggleTheme}
                  aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.45rem', padding: '2px 0' }}
                >
                  <span className="theme-toggle-label" style={{ fontSize: '0.72rem', color: 'var(--muted)', userSelect: 'none' }}>
                    {isLight ? '☀' : '☾'}
                  </span>
                  <span className="theme-toggle" />
                </button>
              </li>

              <li>
                <Link href="/start" style={{ color: 'var(--teal)', textDecoration: 'none', fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', border: '1px solid var(--line-teal)', padding: '0.45rem 1.1rem', borderRadius: '1px', transition: 'all 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--teal)'; (e.currentTarget as HTMLElement).style.color = '#fff' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'var(--teal)' }}
                >Start a Project</Link>
              </li>
            </ul>

            {/* HAMBURGER — mobile only */}
            <button id="nav-burger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px', zIndex: 600, position: 'relative', display: 'none', flexDirection: 'column', gap: '5px' }}>
              <span style={{ display: 'block', width: 22, height: 2, background: 'var(--white)', borderRadius: 2, transition: 'all 0.25s', transform: menuOpen ? 'rotate(45deg) translate(4px, 5px)' : 'none' }} />
              <span style={{ display: 'block', width: 22, height: 2, background: 'var(--white)', borderRadius: 2, transition: 'all 0.25s', opacity: menuOpen ? 0 : 1 }} />
              <span style={{ display: 'block', width: 22, height: 2, background: 'var(--white)', borderRadius: 2, transition: 'all 0.25s', transform: menuOpen ? 'rotate(-45deg) translate(4px, -5px)' : 'none' }} />
            </button>
          </>
        )}
      </nav>

      {/* MOBILE FULLSCREEN MENU */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 490,
        background: isLight ? 'rgba(244,244,240,0.99)' : 'rgba(8,10,11,0.99)',
        backdropFilter: 'blur(12px)',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '2rem 8vw',
        transition: 'opacity 0.3s, transform 0.3s',
        opacity: menuOpen ? 1 : 0,
        transform: menuOpen ? 'translateY(0)' : 'translateY(-12px)',
        pointerEvents: menuOpen ? 'all' : 'none',
      }}>
        <ul style={{ listStyle: 'none', marginBottom: '2.5rem' }}>
          {[...NAV_LINKS, { l: 'Contact', h: '/#contact' }].map(({ l, h }) => (
            <li key={l} style={{ borderBottom: '1px solid var(--line)' }}>
              <a href={h} onClick={() => setMenuOpen(false)}
                style={{ display: 'block', fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 10vw, 3.5rem)', letterSpacing: '0.04em', color: 'var(--white)', textDecoration: 'none', padding: '0.85rem 0', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--teal)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--white)')}
              >{l}</a>
            </li>
          ))}
        </ul>

        {/* Theme toggle in mobile menu */}
        <button onClick={toggleTheme} aria-label="Toggle theme"
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 0', marginBottom: '1.5rem' }}>
          <span className="theme-toggle" />
          <span style={{ fontSize: '0.8rem', color: 'var(--muted)', fontFamily: "'Outfit', sans-serif" }}>
            {isLight ? 'Light mode' : 'Dark mode'}
          </span>
        </button>

        <Link href="/start" onClick={() => setMenuOpen(false)}
          style={{ display: 'inline-flex', alignSelf: 'flex-start', background: 'var(--teal)', color: '#fff', fontFamily: "'Outfit', sans-serif", fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', padding: '1rem 2rem', borderRadius: '1px' }}>
          Start a Project →
        </Link>
        <div style={{ marginTop: '2.5rem', fontSize: '0.82rem', color: 'var(--muted)' }}>contact@linexisstudio.com</div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #nav-desktop { display: none !important; }
          #nav-burger   { display: flex !important; }
          .theme-toggle-label { display: none !important; }
        }
      `}</style>
    </>
  )
}
