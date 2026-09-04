import type { Metadata } from 'next';
import { ContactScreen } from '@/src/components/ContactScreen';

export const metadata: Metadata = {
  title: 'Contact & Volunteer | Netaji Subhash Chandra Bose Seva Samity',
  description: 'Reach out to Netaji Subhash Chandra Bose Seva Samity office in Jamshedpur, Jharkhand or apply to join our grassroots volunteer network.',
};

export default function ContactPage() {
  return <ContactScreen />;
}
