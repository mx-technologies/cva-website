import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  // return NextResponse.json('Hello world');
  return new NextResponse('No error', { status: 200 });
}
