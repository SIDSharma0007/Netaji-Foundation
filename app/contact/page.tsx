import type { Metadata } from 'next';
import { ContactScreen } from '@/src/components/ContactScreen';

export const metadata: Metadata = {
  title: 'Contact & Volunteer | Netaji Foundation',
  description: 'Reach out to the Netaji Foundation team or apply to join our field volunteer network across India.',
};

export default function ContactPage() {
  return <ContactScreen />;
}
