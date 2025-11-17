import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    version: 'reussitess-v1.0.0',
    buildDate: new Date().toISOString(),
    features: [
      '26 boutiques Amazon',
      'Compteur de visiteurs',
      'Protection anti-copie',
      'SEO optimisé',
      'Mises à jour automatiques'
    ]
  });
}
