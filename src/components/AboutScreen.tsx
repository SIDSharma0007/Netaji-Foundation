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
                src="/images/about-netaji-tribute.jpg"
                alt="Chief Patron Gautam De and Netaji Subhash Seva Samiti members paying ceremonial tribute to Netaji Subhash Chandra Bose"
                className="w-full h-full object-cover object-center"
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
                To cultivate environments where individuals can thrive through equitable access to resources. We are committed to operational integrity, community empowerment, and ensuring that every contribution translates into tangible, measurable human impact.
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
                  We operate with complete accountability. Our operational programs and community initiatives ensure trust with every stakeholder.
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

      {/* Callout Showcase Section */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-10 py-12 md:py-16">
        <div className="bg-white border border-[#e0e3e8] rounded-3xl overflow-hidden shadow-xl">
          {/* Main Visual - 100% Unobscured High-Fidelity Photograph */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden bg-[#012d1d] group">
            <img
              src="/images/about-community-homage.jpg"
              alt="Netaji Foundation community members and volunteers in collective homage"
              className="w-full h-full object-cover object-[center_35%] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-[#a1f4c8] animate-pulse"></span>
              <span>Community Homage & Grassroots Unity — Jamshedpur</span>
            </div>
          </div>

          {/* Editorial CTA Panel Below Image */}
          <div className="p-8 md:p-12 bg-gradient-to-br from-[#012d1d] via-[#053a25] to-[#012d1d] text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#a1f4c8]/20 border border-[#a1f4c8]/40 text-[#a1f4c8] text-xs font-bold tracking-wide">
                <span>Lasting Legacy & Future Action</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Building Foundations for the Future
              </h2>
              <p className="text-sm md:text-base text-white/80 leading-relaxed">
                Driven by collective community responsibility, mutual trust, and the enduring spirit of selfless service across generations.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <button
                onClick={() => handleNavigate('/campaigns', 'campaigns')}
                className="bg-white text-[#012d1d] hover:bg-[#cee9d3] font-bold text-sm px-7 py-3.5 rounded-xl transition-all cursor-pointer shadow-lg inline-flex items-center gap-2 active:scale-95"
              >
                <span>See Our Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleNavigate('/contact', 'contact')}
                className="border border-white/30 text-white hover:bg-white/10 font-semibold text-sm px-6 py-3.5 rounded-xl transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>Join as Volunteer</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
