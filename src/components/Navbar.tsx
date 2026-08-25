'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PageTab } from '../types';
import { Heart, Menu, X, Sprout } from 'lucide-react';
import { useModal } from '../context/ModalContext';

interface NavbarProps {
  activeTab?: PageTab;
  setActiveTab?: (tab: PageTab) => void;
  openDonateModal?: (campaignId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab: propActiveTab,
  setActiveTab: propSetActiveTab,
  openDonateModal: propOpenDonateModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const modalContext = useModal();

  const handleDonate = () => {
    if (propOpenDonateModal) {
      propOpenDonateModal();
    } else {
      modalContext.openDonateModal();
    }
  };

  const navLinks: { label: string; tab: PageTab; href: string }[] = [
    { label: 'Home', tab: 'home', href: '/' },
    { label: 'About', tab: 'about', href: '/about' },
    { label: 'Campaigns', tab: 'campaigns', href: '/campaigns' },
    { label: 'Transparency', tab: 'transparency', href: '/transparency' },
    { label: 'Contact', tab: 'contact', href: '/contact' },
  ];

  const getIsActive = (link: { tab: PageTab; href: string }) => {
    if (propActiveTab) {
      return propActiveTab === link.tab;
    }
    if (link.href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(link.href);
  };

  const handleNavClick = (tab: PageTab) => {
    if (propSetActiveTab) {
      propSetActiveTab(tab);
    }
    setMobileMenuOpen(false);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#f7f9ff] border-b border-[#e0e3e8] shadow-xs transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-4 md:px-10 h-20">
        {/* Brand Logo */}
        <Link
          href="/"
          onClick={() => handleNavClick('home')}
          className="font-bold text-2xl text-[#012d1d] flex items-center gap-2.5 tracking-tight hover:opacity-90 transition-opacity text-left cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full bg-[#012d1d] flex items-center justify-center text-white shadow-xs">
            <Sprout className="w-5 h-5 text-[#a1f4c8]" />
          </div>
          <span>Netaji Foundation</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = getIsActive(link);
            return (
              <Link
                key={link.tab}
                href={link.href}
                onClick={() => handleNavClick(link.tab)}
                className={`font-semibold text-sm transition-all duration-200 py-1 cursor-pointer ${
                  isActive
                    ? 'text-[#012d1d] font-bold border-b-2 border-[#012d1d]'
                    : 'text-[#414844] hover:text-[#012d1d]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop Donate CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={handleDonate}
            className="bg-[#012d1d] text-white hover:bg-[#1b4332] font-semibold text-sm px-6 py-2.5 rounded-lg transition-colors min-h-[44px] flex items-center gap-2 shadow-xs cursor-pointer active:scale-95"
          >
            <span>Donate</span>
            <Heart className="w-4 h-4 text-[#a1f4c8] fill-[#a1f4c8]" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={handleDonate}
            className="bg-[#012d1d] text-white text-xs px-3 py-2 rounded-lg font-semibold flex items-center gap-1"
          >
            <span>Donate</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#012d1d] hover:bg-[#ebeef3] rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f7f9ff] border-b border-[#e0e3e8] px-6 py-4 flex flex-col gap-3 shadow-lg animate-in slide-in-from-top-2">
          {navLinks.map((link) => {
            const isActive = getIsActive(link);
            return (
              <Link
                key={link.tab}
                href={link.href}
                onClick={() => handleNavClick(link.tab)}
                className={`text-left py-2 px-3 rounded-lg text-base font-semibold transition-colors ${
                  isActive
                    ? 'bg-[#1b4332] text-white'
                    : 'text-[#181c20] hover:bg-[#ebeef3]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};
