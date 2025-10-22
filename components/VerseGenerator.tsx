'use client';

import { useState, useEffect } from 'react';
import { BibleVerse, BackgroundImage, Topic } from '@/lib/data';
import VerseDisplay from './VerseDisplay';
import TopicSelector from './TopicSelector';
import BackgroundSelector from './BackgroundSelector';
import { useLanguage } from './LanguageContext';

export default function VerseGenerator() {
  const { selectedLanguage, uiTexts } = useLanguage();
  const [currentVerse, setCurrentVerse] = useState<BibleVerse | null>(null);
  const [currentBackground, setCurrentBackground] = useState<BackgroundImage | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string>('');
  const [availableTopics, setAvailableTopics] = useState<Topic[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // 初始化数据
  useEffect(() => {
    loadTopics();
    generateRandomVerse();
    generateRandomBackground();
  }, []);

  // 当语言改变时重新加载topics和生成新片段
  useEffect(() => {
    loadTopics();
    generateRandomVerse();
  }, [selectedLanguage]);

  const loadTopics = async () => {
    try {
      const response = await fetch('/api/topics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ language: selectedLanguage }),
      });
      const data = await response.json();
      setAvailableTopics(data);
    } catch (error) {
      console.error('Error loading topics:', error);
    }
  };

  const generateRandomVerse = async () => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams({
        language: selectedLanguage,
        ...(selectedTopic && { topic: selectedTopic }),
      });
      
      const response = await fetch(`/api/verse/random?${params}`);
      const data = await response.json();
      
      if (response.ok) {
        setCurrentVerse(data);
      } else {
        console.error('Error generating verse:', data.error);
      }
    } catch (error) {
      console.error('Error generating verse:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const generateRandomBackground = async () => {
    try {
      const response = await fetch('/api/background', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });
      const data = await response.json();
      
      if (response.ok) {
        setCurrentBackground(data);
      } else {
        console.error('Error generating background:', data.error);
      }
    } catch (error) {
      console.error('Error generating background:', error);
    }
  };

  const handleTopicChange = (topic: string) => {
    setSelectedTopic(topic);
  };


  return (
    <div className="space-y-8">
      {/* 圣经片段显示 */}
      {currentVerse && (
        <VerseDisplay
          verse={currentVerse}
          background={currentBackground}
          isLoading={isLoading}
        />
      )}
      {/* 控制面板 */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        {/* 第一行：Background选择器 */}
        <div className="mb-4">
          <BackgroundSelector
            onBackgroundChange={generateRandomBackground}
          />
        </div>
        
        {/* 第二行：Topic选择器 */}
        <div className="mb-4">
          <TopicSelector
            topics={availableTopics}
            selectedTopic={selectedTopic}
            onTopicChange={handleTopicChange}
          />
        </div>
        
        {/* 第三行：Generate New Verse按钮 */}
        <div>
          <button
            onClick={generateRandomVerse}
            disabled={isLoading}
            className="w-full px-8 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-xl hover:from-gold-600 hover:to-gold-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                {uiTexts.controls.generating}
              </div>
            ) : (
              uiTexts.controls.generateNewVerse
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
