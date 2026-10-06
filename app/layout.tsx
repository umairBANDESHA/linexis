import type { Metadata } from 'next'
import './globals.css'
// import 

export const metadata: Metadata = {
  title: 'Linexis Studio',
  description: 'Linexis Studio designs and builds mobile apps, web platforms, ERP systems, and AI-integrated products. Based in Islamabad, working globally.',
  openGraph: {
    title: 'Linexis Studio',
    description: 'We build digital products that run real operations.',
    url: 'https://lineixsstudio.com',
    siteName: 'Linexis Studio',
    type: 'website',
  },
}

// Runs before React — prevents flash of wrong theme (FOUC)
// Default is DARK. Only add 'light' class if user has explicitly saved that preference.
const themeInitScript = `(function(){try{var t=localStorage.getItem('linexis-theme');if(t==='light')document.documentElement.classList.add('light');}catch(e){}})();`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Theme script must be first in head — blocks render until class is set */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet" />

      </head>
      <body>{children}</body>
    </html>
  )
}
