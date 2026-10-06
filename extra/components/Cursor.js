import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const ring = ringRef.current
    if (!cursor || !ring) return

    const move = (e) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
      setTimeout(() => {
        ring.style.left = e.clientX + 'px'
        ring.style.top = e.clientY + 'px'
      }, 60)
    }

    document.addEventListener('mousemove', move)
    return () => document.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <div ref={cursorRef} style={{
        position: 'fixed', width: 8, height: 8,
        background: 'var(--teal)', borderRadius: '50%',
        pointerEvents: 'none', zIndex: 9999,
        transform: 'translate(-50%,-50%)',
        transition: 'transform 0.1s'
      }} />
      <div ref={ringRef} style={{
        position: 'fixed', width: 32, height: 32,
        border: '1px solid var(--teal-glow)', borderRadius: '50%',
        pointerEvents: 'none', zIndex: 9998,
        transform: 'translate(-50%,-50%)',
        transition: 'transform 0.15s'
      }} />
    </>
  )
}
