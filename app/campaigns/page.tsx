import type { Metadata } from 'next';
import { CampaignsScreen } from '@/src/components/CampaignsScreen';

export const metadata: Metadata = {
  title: 'Community Welfare Campaigns | Netaji Subhash Chandra Bose Seva Samity',
  description: 'Explore active community initiatives including winter blanket distribution, blood donation camps, and poor daughters marriage assistance in Jharkhand.',
};

export default function CampaignsPage() {
  return <CampaignsScreen />;
}
