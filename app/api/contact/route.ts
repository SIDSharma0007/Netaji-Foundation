import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/src/lib/db';
import { ContactMessage } from '@/src/types';
import { sendContactEmail } from '@/src/lib/email';
import { checkRateLimit, getClientIp } from '@/src/lib/rateLimit';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    // 1. IP Rate Limiting Guard
    const clientIp = getClientIp(request);
    const rateLimit = checkRateLimit(`contact_${clientIp}`, 5, 10 * 60 * 1000);

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
    const { firstName, lastName, email, subject, message, botcheck, website_hp } = body;

    // 2. Anti-Spam Honeypot Verification
    if (botcheck || website_hp) {
      // Silently accept without action to thwart bot heuristics
      return NextResponse.json(
        { message: 'Your message has been received! We will respond promptly.' },
        { status: 200 }
      );
    }

    // 3. String Sanitization & Bound Enforcement
    const trimmedFirstName = String(firstName || '').trim();
    const trimmedLastName = String(lastName || '').trim();
    const trimmedEmail = String(email || '').trim().toLowerCase();
    const trimmedSubject = String(subject || 'General Inquiry').trim();
    const trimmedMessage = String(message || '').trim();

    if (!trimmedFirstName || !trimmedEmail || !trimmedMessage) {
      return NextResponse.json(
        { error: 'First name, email, and message are required.' },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(trimmedEmail)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    if (trimmedFirstName.length > 100 || trimmedLastName.length > 100) {
      return NextResponse.json(
        { error: 'Name must not exceed 100 characters.' },
        { status: 400 }
      );
    }

    if (trimmedSubject.length > 150) {
      return NextResponse.json(
        { error: 'Subject must not exceed 150 characters.' },
        { status: 400 }
      );
    }

    if (trimmedMessage.length > 5000) {
      return NextResponse.json(
        { error: 'Message must not exceed 5,000 characters.' },
        { status: 400 }
      );
    }

    const newMessage: ContactMessage = {
      id: `msg-${Date.now()}`,
      firstName: trimmedFirstName,
      lastName: trimmedLastName,
      email: trimmedEmail,
      subject: trimmedSubject,
      message: trimmedMessage,
      createdAt: new Date().toISOString(),
    };

    // 4. Memory-safe array persistence
    db.contactMessages.push(newMessage);
    if (db.contactMessages.length > 500) {
      db.contactMessages.splice(0, db.contactMessages.length - 500);
    }

    // 5. Dispatch email notification
    const delivery = await sendContactEmail(newMessage);

    if (!delivery.success && !delivery.simulated) {
      return NextResponse.json(
        {
          error: 'Our messaging dispatch service is momentarily unavailable. Please email us directly at netajisubhasbosesevasamiti@gmail.com.',
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        message: 'Your message has been received! We will respond promptly.',
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process contact message. Please verify your inputs and try again.' },
      { status: 500 }
    );
  }
}

