import React from 'react';
import { FinancialReport } from '../types';
import { X, FileText, Download, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ReportViewerModalProps {
  report: FinancialReport | null;
  onClose: () => void;
}

export const ReportViewerModal: React.FC<ReportViewerModalProps> = ({ report, onClose }) => {
  if (!report) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white border border-[#e0e3e8] rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="p-6 bg-[#012d1d] text-white flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#a1f4c8]" />
            <div>
              <h2 className="text-xl font-bold">{report.title}</h2>
              <p className="text-xs text-[#a1f4c8]">Independently Audited Statement ({report.year})</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-white/80 hover:text-white rounded-lg cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Document Content Viewer */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-[#181c20]">
          <div className="p-4 bg-[#f7f9ff] border border-[#e0e3e8] rounded-xl flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-[#012d1d] font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#116c4a]" />
              <span>Certified Audit Status: PASSED & VERIFIED</span>
            </div>
            <span className="font-mono text-[#717973]">File: {report.fileSize}</span>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-[#012d1d] text-base border-b border-[#e0e3e8] pb-1">
              Executive Financial Overview ({report.year})
            </h3>
            <p className="text-[#414844] leading-relaxed">
              In {report.year}, Netaji Foundation deployed 80% of all public contributions directly into frontline field programs across literacy, clean water, urban ecology, and youth skills.
            </p>

            <div className="grid grid-cols-3 gap-4 my-4">
              <div className="p-3 bg-[#f1f4f9] rounded-xl text-center">
                <p className="text-xs text-[#717973] uppercase font-bold">Total Revenue</p>
                <p className="text-lg font-black text-[#012d1d]">₹35 Cr+</p>
              </div>

              <div className="p-3 bg-[#f1f4f9] rounded-xl text-center">
                <p className="text-xs text-[#717973] uppercase font-bold">Program Deployment</p>
                <p className="text-lg font-black text-[#116c4a]">80.2%</p>
              </div>

              <div className="p-3 bg-[#f1f4f9] rounded-xl text-center">
                <p className="text-xs text-[#717973] uppercase font-bold">Audit Rating</p>
                <p className="text-lg font-black text-[#012d1d]">Unqualified</p>
              </div>
            </div>

            <h4 className="font-bold text-[#012d1d]">Auditor Notes & Compliance Statement</h4>
            <p className="text-xs text-[#414844] leading-relaxed">
              The financial statements present fairly, in all material respects, the financial position of Netaji Foundation as of December 31, {report.year}, in accordance with ICAI accounting standards and Section 80G non-profit frameworks. No material weaknesses or internal control deficiencies were noted during the annual audit.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#f7f9ff] border-t border-[#e0e3e8] flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-[#414844] hover:bg-[#e0e3e8] rounded-xl transition-colors cursor-pointer"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
