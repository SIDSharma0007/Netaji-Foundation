import React, { useState } from 'react';
import { X, UserPlus, CheckCircle2, AlertCircle } from 'lucide-react';

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VolunteerModal: React.FC<VolunteerModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interestArea, setInterestArea] = useState('Winter Blanket & Relief Distribution');
  const [availability, setAvailability] = useState('Weekends');
  const [notes, setNotes] = useState('');
  const [botcheck, setBotcheck] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleClose = () => {
    setSuccess(false);
    setErrorMessage(null);
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch('/api/volunteer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          interestArea,
          availability,
          notes,
          botcheck,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setSuccess(true);
      } else {
        setErrorMessage(data.error || 'Failed to submit volunteer application. Please try again.');
      }
    } catch (err) {
      setErrorMessage('Network connection error. Please check your internet connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white border border-[#e0e3e8] rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col">
        <div className="p-6 bg-[#012d1d] text-white flex justify-between items-center shrink-0">
          <div className="flex items-center gap-2">
            <UserPlus className="w-5 h-5 text-[#a1f4c8]" />
            <h2 className="text-xl font-bold">Volunteer Registration</h2>
          </div>
          <button onClick={handleClose} className="p-1 text-white/80 hover:text-white cursor-pointer" aria-label="Close Modal">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-6">
          {success ? (
            <div className="p-4 text-center space-y-4">
              <div className="w-12 h-12 bg-[#cee9d3] text-[#012d1d] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#012d1d]">Welcome aboard!</h3>
              <p className="text-sm text-[#414844]">
                Thank you for applying to volunteer with Netaji Subhash Chandra Bose Seva Samity. Our coordinator will contact you shortly at <span className="font-semibold text-[#012d1d]">{email}</span>.
              </p>
              <button
                onClick={handleClose}
                className="mt-4 px-6 py-2.5 bg-[#012d1d] text-white text-xs font-bold rounded-xl cursor-pointer hover:bg-[#1b4332] transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 bg-[#fde8e8] border border-[#f8b4b4] text-[#9b1c1c] rounded-xl flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-[#c81e1e] shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setErrorMessage(null)}
                    className="font-bold underline ml-2 cursor-pointer"
                  >
                    Dismiss
                  </button>
                </div>
              )}

              {/* Anti-spam honeypot */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="volunteer_website_hp">Leave this field blank</label>
                <input
                  id="volunteer_website_hp"
                  type="text"
                  name="website_hp"
                  value={botcheck}
                  onChange={(e) => setBotcheck(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#012d1d] uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Jane Doe"
                  className="w-full bg-[#f8f9fa] border border-[#c1c8c2] rounded-xl px-4 py-2 text-sm text-[#181c20] focus:ring-2 focus:ring-[#012d1d] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#012d1d] uppercase tracking-wider mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@example.com"
                    className="w-full bg-[#f8f9fa] border border-[#c1c8c2] rounded-xl px-4 py-2 text-sm text-[#181c20] focus:ring-2 focus:ring-[#012d1d] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#012d1d] uppercase tracking-wider mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#f8f9fa] border border-[#c1c8c2] rounded-xl px-4 py-2 text-sm text-[#181c20] focus:ring-2 focus:ring-[#012d1d] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#012d1d] uppercase tracking-wider mb-1">
                  Primary Field Interest
                </label>
                <select
                  value={interestArea}
                  onChange={(e) => setInterestArea(e.target.value)}
                  className="w-full bg-[#f8f9fa] border border-[#c1c8c2] rounded-xl px-4 py-2 text-sm text-[#181c20] focus:ring-2 focus:ring-[#012d1d] focus:outline-none"
                >
                  <option value="Winter Blanket & Relief Distribution">Winter Blanket & Relief Distribution</option>
                  <option value="Blood Donation Camps & TMH Patient Welfare">Blood Donation Camps & TMH Patient Welfare</option>
                  <option value="Daughters' Marriage Assistance Program">Daughters' Marriage Assistance Program</option>
                  <option value="Disability & Vulnerable Community Aid">Disability & Vulnerable Community Aid</option>
                  <option value="Community Events & Youth Mobilization">Community Events & Youth Mobilization</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#012d1d] uppercase tracking-wider mb-1">
                  Availability
                </label>
                <select
                  value={availability}
                  onChange={(e) => setAvailability(e.target.value)}
                  className="w-full bg-[#f8f9fa] border border-[#c1c8c2] rounded-xl px-4 py-2 text-sm text-[#181c20] focus:ring-2 focus:ring-[#012d1d] focus:outline-none"
                >
                  <option value="Weekends">Weekends Only</option>
                  <option value="Weekdays">Weekdays</option>
                  <option value="Full Time">Full-Time Field Deployment</option>
                  <option value="Remote Digital Volunteer">Remote Digital Volunteer</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#012d1d] uppercase tracking-wider mb-1">
                  Additional Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Share any past social work experience or specific skills..."
                  className="w-full bg-[#f8f9fa] border border-[#c1c8c2] rounded-xl px-4 py-2 text-sm text-[#181c20] focus:ring-2 focus:ring-[#012d1d] focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 bg-[#012d1d] hover:bg-[#1b4332] text-white font-bold text-sm py-3 px-4 rounded-xl transition-colors cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? 'Submitting Application...' : 'Complete Volunteer Signup'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

