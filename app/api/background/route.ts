import { NextRequest, NextResponse } from 'next/server';
import { getRandomBackgroundImage, backgroundImages } from '@/lib/data';

// 获取随机背景图片
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category') || undefined;
    
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

// 获取随机背景图片 (POST方法)
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
