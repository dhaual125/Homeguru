import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tickerConfig = {
  enabled: true,
  mode: "announcement",
  items: [{
    label: "Indus is live in beta. Try Now",
    href: "/blogs/introducing-indus",
    badge: "NEW"
  }]
};

const TickerStar = ({ className = "" }) => (
  <svg className={className} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#ticker-star-filter)">
      <path d="M5.44591 9.26754C4.39059 10.3229 2.67959 10.3229 1.62427 9.26754L0.202621 7.8459C-0.0675402 7.57574 -0.0675402 7.13772 0.202621 6.86756L1.62427 5.44591C2.67959 4.39059 4.39059 4.39059 5.44591 5.44591L7.35673 7.35673L5.44591 9.26754Z" fill="#F1F1F1" />
      <path d="M5.44591 13.0892C4.39059 12.0339 4.39059 10.3229 5.44591 9.26754L7.35673 7.35673L9.26754 9.26754C10.3229 10.3229 10.3229 12.0339 9.26754 13.0892L7.35673 15L5.44591 13.0892Z" fill="#F1F1F1" />
      <path d="M5.44591 5.44591C4.39059 4.39059 4.39059 2.67959 5.44591 1.62427L6.86756 0.202621C7.13772 -0.0675402 7.57573 -0.0675402 7.84589 0.202621L9.26754 1.62427C10.3229 2.67959 10.3229 4.39059 9.26754 5.44591L7.35673 7.35673L5.44591 5.44591Z" fill="#F1F1F1" />
      <path d="M13.0892 9.26754C12.0339 10.3229 10.3229 10.3229 9.26754 9.26754L7.35673 7.35673L9.26754 5.44591C10.3229 4.39059 12.0339 4.39059 13.0892 5.44591L15 7.35672L13.0892 9.26754Z" fill="#F1F1F1" />
    </g>
    <defs>
      <filter id="ticker-star-filter" x="0" y="0" width="15" height="15" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
      </filter>
    </defs>
  </svg>
);

