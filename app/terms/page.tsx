import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, BookOpen, ShieldCheck, Mail, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | Netaji Subhash Chandra Bose Seva Samity',
  description: 'Terms and conditions governing the use of the official website of Netaji Subhash Chandra Bose Seva Samity.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#f7f9ff] text-[#181c20] py-12 md:py-16">
      <div className="max-w-[900px] mx-auto px-4 md:px-8">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#012d1d] hover:text-[#1b4332] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
        </div>

        <div className="bg-white border border-[#e0e3e8] rounded-3xl p-8 md:p-12 shadow-xs space-y-8">
          <div className="border-b border-[#e0e3e8] pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#cee9d3] text-[#012d1d] text-xs font-bold mb-3">
              <BookOpen className="w-4 h-4 text-[#116c4a]" />
              <span>Institutional Guidelines</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#012d1d] tracking-tight">
              Terms of Service
            </h1>
            <p className="text-sm text-[#717973] mt-2">
              Effective Date: September 2026 | Netaji Subhash Chandra Bose Seva Samity
            </p>
          </div>

          <div className="space-y-6 text-sm text-[#414844] leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#012d1d]">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using this official website of Netaji Subhash Chandra Bose Seva Samity, you agree to comply with and be bound by these Terms of Service. If you do not agree, please refrain from using our digital platform.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#012d1d]">
                2. Non-Profit Social Welfare Mission
              </h2>
              <p>
                This platform is operated strictly for community service, charitable assistance, and public welfare across Jharkhand. All information provided regarding campaigns, relief distribution, and volunteer opportunities is presented in good faith.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#012d1d]">
                3. Volunteer Code of Conduct
              </h2>
              <p>
                Individuals registering as volunteers commit to selfless community service without personal financial remuneration. Volunteers must uphold the dignity, safety, and respect of all beneficiaries, irrespective of religion, caste, gender, or social background.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#012d1d]">
                4. Intellectual Property & Official Emblem
              </h2>
              <p>
                The official emblem, logo, documentary photographs, and content published on this website belong to Netaji Subhash Chandra Bose Seva Samity and may not be reproduced for commercial or unauthorized political purposes without prior written consent.
              </p>
            </section>

            <section className="space-y-3 pt-4 border-t border-[#e0e3e8]">
              <h2 className="text-lg font-bold text-[#012d1d]">
                5. Governance & Jurisdiction
              </h2>
              <p>
                These terms are governed by the laws of India, under the jurisdiction of the competent courts of Jamshedpur, Jharkhand.
              </p>
              <div className="bg-[#f8f9fa] border border-[#e0e3e8] rounded-2xl p-4 space-y-2 text-xs mt-3">
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#012d1d]" />
                  <span>Simul Road, Tinplate, Post: Golmuri, Jamshedpur, East Singhbhum, Jharkhand – 831001</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#012d1d]" />
                  <a href="mailto:netajisubhasbosesevasamiti@gmail.com" className="text-[#012d1d] font-semibold underline">
                    netajisubhasbosesevasamiti@gmail.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
