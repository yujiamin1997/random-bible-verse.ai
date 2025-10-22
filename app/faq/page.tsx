import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/components/LanguageContext';
import FAQPage from '@/components/FAQPage';

export const metadata: Metadata = {
  title: 'FAQ - Random Bible Verse Generator',
  description: 'Frequently Asked Questions about Random Bible Verse Generator - Get answers to common questions about our free Bible verse tool.',
  keywords: 'bible verse generator FAQ, random bible quotes questions, spiritual inspiration help',
  authors: [{ name: 'Random Bible Verse Generator' }],
  openGraph: {
    title: 'FAQ - Random Bible Verse Generator',
    description: 'Frequently Asked Questions about Random Bible Verse Generator',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ - Random Bible Verse Generator',
    description: 'Frequently Asked Questions about Random Bible Verse Generator',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FAQ() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100">
        <Header />
        <FAQPage />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
