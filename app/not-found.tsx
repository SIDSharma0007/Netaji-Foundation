import Link from 'next/link';
import { Sprout, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md bg-white border border-[#e0e3e8] rounded-2xl p-8 shadow-xs space-y-4">
        <div className="w-12 h-12 rounded-full bg-[#cee9d3] text-[#012d1d] flex items-center justify-center mx-auto">
          <Sprout className="w-6 h-6" />
        </div>
        <h1 className="text-3xl font-extrabold text-[#012d1d]">Page Not Found</h1>
        <p className="text-sm text-[#414844]">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#012d1d] hover:bg-[#1b4332] text-white font-semibold text-xs py-2.5 px-4 rounded-xl transition-all shadow-xs cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
