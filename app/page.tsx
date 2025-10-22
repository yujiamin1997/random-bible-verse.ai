import { Metadata } from 'next';
import HomePage from '@/components/HomePage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/components/LanguageContext';

export const metadata: Metadata = {
  title: 'Random Bible Verse Generator - AI Powered Daily Inspiration',
  description: 'Get daily spiritual inspiration with our AI-powered random Bible verse generator. Features multiple languages, topics, and beautiful backgrounds.',
  keywords: 'bible verse generator, random bible quotes, spiritual inspiration, daily devotion, AI bible verses',
  authors: [{ name: 'Random Bible Verse Generator' }],
  openGraph: {
    title: 'Random Bible Verse Generator - AI Powered Daily Inspiration',
    description: 'Get daily spiritual inspiration with our AI-powered random Bible verse generator.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Random Bible Verse Generator - AI Powered Daily Inspiration',
    description: 'Get daily spiritual inspiration with our AI-powered random Bible verse generator.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100">
        <Header />
        <HomePage />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
