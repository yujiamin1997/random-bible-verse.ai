'use client';

import Link from 'next/link';
import { BookOpen, Heart } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from './LanguageContext';

export default function Header() {
  const { selectedLanguage, languages, uiTexts, setSelectedLanguage } = useLanguage();

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
  };

  return (
    <header className="bg-gradient-to-r from-primary-400 to-primary-600 shadow-lg">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-white hover:text-gold-200 transition-colors">
            <BookOpen className="w-8 h-8" />
            <span className="text-xl font-playfair font-bold">Random Bible Verse</span>
          </Link>

          {/* Navigation and Language Selector */}
          <div className="flex items-center gap-6">
            {/* Navigation Links */}
                   <div className="hidden md:flex items-center gap-6">
                     <Link 
                       href="/" 
                       className="text-white hover:text-gold-200 transition-colors font-medium"
                     >
                       {uiTexts.nav.home}
                     </Link>
                     <Link 
                       href="/topics" 
                       className="text-white hover:text-gold-200 transition-colors font-medium"
                     >
                       {uiTexts.nav.topics}
                     </Link>
                     <Link 
                       href="/about" 
                       className="text-white hover:text-gold-200 transition-colors font-medium"
                     >
                       {uiTexts.nav.about}
                     </Link>
                     <Link 
                       href="/contact" 
                       className="text-white hover:text-gold-200 transition-colors font-medium"
                     >
                       {uiTexts.nav.contact}
                     </Link>
                   </div>

            {/* Language Selector */}
            <div className="hidden md:block">
              <LanguageSelector
                languages={languages}
                selectedLanguage={selectedLanguage}
                onLanguageChange={handleLanguageChange}
                variant="compact"
              />
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden text-white hover:text-gold-200 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Hero section */}
               <div className="text-center py-12">
                 <div className="flex items-center justify-center gap-2 mb-4">
                   <Heart className="w-6 h-6 text-gold-300" />
                 </div>
                 <h1 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-4">
                   {uiTexts.hero.title}
                 </h1>
                 <p className="text-lg md:text-xl text-white text-opacity-90 max-w-2xl mx-auto">
                   {uiTexts.hero.description}
                 </p>
               </div>
      </div>
    </header>
  );
}
