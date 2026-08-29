import { INITIAL_CAMPAIGNS, INITIAL_REPORTS } from '@/src/data/initialData';
import { Campaign, FinancialReport, ContactMessage, VolunteerApplication } from '@/src/types';

// Global singleton state for in-memory persistence in development and serverless runtime
declare global {
  var __netaji_db: {
    campaigns: Campaign[];
    reports: FinancialReport[];
    contactMessages: ContactMessage[];
    volunteerApplications: VolunteerApplication[];
  } | undefined;
}

if (!globalThis.__netaji_db) {
  globalThis.__netaji_db = {
    campaigns: [...INITIAL_CAMPAIGNS],
    reports: [...INITIAL_REPORTS],
    contactMessages: [],
    volunteerApplications: []
  };
}

export const db = globalThis.__netaji_db;

