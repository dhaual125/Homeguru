export default function FinalCTA() {
  return (
    <div
      className="w-full overflow-hidden relative"
      style={{
        borderRadius: '32px',
        background: '#FAFAFA',
        border: '1px solid #e8e8e8',
      }}
    >
      {/* Same gradient as footer SVG — orange left, blue right, peach center */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 60% 80% at 15% 100%, rgba(249,115,12,0.28) 0%, rgba(255,163,54,0.18) 30%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 55% 75% at 85% 100%, rgba(203,219,255,0.55) 0%, rgba(200,215,255,0.3) 30%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 50% 60% at 50% 100%, rgba(240,213,186,0.4) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div className="relative flex flex-col items-center justify-center gap-6 px-8 py-16 md:py-24 text-center">
        {/* Eyebrow */}
        <span className="font-matter text-[11px] font-semibold uppercase tracking-[3px]" style={{ color: '#F97316' }}>
          Start Today
        </span>

        <h2 className="font-season-mix text-[32px] md:text-[52px] leading-[1.1] tracking-tight max-w-xl" style={{ color: '#111' }}>
          Ready to find your perfect Guru?
        </h2>
        <p className="font-matter text-base md:text-lg max-w-md leading-relaxed" style={{ color: '#666' }}>
          Join 30,000+ students learning 1-on-1 with verified tutors across every subject.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <a href="#find-tutor">
            <button
              className="inline-flex items-center justify-center gap-2 font-matter font-semibold rounded-full px-7 py-3.5 text-base text-white transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{ background: '#111' }}
            >
              Find Your Tutor
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </a>
          <a href="#become-tutor">
            <button
              className="inline-flex items-center justify-center font-matter font-medium rounded-full px-7 py-3.5 text-base transition-all duration-200 active:scale-95"
              style={{ color: '#444', border: '1px solid #ddd', background: 'rgba(255,255,255,0.6)' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.9)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.6)')}
            >
              Become a Tutor →
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
