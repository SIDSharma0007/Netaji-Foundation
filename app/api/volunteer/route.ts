import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/src/lib/db';
import { VolunteerApplication } from '@/src/types';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, phone, interestArea, availability, notes } = body;

    if (!fullName || !email) {
      return NextResponse.json(
        { error: 'Full name and email are required for volunteer signup.' },
        { status: 400 }
      );
    }

    const application: VolunteerApplication = {
      id: `vol-${Date.now()}`,
      fullName,
      email,
      phone: phone || '',
      interestArea: interestArea || 'General Support',
      availability: availability || 'Flexible',
      notes,
      createdAt: new Date().toISOString(),
    };

    db.volunteerApplications.push(application);

    return NextResponse.json(
      {
        message: 'Volunteer application submitted successfully! Welcome to Netaji Foundation.',
        application,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to submit volunteer application' },
      { status: 500 }
    );
  }
}
