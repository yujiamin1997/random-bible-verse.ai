'use client';

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { Language, UITexts, uiTexts } from '@/lib/data';

interface LanguageContextType {
  selectedLanguage: string;
  languages: Language[];
  uiTexts: UITexts;
  setSelectedLanguage: (language: string) => void;
  loadLanguages: () => Promise<void>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
  const [languages, setLanguages] = useState<Language[]>([]);

  const loadLanguages = async () => {
    try {
      const response = await fetch('/api/languages');
      const data = await response.json();
      setLanguages(data);
    } catch (error) {
      console.error('Error loading languages:', error);
    }
  };

  const handleLanguageChange = useCallback((language: string) => {
    setSelectedLanguage(language);
    // 保存到localStorage
    localStorage.setItem('selectedLanguage', language);
  }, []);

  useEffect(() => {
    // 从localStorage恢复语言选择
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
    }
    loadLanguages();
  }, []);

  // 获取当前语言的UI文本
  const currentUITexts = uiTexts[selectedLanguage] || uiTexts['en'];

  return (
    <LanguageContext.Provider value={{
      selectedLanguage,
      languages,
      uiTexts: currentUITexts,
      setSelectedLanguage: handleLanguageChange,
      loadLanguages
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
