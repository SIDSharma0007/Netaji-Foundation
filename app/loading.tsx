export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-14 h-14 rounded-full overflow-hidden bg-white shadow-md border border-[#e0e3e8] p-1 animate-pulse">
          <img
            src="/images/netaji-logo.png"
            alt="Netaji Subhash Chandra Bose Seva Samity"
            className="w-full h-full object-contain"
          />
        </div>
        <p className="text-xs font-semibold text-[#012d1d] tracking-wide">Loading Netaji Subhash Chandra Bose Seva Samity...</p>
      </div>
    </div>
  );
}
