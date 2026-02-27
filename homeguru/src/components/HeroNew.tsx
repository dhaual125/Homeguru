import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

/* ── Subject / Domain data ── */
const subjects = [
  { label: 'School Subjects', color: '#F59E0B' },
  { label: 'Coding & AI', color: '#6366F1' },
  { label: 'Music & Dance', color: '#EC4899' },
  { label: 'Languages', color: '#10B981' },
  { label: 'Competitive Exams', color: '#F97316' },
  { label: 'Professional Skills', color: '#8B5CF6' },
];

/* ── Cute SVG Pet (owl mascot) ── */
function PetMascot({ style }: { style?: React.CSSProperties }) {
  return (
    <div style={{ width: 40, height: 40, ...style }}>
      <svg viewBox="0 0 100 100" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Body */}
        <ellipse cx="50" cy="62" rx="30" ry="32" fill="#4ADE80" />
        {/* Belly */}
        <ellipse cx="50" cy="68" rx="18" ry="20" fill="#BBF7D0" />
        {/* Left ear */}
        <polygon points="26,38 20,18 36,32" fill="#4ADE80" />
        <polygon points="28,36 24,22 34,33" fill="#22C55E" />
        {/* Right ear */}
        <polygon points="74,38 80,18 64,32" fill="#4ADE80" />
        <polygon points="72,36 76,22 66,33" fill="#22C55E" />
        {/* Head */}
        <circle cx="50" cy="40" r="22" fill="#4ADE80" />
        {/* Face */}
        <circle cx="50" cy="42" r="16" fill="#DCFCE7" />
        {/* Left eye */}
        <circle cx="42" cy="38" r="6" fill="white" />
        <circle cx="43" cy="37" r="3.5" fill="#1E293B" />
        <circle cx="44" cy="36" r="1.2" fill="white" />
        {/* Right eye */}
        <circle cx="58" cy="38" r="6" fill="white" />
        <circle cx="59" cy="37" r="3.5" fill="#1E293B" />
        <circle cx="60" cy="36" r="1.2" fill="white" />
        {/* Beak */}
        <polygon points="47,44 53,44 50,49" fill="#FB923C" />
        {/* Cheeks */}
        <circle cx="36" cy="44" r="3" fill="#FCA5A5" opacity="0.5" />
        <circle cx="64" cy="44" r="3" fill="#FCA5A5" opacity="0.5" />
        {/* Feet */}
        <ellipse cx="40" cy="92" rx="8" ry="4" fill="#FB923C" />
        <ellipse cx="60" cy="92" rx="8" ry="4" fill="#FB923C" />
      </svg>
    </div>
  );
}

