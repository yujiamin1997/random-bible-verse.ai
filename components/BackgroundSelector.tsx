'use client';

import { RefreshCw } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface BackgroundSelectorProps {
  onBackgroundChange: () => void;
}

export default function BackgroundSelector({ onBackgroundChange }: BackgroundSelectorProps) {
  const { uiTexts } = useLanguage();
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-2">
        {uiTexts.controls.background}
      </label>
      <button
        onClick={onBackgroundChange}
        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 font-medium flex items-center justify-center gap-2"
      >
        <RefreshCw className="w-4 h-4" />
        {uiTexts.backgroundSelector.randomBackground}
      </button>
    </div>
  );
}
