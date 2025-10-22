'use client';

import { useState } from 'react';
import { Sparkles, Image, Type } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface AIGeneratorProps {
  onGenerate: (prompt: string, type: 'verse' | 'background') => void;
  isLoading: boolean;
}

export default function AIGenerator({ onGenerate, isLoading }: AIGeneratorProps) {
  const { uiTexts } = useLanguage();
  const [prompt, setPrompt] = useState('');
  const [generationType, setGenerationType] = useState<'verse' | 'background'>('verse');

  const handleGenerate = () => {
    if (prompt.trim()) {
      onGenerate(prompt.trim(), generationType);
      setPrompt('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleGenerate();
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-5 h-5 text-purple-500" />
        <h3 className="text-lg font-semibold text-gray-800">{uiTexts.aiGenerator.title}</h3>
      </div>

      <div className="space-y-4">
        {/* 生成类型选择 */}
        <div className="flex gap-2">
          <button
            onClick={() => setGenerationType('verse')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
              generationType === 'verse'
                ? 'bg-purple-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Type className="w-4 h-4" />
            Generate Verse
          </button>
          <button
            onClick={() => setGenerationType('background')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
              generationType === 'background'
                ? 'bg-purple-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Image className="w-4 h-4" />
            Generate Background
          </button>
        </div>

        {/* 输入框 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Prompt
          </label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={
              generationType === 'verse'
                ? 'Describe the type of Bible verse you want (e.g., "about hope and healing", "encouraging words for difficult times")'
                : 'Describe the background image you want (e.g., "peaceful mountain landscape", "warm sunset over ocean")'
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
            rows={3}
            disabled={isLoading}
          />
        </div>

        {/* 生成按钮 */}
        <div className="flex justify-end">
          <button
            onClick={handleGenerate}
            disabled={!prompt.trim() || isLoading}
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                Generate
              </>
            )}
          </button>
        </div>

        {/* 提示信息 */}
        <div className="text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
          <p className="font-medium mb-1">Tips:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Be specific about the mood or theme you want</li>
            <li>For verses: mention topics like "love", "hope", "comfort", "strength"</li>
            <li>For backgrounds: describe colors, mood, or specific elements</li>
            <li>Press Enter to generate quickly</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
