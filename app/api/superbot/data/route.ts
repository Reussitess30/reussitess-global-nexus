import { NextResponse } from 'next/server';
import { SuperBotData } from '../../../../components/SuperBotData';

export async function GET() {
  return NextResponse.json(SuperBotData);
}
