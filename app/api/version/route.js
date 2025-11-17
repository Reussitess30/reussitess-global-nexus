import { NextResponse } from 'next/server';
export async function GET() {
  return NextResponse.json({ version: '1.0.0', date: new Date().toISOString() });
}
