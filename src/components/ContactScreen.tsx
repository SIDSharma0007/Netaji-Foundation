'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, UserPlus, ShieldCheck } from 'lucide-react';
import { useModal } from '../context/ModalContext';

interface ContactScreenProps {
  openVolunteerModal?: () => void;
}

export const ContactScreen: React.FC<ContactScreenProps> = ({ openVolunteerModal: propOpenVolunteerModal }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);
  const modalContext = useModal();

  const handleOpenVolunteer = () => {
    if (propOpenVolunteerModal) {
      propOpenVolunteerModal();
    } else {
      modalContext.openVolunteerModal();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          subject,
          message
        })
      });

      const data = await res.json();
      if (res.ok) {
        setSubmittedMessage(data.message || 'Message sent successfully!');
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f9ff] text-[#181c20]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-12 md:py-16">
        <header className="mb-12 max-w-2xl">
          <h1 className="text-4xl font-extrabold text-[#012d1d] tracking-tight mb-3">
            Contact & Volunteer
          </h1>
          <p className="text-lg text-[#414844] leading-relaxed">
            Have questions about our initiatives or financial reports? Reach out directly or apply to join our field volunteer team.
          </p>
        </header>

        {submittedMessage && (
          <div className="mb-8 p-4 bg-[#cee9d3] border border-[#a5d0b9] text-[#012d1d] rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-2 font-semibold text-sm">
              <CheckCircle2 className="w-5 h-5 text-[#116c4a]" />
              <span>{submittedMessage}</span>
            </div>
            <button
              onClick={() => setSubmittedMessage(null)}
              className="text-xs text-[#012d1d] font-bold underline"
            >
              Dismiss
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form Side (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#e0e3e8] rounded-2xl p-8 shadow-xs">
            <h2 className="text-2xl font-bold text-[#012d1d] mb-6">Get in Touch</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#012d1d] uppercase tracking-wider mb-1.5">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    className="w-full bg-[#f8f9fa] border border-[#c1c8c2] rounded-xl px-4 py-2.5 text-sm text-[#181c20] focus:ring-2 focus:ring-[#012d1d] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#012d1d] uppercase tracking-wider mb-1.5">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    className="w-full bg-[#f8f9fa] border border-[#c1c8c2] rounded-xl px-4 py-2.5 text-sm text-[#181c20] focus:ring-2 focus:ring-[#012d1d] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#012d1d] uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-[#f8f9fa] border border-[#c1c8c2] rounded-xl px-4 py-2.5 text-sm text-[#181c20] focus:ring-2 focus:ring-[#012d1d] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#012d1d] uppercase tracking-wider mb-1.5">
                  Subject
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-[#f8f9fa] border border-[#c1c8c2] rounded-xl px-4 py-2.5 text-sm text-[#181c20] focus:ring-2 focus:ring-[#012d1d] focus:outline-none"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Audit & Financial Report Query">Audit & Financial Report Query</option>
                  <option value="Corporate Partnership">Corporate Partnership</option>
                  <option value="Media & Press Inquiry">Media & Press Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#012d1d] uppercase tracking-wider mb-1.5">
                  Your Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can we assist you or collaborate?"
                  className="w-full bg-[#f8f9fa] border border-[#c1c8c2] rounded-xl p-4 text-sm text-[#181c20] focus:ring-2 focus:ring-[#012d1d] focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#012d1d] hover:bg-[#1b4332] text-white font-bold text-sm py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>

          {/* Office Details & Volunteer CTA (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#012d1d] text-white rounded-2xl p-8 shadow-md relative overflow-hidden space-y-6">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlpnznsOkBkXy5NwFe4H-UrGKTkYF6xu9jW5ohYr8LFosaFSq7IHMXOR8FOY4ESFFm-80RJPTkktq3mvvjpIRNNMw_r_KBK1PpG1VO-79QQak2E5URfQ8b0XWaNt2qVaTCE1o7-Oa4KNCV1trTw0EeozjPtsq222Da3oRl_uZmdbIZrxik2gb_x_I-9npFl9sHFOMRGrdDjV9JZmFlv6jpI4_j0jHwXm4WWTDVvDKSzdAnh93uxWw"
                alt="Netaji Foundation Headquarters New Delhi"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQpDe8z_ql-JNaG0ty2rKS2g8B7iO4p5zgD-VrHoz_sl3bsDdeHnLwwy3MImh_3VFBQgnsVHkFaOf6knrB5Jp3ZT-HkVE9R2p2KzxlVBa0smqvbKD6DRzKTNAfjqO6YLdMFJY46JJUazIfhbFLKXkEp_TAAFTij_C4dJvCtulcM5iGxIqtFguMRA2YeGne2CkZnK4Yq9snLsFxQULi8cLg5Bq6djr20cWUfnOTQ7Dz8SwRYrgZg0g';
                }}
                className="absolute inset-0 w-full h-full object-cover opacity-15"
              />

              <div className="relative z-10 space-y-6">
                <h2 className="text-2xl font-bold">Visit Our Main Office</h2>

                <div className="space-y-4 text-sm text-[#a1f4c8]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#a1f4c8] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">National Headquarters</p>
                      <p className="text-xs text-white/80">
                        Netaji Foundation Bhavan, 12/A Subhash Chandra Bose Marg, Connaught Place, New Delhi, Delhi 110001, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#a1f4c8] shrink-0" />
                    <div>
                      <p className="font-semibold text-white">Email Us</p>
                      <p className="text-xs text-white/80">contact@netajifoundation.org</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#a1f4c8] shrink-0" />
                    <div>
                      <p className="font-semibold text-white">Call Office</p>
                      <p className="text-xs text-white/80">+91 11 2345 6789 / +91 98765 43210</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/20">
                  <div className="flex items-center gap-2 text-xs text-white/90 font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#a1f4c8]" />
                    <span>Office hours: Monday - Saturday, 9:30 AM - 6:00 PM IST</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Volunteer Signup Card */}
            <div className="bg-[#cee9d3] border border-[#a5d0b9] rounded-2xl p-6 shadow-xs flex items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-[#012d1d] text-lg">Join Our Team</h3>
                <p className="text-xs text-[#012d1d]/80 mt-1">
                  Become an active field or digital volunteer for Netaji Foundation.
                </p>
              </div>
              <button
                onClick={handleOpenVolunteer}
                className="bg-[#012d1d] text-white hover:bg-[#1b4332] font-bold text-xs py-2.5 px-4 rounded-xl transition-all cursor-pointer shrink-0 flex items-center gap-1.5"
              >
                <UserPlus className="w-4 h-4" />
                <span>Sign Up to Volunteer</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
