import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import '@/styles/globals.css'
import { siteConfig } from '@/lib/data'
import { Header, Footer, SmoothScroll } from '@/components/layout'
import { CustomCursor } from '@/components/animations'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
})

// Cabinet Grotesk - Using system fallback as it's a premium font
// In production, you would load it from your fonts folder
const cabinet = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cabinet',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline} - Expert-Comptable Paris`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.creator,
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.creator,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${jetbrains.variable} ${cabinet.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#09090b" />
      </head>
      <body className="font-sans antialiased">
        <SmoothScroll>
          <CustomCursor />
          <div className="relative min-h-screen flex flex-col noise-overlay">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  )
}
