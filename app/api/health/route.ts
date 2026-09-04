import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    organization: 'Netaji Subhash Chandra Bose Seva Samity',
    timestamp: new Date().toISOString(),
  });
}
