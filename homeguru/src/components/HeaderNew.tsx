import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
      {/* Powered by Osmium AI Bar */}
      <div
        className="relative flex justify-center items-center h-8 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 40%, #312E81 100%)' }}
      >
        {/* Subtle animated shimmer */}
        <div
          style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 50%, transparent 100%)',
            animation: 'shimmer 4s ease-in-out infinite',
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 flex items-center">
          <span className="font-matter font-medium text-white/80 text-[13px] tracking-wide">
            Powered by <span style={{ color: '#A5B4FC', fontWeight: 600 }}>Osmium AI</span>
          </span>
        </div>
      </div>

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
                src="https://homeguruworld.com/wp-content/uploads/2022/04/Homeguru-Logo-1.png"
                alt="HomeGuru"
                className="w-auto h-10 md:h-12"
              />
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex flex-2 justify-center items-center gap-4">
              {['Explore Subjects', 'Become a Tutor', 'About'].map((item) => (
                <div key={item} className="relative group">
                  <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-black/5">
                    <span className="font-medium text-xs uppercase tracking-[1px] font-matter text-black">{item}</span>
                  </button>
                </div>
              ))}
            </div>

            <div className="hidden md:flex flex-1 justify-end items-center gap-3">
              <a href="https://dashboard.sarvam.ai/">
                <button className="relative inline-flex items-center justify-center cursor-pointer font-season-mix font-medium transition-all duration-500 overflow-hidden rounded-full hover:duration-700 active:scale-95 active:duration-200 touch-manipulation px-5 py-3 text-base bg-[#131313] text-white shadow-[inset_0_0_12px_rgba(255,255,255,1),0px_0px_2px_0_rgba(0,0,0,0.1)] group w-fit text-nowrap">
                  <span className="absolute inset-0 opacity-0 transition-opacity duration-700 bg-[linear-gradient(90deg,#131313_0%,#0A2156_33%,#BED2FF_66%,#FF8717_100%)] group-hover:opacity-100 group-active:opacity-100 rounded-full shadow-[inset_0px_0px_12px_2px_rgba(255,255,255,0.5)]" style={{ backgroundPosition: '50% 0%', backgroundSize: '200% 100%' }} aria-hidden="true"></span>
                  <span className="z-10 relative flex items-center gap-2 transition-all duration-500">Get Started</span>
                </button>
              </a>
              <a href="/contact-us">
                <button className="relative inline-flex items-center justify-center cursor-pointer font-season-mix font-medium transition-all duration-500 overflow-hidden rounded-full hover:duration-700 active:scale-95 active:duration-200 touch-manipulation px-5 py-3 text-base bg-sf text-black shadow-[inset_0_0_12px_rgba(0,0,0,0.09),0px_0px_1px_rgba(0,0,0,0.2)] group w-fit text-nowrap">
                  <span className="absolute inset-0 opacity-0 rounded-full transition-opacity duration-700 bg-gradient-to-r from-[#A5BBFC] via-[#D5E2FF] to-[#FFA133] group-hover:opacity-100 group-active:opacity-100 shadow-[inset_0_0_12px_2px_rgba(255,255,255,1)]" style={{ backgroundPosition: '50% 0%', backgroundSize: '200% 100%' }} aria-hidden="true"></span>
                  <span className="z-10 relative flex items-center gap-2 transition-all duration-500">Login</span>
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
                  {['Explore Subjects', 'Become a Tutor', 'About'].map((item) => (
                    <a key={item} href="#" className="block py-2 font-matter font-medium text-sm uppercase tracking-[1px] text-black">
                      {item}
                    </a>
                  ))}
                  <div className="pt-4 flex flex-col gap-3">
                    <a href="https://dashboard.sarvam.ai/" className="w-full">
                      <button className="relative inline-flex items-center justify-center cursor-pointer font-season-mix font-medium transition-all duration-500 overflow-hidden rounded-full hover:duration-700 active:scale-95 active:duration-200 touch-manipulation px-5 py-3 text-base bg-[#131313] text-white shadow-[inset_0_0_12px_rgba(255,255,255,1),0px_0px_2px_0_rgba(0,0,0,0.1)] group w-full text-nowrap">
                        <span className="absolute inset-0 opacity-0 transition-opacity duration-700 bg-[linear-gradient(90deg,#131313_0%,#0A2156_33%,#BED2FF_66%,#FF8717_100%)] group-hover:opacity-100 group-active:opacity-100 rounded-full shadow-[inset_0px_0px_12px_2px_rgba(255,255,255,0.5)]" style={{ backgroundPosition: '50% 0%', backgroundSize: '200% 100%' }} aria-hidden="true"></span>
                        <span className="z-10 relative flex items-center gap-2 transition-all duration-500">Get Started</span>
                      </button>
                    </a>
                    <a href="/contact-us" className="w-full">
                      <button className="relative inline-flex items-center justify-center cursor-pointer font-season-mix font-medium transition-all duration-500 overflow-hidden rounded-full hover:duration-700 active:scale-95 active:duration-200 touch-manipulation px-5 py-3 text-base bg-sf text-black shadow-[inset_0_0_12px_rgba(0,0,0,0.09),0px_0px_1px_rgba(0,0,0,0.2)] group w-full text-nowrap">
                        <span className="absolute inset-0 opacity-0 rounded-full transition-opacity duration-700 bg-gradient-to-r from-[#A5BBFC] via-[#D5E2FF] to-[#FFA133] group-hover:opacity-100 group-active:opacity-100 shadow-[inset_0_0_12px_2px_rgba(255,255,255,1)]" style={{ backgroundPosition: '50% 0%', backgroundSize: '200% 100%' }} aria-hidden="true"></span>
                        <span className="z-10 relative flex items-center gap-2 transition-all duration-500">Login</span>
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
