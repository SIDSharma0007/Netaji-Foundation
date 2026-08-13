import React from 'react';
import { Donation } from '../types';
import { CheckCircle2, Download, Printer, ShieldCheck, X } from 'lucide-react';

interface ReceiptModalProps {
  donation: Donation | null;
  onClose: () => void;
}

export const ReceiptModal: React.FC<ReceiptModalProps> = ({ donation, onClose }) => {
  if (!donation) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTxt = () => {
    const text = `
NETAJI FOUNDATION - OFFICIAL TAX DEDUCTION RECEIPT
==================================================
Receipt Number: ${donation.receiptNumber}
Date Issued: ${new Date(donation.createdAt).toLocaleString()}
Donor Name: ${donation.fullName}
Donor Email: ${donation.email}

DONATION DETAILS:
-----------------
Designated Fund: ${donation.campaignTitle || 'General Foundation Fund'}
Amount Received: ₹${donation.amount.toLocaleString('en-IN')} INR
Payment Method: ${donation.paymentMethod}
Status: VERIFIED & CLEARED

ORGANIZATION INFORMATION:
-------------------------
Netaji Foundation - Registered Non-Profit NGO (Section 8)
Registration ID: NGO-NF-884920
Tax Exemption Certificate: Section 80G (PAN: AABTN8849E)

Thank you for your generous contribution. Your support empowers sustainable community development and absolute financial transparency.
    `.trim();

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Receipt_${donation.receiptNumber}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white border border-[#e0e3e8] rounded-2xl w-full max-w-md overflow-hidden shadow-2xl relative">
        {/* Success Banner */}
        <div className="bg-[#012d1d] text-white p-6 text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-12 h-12 rounded-full bg-[#116c4a] text-[#a1f4c8] flex items-center justify-center mx-auto mb-3 shadow-inner">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold">Thank You!</h2>
          <p className="text-xs text-[#a1f4c8] mt-1 font-semibold">
            Your donation was processed successfully.
          </p>
        </div>

        {/* Receipt Details */}
        <div className="p-6 space-y-4">
          <div className="bg-[#f7f9ff] border border-[#e0e3e8] rounded-xl p-4 text-xs space-y-2.5 font-mono">
            <div className="flex justify-between">
              <span className="text-[#717973]">Receipt No:</span>
              <span className="font-bold text-[#012d1d]">{donation.receiptNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#717973]">Donor:</span>
              <span className="font-semibold text-[#181c20]">{donation.fullName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#717973]">Campaign:</span>
              <span className="font-semibold text-[#181c20] truncate max-w-[180px]">
                {donation.campaignTitle}
              </span>
            </div>
            <div className="flex justify-between text-sm border-t border-[#e0e3e8] pt-2">
              <span className="font-bold text-[#012d1d]">Amount Paid:</span>
              <span className="font-black text-[#012d1d]">₹{donation.amount.toLocaleString('en-IN')} INR</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-[#414844] bg-[#cee9d3] p-3 rounded-xl">
            <ShieldCheck className="w-4 h-4 text-[#116c4a] shrink-0" />
            <span>An official copy has been sent to {donation.email}. Tax-deductible receipt.</span>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              onClick={handleDownloadTxt}
              className="w-full bg-[#012d1d] hover:bg-[#1b4332] text-white font-semibold text-xs py-2.5 px-3 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Receipt</span>
            </button>

            <button
              onClick={handlePrint}
              className="w-full border border-[#012d1d] text-[#012d1d] hover:bg-[#f1f4f9] font-semibold text-xs py-2.5 px-3 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
