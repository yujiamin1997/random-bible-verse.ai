'use client';

import { Language } from '@/lib/data';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface LanguageSelectorProps {
  languages: Language[];
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
  variant?: 'default' | 'compact';
}

export default function LanguageSelector({ 
  languages, 
  selectedLanguage, 
  onLanguageChange, 
  variant = 'default' 
}: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageSelect = (languageCode: string) => {
    onLanguageChange(languageCode);
    setIsOpen(false);
  };

  const selectedLanguageData = languages.find(lang => lang.code === selectedLanguage);

  if (variant === 'compact') {
    return (
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="px-3 py-1 text-sm text-white hover:text-gold-200 transition-colors flex items-center gap-1 border border-white border-opacity-30 rounded-md hover:border-opacity-50"
        >
          <span className="truncate">
            {selectedLanguageData ? selectedLanguageData.code.toUpperCase() : 'EN'}
          </span>
          <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute z-50 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg min-w-32 overflow-auto">
            {languages.map((language) => (
              <button
                key={language.code}
                type="button"
                onClick={() => handleLanguageSelect(language.code)}
                className={`w-full px-3 py-2 text-left hover:bg-gray-50 transition-colors text-sm ${
                  selectedLanguage === language.code ? 'bg-primary-50 text-primary-700' : 'text-gray-700'
                }`}
              >
                <div className="font-medium">{language.nativeName}</div>
                <div className="text-xs text-gray-500">{language.name}</div>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Language
      </label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 flex items-center justify-between"
        >
          <span className="truncate">
            {selectedLanguageData ? selectedLanguageData.nativeName : 'Select Language'}
          </span>
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
            {languages.map((language) => (
              <button
                key={language.code}
                type="button"
                onClick={() => handleLanguageSelect(language.code)}
                className={`w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors ${
                  selectedLanguage === language.code ? 'bg-primary-50 text-primary-700' : 'text-gray-700'
                }`}
              >
                <div className="font-medium">{language.nativeName}</div>
                <div className="text-xs text-gray-500">{language.name}</div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
