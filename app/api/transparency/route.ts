import { NextResponse } from 'next/server';
import { db } from '@/src/lib/db';

export async function GET() {
  const totalRaised = db.campaigns.reduce((acc, c) => acc + c.raisedAmount, 0) + 250000000;
  return NextResponse.json({
    metrics: {
      totalRaisedFormatted: `₹25 Cr+`,
      livesImpactedFormatted: '50K+',
      activeProjectsCount: db.campaigns.length + 120,
      fundAllocation2023: {
        programs: 80,
        admin: 12,
        fundraising: 8,
      },
    },
    reports: db.reports,
  });
}
