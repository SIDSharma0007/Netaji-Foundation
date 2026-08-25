import type { Metadata } from 'next';
import { TransparencyScreen } from '@/src/components/TransparencyScreen';

export const metadata: Metadata = {
  title: 'Financial Transparency & Audited Reports | Netaji Foundation',
  description: 'Explore our fund allocation, 80G tax exemptions, capital deployment metrics, and download independently audited annual financial reports.',
};

export default function TransparencyPage() {
  return <TransparencyScreen />;
}