export default function HeroNew() {
  const motifRef = useRef<HTMLImageElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const subjectsRef = useRef<HTMLDivElement>(null);
  const petRef = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activePill, setActivePill] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from(motifRef.current, { opacity: 0, scale: 0.5, y: 10, duration: 1, delay: 0.2 })
      .from(badgeRef.current, { opacity: 0, y: 20, duration: 0.8 }, '-=0.6')
      .from(headingRef.current, { opacity: 0, y: 30, duration: 1 }, '-=0.5')
      .from(subheadingRef.current, { opacity: 0, y: 20, duration: 0.8 }, '-=0.6')
      .from(ctaRef.current, { opacity: 0, scale: 0.95, y: 10, duration: 0.7 }, '-=0.4');

    // Subjects bar entrance
    if (subjectsRef.current) {
      tl.from(subjectsRef.current, { opacity: 0, y: 20, duration: 0.8 }, '-=0.3');
    }
  }, []);

  // Move pet smoothly to hovered pill
  const movePetTo = (index: number) => {
    setActivePill(index);
    const pill = pillRefs.current[index];
    const container = subjectsRef.current;
    if (!pill || !container || !petRef.current) return;

    const pillRect = pill.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const targetX = pillRect.left - containerRect.left + pillRect.width / 2 - 20;

    gsap.to(petRef.current, {
      x: targetX,
      duration: 1.2,
      ease: 'elastic.out(1, 0.75)',
      overwrite: true,
    });
  };

  return (
    <section className="relative flex flex-col pt-28 md:pt-40 h-screen overflow-visible">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 opacity-30 md:opacity-40 blur-[80px] md:blur-[100px] w-[300px] md:w-[600px] h-[200px] md:h-[400px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #A5BBFC 0%, #D5E2FF 40%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="flex flex-1 justify-center items-center mx-auto pb-[6vh] w-[85%] md:w-9/12 max-w-width-mx overflow-visible">
        <div className="relative flex flex-col items-center">
          <div className="z-10 relative flex flex-col items-center gap-5 md:gap-8">

            {/* Badge */}
            <div
              ref={badgeRef}
              className="relative bg-white/50 shadow-[0px_0px_60px_0px_rgba(85,106,220,0.12)] backdrop-blur-lg px-5 py-2.5 border border-sr-indigo-200/60 rounded-full overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full animate-[shimmer_3s_ease-in-out_infinite_1.5s] pointer-events-none" aria-hidden="true" />
              <p className="relative font-matter font-semibold text-sr-indigo-800 text-sm text-center leading-normal tracking-wide">
                Learn Like Never before  
              </p>
            </div>

            {/* Heading */}
            <div className="relative flex flex-col items-center gap-2.5 md:gap-3">
              <h1
                ref={headingRef}
                className="relative z-10 max-w-4xl font-season-mix text-[42px] md:text-[60px] text-center leading-[1.05] tracking-tight text-tx"
              >
                Learn Anything 1 <span style={{ color: '#F97316' }}>on</span> 1 With the Right Guru.
              </h1>
              <p
                ref={subheadingRef}
                className="relative z-10 max-w-[800px] font-matter md:text-[22px] text-lg text-center leading-[1.6] text-tx-secondary"
              >
                Personalised global learning platform for every age, every skill.
              </p>
            </div>

            {/* CTA buttons */}
            <div ref={ctaRef} className="flex flex-row gap-4">
              <a href="#find-Guru" aria-label="Find Your Guru">
                <button className="relative inline-flex items-center justify-center cursor-pointer font-season-mix font-medium transition-all duration-500 overflow-hidden rounded-full hover:duration-700 active:scale-95 active:duration-200 touch-manipulation px-6 py-3.5 text-lg bg-[#131313] text-white shadow-[inset_0_0_12px_rgba(255,255,255,1),0px_0px_2px_0_rgba(0,0,0,0.1)] group w-fit text-nowrap">
                  <span className="absolute inset-0 opacity-0 transition-opacity duration-700 bg-[linear-gradient(90deg,#131313_0%,#0A2156_33%,#BED2FF_66%,#FF8717_100%)] group-hover:opacity-100 group-active:opacity-100 rounded-full shadow-[inset_0px_0px_12px_2px_rgba(255,255,255,0.5)]" style={{ backgroundPosition: '50% 0%', backgroundSize: '200% 100%' }} aria-hidden="true" />
                  <span className="z-10 relative flex items-center gap-2 transition-all duration-500">Find Your Guru</span>
                </button>
              </a>
              <a href="#become-Guru" aria-label="Join as a Guru">
                <button className="relative inline-flex items-center justify-center cursor-pointer font-season-mix font-medium transition-all duration-500 overflow-hidden rounded-full hover:duration-700 active:scale-95 active:duration-200 touch-manipulation px-6 py-3.5 text-lg bg-sf text-black shadow-[inset_0_0_12px_rgba(0,0,0,0.09),0px_0px_1px_rgba(0,0,0,0.2)] group w-fit text-nowrap">
                  <span className="absolute inset-0 opacity-0 rounded-full transition-opacity duration-700 bg-gradient-to-r from-[#A5BBFC] via-[#D5E2FF] to-[#FFA133] group-hover:opacity-100 group-active:opacity-100 shadow-[inset_0_0_12px_2px_rgba(255,255,255,1)]" style={{ backgroundPosition: '50% 0%', backgroundSize: '200% 100%' }} aria-hidden="true" />
                  <span className="z-10 relative flex items-center gap-2 transition-all duration-500">Join as a Guru</span>
                </button>
              </a>
            </div>

            {/* ═══ SUBJECTS CANVAS ═══ */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: '8px' }}>

              {/* Divider line */}
              <div style={{ width: '100%', maxWidth: '820px', height: '1px', background: 'linear-gradient(90deg, transparent 0%, #E5E7EB 20%, #E5E7EB 80%, transparent 100%)', marginBottom: '16px' }} />

              {/* Subject pills wrapper (pet is relative to this) */}
              <div ref={subjectsRef} style={{
                position: 'relative',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '12px',
                maxWidth: '820px',
              }}>
                {/* Pet mascot — sits directly above the chips */}
                <div
                  ref={petRef}
                  style={{
                    position: 'absolute',
                    top: '-44px',
                    left: 0,
                    zIndex: 10,
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                  }}
                >
                  <PetMascot />
                </div>
                {subjects.map((sub, i) => (
                  <div
                    key={sub.label}
                    ref={el => { pillRefs.current[i] = el; }}
                    onMouseEnter={() => movePetTo(i)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '8px 20px',
                      borderRadius: '50px',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: 500,
                      fontFamily: 'Matter, sans-serif',
                      color: activePill === i ? sub.color : '#64748B',
                      background: activePill === i ? `${sub.color}10` : 'transparent',
                      border: activePill === i ? `1.5px solid ${sub.color}30` : '1.5px solid transparent',
                      transition: 'all 0.3s ease',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {sub.label}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>


    </section>
  );
}