export default function Header() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(1, window.scrollY / 100);
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 right-0 left-0 z-[10000] w-full">
      {/* Announcement Ticker */}
      {tickerConfig.enabled && tickerConfig.mode === "announcement" && (
        <div
          className="relative flex justify-center items-center h-8 bg-cover bg-center"
          style={{ backgroundImage: "url('https://assets.sarvam.ai/tr:f-auto/assets/home/hero-bg.webp')" }}
        >
          <div className="relative z-10 flex items-center gap-2.5">
            <TickerStar />
            {tickerConfig.items[0].badge && (
              <span className="bg-white/20 px-2 py-0.5 border border-white/20 rounded-full font-matter font-semibold text-white text-[10px] leading-none uppercase">
                {tickerConfig.items[0].badge}
              </span>
            )}
            <a
              href={tickerConfig.items[0].href}
              className="flex items-center gap-1.5 font-matter font-medium text-white/90 hover:text-white text-[14px] tracking-wide transition-colors"
            >
              {tickerConfig.items[0].label}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <TickerStar />
          </div>
        </div>
      )}

      {/* Main Navigation */}
      <div
        className="p-0 transition-all duration-300"
        style={{
          background: `linear-gradient(to bottom, rgba(255,255,255,${scrollProgress}), rgba(255,255,255,0))`
        }}
      >
        <div
          className="rounded-b-xl overflow-hidden"
          style={{
            backgroundColor: `rgba(255, 255, 255, ${scrollProgress})`,
            borderBottomWidth: scrollProgress > 0 ? "1px" : "0px",
            borderBottomStyle: "solid",
            borderBottomColor: `rgba(240, 240, 240, ${scrollProgress})`
          }}
        >
          <nav className="flex justify-between items-center py-3 pr-4 pl-6 w-full mx-auto max-w-width-mx">
            <a href="/" className="flex flex-1 items-center gap-2 transition-opacity">
              <img
                src="https://assets.sarvam.ai/assets/svgs/sarvam-wordmark-black.svg"
                alt="Sarvam AI"
                className="w-auto h-4 md:h-4.5"
                width="202"
                height="32"
              />
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex flex-2 justify-center items-center gap-4">
              {['PLATFORM', 'DEVELOPERS', 'BLOGS', 'COMPANY'].map((item) => (
                <div key={item} className="relative group">
                  <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-black/5">
                    <span className="font-medium text-xs uppercase tracking-[1px] font-matter text-black">{item}</span>
                    <svg width="6" height="10" viewBox="0 0 6 10" className="ml-1.5 transition-transform duration-300 group-hover:rotate-90">
                      <path d="M1 1L5 5L1 9" stroke="#666" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            <div className="hidden md:flex flex-1 justify-end items-center gap-3">
              <a href="https://dashboard.sarvam.ai/">
                <button className="relative inline-flex items-center justify-center cursor-pointer font-season-mix font-medium transition-all duration-500 overflow-hidden rounded-full hover:duration-700 active:scale-95 active:duration-200 touch-manipulation px-5 py-3 text-base bg-[#131313] text-white shadow-[inset_0_0_12px_rgba(255,255,255,1),0px_0px_2px_0_rgba(0,0,0,0.1)] group w-fit text-nowrap">
                  <span className="absolute inset-0 opacity-0 transition-opacity duration-700 bg-[linear-gradient(90deg,#131313_0%,#0A2156_33%,#BED2FF_66%,#FF8717_100%)] group-hover:opacity-100 group-active:opacity-100 rounded-full shadow-[inset_0px_0px_12px_2px_rgba(255,255,255,0.5)]" style={{ backgroundPosition: '50% 0%', backgroundSize: '200% 100%' }} aria-hidden="true"></span>
                  <span className="z-10 relative flex items-center gap-2 transition-all duration-500">Experience Sarvam</span>
                </button>
              </a>
              <a href="/contact-us">
                <button className="relative inline-flex items-center justify-center cursor-pointer font-season-mix font-medium transition-all duration-500 overflow-hidden rounded-full hover:duration-700 active:scale-95 active:duration-200 touch-manipulation px-5 py-3 text-base bg-sf text-black shadow-[inset_0_0_12px_rgba(0,0,0,0.09),0px_0px_1px_rgba(0,0,0,0.2)] group w-fit text-nowrap">
                  <span className="absolute inset-0 opacity-0 rounded-full transition-opacity duration-700 bg-gradient-to-r from-[#A5BBFC] via-[#D5E2FF] to-[#FFA133] group-hover:opacity-100 group-active:opacity-100 shadow-[inset_0_0_12px_2px_rgba(255,255,255,1)]" style={{ backgroundPosition: '50% 0%', backgroundSize: '200% 100%' }} aria-hidden="true"></span>
                  <span className="z-10 relative flex items-center gap-2 transition-all duration-500">Talk to Sales</span>
                </button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex flex-col justify-center items-center space-y-1 w-8 h-8 focus:outline-none"
            >
              <span className={`w-6 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`w-6 h-0.5 bg-black transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </button>
          </nav>

          {/* Mobile Menu Content */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100"
              >
                <div className="p-6 space-y-4">
                  {['PLATFORM', 'DEVELOPERS', 'BLOGS', 'COMPANY'].map((item) => (
                    <a key={item} href="#" className="block py-2 font-matter font-medium text-sm uppercase tracking-[1px] text-black">
                      {item}
                    </a>
                  ))}
                  <div className="pt-4 flex flex-col gap-3">
                    <a href="https://dashboard.sarvam.ai/" className="w-full">
                      <button className="relative inline-flex items-center justify-center cursor-pointer font-season-mix font-medium transition-all duration-500 overflow-hidden rounded-full hover:duration-700 active:scale-95 active:duration-200 touch-manipulation px-5 py-3 text-base bg-[#131313] text-white shadow-[inset_0_0_12px_rgba(255,255,255,1),0px_0px_2px_0_rgba(0,0,0,0.1)] group w-full text-nowrap">
                        <span className="absolute inset-0 opacity-0 transition-opacity duration-700 bg-[linear-gradient(90deg,#131313_0%,#0A2156_33%,#BED2FF_66%,#FF8717_100%)] group-hover:opacity-100 group-active:opacity-100 rounded-full shadow-[inset_0px_0px_12px_2px_rgba(255,255,255,0.5)]" style={{ backgroundPosition: '50% 0%', backgroundSize: '200% 100%' }} aria-hidden="true"></span>
                        <span className="z-10 relative flex items-center gap-2 transition-all duration-500">Experience Sarvam</span>
                      </button>
                    </a>
                    <a href="/contact-us" className="w-full">
                      <button className="relative inline-flex items-center justify-center cursor-pointer font-season-mix font-medium transition-all duration-500 overflow-hidden rounded-full hover:duration-700 active:scale-95 active:duration-200 touch-manipulation px-5 py-3 text-base bg-sf text-black shadow-[inset_0_0_12px_rgba(0,0,0,0.09),0px_0px_1px_rgba(0,0,0,0.2)] group w-full text-nowrap">
                        <span className="absolute inset-0 opacity-0 rounded-full transition-opacity duration-700 bg-gradient-to-r from-[#A5BBFC] via-[#D5E2FF] to-[#FFA133] group-hover:opacity-100 group-active:opacity-100 shadow-[inset_0_0_12px_2px_rgba(255,255,255,1)]" style={{ backgroundPosition: '50% 0%', backgroundSize: '200% 100%' }} aria-hidden="true"></span>
                        <span className="z-10 relative flex items-center gap-2 transition-all duration-500">Talk to Sales</span>
                      </button>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
