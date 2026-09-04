'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Campaign, PageTab } from '../types';
import { ArrowRight, MapPin } from 'lucide-react';
import { useModal } from '../context/ModalContext';

interface HomeScreenProps {
  campaigns?: Campaign[];
  setActiveTab?: (tab: PageTab) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  campaigns: propCampaigns,
  setActiveTab: propSetActiveTab,
}) => {
  const router = useRouter();
  const modalContext = useModal();

  const campaigns = propCampaigns || modalContext.campaigns;

  const handleNavigate = (path: string) => {
    router.push(path);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f9ff] text-[#181c20]">
      {/* Hero Section */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-10 py-12 md:py-20 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#cee9d3] text-[#012d1d] font-semibold text-xs tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#116c4a]"></span>
            <span>Serving Communities Since 2002</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#012d1d] leading-tight tracking-tight">
            Netaji Subhash Chandra Bose Seva Samity
          </h1>
          <p className="text-lg text-[#414844] max-w-[520px] leading-relaxed">
            Over two decades of selfless grassroots service across Jharkhand. From winter blanket distribution and regular blood donation camps to hospital patient aid and poor daughters' marriage support.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => handleNavigate('/campaigns')}
              className="bg-[#012d1d] hover:bg-[#1b4332] text-white font-semibold text-sm px-6 py-3.5 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Get Involved</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleNavigate('/about')}
              className="border border-[#012d1d] text-[#012d1d] hover:bg-[#ebeef3] font-semibold text-sm px-6 py-3.5 rounded-lg transition-all cursor-pointer"
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="flex-1 w-full">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden relative shadow-md border border-[#e0e3e8] group">
            <img
              src="/images/hero-elderly-relief.jpg"
              alt="Netaji Subhash Chandra Bose Seva Samity leadership and volunteers distributing essential relief"
              className="w-full h-full object-cover object-[center_35%] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-[#012d1d]">Direct Community Relief</p>
                <p className="text-xs text-[#414844]">Elderly & Healthcare Distribution Drive</p>
              </div>
              <span className="text-xs px-2.5 py-1 bg-[#a1f4c8] text-[#005236] font-bold rounded-full">
                Active Impact
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Campaigns Preview */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-10 py-16 border-t border-[#e0e3e8]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-[#012d1d]">Active Community Campaigns</h2>
            <p className="text-base text-[#414844] mt-2">
              Explore ongoing initiatives and directly support grassroots development projects.
            </p>
          </div>
          <button
            onClick={() => handleNavigate('/campaigns')}
            className="text-sm font-bold text-[#012d1d] hover:text-[#116c4a] flex items-center gap-1 cursor-pointer"
          >
            <span>View All Campaigns</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.slice(0, 3).map((campaign) => (
            <div
              key={campaign.id}
              className="bg-[#f8f9fa] border border-[#e9ecef] rounded-2xl overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300"
            >
              <div className="h-48 relative overflow-hidden bg-[#e0e3e8]">
                <img
                  src={campaign.imageUrl}
                  alt={campaign.imageAlt || campaign.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 right-3 bg-[#cee9d3] text-[#012d1d] text-xs font-bold px-3 py-1 rounded-full">
                  {campaign.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#012d1d] mb-2 min-h-[3.5rem] flex items-center leading-snug">
                  {campaign.title}
                </h3>
                <p className="text-sm text-[#414844] mb-6 line-clamp-3 leading-relaxed flex-grow min-h-[4.5rem]">
                  {campaign.description}
                </p>

                <div className="mt-auto pt-4 border-t border-[#e9ecef] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 min-w-0 flex-1 text-xs text-[#717973] font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#116c4a] shrink-0" />
                    <span className="truncate" title={campaign.location}>{campaign.location}</span>
                  </div>
                  <button
                    onClick={() => handleNavigate('/campaigns')}
                    className="bg-[#012d1d] hover:bg-[#1b4332] text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 whitespace-nowrap shrink-0 h-9"
                  >
                    <span>View Campaign</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#a1f4c8]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
