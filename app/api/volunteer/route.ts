import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/src/lib/db';
import { VolunteerApplication } from '@/src/types';
import { sendVolunteerEmail } from '@/src/lib/email';
import { checkRateLimit, getClientIp } from '@/src/lib/rateLimit';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    // 1. IP Rate Limiting Guard
    const clientIp = getClientIp(request);
    const rateLimit = checkRateLimit(`volunteer_${clientIp}`, 5, 10 * 60 * 1000);

    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: `Too many submissions. Please try again in ${rateLimit.retryAfterSeconds} seconds.` },
        {
          status: 429,
          headers: { 'Retry-After': String(rateLimit.retryAfterSeconds) },
        }
      );
    }

    const body = await request.json();
    const { fullName, email, phone, interestArea, availability, notes, botcheck, website_hp } = body;

    // 2. Anti-Spam Honeypot Verification
    if (botcheck || website_hp) {
      // Silently accept without action to thwart bot heuristics
      return NextResponse.json(
        { message: 'Volunteer application submitted successfully! Welcome to Netaji Subhash Chandra Bose Seva Samity.' },
        { status: 200 }
      );
    }

    // 3. String Sanitization & Bound Enforcement
    const trimmedFullName = String(fullName || '').trim();
    const trimmedEmail = String(email || '').trim().toLowerCase();
    const trimmedPhone = String(phone || '').trim();
    const trimmedInterest = String(interestArea || 'General Support').trim();
    const trimmedAvailability = String(availability || 'Flexible').trim();
    const trimmedNotes = notes ? String(notes).trim() : undefined;

    if (!trimmedFullName || !trimmedEmail) {
      return NextResponse.json(
        { error: 'Full name and email are required for volunteer signup.' },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(trimmedEmail)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    if (trimmedFullName.length > 100) {
      return NextResponse.json(
        { error: 'Full name must not exceed 100 characters.' },
        { status: 400 }
      );
    }

    if (trimmedPhone.length > 25) {
      return NextResponse.json(
        { error: 'Phone number must not exceed 25 characters.' },
        { status: 400 }
      );
    }

    if (trimmedInterest.length > 100 || trimmedAvailability.length > 100) {
      return NextResponse.json(
        { error: 'Selection parameters exceed allowed limit.' },
        { status: 400 }
      );
    }

    if (trimmedNotes && trimmedNotes.length > 2000) {
      return NextResponse.json(
        { error: 'Notes must not exceed 2,000 characters.' },
        { status: 400 }
      );
    }

    const application: VolunteerApplication = {
      id: `vol-${Date.now()}`,
      fullName: trimmedFullName,
      email: trimmedEmail,
      phone: trimmedPhone,
      interestArea: trimmedInterest,
      availability: trimmedAvailability,
      notes: trimmedNotes,
      createdAt: new Date().toISOString(),
    };

    // 4. Memory-safe array persistence
    db.volunteerApplications.push(application);
    if (db.volunteerApplications.length > 500) {
      db.volunteerApplications.splice(0, db.volunteerApplications.length - 500);
    }

    // 5. Dispatch email notification
    const delivery = await sendVolunteerEmail(application);

    if (!delivery.success && !delivery.simulated) {
      return NextResponse.json(
        {
          error: 'Our registration dispatch service is momentarily unavailable. Please contact our office directly at +91 7667936652.',
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        message: 'Volunteer application submitted successfully! Welcome to Netaji Subhash Chandra Bose Seva Samity.',
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to submit volunteer application. Please verify your inputs and try again.' },
      { status: 500 }
    );
  }
}

