"use client";
import { Timeline } from "@/components/ui/timeline";

// ── Step Visual — rich layered graphic, no text, pure illustration ─────────
function StepVisual({ step }: { step: 1 | 2 | 3 }) {
  const palette: Record<number, { bg: string; accent: string; accent2: string; accent3: string }> = {
    1: { bg: '#FFF7ED', accent: '#F97316', accent2: '#FDBA74', accent3: '#FED7AA' },
    2: { bg: '#EEF2FF', accent: '#6366F1', accent2: '#A5B4FC', accent3: '#C7D2FE' },
    3: { bg: '#ECFDF5', accent: '#10B981', accent2: '#6EE7B7', accent3: '#A7F3D0' },
  };
  const c = palette[step];

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '220px',
        borderRadius: '20px',
        background: c.bg,
        overflow: 'hidden',
        marginTop: '8px',
      }}
    >
      {/* Background grid pattern */}
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.3 }}>
        <defs>
          <pattern id={`grid-${step}`} width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M32 0H0V32" fill="none" stroke={c.accent} strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${step})`} />
      </svg>

      {/* Decorative elements — unique per step */}
      {step === 1 && (
        <>
          {/* Profile card mockup */}
          <div style={{
            position: 'absolute', top: '30px', left: '50%', transform: 'translateX(-50%)',
            width: '180px', height: '48px', borderRadius: '12px', background: '#fff',
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: '10px', padding: '0 14px',
          }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: `linear-gradient(135deg, ${c.accent}, ${c.accent2})` }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ width: '70px', height: '6px', borderRadius: '3px', background: '#E5E7EB' }} />
              <div style={{ width: '45px', height: '5px', borderRadius: '3px', background: '#F3F4F6' }} />
            </div>
          </div>
          {/* Goal checkboxes */}
          <div style={{
            position: 'absolute', top: '95px', left: '50%', transform: 'translateX(-50%)',
            width: '160px', display: 'flex', flexDirection: 'column', gap: '8px',
          }}>
            {[70, 55, 45].map((w, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '14px', height: '14px', borderRadius: '4px',
                  background: i < 2 ? c.accent : '#fff', border: `1.5px solid ${i < 2 ? c.accent : '#D1D5DB'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {i < 2 && <svg width="8" height="8" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>}
                </div>
                <div style={{ width: `${w}px`, height: '5px', borderRadius: '3px', background: i < 2 ? c.accent3 : '#E5E7EB' }} />
              </div>
            ))}
          </div>
        </>
      )}

      {step === 2 && (
        <>
          {/* Search bar mockup */}
          <div style={{
            position: 'absolute', top: '28px', left: '50%', transform: 'translateX(-50%)',
            width: '200px', height: '36px', borderRadius: '10px', background: '#fff',
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: '8px', padding: '0 12px',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c.accent2} strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4-4" /></svg>
            <div style={{ width: '120px', height: '5px', borderRadius: '3px', background: '#E5E7EB' }} />
          </div>
          {/* Tutor cards fan */}
          {[0, 1, 2].map((i) => (
            <div key={i} style={{
              position: 'absolute', top: `${80 + i * 6}px`, left: '50%',
              transform: `translateX(-50%) translateX(${(i - 1) * 30}px) rotate(${(i - 1) * 5}deg)`,
              width: '100px', height: '68px', borderRadius: '12px', background: '#fff',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: '10px',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
              zIndex: 3 - i,
            }}>
              <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: `linear-gradient(135deg, ${c.accent}, ${c.accent2})` }} />
              <div style={{ width: '50px', height: '4px', borderRadius: '3px', background: '#E5E7EB' }} />
              <div style={{ display: 'flex', gap: '2px' }}>
                {[0,1,2,3,4].map(s => (
                  <div key={s} style={{ width: '6px', height: '6px', borderRadius: '50%', background: s < 4 ? '#FBBF24' : '#E5E7EB' }} />
                ))}
              </div>
            </div>
          ))}
          {/* Match line */}
          <div style={{ position: 'absolute', bottom: '35px', left: '50%', transform: 'translateX(-50%)', width: '60px', height: '3px', borderRadius: '3px', background: c.accent, opacity: 0.5 }} />
        </>
      )}

      {step === 3 && (
        <>
          {/* Video call frame */}
          <div style={{
            position: 'absolute', top: '22px', left: '50%', transform: 'translateX(-50%)',
            width: '180px', height: '110px', borderRadius: '14px', background: '#fff',
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)', overflow: 'hidden',
          }}>
            {/* Inner video area */}
            <div style={{ width: '100%', height: '85px', background: `linear-gradient(135deg, ${c.bg}, ${c.accent3})`, position: 'relative' }}>
              {/* Two participant circles */}
              <div style={{ position: 'absolute', top: '50%', left: '35%', transform: 'translate(-50%,-50%)', width: '32px', height: '32px', borderRadius: '50%', background: `linear-gradient(135deg, ${c.accent}, ${c.accent2})`, border: '2px solid #fff' }} />
              <div style={{ position: 'absolute', top: '50%', left: '65%', transform: 'translate(-50%,-50%)', width: '32px', height: '32px', borderRadius: '50%', background: `linear-gradient(135deg, ${c.accent2}, ${c.accent3})`, border: '2px solid #fff' }} />
            </div>
            {/* Bottom bar */}
            <div style={{ height: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '0 10px' }}>
              {[c.accent, '#EF4444', '#E5E7EB'].map((col, i) => (
                <div key={i} style={{ width: '16px', height: '8px', borderRadius: '4px', background: col, opacity: i === 2 ? 0.5 : 0.8 }} />
              ))}
            </div>
          </div>
          {/* Progress bar */}
          <div style={{
            position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)',
            width: '140px', height: '6px', borderRadius: '3px', background: c.accent3,
          }}>
            <div style={{ width: '75%', height: '100%', borderRadius: '3px', background: c.accent }} />
          </div>
        </>
      )}
    </div>
  );
}

// ── Mini-feature card ──────────────────────────────────────────────────────
function MiniCard({ icon, label, desc }: { icon: React.ReactNode; label: string; desc: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '14px',
        padding: '16px 20px',
        background: '#fff',
        border: '1px solid #F0F0F0',
        borderRadius: '16px',
        transition: 'box-shadow 0.25s ease, transform 0.25s ease',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
      }}
    >
      <span style={{ flexShrink: 0, marginTop: '2px', color: '#6B7280' }}>{icon}</span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <span className="font-matter" style={{ fontWeight: 600, fontSize: '14px', color: '#111', lineHeight: 1.3 }}>{label}</span>
        <span className="font-matter" style={{ fontSize: '12.5px', color: '#9CA3AF', lineHeight: 1.5 }}>{desc}</span>
      </div>
    </div>
  );
}

// ── Inline Icons ───────────────────────────────────────────────────────────
const IconZap = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const IconTarget = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
  </svg>
);
const IconStar = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
const IconCalendar = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const IconShield = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const IconBook = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
  </svg>
);

// ── Timeline steps ─────────────────────────────────────────────────────────
const steps = [
  {
    title: "Step 1",
    content: (
      <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '16px' }}>
        <h3 className="font-season-mix text-2xl md:text-3xl text-[#121212]">Register & Set Your Goals</h3>
        <p className="font-matter text-[#6d6d6d] text-sm md:text-base leading-relaxed max-w-lg">
          Sign up in under 60 seconds. Tell us what you want to learn, your level, and when you're free — we handle the rest.
        </p>
        <StepVisual step={1} />
        <div className="hg-mini-grid" style={{ display: 'grid', gap: '8px', marginTop: '4px' }}>
          <MiniCard icon={<IconZap />} label="60-Second Signup" desc="Quick onboarding with zero friction." />
          <MiniCard icon={<IconTarget />} label="Learning Goals" desc="Set subjects, level, and target exams." />
        </div>
      </div>
    ),
  },
  {
    title: "Step 2",
    content: (
      <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '16px' }}>
        <h3 className="font-season-mix text-2xl md:text-3xl text-[#121212]">Browse, Match & Try a Free Demo</h3>
        <p className="font-matter text-[#6d6d6d] text-sm md:text-base leading-relaxed max-w-lg">
          Browse rated profiles or let our AI find your ideal Guru. Schedule a free demo to make sure it's the right fit.
        </p>
        <StepVisual step={2} />
        <div className="hg-mini-grid" style={{ display: 'grid', gap: '8px', marginTop: '4px' }}>
          <MiniCard icon={<IconStar />} label="AI Matchmaking" desc="Smart algorithm considers style, rating & reviews." />
          <MiniCard icon={<IconCalendar />} label="Free Demo Class" desc="Try before you buy — no payment required." />
        </div>
      </div>
    ),
  },
  {
    title: "Step 3",
    content: (
      <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '16px' }}>
        <h3 className="font-season-mix text-2xl md:text-3xl text-[#121212]">Confirm & Start Learning</h3>
        <p className="font-matter text-[#6d6d6d] text-sm md:text-base leading-relaxed max-w-lg">
          Lock in your Guru, make a secure payment, and start regular 1-on-1 classes at your own pace.
        </p>
        <StepVisual step={3} />
        <div className="hg-mini-grid" style={{ display: 'grid', gap: '8px', marginTop: '4px' }}>
          <MiniCard icon={<IconShield />} label="Secure Payments" desc="SSL-encrypted with refund guarantee." />
          <MiniCard icon={<IconBook />} label="Regular 1:1 Classes" desc="Weekly sessions tailored to your pace." />
        </div>
      </div>
    ),
  },
];

export default function StackLayersNew() {
  return (
    <div className="w-full relative">
      <div className="flex flex-col items-center gap-4 mb-4">
        <p className="font-matter font-medium text-xs text-center uppercase tracking-[2px] text-gray-400">
          Your Learning Journey
        </p>
        <h2 className="font-season-mix text-3xl md:text-[42px] leading-[1.2] text-center text-[#121212]">
          Everything you need to succeed
        </h2>
        <p className="font-matter text-center text-gray-400 text-base max-w-md mt-1">
          Three simple steps from sign-up to your first personalised class.
        </p>
      </div>
      <Timeline data={steps} />

      <style>{`
        .hg-mini-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .hg-mini-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </div>
  );
}
