import type { Metadata } from 'next';
import { AboutScreen } from '@/src/components/AboutScreen';

export const metadata: Metadata = {
  title: 'About Our History & Leadership | Netaji Subhash Chandra Bose Seva Samity',
  description: 'Established in 2002 by Chairperson Goutam Dey in Jamshedpur, Jharkhand. Discover our founding story, leadership, and grassroots welfare initiatives.',
};

export default function AboutPage() {
  return <AboutScreen />;
}
