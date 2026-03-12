import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const smoothScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
              {[{ label: 'Explore Subjects', href: '#' }, { label: 'Become a Tutor', href: '#become-tutor' }, { label: 'About', href: '#about' }].map(({ label, href }) => (
                <div key={label} className="relative group">
                  <a
                    href={href}
                    onClick={label === 'About' ? (e) => { e.preventDefault(); smoothScrollTo('about'); } : label === 'Become a Tutor' ? (e) => { e.preventDefault(); smoothScrollTo('become-tutor'); } : undefined}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-black/5"
                  >
                    <span className="font-medium text-xs uppercase tracking-[1px] font-matter text-black">{label}</span>
                  </a>
                </div>
              ))}
            </div>

            <div className="hidden md:flex flex-1 justify-end items-center gap-3">
              <a href="https://dashboard.sarvam.ai/">
                <button className="inline-flex items-center justify-center cursor-pointer font-matter font-medium rounded-full px-5 py-2.5 text-sm bg-[#131313] text-white transition-opacity duration-200 hover:opacity-80 active:scale-95">
                  Get Started
                </button>
              </a>
              <a href="/contact-us">
                <button className="inline-flex items-center justify-center cursor-pointer font-matter font-medium rounded-full px-5 py-2.5 text-sm bg-[#f0f0f0] text-black border border-black transition-opacity duration-200 hover:opacity-80 active:scale-95">
                  Login
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
                  {[{ label: 'Explore Subjects', href: '#' }, { label: 'Become a Tutor', href: '#become-tutor' }, { label: 'About', href: '#about' }].map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      onClick={label === 'About' ? (e) => { e.preventDefault(); smoothScrollTo('about'); setIsMenuOpen(false); } : label === 'Become a Tutor' ? (e) => { e.preventDefault(); smoothScrollTo('become-tutor'); setIsMenuOpen(false); } : undefined}
                      className="block py-2 font-matter font-medium text-sm uppercase tracking-[1px] text-black"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="pt-4 flex flex-col gap-3">
                    <a href="https://dashboard.sarvam.ai/" className="w-full">
                      <button className="w-full inline-flex items-center justify-center cursor-pointer font-matter font-medium rounded-full px-5 py-2.5 text-sm bg-[#131313] text-white transition-opacity duration-200 hover:opacity-80 active:scale-95">
                        Get Started
                      </button>
                    </a>
                    <a href="/contact-us" className="w-full">
                      <button className="w-full inline-flex items-center justify-center cursor-pointer font-matter font-medium rounded-full px-5 py-2.5 text-sm bg-[#f0f0f0] text-black transition-opacity duration-200 hover:opacity-80 active:scale-95">
                        Login
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
