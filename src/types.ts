export type PageTab = 'home' | 'about' | 'campaigns' | 'transparency' | 'donate' | 'contact';

export interface Campaign {
  id: string;
  title: string;
  category: 'Education' | 'Health' | 'Environment' | 'Livelihood';
  description: string;
  imageUrl: string;
  imageAlt?: string;
  goalAmount: number;
  raisedAmount: number;
  percentage: number;
  donorsCount: number;
  location: string;
}

export interface Donation {
  id: string;
  campaignId?: string;
  campaignTitle?: string;
  amount: number;
  fullName: string;
  email: string;
  createdAt: string;
  receiptNumber: string;
  paymentMethod: string;
}

export interface FinancialReport {
  id: string;
  year: number;
  title: string;
  description: string;
  downloadCount: number;
  fileSize: string;
  url: string;
}

export interface VolunteerApplication {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  interestArea: string;
  availability: string;
  notes?: string;
  createdAt: string;
}

export interface ContactMessage {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}
