import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/src/lib/db';
import { Donation } from '@/src/types';

export async function GET() {
  return NextResponse.json({
    donations: db.donations,
    totalDonations: db.donations.reduce((sum, d) => sum + d.amount, 0),
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { campaignId, amount, fullName, email, paymentMethod } = body;

    if (!amount || Number(amount) <= 0 || !fullName || !email) {
      return NextResponse.json(
        { error: 'Please provide valid donation details.' },
        { status: 400 }
      );
    }

    const numericAmount = Number(amount);
    const targetCampaign = db.campaigns.find((c) => c.id === campaignId);

    if (targetCampaign) {
      targetCampaign.raisedAmount += numericAmount;
      targetCampaign.donorsCount += 1;
      targetCampaign.percentage = Math.min(
        100,
        Math.round((targetCampaign.raisedAmount / targetCampaign.goalAmount) * 100)
      );
    }

    const receiptNumber = `NF-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;

    const newDonation: Donation = {
      id: `d-${Date.now()}`,
      campaignId: targetCampaign ? targetCampaign.id : undefined,
      campaignTitle: targetCampaign ? targetCampaign.title : 'General Foundation Fund',
      amount: numericAmount,
      fullName,
      email,
      createdAt: new Date().toISOString(),
      receiptNumber,
      paymentMethod: paymentMethod || 'Credit Card (SSL Encrypted)',
    };

    db.donations.unshift(newDonation);

    return NextResponse.json(
      {
        message: 'Donation processed successfully. Thank you for supporting Netaji Foundation!',
        donation: newDonation,
        updatedCampaign: targetCampaign,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process donation request' },
      { status: 500 }
    );
  }
}
