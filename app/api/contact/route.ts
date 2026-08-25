import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/src/lib/db';
import { ContactMessage } from '@/src/types';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, subject, message } = body;

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: 'First name, email, and message are required.' },
        { status: 400 }
      );
    }

    const newMessage: ContactMessage = {
      id: `msg-${Date.now()}`,
      firstName,
      lastName: lastName || '',
      email,
      subject: subject || 'General Inquiry',
      message,
      createdAt: new Date().toISOString(),
    };

    db.contactMessages.push(newMessage);

    return NextResponse.json(
      {
        message: 'Your message has been received! We will respond promptly.',
        contactMessage: newMessage,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process contact message' },
      { status: 500 }
    );
  }
}
