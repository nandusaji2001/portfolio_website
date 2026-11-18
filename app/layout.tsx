import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import IntroOverlay from '@/components/intro-overlay'

export const metadata: Metadata = {
  title: 'Nandu Saji Portfolio',
  description: 'Here we go again!',
  icons: {
    icon: '/favicon.ico', // favicon must be in public/ folder
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <IntroOverlay />
        {children}
      </body>
    </html>
  )
}
