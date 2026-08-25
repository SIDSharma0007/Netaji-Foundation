'use client';

import React, { useState } from 'react';
import { Campaign } from '../types';
import { Heart, Search, MapPin, Filter } from 'lucide-react';
import { useModal } from '../context/ModalContext';

interface CampaignsScreenProps {
  campaigns?: Campaign[];
  openDonateModal?: (campaignId?: string) => void;
}

export const CampaignsScreen: React.FC<CampaignsScreenProps> = ({
  campaigns: propCampaigns,
  openDonateModal: propOpenDonateModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const modalContext = useModal();

  const campaigns = propCampaigns || modalContext.campaigns;

  const handleDonate = (campaignId?: string) => {
    if (propOpenDonateModal) {
      propOpenDonateModal(campaignId);
    } else {
      modalContext.openDonateModal(campaignId);
    }
  };

  const categories = ['All', 'Education', 'Health', 'Environment', 'Livelihood'];

  const filteredCampaigns = campaigns.filter((campaign) => {
    const matchesCategory = selectedCategory === 'All' || campaign.category === selectedCategory;
    const matchesSearch =
      campaign.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      campaign.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      campaign.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f7f9ff] text-[#181c20]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-12 md:py-16">
        {/* Header Section */}
        <header className="mb-12 max-w-3xl">
          <h1 className="text-4xl font-extrabold text-[#012d1d] tracking-tight mb-3">
            Active Campaigns
          </h1>
          <p className="text-lg text-[#414844] leading-relaxed">
            Join our mission to empower communities through targeted, impactful initiatives. Every contribution moves us closer to our shared goals.
          </p>
        </header>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#e0e3e8]">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#012d1d] text-white shadow-xs'
                    : 'bg-[#ebeef3] text-[#414844] hover:bg-[#e0e3e8] hover:text-[#012d1d]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#717973]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search campaigns..."
              className="w-full bg-white border border-[#c1c8c2] rounded-xl pl-9 pr-4 py-2 text-sm text-[#181c20] focus:outline-none focus:ring-2 focus:ring-[#012d1d]"
            />
          </div>
        </div>

        {/* Campaigns Grid */}
        {filteredCampaigns.length === 0 ? (
          <div className="bg-white border border-[#e0e3e8] rounded-2xl p-12 text-center my-8">
            <Filter className="w-10 h-10 text-[#717973] mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#012d1d]">No campaigns found</h3>
            <p className="text-sm text-[#414844] mt-1">
              Try adjusting your category filter or search terms.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-[#cee9d3] text-[#012d1d] font-semibold text-xs rounded-lg hover:bg-[#a5d0b9] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCampaigns.map((campaign) => (
              <article
                key={campaign.id}
                className="bg-[#f8f9fa] border border-[#e9ecef] rounded-2xl overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300 group"
              >
                {/* Image Banner */}
                <div className="h-52 relative overflow-hidden bg-[#e0e3e8]">
                  <img
                    src={campaign.imageUrl}
                    alt={campaign.imageAlt || campaign.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQpDe8z_ql-JNaG0ty2rKS2g8B7iO4p5zgD-VrHoz_sl3bsDdeHnLwwy3MImh_3VFBQgnsVHkFaOf6knrB5Jp3ZT-HkVE9R2p2KzxlVBa0smqvbKD6DRzKTNAfjqO6YLdMFJY46JJUazIfhbFLKXkEp_TAAFTij_C4dJvCtulcM5iGxIqtFguMRA2YeGne2CkZnK4Yq9snLsFxQULi8cLg5Bq6djr20cWUfnOTQ7Dz8SwRYrgZg0g';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#cee9d3] text-[#012d1d] px-3 py-1 rounded-full font-bold text-xs shadow-xs">
                    {campaign.category}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#a1f4c8]" />
                    <span>{campaign.location}</span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold text-[#012d1d] mb-2">{campaign.title}</h2>
                  <p className="text-sm text-[#414844] mb-6 flex-grow leading-relaxed">
                    {campaign.description}
                  </p>

                  {/* Goal Progress */}
                  <div className="mt-auto pt-4 border-t border-[#e9ecef] space-y-3">
                    <div className="flex justify-between items-end">
                      <span className="text-xs font-bold text-[#012d1d]">Funding Goal</span>
                      <span className="text-xs font-semibold text-[#414844]">
                        {campaign.percentage}%
                      </span>
                    </div>

                    <div className="w-full bg-[#e0e3e8] rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-[#012d1d] h-2 rounded-full transition-all duration-500"
                        style={{ width: `${campaign.percentage}%` }}
                      ></div>
                    </div>

                    <div className="flex items-center justify-between text-xs pt-1">
                      <div>
                        <span className="font-bold text-[#012d1d]">
                          ₹{campaign.raisedAmount.toLocaleString('en-IN')}
                        </span>
                        <span className="text-[#717973]"> of ₹{campaign.goalAmount.toLocaleString('en-IN')}</span>
                      </div>
                      <span className="text-[#717973] font-medium">{campaign.donorsCount} Donors</span>
                    </div>

                    <button
                      onClick={() => handleDonate(campaign.id)}
                      className="w-full mt-3 bg-[#012d1d] text-white hover:bg-[#1b4332] font-semibold text-sm py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-98"
                    >
                      <Heart className="w-4 h-4 fill-[#a1f4c8] text-[#a1f4c8]" />
                      <span>Donate to Campaign</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
