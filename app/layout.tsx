import type { Metadata } from 'next'
import '../styles/globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'Menti in Fiore - Crescere Insieme con Consapevolezza',
  description: 'Guide, attività e supporto per genitori ed educatori nel viaggio della crescita infantile 0-6 anni',
  keywords: ['educazione infantile', 'child care', 'genitori', 'bambini', '0-6 anni', 'pedagogia'],
  authors: [{ name: 'Menti in Fiore' }],
  openGraph: {
    title: 'Menti in Fiore - Crescere Insieme con Consapevolezza',
    description: 'Guide, attività e supporto per genitori ed educatori nel viaggio della crescita infantile 0-6 anni',
    type: 'website',
    locale: 'it_IT',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Poppins:wght@400;600&family=Caveat:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
