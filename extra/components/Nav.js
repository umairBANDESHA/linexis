import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Nav({ back }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0,
      zIndex: 500,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '1.4rem 5vw',
      background: scrolled ? 'rgba(8,10,11,0.97)' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--line)' : 'none',
      transition: 'background 0.3s, border 0.3s'
    }}>
      <Link href="/" style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: '1.5rem',
        letterSpacing: '0.12em',
        color: 'var(--white)',
        textDecoration: 'none'
      }}>
        <span style={{ color: 'var(--teal)' }}>LINEXIS</span> STUDIO
      </Link>

      {back ? (
        <Link href="/#work" style={{
          display: 'flex', alignItems: 'center', gap: '0.6rem',
          fontSize: '0.78rem', fontWeight: 500,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          color: 'var(--muted)', textDecoration: 'none',
          transition: 'color 0.2s'
        }}
        onMouseEnter={e => e.currentTarget.style.color = 'var(--teal)'}
        onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
        >← All Work</Link>
      ) : (
        <ul style={{
          display: 'flex', alignItems: 'center',
          gap: '2.5rem', listStyle: 'none'
        }}>
          {[['#services','Services'],['#work','Work'],['#studio','Studio'],['#contact','Start a Project']].map(([href, label]) => (
            <li key={href}>
              <a href={href} style={{
                color: label === 'Start a Project' ? 'var(--teal)' : 'var(--muted)',
                textDecoration: 'none',
                fontSize: '0.8rem', fontWeight: 500,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                border: label === 'Start a Project' ? '1px solid var(--line-teal)' : 'none',
                padding: label === 'Start a Project' ? '0.5rem 1.25rem' : '0',
                borderRadius: '1px',
                transition: 'color 0.2s, background 0.2s'
              }}
              onMouseEnter={e => {
                if (label === 'Start a Project') { e.currentTarget.style.background = 'var(--teal)'; e.currentTarget.style.color = '#000' }
                else e.currentTarget.style.color = 'var(--white)'
              }}
              onMouseLeave={e => {
                if (label === 'Start a Project') { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--teal)' }
                else e.currentTarget.style.color = 'var(--muted)'
              }}
              >{label}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
