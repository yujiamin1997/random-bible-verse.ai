'use client';

import { useLanguage } from './LanguageContext';
import VerseGenerator from './VerseGenerator';
import Features from './Features';

export default function HomePage() {
  const { uiTexts } = useLanguage();

  return (
    <>
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-gray-800 mb-6">
              {uiTexts.hero.subtitle}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover powerful <strong>bible verses</strong> with our AI-powered <strong>random bible verses generator</strong>. 
              Get daily spiritual inspiration, motivational scripture quotes, and uplifting biblical messages in multiple languages 
              for personal growth and faith strengthening.
            </p>
          </div>
          
          <VerseGenerator />
        </div>
      </main>
      
      <Features />
    </>
  );
}
