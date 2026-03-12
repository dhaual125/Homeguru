export default function FinalCTA() {
  return (
    <div className="w-full rounded-[28px] md:rounded-[48px] border border-[#1a1a1a] overflow-hidden" style={{ background: '#f2f2f2' }}>
      <div className="flex flex-col items-center justify-center gap-5 px-8 py-16 md:py-24 text-center">
        <h2 className="font-season-mix text-[28px] md:text-[42px] text-[#1a1a1a] leading-[1.2] tracking-tight">
          Ready To Start?
        </h2>
        <p className="font-matter text-[#888] text-base md:text-lg max-w-md leading-relaxed">
          Find your perfect tutor and start learning 1 on 1 today.
        </p>
        <a href="#find-tutor" className="mt-2">
          <button className="inline-flex items-center justify-center cursor-pointer font-matter font-medium rounded-full px-7 py-3 text-base bg-[#131313] text-white transition-opacity duration-200 hover:opacity-75 active:scale-95">
            Find Your Perfect Tutor
          </button>
        </a>
      </div>
    </div>
  );
}
