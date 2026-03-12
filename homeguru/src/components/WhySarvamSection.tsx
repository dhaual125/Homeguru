"use client";
import { useEffect, useRef } from "react";
import { Lightning, Brain, BookOpen, ChatCircle } from "@phosphor-icons/react";

const features = [
  {
    title: "Instant Session Insights",
    desc: "Automated recaps with key takeaways, focused review points, and timestamped navigation to jump directly to the most important parts of your lesson."
  },
  {
    title: "Osmium AI Predictive Testing",
    titleJsx: <><span style={{ color: '#F97316' }}>Osmium AI</span> Predictive Testing</>,
    desc: "96B parameter LLM built for education — predicts exam patterns, generates adaptive micro-quizzes, and aligns practice with JEE, NEET, CLAT, and more."
  },
  {
    title: "Beyond the Syllabus",
    desc: "Explore 100+ non-academic subjects for brain breaks, complement studies with Vedic Math, Music, or Yoga, and see how lessons connect to global career paths."
  },
];

export default function WhySarvamSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let current = { scale: 0.5, tx: 20, ty: 40 };
    let target = { scale: 0.5, tx: 20, ty: 40 };
    let rafId: number;

    const getTarget = () => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / (window.innerHeight * 0.9)));
      target.scale = 0.5 + progress * 0.5;
      target.tx = (1 - progress) * 20;
      target.ty = (1 - progress) * 40;
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      current.scale = lerp(current.scale, target.scale, 0.06);
      current.tx = lerp(current.tx, target.tx, 0.06);
      current.ty = lerp(current.ty, target.ty, 0.06);
      if (imgRef.current) {
        imgRef.current.style.transform = `scale(${current.scale}) translate(${current.tx}%, ${current.ty}%)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    getTarget();
    rafId = requestAnimationFrame(tick);
    window.addEventListener("scroll", getTarget, { passive: true });
    return () => {
      window.removeEventListener("scroll", getTarget);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 md:gap-8">
      <div className="flex flex-col items-center text-center gap-4 w-full">
        <h2 className="font-season-mix text-3xl md:text-[42px] leading-[1.2] text-tx">
          Save <span style={{ color: '#F97316' }}>hours</span>, learn <span style={{ color: '#312E81' }}>smarter</span>.
        </h2>
        <p className="font-matter text-[#6d6d6d] text-base md:text-lg max-w-xl leading-relaxed">
          From key takeaways to specific questions, we've got you covered.
        </p>
      </div>

      {/* Main Feature Card */}
      <div
        ref={cardRef}
        className="w-full rounded-[32px] border border-[#e7e7e7] bg-[#f6f6f6] overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: '600px' }}>
          {/* Left: text */}
          <div className="flex flex-col gap-5 p-10 md:p-16 justify-between pt-12 md:pt-16">
            <div className="flex flex-col gap-5">
              <span className="inline-flex items-center justify-center gap-2 w-fit px-3 py-1.5 rounded-full bg-orange-500 border border-orange-500">
                <span className="font-matter text-xs font-medium text-black uppercase tracking-wide">AI-Powered</span>
              </span>
              <h3 className="font-season-mix font-semibold text-[#121212] text-2xl md:text-3xl leading-snug">
                Instant Session Insights
              </h3>
              <ChatCircle size={28} weight="regular" />
              <p className="font-season-mix text-[#6d6d6d] text-lg md:text-xl leading-relaxed" style={{ fontWeight: 400 }}>
                Automated recaps with key takeaways, focused review points, and timestamped navigation to jump directly to the most important parts of your lesson.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex gap-6">
                <div className="flex flex-col gap-1">
                  <span className="font-season-mix font-semibold text-[#121212] text-3xl">98%</span>
                  <span className="font-matter text-xs text-[#6d6d6d] uppercase tracking-wide">Recall rate</span>
                </div>
                <div className="w-px bg-[#e7e7e7]" />
                <div className="flex flex-col gap-1">
                  <span className="font-season-mix font-semibold text-[#121212] text-3xl">3×</span>
                  <span className="font-matter text-xs text-[#6d6d6d] uppercase tracking-wide">Faster review</span>
                </div>
                <div className="w-px bg-[#e7e7e7]" />
                <div className="flex flex-col gap-1">
                  <span className="font-season-mix font-semibold text-[#121212] text-3xl">24/7</span>
                  <span className="font-matter text-xs text-[#6d6d6d] uppercase tracking-wide">Available</span>
                </div>
              </div>
              <a href="#" className="w-fit">
                <button className="inline-flex items-center gap-2 font-matter font-medium text-sm px-5 py-2.5 rounded-full bg-[#131313] text-white hover:opacity-80 transition-opacity">
                  See how it works →
                </button>
              </a>
            </div>
          </div>

          {/* Right: image flush to edges */}
          <div className="relative overflow-hidden" style={{ minHeight: '600px', borderRadius: '24px' }}>
            <img
              ref={imgRef as any}
              src="/videocall.png"
              alt="Demo"
              style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', willChange: 'transform', transformOrigin: 'bottom right' }}
            />
          </div>
        </div>
      </div>

      {/* 3-card grid */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', width: '100%', flexWrap: 'wrap' }}>
        {features.map((f, i) => (
          <div key={i} style={{ flex: '1 1 260px', display: 'flex', flexDirection: 'column', gap: '24px', padding: '32px', borderRadius: '24px', backgroundColor: '#f6f6f6' }}>
            <div style={{ width: '28px', height: '28px', color: '#121212' }}>
              {i === 0 && <Lightning size={28} weight="regular" />}
              {i === 1 && <Brain size={28} weight="regular" />}
              {i === 2 && <BookOpen size={28} weight="regular" />}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h3 style={{ fontFamily: 'Season Mix, sans-serif', fontWeight: 400, color: '#121212', fontSize: '18px', lineHeight: '1.4', margin: 0 }}>{(f as any).titleJsx ?? f.title}</h3>
              <p style={{ fontFamily: 'Season Mix, sans-serif', fontWeight: 400, color: '#6d6d6d', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
