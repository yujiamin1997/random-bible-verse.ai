'use client';

import { BibleVerse, BackgroundImage } from '@/lib/data';
import { Download, Share2, Heart } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from './LanguageContext';

interface VerseDisplayProps {
  verse: BibleVerse;
  background?: BackgroundImage | null;
  isLoading?: boolean;
}

export default function VerseDisplay({ verse, background, isLoading }: VerseDisplayProps) {
  const { uiTexts } = useLanguage();
  const [isSaved, setIsSaved] = useState(false);
  const [showAnnotation, setShowAnnotation] = useState(false);

  const handleSave = () => {
    // TODO: 实现保存功能
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Random Bible Verse',
          text: verse.text,
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // 复制到剪贴板
      navigator.clipboard.writeText(`${verse.text}\n- ${verse.reference}`);
    }
  };

  const handleDownload = () => {
    // TODO: 实现下载为图片功能
    console.log('Download as image');
  };

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
          {/* 操作按钮 */}
          <div className="absolute top-4 right-4 flex gap-2">
            <button
              onClick={handleSave}
              className={`p-2 rounded-lg transition-all duration-200 ${
                isSaved 
                  ? 'bg-green-500 text-white' 
                  : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
              }`}
              title="Save verse"
            >
              <Heart className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
            </button>
            
            <button
              onClick={handleShare}
              className="p-2 rounded-lg bg-white bg-opacity-20 text-white hover:bg-opacity-30 transition-all duration-200"
              title="Share verse"
            >
              <Share2 className="w-5 h-5" />
            </button>
            
            <button
              onClick={handleDownload}
              className="p-2 rounded-lg bg-white bg-opacity-20 text-white hover:bg-opacity-30 transition-all duration-200"
              title="Download as image"
            >
              <Download className="w-5 h-5" />
            </button>
          </div>

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
          {verse.topic && (
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-white bg-opacity-20 text-white rounded-full text-sm font-medium backdrop-blur-sm">
                {verse.topic.charAt(0).toUpperCase() + verse.topic.slice(1)}
              </span>
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
