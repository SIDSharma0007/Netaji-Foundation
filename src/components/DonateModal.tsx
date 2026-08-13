import React, { useState } from 'react';
import { Campaign, Donation } from '../types';
import { X, Heart, ShieldCheck, Lock, CreditCard, Sparkles } from 'lucide-react';

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
  campaigns: Campaign[];
  selectedCampaignId?: string;
  onDonationSuccess: (donation: Donation) => void;
}

export const DonateModal: React.FC<DonateModalProps> = ({
  isOpen,
  onClose,
  campaigns,
  selectedCampaignId,
  onDonationSuccess
}) => {
  const [amountOption, setAmountOption] = useState<number | 'custom'>(500);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [campaignId, setCampaignId] = useState<string>(selectedCampaignId || campaigns[0]?.id || 'c1');
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [cardNumber, setCardNumber] = useState<string>('');
  const [expiry, setExpiry] = useState<string>('');
  const [cvc, setCvc] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const getFinalAmount = (): number => {
    if (amountOption === 'custom') {
      return Number(customAmount) || 0;
    }
    return amountOption;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const finalAmount = getFinalAmount();
    if (finalAmount <= 0) {
      setErrorMessage('Please enter a valid donation amount.');
      return;
    }
    if (!fullName.trim() || !email.trim()) {
      setErrorMessage('Please enter your full name and email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/donations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          campaignId,
          amount: finalAmount,
          fullName,
          email,
          paymentMethod: 'UPI / NetBanking / Cards (256-Bit SSL)'
        })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to process donation.');
      }

      onDonationSuccess(data.donation);
      onClose();
    } catch (err: any) {
      setErrorMessage(err.message || 'Error processing donation. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white border border-[#e0e3e8] rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-6 bg-[#f7f9ff] border-b border-[#e0e3e8] flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-[#cee9d3] text-[#012d1d] rounded-xl">
              <Heart className="w-5 h-5 fill-[#012d1d]" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#012d1d]">Make a Difference</h2>
              <p className="text-xs text-[#414844]">Section 80G Tax-Deductible Donation</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#717973] hover:text-[#012d1d] rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-6">
          {errorMessage && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl font-medium">
              {errorMessage}
            </div>
          )}

          {/* Select Amount */}
          <div>
            <label className="block text-xs font-bold text-[#012d1d] uppercase tracking-wider mb-2">
              Select Donation Amount (₹ INR)
            </label>
            <div className="grid grid-cols-4 gap-2 mb-3">
              {[500, 1000, 2500].map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => {
                    setAmountOption(amt);
                    setCustomAmount('');
                  }}
                  className={`py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                    amountOption === amt
                      ? 'bg-[#012d1d] text-white shadow-xs'
                      : 'bg-[#f1f4f9] text-[#181c20] hover:bg-[#e0e3e8]'
                  }`}
                >
                  ₹{amt}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setAmountOption('custom')}
                className={`py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  amountOption === 'custom'
                    ? 'bg-[#012d1d] text-white shadow-xs'
                    : 'bg-[#f1f4f9] text-[#181c20] hover:bg-[#e0e3e8]'
                }`}
              >
                Custom
              </button>
            </div>

            {amountOption === 'custom' && (
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-bold text-[#717973]">
                  ₹
                </span>
                <input
                  type="number"
                  min="1"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="Enter custom amount in ₹"
                  className="w-full bg-[#f8f9fa] border border-[#c1c8c2] rounded-xl pl-8 pr-4 py-2 text-sm text-[#181c20] focus:ring-2 focus:ring-[#012d1d] focus:outline-none"
                  required
                />
              </div>
            )}
          </div>

          {/* Select Campaign */}
          <div>
            <label className="block text-xs font-bold text-[#012d1d] uppercase tracking-wider mb-2">
              Designated Campaign
            </label>
            <select
              value={campaignId}
              onChange={(e) => setCampaignId(e.target.value)}
              className="w-full bg-[#f8f9fa] border border-[#c1c8c2] rounded-xl px-4 py-2.5 text-sm text-[#181c20] focus:ring-2 focus:ring-[#012d1d] focus:outline-none"
            >
              {campaigns.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title} ({c.category})
                </option>
              ))}
            </select>
          </div>

          {/* Donor Info */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-[#012d1d] uppercase tracking-wider">
              Donor Information
            </h3>
            <div>
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="w-full bg-[#f8f9fa] border border-[#c1c8c2] rounded-xl px-4 py-2 text-sm text-[#181c20] focus:ring-2 focus:ring-[#012d1d] focus:outline-none"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address (for tax receipt)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-[#f8f9fa] border border-[#c1c8c2] rounded-xl px-4 py-2 text-sm text-[#181c20] focus:ring-2 focus:ring-[#012d1d] focus:outline-none"
              />
            </div>
          </div>

          {/* Payment Method */}
          <div className="space-y-3 pt-2 border-t border-[#f1f4f9]">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-[#012d1d] uppercase tracking-wider flex items-center gap-1.5">
                <CreditCard className="w-4 h-4 text-[#116c4a]" />
                <span>Payment Details</span>
              </h3>
              <span className="text-[10px] text-[#116c4a] font-semibold flex items-center gap-1">
                <Lock className="w-3 h-3" />
                256-Bit SSL
              </span>
            </div>

            <input
              type="text"
              placeholder="Card Number (4532 •••• •••• 8888)"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="w-full bg-[#f8f9fa] border border-[#c1c8c2] rounded-xl px-4 py-2 text-sm text-[#181c20] focus:ring-2 focus:ring-[#012d1d] focus:outline-none"
            />

            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="MM / YY"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                className="bg-[#f8f9fa] border border-[#c1c8c2] rounded-xl px-4 py-2 text-sm text-[#181c20] focus:ring-2 focus:ring-[#012d1d] focus:outline-none"
              />
              <input
                type="text"
                placeholder="CVC"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                className="bg-[#f8f9fa] border border-[#c1c8c2] rounded-xl px-4 py-2 text-sm text-[#181c20] focus:ring-2 focus:ring-[#012d1d] focus:outline-none"
              />
            </div>
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#012d1d] hover:bg-[#1b4332] text-white font-bold text-sm py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>Processing Secure Payment...</span>
            ) : (
              <>
                <Heart className="w-4 h-4 fill-[#a1f4c8] text-[#a1f4c8]" />
                <span>Donate ₹{getFinalAmount().toLocaleString('en-IN')} Now</span>
              </>
            )}
          </button>

          <p className="text-[11px] text-[#717973] text-center">
            Netaji Foundation is a Section 8 Non-Profit NGO. All contributions are 50% tax-deductible under Section 80G of the Income Tax Act.
          </p>
        </form>
      </div>
    </div>
  );
};
