import React, { useState } from 'react';
import { PageTab } from '../types';
import { Heart, Menu, X, Sprout } from 'lucide-react';

interface NavbarProps {
  activeTab: PageTab;
  setActiveTab: (tab: PageTab) => void;
  openDonateModal: (campaignId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  openDonateModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; tab: PageTab }[] = [
    { label: 'Home', tab: 'home' },
    { label: 'About', tab: 'about' },
    { label: 'Campaigns', tab: 'campaigns' },
    { label: 'Transparency', tab: 'transparency' },
    { label: 'Contact', tab: 'contact' }
  ];

  const handleNavClick = (tab: PageTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#f7f9ff] border-b border-[#e0e3e8] shadow-xs transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-4 md:px-10 h-20">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="font-bold text-2xl text-[#012d1d] flex items-center gap-2.5 tracking-tight hover:opacity-90 transition-opacity text-left cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full bg-[#012d1d] flex items-center justify-center text-white shadow-xs">
            <Sprout className="w-5 h-5 text-[#a1f4c8]" />
          </div>
          <span>Netaji Foundation</span>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeTab === link.tab;
            return (
              <button
                key={link.tab}
                onClick={() => handleNavClick(link.tab)}
                className={`font-semibold text-sm transition-all duration-200 py-1 cursor-pointer ${
                  isActive
                    ? 'text-[#012d1d] font-bold border-b-2 border-[#012d1d]'
                    : 'text-[#414844] hover:text-[#012d1d]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* Desktop Donate CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => openDonateModal()}
            className="bg-[#012d1d] text-white hover:bg-[#1b4332] font-semibold text-sm px-6 py-2.5 rounded-lg transition-colors min-h-[44px] flex items-center gap-2 shadow-xs cursor-pointer active:scale-95"
          >
            <span>Donate</span>
            <Heart className="w-4 h-4 text-[#a1f4c8] fill-[#a1f4c8]" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => openDonateModal()}
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
          {navLinks.map((link) => (
            <button
              key={link.tab}
              onClick={() => handleNavClick(link.tab)}
              className={`text-left py-2 px-3 rounded-lg text-base font-semibold transition-colors ${
                activeTab === link.tab
                  ? 'bg-[#1b4332] text-white'
                  : 'text-[#181c20] hover:bg-[#ebeef3]'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};
