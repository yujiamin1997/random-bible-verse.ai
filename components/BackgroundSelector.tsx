'use client';

import { RefreshCw } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface BackgroundSelectorProps {
  onBackgroundChange: () => void;
}

export default function BackgroundSelector({ onBackgroundChange }: BackgroundSelectorProps) {
  const { uiTexts } = useLanguage();
  return (
    <div className="w-full">
      <button
        onClick={onBackgroundChange}
        className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 font-medium flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
      >
        <RefreshCw className="w-6 h-6" />
        {uiTexts.backgroundSelector.randomBackground}
      </button>
    </div>
  );
}
