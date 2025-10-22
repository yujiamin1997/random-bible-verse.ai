'use client';

import { BibleVerse, BackgroundImage } from '@/lib/data';
import { useState } from 'react';
import { useLanguage } from './LanguageContext';

interface VerseDisplayProps {
  verse: BibleVerse;
  background?: BackgroundImage | null;
  isLoading?: boolean;
}

export default function VerseDisplay({ verse, background, isLoading }: VerseDisplayProps) {
  const { uiTexts } = useLanguage();
  const [showAnnotation, setShowAnnotation] = useState(false);


  return (
    <div className="relative">
      <div
        className="relative rounded-2xl overflow-hidden shadow-2xl min-h-[400px] flex flex-col justify-center items-center p-8 text-center"
        style={{
          backgroundImage: background ? `url(${background.url})` : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* 背景遮罩 */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* 内容 */}
        <div className="relative z-10 max-w-4xl mx-auto">

          {/* 圣经片段文本 */}
          <div className="mb-6">
            <p className="text-2xl md:text-3xl lg:text-4xl font-playfair font-semibold text-white leading-relaxed mb-4 drop-shadow-lg">
              "{verse.text}"
            </p>
            <p className="text-lg md:text-xl text-white font-medium drop-shadow-md">
              — {verse.reference}
            </p>
          </div>

          {/* Topic标签 */}
          {verse.topics && verse.topics.length > 0 && (
            <div className="mb-4 flex flex-wrap justify-center gap-2">
              {verse.topics.map((topic, index) => (
                <span 
                  key={index}
                  className="inline-block px-4 py-2 bg-white bg-opacity-20 text-white rounded-full text-sm font-medium backdrop-blur-sm"
                >
                  {topic.charAt(0).toUpperCase() + topic.slice(1)}
                </span>
              ))}
            </div>
          )}

          {/* 注解切换按钮 */}
          <button
            onClick={() => setShowAnnotation(!showAnnotation)}
            className="text-white text-sm underline hover:no-underline transition-all duration-200"
          >
            {showAnnotation ? `Hide ${uiTexts.verseDisplay.annotation}` : `Show ${uiTexts.verseDisplay.annotation}`}
          </button>

          {/* 注解内容 */}
          {showAnnotation && verse.annotation && (
            <div className="mt-4 p-4 bg-white bg-opacity-20 rounded-lg backdrop-blur-sm">
              <p className="text-white text-sm leading-relaxed">
                {verse.annotation}
              </p>
            </div>
          )}

          {/* AI生成标识 */}
          {verse.isAIGenerated && (
            <div className="mt-4">
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-xs font-medium">
                AI Generated
              </span>
            </div>
          )}
        </div>

        {/* 加载状态 */}
        {isLoading && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"></div>
              <p>{uiTexts.verseDisplay.loading}</p>
            </div>
          </div>
        )}
      </div>

      {/* 背景图片信息 */}
      {background && (
        <div className="mt-2 text-center">
          <p className="text-sm text-gray-500">
            Background: {background.description}
          </p>
        </div>
      )}
    </div>
  );
}
