import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Lock, Mail, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Netaji Subhash Chandra Bose Seva Samity',
  description: 'Our commitment to protecting the privacy of community members, donors, and volunteers associated with Netaji Subhash Chandra Bose Seva Samity.',
};

export default function PrivacyPage() {
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
              <ShieldCheck className="w-4 h-4 text-[#116c4a]" />
              <span>Trust & Transparency</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#012d1d] tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-sm text-[#717973] mt-2">
              Effective Date: September 2026 | Netaji Subhash Chandra Bose Seva Samity
            </p>
          </div>

          <div className="space-y-6 text-sm text-[#414844] leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#012d1d] flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#116c4a]" />
                <span>1. Our Commitment to Your Privacy</span>
              </h2>
              <p>
                Netaji Subhash Chandra Bose Seva Samity (established in 2002 in Jamshedpur, Jharkhand) respects your personal privacy. We are committed to safeguarding all personal information shared by visitors, volunteers, and community partners through our official website.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#012d1d]">
                2. Information We Collect
              </h2>
              <p>
                We only collect personal information that you voluntarily submit through our online contact or volunteer registration forms, including:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-xs md:text-sm">
                <li><strong>Contact Inquiries:</strong> Full name, email address, subject of inquiry, and message content.</li>
                <li><strong>Volunteer Applications:</strong> Full name, email address, phone number, field interest areas, availability, and background experience.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#012d1d]">
                3. How We Use Your Information
              </h2>
              <p>
                Any data collected via our website is used strictly for non-profit social welfare and communication purposes:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-xs md:text-sm">
                <li>Responding directly to your messages, questions, or collaboration proposals.</li>
                <li>Coordinating volunteer participation in community welfare drives (blanket distribution, blood donation camps, TMH hospital aid).</li>
                <li>Maintaining institutional records for internal communications.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#012d1d]">
                4. Zero Commercial Data Sharing
              </h2>
              <p>
                We <strong>do not sell, rent, trade, or monetize</strong> your personal information to any third parties, advertisers, or marketing agencies. Your information is accessed solely by authorized office coordinators of the Samity.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#012d1d]">
                5. Data Security & Storage
              </h2>
              <p>
                Submissions are transmitted securely using encrypted industry-standard HTTPS connections and delivered to our authenticated official email system.
              </p>
            </section>

            <section className="space-y-3 pt-4 border-t border-[#e0e3e8]">
              <h2 className="text-lg font-bold text-[#012d1d]">
                6. Contact Our Office
              </h2>
              <p>
                If you have questions regarding this Privacy Policy or wish to update your volunteer details, please contact us:
              </p>
              <div className="bg-[#f8f9fa] border border-[#e0e3e8] rounded-2xl p-4 space-y-2 text-xs">
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
