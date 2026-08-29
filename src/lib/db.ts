import { INITIAL_CAMPAIGNS } from '@/src/data/initialData';
import { Campaign, ContactMessage, VolunteerApplication } from '@/src/types';

// Global singleton state for in-memory persistence in development and serverless runtime
declare global {
  var __netaji_db: {
    campaigns: Campaign[];
    contactMessages: ContactMessage[];
    volunteerApplications: VolunteerApplication[];
  } | undefined;
}

if (!globalThis.__netaji_db) {
  globalThis.__netaji_db = {
    campaigns: [...INITIAL_CAMPAIGNS],
    contactMessages: [],
    volunteerApplications: []
  };
}

export const db = globalThis.__netaji_db;

