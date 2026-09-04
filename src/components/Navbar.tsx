'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PageTab } from '../types';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  activeTab?: PageTab;
  setActiveTab?: (tab: PageTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab: propActiveTab,
  setActiveTab: propSetActiveTab,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Campaigns', href: '/campaigns' },
    { label: 'Contact', href: '/contact' },
  ];

  const getIsActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const handleNavClick = () => {
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
          onClick={handleNavClick}
          className="font-bold text-lg md:text-xl text-[#012d1d] flex items-center gap-3 tracking-tight hover:opacity-90 transition-opacity text-left cursor-pointer group"
        >
          <div className="w-12 h-12 rounded-full overflow-hidden bg-white shadow-xs border border-[#e0e3e8] flex items-center justify-center shrink-0 p-0.5 group-hover:scale-105 transition-transform">
            <img
              src="/images/netaji-logo.png"
              alt="Netaji Subhash Chandra Bose Seva Samity Official Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="leading-tight">Netaji Subhash Chandra Bose Seva Samity</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = getIsActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
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

        {/* Desktop Get Involved CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            onClick={handleNavClick}
            className="bg-[#012d1d] text-white hover:bg-[#1b4332] font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors min-h-[44px] flex items-center gap-2 shadow-xs cursor-pointer active:scale-95"
          >
            <span>Get Involved</span>
            <ArrowRight className="w-4 h-4 text-[#a1f4c8]" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 md:hidden">
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
            const isActive = getIsActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
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
