import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/server/auth';

export async function GET(request: NextRequest) {
  const session = await auth();
  
  // Only allow authenticated users or internal requests
  if (!session?.user && process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const tag = request.nextUrl.searchParams.get('tag');
  
  if (!tag) {
    return NextResponse.json({ error: 'Missing tag parameter' }, { status: 400 });
  }

  revalidateTag(tag);
  
  return NextResponse.json({ revalidated: true, now: Date.now() });
}