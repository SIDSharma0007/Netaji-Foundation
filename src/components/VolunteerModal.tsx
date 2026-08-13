import React, { useState } from 'react';
import { VolunteerApplication } from '../types';
import { X, UserPlus, CheckCircle2 } from 'lucide-react';

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VolunteerModal: React.FC<VolunteerModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interestArea, setInterestArea] = useState('Education & Mobile Libraries');
  const [availability, setAvailability] = useState('Weekends');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

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
          notes
        })
      });

      if (res.ok) {
        setSuccess(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white border border-[#e0e3e8] rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl relative">
        <div className="p-6 bg-[#012d1d] text-white flex justify-between items-center">
          <div className="flex items-center gap-2">
            <UserPlus className="w-5 h-5 text-[#a1f4c8]" />
            <h2 className="text-xl font-bold">Volunteer Registration</h2>
          </div>
          <button onClick={onClose} className="p-1 text-white/80 hover:text-white cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        {success ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-12 h-12 bg-[#cee9d3] text-[#012d1d] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#012d1d]">Welcome aboard!</h3>
            <p className="text-sm text-[#414844]">
              Thank you for applying to volunteer with Netaji Foundation. Our coordinator will contact you shortly at <span className="font-semibold text-[#012d1d]">{email}</span>.
            </p>
            <button
              onClick={() => {
                setSuccess(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 bg-[#012d1d] text-white text-xs font-bold rounded-xl"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
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

            <div className="grid grid-cols-2 gap-3">
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
                  placeholder="+1 (555) 000-1234"
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
                <option value="Education & Mobile Libraries">Education & Mobile Libraries</option>
                <option value="Clean Water & Infrastructure">Clean Water & Infrastructure</option>
                <option value="Urban Canopy & Planting">Urban Canopy & Planting</option>
                <option value="Vocational Workshop Mentorship">Vocational Workshop Mentorship</option>
                <option value="Administrative & Audit Assistance">Administrative & Audit Assistance</option>
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

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 bg-[#012d1d] hover:bg-[#1b4332] text-white font-bold text-sm py-3 px-4 rounded-xl transition-colors cursor-pointer"
            >
              {isSubmitting ? 'Submitting Application...' : 'Complete Volunteer Signup'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
