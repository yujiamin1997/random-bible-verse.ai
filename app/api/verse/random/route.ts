import { NextRequest, NextResponse } from 'next/server';
import { 
  getRandomVerse, 
  getRandomBackgroundImage, 
  getVersesByTopic, 
  getTopicsByLanguage,
  bibleVerses,
  backgroundImages,
  topics,
  languages 
} from '@/lib/data';

// 获取随机圣经片段
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const language = searchParams.get('language') || 'en';
    const topic = searchParams.get('topic') || undefined;
    
    const verse = getRandomVerse(language, topic);
    
    if (!verse) {
      return NextResponse.json(
        { error: 'No verse found for the specified criteria' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(verse);
  } catch (error) {
    console.error('Error fetching random verse:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// 获取随机背景图片
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { category } = body;
    
    const image = getRandomBackgroundImage(category);
    
    if (!image) {
      return NextResponse.json(
        { error: 'No background image found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(image);
  } catch (error) {
    console.error('Error fetching background image:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
