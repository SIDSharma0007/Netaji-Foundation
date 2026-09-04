'use client';

import React from 'react';
import Link from 'next/link';
import { PageTab } from '../types';
import { ShieldCheck, Users } from 'lucide-react';

interface FooterProps {
  setActiveTab?: (tab: PageTab) => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#f1f4f9] border-t border-[#e0e3e8] mt-16 text-[#181c20]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-1 space-y-3">
          <div className="flex items-center gap-3 font-bold text-lg text-[#012d1d]">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-white shadow-xs border border-[#e0e3e8] shrink-0 p-0.5 flex items-center justify-center">
              <img
                src="/images/netaji-logo.png"
                alt="Netaji Subhash Chandra Bose Seva Samity Official Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="leading-tight">Netaji Subhash Chandra Bose Seva Samity</span>
          </div>
          <p className="text-sm text-[#414844] leading-relaxed">
            © 2002 Netaji Subhash Chandra Bose Seva Samity. Established in 2002. Dedicated to selfless grassroots community service, healthcare relief, and empowering marginalized families.
          </p>
        </div>

        <div className="col-span-1 space-y-2">
          <h3 className="font-semibold text-sm text-[#012d1d] uppercase tracking-wider">Navigation</h3>
          <ul className="space-y-2 text-sm text-[#414844]">
            <li>
              <Link href="/" onClick={handleScroll} className="hover:text-[#012d1d] cursor-pointer">
                Home Page
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={handleScroll} className="hover:text-[#012d1d] cursor-pointer">
                About Our Mission
              </Link>
            </li>
            <li>
              <Link href="/campaigns" onClick={handleScroll} className="hover:text-[#012d1d] cursor-pointer">
                Active Campaigns
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={handleScroll} className="hover:text-[#012d1d] cursor-pointer">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-1 space-y-2">
          <h3 className="font-semibold text-sm text-[#012d1d] uppercase tracking-wider">Resources & Trust</h3>
          <ul className="space-y-2 text-sm text-[#414844]">
            <li>
              <Link href="/contact" onClick={handleScroll} className="hover:text-[#012d1d] cursor-pointer">
                Volunteer Portal
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-[#012d1d] cursor-pointer">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-[#012d1d] cursor-pointer">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-1 space-y-4">
          <h3 className="font-semibold text-sm text-[#012d1d] uppercase tracking-wider">Support Our Mission</h3>
          <p className="text-xs text-[#414844]">
            Our grassroots initiatives are backed by dedicated volunteers and verified community impact statements.
          </p>
          <Link
            href="/contact"
            onClick={handleScroll}
            className="w-full bg-[#012d1d] text-white hover:bg-[#1b4332] font-semibold text-sm py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
          >
            <Users className="w-4 h-4 text-[#a1f4c8]" />
            <span>Join as Volunteer</span>
          </Link>
          <div className="flex items-center gap-1.5 text-xs text-[#717973]">
            <ShieldCheck className="w-4 h-4 text-[#116c4a]" />
            <span>Grassroots Welfare Society • Est. 2002</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
