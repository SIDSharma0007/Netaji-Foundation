'use client';

import React from 'react';
import Link from 'next/link';
import { PageTab } from '../types';
import { ShieldCheck, Heart, Sprout } from 'lucide-react';
import { useModal } from '../context/ModalContext';

interface FooterProps {
  setActiveTab?: (tab: PageTab) => void;
  openDonateModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab: propSetActiveTab, openDonateModal: propOpenDonateModal }) => {
  const modalContext = useModal();

  const handleDonate = () => {
    if (propOpenDonateModal) {
      propOpenDonateModal();
    } else {
      modalContext.openDonateModal();
    }
  };

  const handleScroll = (tab?: PageTab) => {
    if (propSetActiveTab && tab) {
      propSetActiveTab(tab);
    }
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#f1f4f9] border-t border-[#e0e3e8] mt-16 text-[#181c20]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-1 space-y-3">
          <div className="flex items-center gap-2.5 font-bold text-xl text-[#012d1d]">
            <div className="w-8 h-8 rounded-full bg-[#012d1d] flex items-center justify-center text-[#a1f4c8]">
              <Sprout className="w-4 h-4" />
            </div>
            <span>Netaji Foundation</span>
          </div>
          <p className="text-sm text-[#414844] leading-relaxed">
            © 2024 Netaji Foundation. Integrity in Service. Dedicated to fostering sustainable growth and empowering communities globally.
          </p>
        </div>

        <div className="col-span-1 space-y-2">
          <h3 className="font-semibold text-sm text-[#012d1d] uppercase tracking-wider">Navigation</h3>
          <ul className="space-y-2 text-sm text-[#414844]">
            <li>
              <Link href="/" onClick={() => handleScroll('home')} className="hover:text-[#012d1d] cursor-pointer">
                Home Page
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => handleScroll('about')} className="hover:text-[#012d1d] cursor-pointer">
                About Our Mission
              </Link>
            </li>
            <li>
              <Link href="/campaigns" onClick={() => handleScroll('campaigns')} className="hover:text-[#012d1d] cursor-pointer">
                Active Campaigns
              </Link>
            </li>
            <li>
              <Link href="/transparency" onClick={() => handleScroll('transparency')} className="hover:text-[#012d1d] cursor-pointer">
                Financial Transparency
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-1 space-y-2">
          <h3 className="font-semibold text-sm text-[#012d1d] uppercase tracking-wider">Resources & Trust</h3>
          <ul className="space-y-2 text-sm text-[#414844]">
            <li>
              <Link href="/transparency" onClick={() => handleScroll('transparency')} className="hover:text-[#012d1d] cursor-pointer">
                Annual Financial Reports
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => handleScroll('contact')} className="hover:text-[#012d1d] cursor-pointer">
                Volunteer Portal
              </Link>
            </li>
            <li>
              <span className="text-[#414844] hover:text-[#012d1d]">Privacy & Compliance Policy</span>
            </li>
            <li>
              <span className="text-[#414844] hover:text-[#012d1d]">Terms of Service</span>
            </li>
          </ul>
        </div>

        <div className="col-span-1 space-y-4">
          <h3 className="font-semibold text-sm text-[#012d1d] uppercase tracking-wider">Support Our Mission</h3>
          <p className="text-xs text-[#414844]">
            Every single donation is backed by strict financial transparency and audited impact statements.
          </p>
          <button
            onClick={handleDonate}
            className="w-full bg-[#012d1d] text-white hover:bg-[#1b4332] font-semibold text-sm py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
          >
            <Heart className="w-4 h-4 text-[#a1f4c8] fill-[#a1f4c8]" />
            <span>Support Us Today</span>
          </button>
          <div className="flex items-center gap-1.5 text-xs text-[#717973]">
            <ShieldCheck className="w-4 h-4 text-[#116c4a]" />
            <span>256-bit SSL Encrypted & Audited NGO</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
