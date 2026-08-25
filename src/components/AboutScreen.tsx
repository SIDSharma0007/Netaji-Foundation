'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { PageTab } from '../types';
import { Shield, Sprout, Heart, Users, ArrowRight } from 'lucide-react';

interface AboutScreenProps {
  setActiveTab?: (tab: PageTab) => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ setActiveTab: propSetActiveTab }) => {
  const router = useRouter();

  const handleNavigate = (path: string, tab: PageTab) => {
    if (propSetActiveTab) {
      propSetActiveTab(tab);
    } else {
      router.push(path);
    }
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f9ff] text-[#181c20]">
      {/* Hero Header */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#012d1d] tracking-tight leading-tight">
              Rooted in Integrity, Driven by Community.
            </h1>
            <p className="text-lg text-[#414844] leading-relaxed max-w-2xl">
              The Netaji Foundation is dedicated to empowering local communities through sustainable development, education, and health initiatives. We believe in human-centric service over temporary fixes.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-[#e0e3e8] shadow-md aspect-[4/3]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQpDe8z_ql-JNaG0ty2rKS2g8B7iO4p5zgD-VrHoz_sl3bsDdeHnLwwy3MImh_3VFBQgnsVHkFaOf6knrB5Jp3ZT-HkVE9R2p2KzxlVBa0smqvbKD6DRzKTNAfjqO6YLdMFJY46JJUazIfhbFLKXkEp_TAAFTij_C4dJvCtulcM5iGxIqtFguMRA2YeGne2CkZnK4Yq9snLsFxQULi8cLg5Bq6djr20cWUfnOTQ7Dz8SwRYrgZg0g"
                alt="Community volunteers working together"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyWZXP0eSrBsfjhKPV9hjvvvdM39Gvu8sas5K5XXtBgxf3sdodib-2onfRc1nHq7gmqHbjZ58zGJ_tX0YTY3M10Z1oGX0N8f3RnAYacBgcSFbbXwmyjLw34ZWrRpXhQ8XjKkp4IhVq_xBvDBW3nrW7rbl3UG9FTS6KOsnrKXTXVtwUose14CqfYOx7F0PC1dMJuRJCl1ZD_Bi6tMx2rWmJjAuokRduEdGUTbdZBWo_v9yw8qSaZFQ';
                }}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* History & Mission + Core Values Grid */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: History & Mission */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#012d1d] border-b border-[#e0e3e8] pb-2">
                Our History
              </h2>
              <p className="text-base text-[#414844] leading-relaxed">
                Founded on the principles of steadfast service, the Netaji Foundation began as a small grassroots initiative aimed at addressing immediate local needs. Over the decades, we have evolved into a structured organization, maintaining our core belief that genuine change starts from within the community.
              </p>
              <p className="text-base text-[#414844] leading-relaxed">
                Our approach rejects superficial solutions in favor of deep, systemic engagement. We partner with local leaders to build infrastructure that lasts.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#012d1d] border-b border-[#e0e3e8] pb-2">
                Our Mission
              </h2>
              <p className="text-base text-[#414844] leading-relaxed">
                To cultivate environments where individuals can thrive through equitable access to resources. We are committed to transparency, operational integrity, and ensuring that every contribution translates into tangible, measurable human impact.
              </p>
            </div>
          </div>

          {/* Right Column: Values Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-[#e0e3e8] rounded-2xl p-6 shadow-xs flex items-start gap-4 hover:border-[#116c4a] transition-all">
              <div className="p-3 bg-[#cee9d3] text-[#012d1d] rounded-xl shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#012d1d] mb-1">Unwavering Integrity</h3>
                <p className="text-sm text-[#414844] leading-relaxed">
                  We operate with complete transparency. Our financial and operational reports are public, ensuring accountability to every stakeholder.
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#e0e3e8] rounded-2xl p-6 shadow-xs flex items-start gap-4 hover:border-[#116c4a] transition-all">
              <div className="p-3 bg-[#cee9d3] text-[#012d1d] rounded-xl shrink-0">
                <Sprout className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#012d1d] mb-1">Sustainable Impact</h3>
                <p className="text-sm text-[#414844] leading-relaxed">
                  We do not believe in quick fixes. Our programs are designed to be self-sustaining, empowering communities to eventually lead without our intervention.
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#e0e3e8] rounded-2xl p-6 shadow-xs flex items-start gap-4 hover:border-[#116c4a] transition-all">
              <div className="p-3 bg-[#cee9d3] text-[#012d1d] rounded-xl shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#012d1d] mb-1">Human-Centric</h3>
                <p className="text-sm text-[#414844] leading-relaxed">
                  Every policy, program, and initiative is evaluated by one metric: how effectively it improves the dignity and quality of human life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Callout Banner */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-10 py-12">
        <div className="relative rounded-2xl overflow-hidden min-h-[300px] flex items-center justify-center p-8 text-center text-white border border-[#e0e3e8] shadow-md">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyWZXP0eSrBsfjhKPV9hjvvvdM39Gvu8sas5K5XXtBgxf3sdodib-2onfRc1nHq7gmqHbjZ58zGJ_tX0YTY3M10Z1oGX0N8f3RnAYacBgcSFbbXwmyjLw34ZWrRpXhQ8XjKkp4IhVq_xBvDBW3nrW7rbl3UG9FTS6KOsnrKXTXVtwUose14CqfYOx7F0PC1dMJuRJCl1ZD_Bi6tMx2rWmJjAuokRduEdGUTbdZBWo_v9yw8qSaZFQ"
            alt="Indian rural community landscape"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQpDe8z_ql-JNaG0ty2rKS2g8B7iO4p5zgD-VrHoz_sl3bsDdeHnLwwy3MImh_3VFBQgnsVHkFaOf6knrB5Jp3ZT-HkVE9R2p2KzxlVBa0smqvbKD6DRzKTNAfjqO6YLdMFJY46JJUazIfhbFLKXkEp_TAAFTij_C4dJvCtulcM5iGxIqtFguMRA2YeGne2CkZnK4Yq9snLsFxQULi8cLg5Bq6djr20cWUfnOTQ7Dz8SwRYrgZg0g';
            }}
            className="absolute inset-0 w-full h-full object-cover brightness-50"
          />
          <div className="relative z-10 space-y-6 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Building Foundations for the Future
            </h2>
            <div>
              <button
                onClick={() => handleNavigate('/campaigns', 'campaigns')}
                className="bg-white text-[#012d1d] hover:bg-[#cee9d3] font-bold text-sm px-6 py-3.5 rounded-lg transition-colors cursor-pointer shadow-md inline-flex items-center gap-2"
              >
                <span>See Our Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
