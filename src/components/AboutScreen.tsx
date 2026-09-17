'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { PageTab } from '../types';
import { Shield, Sprout, Users, ArrowRight, Phone, Mail, Award } from 'lucide-react';
import { LEADERSHIP_MEMBERS } from '../data/leadershipData';

interface AboutScreenProps {
  setActiveTab?: (tab: PageTab) => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = () => {
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
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
              Netaji Subhash Chandra Bose Seva Samity is dedicated to selfless community service, healthcare assistance, and empowering underprivileged families across Jamshedpur, East Singhbhum, and Jharkhand since 2002.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-[#e0e3e8] shadow-md aspect-[4/3]">
              <img
                src="/images/about-netaji-tribute.jpg"
                alt="Chairperson Goutam Dey and Netaji Subhash Chandra Bose Seva Samity members paying ceremonial tribute"
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
                Our History & Inception
              </h2>
              <p className="text-base text-[#414844] leading-relaxed">
                Established in <strong>2002</strong> by Chairperson <strong>Goutam Dey</strong>, Netaji Subhash Chandra Bose Seva Samity was formally inaugurated by distinguished community leaders <strong>Anand Bihari Dubey</strong> (now National Vice President), <strong>Rakeshwar Pandey</strong> (National Secretary, INTUC – Indian National Trade Union Congress), and <strong>Babar Khan</strong>.
              </p>
              <p className="text-base text-[#414844] leading-relaxed">
                For more than two decades, the Samity has remained at the forefront of direct public welfare: organizing extensive winter blanket donation drives, regular blood donation camps, fruit and nutrition distribution at Tata Main Hospital (TMH), financial assistance for marriages of daughters from impoverished families, and comprehensive community disaster relief.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#012d1d] border-b border-[#e0e3e8] pb-2">
                Our Mission & Objectives
              </h2>
              <p className="text-base text-[#414844] leading-relaxed">
                To serve humanity with unwavering devotion inspired by Netaji Subhash Chandra Bose. We ensure immediate assistance reaches the most vulnerable members of society, fostering dignity, healthcare access, and social equality across all sections.
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
                <h3 className="text-lg font-bold text-[#012d1d] mb-1">Direct Field Welfare</h3>
                <p className="text-sm text-[#414844] leading-relaxed">
                  From emergency medical patient support to winter relief and marriage assistance, our volunteers work directly on the ground.
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#e0e3e8] rounded-2xl p-6 shadow-xs flex items-start gap-4 hover:border-[#116c4a] transition-all">
              <div className="p-3 bg-[#cee9d3] text-[#012d1d] rounded-xl shrink-0">
                <Sprout className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#012d1d] mb-1">Grassroots Commitment</h3>
                <p className="text-sm text-[#414844] leading-relaxed">
                  Over two decades of continuous, steadfast service rooted in Jamshedpur, East Singhbhum, and regional Jharkhand.
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#e0e3e8] rounded-2xl p-6 shadow-xs flex items-start gap-4 hover:border-[#116c4a] transition-all">
              <div className="p-3 bg-[#cee9d3] text-[#012d1d] rounded-xl shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#012d1d] mb-1">Human-Centric Service</h3>
                <p className="text-sm text-[#414844] leading-relaxed">
                  Every initiative is guided by compassion, ensuring aid reaches those who need it most without delay or discrimination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Governing Board Section */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-10 py-12">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#cee9d3] text-[#012d1d] font-semibold text-xs tracking-wide mb-3">
            <Users className="w-4 h-4 text-[#116c4a]" />
            <span>Organizational Governance</span>
          </div>
          <h2 className="text-3xl font-extrabold text-[#012d1d]">Leadership & Governing Body</h2>
          <p className="text-sm text-[#414844] mt-2">
            Meet the dedicated leadership guiding Netaji Subhash Chandra Bose Seva Samity’s social welfare initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LEADERSHIP_MEMBERS.map((leader) => (
            <div
              key={leader.id}
              className="bg-white border border-[#e0e3e8] rounded-2xl p-6 shadow-xs hover:border-[#012d1d] transition-all flex flex-col justify-between"
            >
              <div>
                {leader.imageUrl ? (
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border border-[#cee9d3] shadow-xs mb-4 shrink-0 bg-[#cee9d3]">
                    <img
                      src={leader.imageUrl}
                      alt={leader.imageAlt || leader.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-xl bg-[#cee9d3] text-[#012d1d] flex items-center justify-center font-bold text-lg mb-4">
                    {leader.initials}
                  </div>
                )}
                <h3 className="text-xl font-bold text-[#012d1d]">{leader.name}</h3>
                <p className="text-xs font-semibold text-[#116c4a] uppercase tracking-wider mt-0.5">{leader.role}</p>

                {leader.badges && leader.badges.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    {leader.badges.map((badge, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-[#cee9d3]/60 text-[#012d1d] border border-[#a5d0b9]/40"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}

                <p className="text-xs text-[#414844] mt-3 leading-relaxed">
                  {leader.bio}
                </p>

                {leader.quote && (
                  <div className="mt-3 p-2.5 rounded-xl bg-[#f4fbf7] border border-[#cee9d3] text-[11px] text-[#012d1d] italic">
                    <span>"{leader.quote}"</span>
                    {leader.quoteAuthor && (
                      <span className="block text-[10px] font-bold text-[#116c4a] not-italic mt-1">
                        — {leader.quoteAuthor}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {(leader.phone || leader.email) && (
                <div className="mt-4 pt-3 border-t border-[#e0e3e8] space-y-1.5 text-xs text-[#414844]">
                  {leader.phone && leader.phone.length > 0 && (
                    <div className="flex items-center gap-2 flex-wrap">
                      <Phone className="w-3.5 h-3.5 text-[#116c4a] shrink-0" />
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {leader.phone.map((ph, idx) => (
                          <React.Fragment key={idx}>
                            <a
                              href={`tel:${ph.replace(/[^0-9+]/g, '')}`}
                              className="font-medium text-[#012d1d] hover:text-[#116c4a] hover:underline transition-colors cursor-pointer"
                              title={`Call ${leader.name}`}
                            >
                              {ph}
                            </a>
                            {idx < leader.phone!.length - 1 && (
                              <span className="text-[#a0aec0]">•</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}

                  {leader.email && (
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#116c4a] shrink-0" />
                      <a
                        href={`mailto:${leader.email}`}
                        className="font-medium text-[#012d1d] hover:text-[#116c4a] hover:underline transition-colors truncate cursor-pointer"
                        title={`Email ${leader.name}`}
                      >
                        {leader.email}
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Civic Leadership & Distinguished Recognition Showcase */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-10 py-8">
        <div className="bg-white border border-[#e0e3e8] rounded-3xl overflow-hidden shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 bg-[#012d1d] relative aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden group">
              <img
                src="/images/anand-bihari-dubey-felicitation.jpg"
                alt="National Vice President Anand Bihari Dubey presenting sacred Maa Durga memento to Rahul Gandhi"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#a1f4c8] animate-pulse"></span>
                <span>Civic Felicitation • Sacred Maa Durga Memento</span>
              </div>
            </div>

            <div className="lg:col-span-7 p-6 md:p-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#cee9d3] text-[#012d1d] font-bold text-xs">
                <span>Public Recognition & Civic Engagement</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#012d1d] tracking-tight leading-snug">
                Honoring Service, Elevating Community Representation
              </h3>
              <p className="text-sm text-[#414844] leading-relaxed">
                Throughout more than two decades of public dedication, Netaji Subhash Chandra Bose Seva Samity’s leadership has consistently interfaced with prominent national and state representatives to advocate for grassroots social welfare, sports infrastructure, and aid for vulnerable families across Jharkhand.
              </p>
              <p className="text-sm text-[#414844] leading-relaxed">
                National Vice President <strong>Anand Bihari Dubey</strong>—a veteran soldier of the Indian Army, sports administrator, and district leader—embodies our commitment to bridging institutional governance with hands-on community service.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-[#012d1d] font-semibold">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#f0fdf4] border border-[#bbf7d0]">
                  <Shield className="w-3.5 h-3.5 text-[#116c4a]" />
                  <span>Indian Army Veteran Stature</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#f0fdf4] border border-[#bbf7d0]">
                  <Award className="w-3.5 h-3.5 text-[#116c4a]" />
                  <span>Jharkhand Boxing & Olympic Leadership</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#f0fdf4] border border-[#bbf7d0]">
                  <Users className="w-3.5 h-3.5 text-[#116c4a]" />
                  <span>Grassroots Public Representation</span>
                </span>
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
              alt="Netaji Subhash Chandra Bose Seva Samity community members and volunteers in collective homage"
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
                onClick={() => handleNavigate('/campaigns')}
                className="bg-white text-[#012d1d] hover:bg-[#cee9d3] font-bold text-sm px-7 py-3.5 rounded-xl transition-all cursor-pointer shadow-lg inline-flex items-center gap-2 active:scale-95"
              >
                <span>See Our Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleNavigate('/contact')}
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
