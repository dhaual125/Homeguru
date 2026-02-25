import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function HeroNew() {
  const motifRef = useRef<HTMLImageElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from(motifRef.current, {
      opacity: 0,
      scale: 0.5,
      y: 10,
      duration: 1,
      delay: 0.2
    })
      .from(badgeRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8
      }, '-=0.6')
      .from(headingRef.current, {
        opacity: 0,
        y: 30,
        duration: 1
      }, '-=0.5')
      .from(subheadingRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8
      }, '-=0.6')
      .from(ctaRef.current, {
        opacity: 0,
        scale: 0.95,
        y: 10,
        duration: 0.7
      }, '-=0.4');
  }, []);

  return (
    <section className="relative flex flex-col pt-28 md:pt-40 h-screen overflow-visible">
      {/* Background radial gradient */}
      <div
        className="absolute top-1/2 left-1/2 opacity-30 md:opacity-40 blur-[80px] md:blur-[100px] w-[300px] md:w-[600px] h-[200px] md:h-[400px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #A5BBFC 0%, #D5E2FF 40%, transparent 70%)' }}
        aria-hidden="true"
      ></div>

      <div className="flex flex-1 justify-center items-center mx-auto pb-[12vh] w-[85%] md:w-9/12 max-w-width-mx overflow-visible">
        <div className="relative flex flex-col items-center">
          <img
            src="https://assets.sarvam.ai/assets/home/hero-gradient.svg"
            alt=""
            className="absolute top-[-80%] md:top-[-165%] left-1/2 w-[160%] md:w-[220%] max-w-none h-auto scale-x-200 scale-y-170 -translate-x-1/2 pointer-events-none"
          />

          <div className="z-10 relative flex flex-col items-center gap-5 md:gap-10">
            <img
              ref={motifRef}
              src="https://assets.sarvam.ai/assets/svgs/motif.svg"
              alt=""
              role="presentation"
              className="w-auto h-10 object-cover"
            />

            <div
              ref={badgeRef}
              className="relative bg-white/50 shadow-[0px_0px_60px_0px_rgba(85,106,220,0.12)] backdrop-blur-lg px-5 py-2.5 border border-sr-indigo-200/60 rounded-full overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full animate-[shimmer_3s_ease-in-out_infinite_1.5s] pointer-events-none" aria-hidden="true"></span>
              <p className="relative font-matter font-semibold text-sr-indigo-800 text-sm text-center leading-normal tracking-wide">
                India's Sovereign AI Platform
              </p>
            </div>

            <div className="flex flex-col items-center gap-2.5 md:gap-3">
              <h1
                ref={headingRef}
                className="max-w-4xl font-season-mix text-[48px] md:text-[72px] text-center leading-[1.05] tracking-tight text-tx"
              >
                AI for all from India
              </h1>
              <p
                ref={subheadingRef}
                className="max-w-[800px] font-matter md:text-[22px] text-lg text-center leading-[1.6] text-tx-secondary"
              >
                Built on sovereign compute. Powered by frontier-class models.<br className="hidden md:block" />
                Delivering population-scale impact.
              </p>
            </div>

            <div ref={ctaRef}>
              <a href="https://dashboard.sarvam.ai/" aria-label="Sign in to experience Sarvam">
                <button className="relative inline-flex items-center justify-center cursor-pointer font-season-mix font-medium transition-all duration-500 overflow-hidden rounded-full hover:duration-700 active:scale-95 active:duration-200 touch-manipulation px-6 py-3.5 text-lg bg-[#131313] text-white shadow-[inset_0_0_12px_rgba(255,255,255,1),0px_0px_2px_0_rgba(0,0,0,0.1)] group w-fit text-nowrap">
                  <span className="absolute inset-0 opacity-0 transition-opacity duration-700 bg-[linear-gradient(90deg,#131313_0%,#0A2156_33%,#BED2FF_66%,#FF8717_100%)] group-hover:opacity-100 group-active:opacity-100 rounded-full shadow-[inset_0px_0px_12px_2px_rgba(255,255,255,0.5)]" style={{ backgroundPosition: '50% 0%', backgroundSize: '200% 100%' }} aria-hidden="true"></span>
                  <span className="z-10 relative flex items-center gap-2 transition-all duration-500">Experience Sarvam</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-8 pb-8 md:pb-14 w-full shrink-0">
        <p className="font-matter font-semibold text-tx-tertiary text-xs uppercase tracking-[3px] text-center w-full">
          India builds with Sarvam
        </p>
      </div>
    </section>
  );
}
