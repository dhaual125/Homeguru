import { useState } from 'react';
import { PointerHighlight } from '@/components/ui/pointer-highlight';

const subjects = [
  {
    img: '/math.png',
    type: 'Mathematics',
    tutors: '120+',
    num: '01',
    accent: 'rgba(249, 115, 22, 0.18)',   // warm amber
    accentStrong: 'rgba(249, 115, 22, 0.35)',
  },
  {
    img: '/science.png',
    type: 'Science',
    tutors: '95+',
    num: '02',
    accent: 'rgba(20, 184, 166, 0.15)',   // teal
    accentStrong: 'rgba(20, 184, 166, 0.3)',
  },
  {
    img: '/english.png',
    type: 'English',
    tutors: '80+',
    num: '03',
    accent: 'rgba(99, 102, 241, 0.15)',   // indigo
    accentStrong: 'rgba(99, 102, 241, 0.3)',
  },
];

const tabs = ['School Subjects', 'Coding & AI', 'Music & Dance', 'Languages', 'Exams'];

// ─── Individual Card ────────────────────────────────────────────────────────
const SubjectCard = ({
  motif,
  tall = false,
}: {
  motif: typeof subjects[0];
  tall?: boolean;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="#find-tutor"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        borderRadius: '28px',
        background: '#0C0C0C',
        border: '1px solid rgba(255,255,255,0.07)',
        gridRow: tall ? 'span 2' : 'span 1',
        minHeight: tall ? '520px' : '240px',
        cursor: 'pointer',
        textDecoration: 'none',
        transition: 'transform 0.45s cubic-bezier(0.23,1,0.32,1), box-shadow 0.45s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 24px 48px rgba(0,0,0,0.45)' : '0 2px 8px rgba(0,0,0,0.2)',
      }}
    >
      {/* Full-bleed image — full opacity, no mask */}
      <img
        src={motif.img}
        alt={motif.type}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center top',
          transform: hovered ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 0.8s cubic-bezier(0.23,1,0.32,1)',
        }}
      />

      {/* Scrim — only at the bottom for text legibility, not a black shadow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.2) 40%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Per-subject accent glow — sits on top of scrim */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '45%',
          background: `radial-gradient(ellipse 80% 60% at 50% 100%, ${hovered ? motif.accentStrong : motif.accent}, transparent 70%)`,
          pointerEvents: 'none',
          transition: 'background 0.4s ease',
        }}
      />

      {/* Ghost number — large typographic accent */}
      <div
        style={{
          position: 'absolute',
          top: '16px',
          right: '20px',
          fontFamily: "'Season Mix', sans-serif",
          fontSize: tall ? '120px' : '72px',
          lineHeight: 1,
          color: 'rgba(255,255,255,0.04)',
          userSelect: 'none',
          pointerEvents: 'none',
          letterSpacing: '-0.04em',
        }}
      >
        {motif.num}
      </div>

      {/* Bottom content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          padding: tall ? '32px 28px' : '20px 22px',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
        }}
      >
        {/* Tutor count pill */}
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            width: 'fit-content',
            padding: '3px 10px',
            borderRadius: '9999px',
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.1)',
            fontFamily: 'Matter, sans-serif',
            fontSize: '11px',
            fontWeight: 500,
            color: 'rgba(255,255,255,0.55)',
            letterSpacing: '0.3px',
            marginBottom: '4px',
          }}
        >
          <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
          {motif.tutors} tutors available
        </span>

        {/* Subject name */}
        <h3
          style={{
            fontFamily: "'Season Mix', sans-serif",
            fontSize: tall ? '38px' : '24px',
            color: '#fff',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            margin: 0,
          }}
        >
          {motif.type}
        </h3>

        {/* Explore link */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            fontFamily: 'Matter, sans-serif',
            fontSize: '13px',
            fontWeight: 500,
            color: 'rgba(255,255,255,0.45)',
            marginTop: '4px',
            transition: 'color 0.2s',
            ...(hovered ? { color: 'rgba(255,255,255,0.9)' } : {}),
          }}
        >
          Explore
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            style={{
              transform: hovered ? 'translate(2px, -2px)' : 'translate(0,0)',
              transition: 'transform 0.25s ease',
            }}
          >
            <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </a>
  );
};

// ─── Main Component ──────────────────────────────────────────────────────────
export default function PlaygroundShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section style={{ position: 'relative', width: '100%', padding: '80px 0' }}>
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '48px',
          margin: '0 auto',
          width: '90%',
          maxWidth: '1400px',
        }}
      >
        {/* ── Section Heading ── */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '16px', width: '100%' }}>
          <h2
            style={{
              fontFamily: "'Season Mix', sans-serif",
              fontSize: 'clamp(28px, 4vw, 42px)',
              color: '#111',
              lineHeight: 1.2,
              margin: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            What Can You{' '}
            <PointerHighlight
              rectangleClassName="border-orange-400"
              pointerClassName="text-orange-400"
              containerClassName="inline-block"
            >
              <span style={{ color: '#F97316', position: 'relative', zIndex: 10 }}>Learn?</span>
            </PointerHighlight>
          </h2>
        </div>

        {/* ── Tab Pills — connected pill group ── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            background: '#F3F3F3',
            borderRadius: '9999px',
            padding: '4px',
            gap: '2px',
            overflowX: 'auto',
            scrollbarWidth: 'none',
          }}
        >
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              style={{
                flexShrink: 0,
                padding: '8px 20px',
                borderRadius: '9999px',
                fontFamily: 'Matter, sans-serif',
                fontWeight: 500,
                fontSize: '13px',
                cursor: 'pointer',
                border: 'none',
                whiteSpace: 'nowrap',
                transition: 'background 0.2s, color 0.2s, box-shadow 0.2s',
                background: activeTab === i ? '#fff' : 'transparent',
                color: activeTab === i ? '#111' : '#888',
                boxShadow: activeTab === i ? '0 1px 4px rgba(0,0,0,0.1)' : 'none',
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ── Tab Content ── */}
        {activeTab === 0 ? (
          /* Asymmetric bento grid: col 1 = tall card, col 2 = 2 stacked cards */
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gridTemplateRows: 'auto auto',
              gap: '16px',
              width: '100%',
            }}
            className="bento-grid-lg"
          >
            <SubjectCard motif={subjects[0]} tall />
            <SubjectCard motif={subjects[1]} />
            <SubjectCard motif={subjects[2]} />
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '320px',
              width: '100%',
              background: '#FAFAFA',
              border: '1px solid #EBEBEB',
              borderRadius: '32px',
              gap: '12px',
            }}
          >
            <span
              style={{
                fontFamily: 'Matter, sans-serif',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: '#F97316',
              }}
            >
              Coming Soon
            </span>
            <p
              style={{
                fontFamily: 'Matter, sans-serif',
                color: '#999',
                fontSize: '15px',
                maxWidth: '320px',
                textAlign: 'center',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {tabs[activeTab]} tutors are being onboarded. Check back soon.
            </p>
          </div>
        )}
      </div>

      <style>{`
        @media (min-width: 768px) {
          .bento-grid-lg {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 767px) {
          .bento-grid-lg {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
