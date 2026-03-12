"use client";

const perks = [
  { stat: '₹999', label: 'One-Time Registration', desc: 'One flat fee. No hidden charges, no recurring costs. Start earning immediately.' },
  { stat: 'Weekly', label: 'Payments Without Delay', desc: 'Receive tuition fees every week directly to your account. Zero chasing.' },
  { stat: '100%', label: 'Scheduling Flexibility', desc: 'Confirm or deny class requests on your own terms. Your time, your rules.' },
  { stat: '1:1', label: 'Private Online Tuition', desc: 'Fully private sessions. Just you and your student, no distractions.' },
];

export default function TutorPerks() {
  return (
    <section className="w-full flex flex-col xl:flex-row gap-12 xl:gap-16 items-start">

      {/* Left: Headline + CTA */}
      <div className="flex flex-col gap-6 w-full xl:w-[38%] xl:sticky xl:top-28 xl:shrink-0">
        <div className="flex flex-col gap-3">
          <span className="font-matter text-[11px] font-semibold tracking-[4px] uppercase" style={{ color: '#F97316' }}>For Tutors</span>
          <h2 className="font-season-mix text-[38px] md:text-[46px] xl:text-[52px] text-black leading-[1.05] tracking-tight">
            Teach on<br />your terms.
          </h2>
          <p className="font-matter text-gray-500 text-base md:text-lg leading-relaxed max-w-lg">
            Join 200,000+ educators earning weekly on HomeGuru. Set your own schedule, rates, and pace.
          </p>
        </div>
        <a href="#apply">
          <button
            className="inline-flex items-center gap-2 font-matter font-medium text-base px-7 py-3.5 rounded-full text-white transition-all duration-300 active:scale-95 w-fit"
            style={{ background: '#111' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.8'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
          >
            Apply to Teach
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </a>
      </div>

      {/* Right: 2x2 perk cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-2 gap-3 w-full xl:flex-1">
        {perks.map((p, i) => (
          <div
            key={i}
            className="flex flex-col justify-between p-5 md:p-6 rounded-[20px] transition-all duration-300"
            style={{ background: '#F8F9FA', border: '1px solid #E5E7EB', minHeight: '170px' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 32px rgba(0,0,0,0.07)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
          >
            <div className="w-2 h-2 rounded-full" style={{ background: '#F97316' }} />
            <div className="flex flex-col gap-1.5">
              <span className="font-season-mix text-[28px] md:text-[24px] xl:text-[32px] leading-none tracking-tight text-black">{p.stat}</span>
              <p className="font-matter font-medium text-xs md:text-[11px] xl:text-sm text-black leading-snug">{p.label}</p>
              <p className="font-matter text-[11px] text-gray-400 leading-relaxed hidden sm:block">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
