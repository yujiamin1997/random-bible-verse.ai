import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Random Bible Verse Generator - AI Powered Daily Inspiration',
    template: '%s | Random Bible Verse Generator'
  },
  description: 'Get daily spiritual inspiration with our AI-powered random Bible verse generator. Features multiple languages, topics, and beautiful backgrounds.',
  keywords: ['bible verse generator', 'random bible quotes', 'spiritual inspiration', 'daily devotion', 'AI bible verses'],
  authors: [{ name: 'Random Bible Verse Generator' }],
  creator: 'Random Bible Verse Generator',
  publisher: 'Random Bible Verse Generator',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://random-bible-verse.ai'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'zh-CN': '/zh',
      'ar-SA': '/ar',
      'es-ES': '/es',
      'pt-BR': '/pt',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://random-bible-verse.ai',
    siteName: 'Random Bible Verse Generator',
    title: 'Random Bible Verse Generator - AI Powered Daily Inspiration',
    description: 'Get daily spiritual inspiration with our AI-powered random Bible verse generator.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Random Bible Verse Generator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Random Bible Verse Generator - AI Powered Daily Inspiration',
    description: 'Get daily spiritual inspiration with our AI-powered random Bible verse generator.',
    images: ['/og-image.jpg'],
    creator: '@randombibleverse',
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6ba3d0" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
