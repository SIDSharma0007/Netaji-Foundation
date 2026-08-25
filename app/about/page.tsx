import type { Metadata } from 'next';
import { AboutScreen } from '@/src/components/AboutScreen';

export const metadata: Metadata = {
  title: 'About Our Mission | Netaji Foundation',
  description: 'Learn about the history, mission, and core values of Netaji Foundation. Rooted in integrity, driven by community.',
};

export default function AboutPage() {
  return <AboutScreen />;
}
