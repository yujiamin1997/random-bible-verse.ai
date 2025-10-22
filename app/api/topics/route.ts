import { NextRequest, NextResponse } from 'next/server';
import { getVersesByTopic, getTopicsByLanguage } from '@/lib/data';

// 根据topic获取圣经片段
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const topic = searchParams.get('topic');
    const language = searchParams.get('language') || 'en';
    
    if (!topic) {
      return NextResponse.json(
        { error: 'Topic parameter is required' },
        { status: 400 }
      );
    }
    
    const verses = getVersesByTopic(topic, language);
    
    return NextResponse.json(verses);
  } catch (error) {
    console.error('Error fetching verses by topic:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// 获取所有可用的topics
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { language } = body;
    
    const availableTopics = getTopicsByLanguage(language || 'en');
    
    return NextResponse.json(availableTopics);
  } catch (error) {
    console.error('Error fetching topics:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
