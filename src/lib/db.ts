import { INITIAL_CAMPAIGNS, INITIAL_REPORTS } from '@/src/data/initialData';
import { Campaign, Donation, FinancialReport, ContactMessage, VolunteerApplication } from '@/src/types';

// Global singleton state for in-memory persistence in development and serverless runtime
declare global {
  var __netaji_db: {
    campaigns: Campaign[];
    reports: FinancialReport[];
    donations: Donation[];
    contactMessages: ContactMessage[];
    volunteerApplications: VolunteerApplication[];
  } | undefined;
}

if (!globalThis.__netaji_db) {
  globalThis.__netaji_db = {
    campaigns: [...INITIAL_CAMPAIGNS],
    reports: [...INITIAL_REPORTS],
    donations: [
      {
        id: 'd-101',
        campaignId: 'c1',
        campaignTitle: 'Rural Literacy Initiative',
        amount: 2500,
        fullName: 'Priya Sharma',
        email: 'priya.sharma@example.in',
        createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
        receiptNumber: 'NF-2026-88421',
        paymentMethod: 'UPI / Razorpay (SSL Encrypted)'
      },
      {
        id: 'd-102',
        campaignId: 'c2',
        campaignTitle: 'Clean Water & Handpump Access',
        amount: 5000,
        fullName: 'Rajesh Kumar',
        email: 'rajesh.k@example.org.in',
        createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
        receiptNumber: 'NF-2026-88422',
        paymentMethod: 'NetBanking / Razorpay'
      }
    ],
    contactMessages: [],
    volunteerApplications: []
  };
}

export const db = globalThis.__netaji_db;
