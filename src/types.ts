export type PageTab = 'home' | 'about' | 'campaigns' | 'contact';

export interface Campaign {
  id: string;
  title: string;
  category: 'Education' | 'Health' | 'Environment' | 'Livelihood';
  description: string;
  imageUrl: string;
  imageAlt?: string;
  location: string;
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
