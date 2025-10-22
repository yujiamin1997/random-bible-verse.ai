import { NextResponse } from 'next/server';
import { languages } from '@/lib/data';

// 获取支持的语言列表
export async function GET() {
  try {
    return NextResponse.json(languages);
  } catch (error) {
    console.error('Error fetching languages:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
