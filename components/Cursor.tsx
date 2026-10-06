'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot  = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (dot.current) {
        dot.current.style.left = e.clientX + 'px'
        dot.current.style.top  = e.clientY + 'px'
      }
      setTimeout(() => {
        if (ring.current) {
          ring.current.style.left = e.clientX + 'px'
          ring.current.style.top  = e.clientY + 'px'
        }
      }, 55)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  const base: React.CSSProperties = {
    position: 'fixed', borderRadius: '50%',
    pointerEvents: 'none', zIndex: 9999,
    transform: 'translate(-50%, -50%)',
    top: 0, left: 0,
  }

  return (
    <>
      <div ref={dot} style={{ ...base, width: 8, height: 8, background: 'var(--teal)' }} />
      <div ref={ring} style={{ ...base, width: 30, height: 30, border: '1px solid var(--line-teal)', transition: 'left 0.06s, top 0.06s' }} />
    </>
  )
}
