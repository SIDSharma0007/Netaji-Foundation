import type { Metadata } from 'next';
import { CampaignsScreen } from '@/src/components/CampaignsScreen';

export const metadata: Metadata = {
  title: 'Active Campaigns | Netaji Foundation',
  description: 'Explore ongoing community development initiatives and directly fund sustainable development projects across India.',
};

export default function CampaignsPage() {
  return <CampaignsScreen />;
}
