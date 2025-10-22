'use client';

import { Topic } from '@/lib/data';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from './LanguageContext';

interface TopicSelectorProps {
  topics: Topic[];
  selectedTopic: string;
  onTopicChange: (topic: string) => void;
}

export default function TopicSelector({ topics, selectedTopic, onTopicChange }: TopicSelectorProps) {
  const { uiTexts } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleTopicSelect = (topicId: string) => {
    onTopicChange(topicId);
    setIsOpen(false);
  };

  const selectedTopicData = topics.find(topic => topic.id === selectedTopic);

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {uiTexts.controls.topic}
      </label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-3 text-left bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 flex items-center justify-between hover:border-primary-400 transition-colors"
        >
          <span className="truncate">
            {selectedTopicData ? selectedTopicData.nameEn : uiTexts.topicSelector.allTopics}
          </span>
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
            <button
              type="button"
              onClick={() => handleTopicSelect('')}
              className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                selectedTopic === '' ? 'bg-primary-50 text-primary-700' : 'text-gray-700'
              }`}
            >
              {uiTexts.topicSelector.allTopics}
            </button>
            {topics.map((topic) => (
              <button
                key={topic.id}
                type="button"
                onClick={() => handleTopicSelect(topic.id)}
                className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center ${
                  selectedTopic === topic.id ? 'bg-primary-50 text-primary-700' : 'text-gray-700'
                }`}
              >
                <div
                  className="w-3 h-3 rounded-full mr-3 flex-shrink-0"
                  style={{ backgroundColor: topic.color }}
                ></div>
                <div>
                  <div className="font-medium">{topic.nameEn}</div>
                  <div className="text-xs text-gray-500">{topic.name}</div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
