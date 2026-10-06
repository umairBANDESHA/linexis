import '../styles/globals.css'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Inject Google Fonts
    const link = document.createElement('link')
    link.href = 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600&display=swap'
    link.rel = 'stylesheet'
    document.head.appendChild(link)
  }, [])

  return <Component {...pageProps} />
}
