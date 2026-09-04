import { INITIAL_CAMPAIGNS } from '@/src/data/initialData';
import { Campaign, ContactMessage, VolunteerApplication } from '@/src/types';

declare global {
  var __netaji_db: {
    campaigns: Campaign[];
    contactMessages: ContactMessage[];
    volunteerApplications: VolunteerApplication[];
  } | undefined;
}

const MAX_STORED_ITEMS = 500;

if (!globalThis.__netaji_db) {
  globalThis.__netaji_db = {
    campaigns: [...INITIAL_CAMPAIGNS],
    contactMessages: [],
    volunteerApplications: []
  };
} else {
  globalThis.__netaji_db.campaigns = [...INITIAL_CAMPAIGNS];
}

export const db = globalThis.__netaji_db;

export function recordContactMessage(msg: ContactMessage) {
  db.contactMessages.push(msg);
  if (db.contactMessages.length > MAX_STORED_ITEMS) {
    db.contactMessages.splice(0, db.contactMessages.length - MAX_STORED_ITEMS);
  }
}

export function recordVolunteerApplication(app: VolunteerApplication) {
  db.volunteerApplications.push(app);
  if (db.volunteerApplications.length > MAX_STORED_ITEMS) {
    db.volunteerApplications.splice(0, db.volunteerApplications.length - MAX_STORED_ITEMS);
  }
}


