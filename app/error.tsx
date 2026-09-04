'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, RotateCcw, AlertTriangle } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled Application Error:', error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md bg-white border border-[#e0e3e8] rounded-2xl p-8 shadow-xs space-y-4">
        <div className="w-14 h-14 rounded-full bg-[#fde8e8] text-[#c81e1e] flex items-center justify-center mx-auto">
          <AlertTriangle className="w-7 h-7" />
        </div>
        <h1 className="text-2xl font-bold text-[#012d1d]">Something went wrong</h1>
        <p className="text-sm text-[#414844] leading-relaxed">
          An unexpected error occurred while loading this page. Our team has been notified.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 bg-[#012d1d] hover:bg-[#1b4332] text-white font-semibold text-xs py-2.5 px-4 rounded-xl transition-all cursor-pointer shadow-xs"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 border border-[#c1c8c2] hover:bg-[#f8f9fa] text-[#012d1d] font-semibold text-xs py-2.5 px-4 rounded-xl transition-all cursor-pointer shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
