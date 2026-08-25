import { Sprout } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-[#012d1d] flex items-center justify-center text-[#a1f4c8] animate-bounce">
          <Sprout className="w-6 h-6" />
        </div>
        <p className="text-xs font-semibold text-[#414844] tracking-wide">Loading Netaji Foundation...</p>
      </div>
    </div>
  );
}
