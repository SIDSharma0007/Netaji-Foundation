import React from 'react';
import { Campaign, PageTab } from '../types';
import { Users, TrendingUp, CheckCircle, ArrowRight, Heart } from 'lucide-react';

interface HomeScreenProps {
  campaigns: Campaign[];
  setActiveTab: (tab: PageTab) => void;
  openDonateModal: (campaignId?: string) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ campaigns, setActiveTab, openDonateModal }) => {
  return (
    <div className="min-h-screen bg-[#f7f9ff] text-[#181c20]">
      {/* Hero Section */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-10 py-12 md:py-20 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#cee9d3] text-[#012d1d] font-semibold text-xs tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#116c4a] animate-pulse"></span>
            <span>Section 80G Tax-Deductible Non-Profit Foundation</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#012d1d] leading-tight tracking-tight">
            Empowering Communities, Building Futures.
          </h1>
          <p className="text-lg text-[#414844] max-w-[520px] leading-relaxed">
            We are dedicated to sustainable community development, providing resources and education to those who need it most. Join us in creating lasting change through focused action and unwavering integrity.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => setActiveTab('campaigns')}
              className="bg-[#012d1d] hover:bg-[#1b4332] text-white font-semibold text-sm px-6 py-3.5 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Get Involved</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className="border border-[#012d1d] text-[#012d1d] hover:bg-[#ebeef3] font-semibold text-sm px-6 py-3.5 rounded-lg transition-all cursor-pointer"
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="flex-1 w-full">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden relative shadow-md border border-[#e0e3e8] group">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyWZXP0eSrBsfjhKPV9hjvvvdM39Gvu8sas5K5XXtBgxf3sdodib-2onfRc1nHq7gmqHbjZ58zGJ_tX0YTY3M10Z1oGX0N8f3RnAYacBgcSFbbXwmyjLw34ZWrRpXhQ8XjKkp4IhVq_xBvDBW3nrW7rbl3UG9FTS6KOsnrKXTXVtwUose14CqfYOx7F0PC1dMJuRJCl1ZD_Bi6tMx2rWmJjAuokRduEdGUTbdZBWo_v9yw8qSaZFQ"
              alt="Indian community volunteers and children in rural village"
              referrerPolicy="no-referrer"
              onError={(e) => {
                // Fallback if image fails to load
                (e.target as HTMLImageElement).src = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQpDe8z_ql-JNaG0ty2rKS2g8B7iO4p5zgD-VrHoz_sl3bsDdeHnLwwy3MImh_3VFBQgnsVHkFaOf6knrB5Jp3ZT-HkVE9R2p2KzxlVBa0smqvbKD6DRzKTNAfjqO6YLdMFJY46JJUazIfhbFLKXkEp_TAAFTij_C4dJvCtulcM5iGxIqtFguMRA2YeGne2CkZnK4Yq9snLsFxQULi8cLg5Bq6djr20cWUfnOTQ7Dz8SwRYrgZg0g';
              }}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-[#012d1d]">Grassroots Impact</p>
                <p className="text-xs text-[#414844]">Rural Indian Community Initiative</p>
              </div>
              <span className="text-xs px-2.5 py-1 bg-[#a1f4c8] text-[#005236] font-bold rounded-full">
                Active
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="bg-[#f1f4f9] py-16 border-y border-[#e0e3e8]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-[#e0e3e8] rounded-2xl p-6 flex items-center gap-5 shadow-xs hover:border-[#116c4a] transition-all">
              <div className="p-4 bg-[#cee9d3] text-[#012d1d] rounded-2xl">
                <Users className="w-8 h-8" />
              </div>
              <div>
                <p className="text-3xl font-bold text-[#012d1d]">50K+</p>
                <p className="text-xs font-semibold text-[#414844] uppercase tracking-wider mt-1">
                  People Helped
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#e0e3e8] rounded-2xl p-6 flex items-center gap-5 shadow-xs hover:border-[#116c4a] transition-all">
              <div className="p-4 bg-[#cee9d3] text-[#012d1d] rounded-2xl">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div>
                <p className="text-3xl font-bold text-[#012d1d]">₹25 Cr+</p>
                <p className="text-xs font-semibold text-[#414844] uppercase tracking-wider mt-1">
                  Funds Raised
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#e0e3e8] rounded-2xl p-6 flex items-center gap-5 shadow-xs hover:border-[#116c4a] transition-all">
              <div className="p-4 bg-[#cee9d3] text-[#012d1d] rounded-2xl">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div>
                <p className="text-3xl font-bold text-[#012d1d]">124</p>
                <p className="text-xs font-semibold text-[#414844] uppercase tracking-wider mt-1">
                  Active Projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Campaigns Preview */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-10 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-[#012d1d]">Active Community Campaigns</h2>
            <p className="text-base text-[#414844] mt-2">
              Explore ongoing initiatives and directly fund sustainable development projects.
            </p>
          </div>
          <button
            onClick={() => setActiveTab('campaigns')}
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
                <h3 className="text-xl font-bold text-[#012d1d] mb-2">{campaign.title}</h3>
                <p className="text-sm text-[#414844] mb-6 line-clamp-3 leading-relaxed flex-grow">
                  {campaign.description}
                </p>

                <div className="mt-auto space-y-3 pt-4 border-t border-[#e9ecef]">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-[#012d1d]">Funding Goal</span>
                    <span className="text-[#414844]">{campaign.percentage}% Goal Met</span>
                  </div>
                  <div className="w-full bg-[#e0e3e8] rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-[#012d1d] h-2 rounded-full transition-all duration-500"
                      style={{ width: `${campaign.percentage}%` }}
                    ></div>
                  </div>
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-xs text-[#717973]">
                      ₹{campaign.raisedAmount.toLocaleString('en-IN')} raised
                    </span>
                    <button
                      onClick={() => openDonateModal(campaign.id)}
                      className="bg-[#012d1d] text-white hover:bg-[#1b4332] text-xs font-bold px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <Heart className="w-3.5 h-3.5 fill-[#a1f4c8] text-[#a1f4c8]" />
                      <span>Donate</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
