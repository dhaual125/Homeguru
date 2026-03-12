import { useState } from 'react';
import { PointerHighlight } from '@/components/ui/pointer-highlight';

const samvaadMotifs = [
    { img: '/math.png', type: 'Mathematics', tutors: '120+', num: '01' },
    { img: '/science.png', type: 'Science', tutors: '95+', num: '02' },
    { img: '/english.png', type: 'English', tutors: '80+', num: '03' },
];

const tabs = [
    "School Subjects",
    "Coding & AI",
    "Music & Dance",
    "Languages",
    "Competitive Exams"
];

export default function PlaygroundShowcase() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="relative w-full overflow-x-clip py-20 md:py-32">
            {/* Background Gradient */}
            <div
                className="absolute bottom-[15%] left-0 right-0 h-2/5 blur-[80px] pointer-events-none opacity-50"
                style={{
                    transform: 'scaleX(2.5) scaleY(1.2)',
                    background: 'linear-gradient(180deg, #C7D2FE 0%, #A5B4FC 30%, #818CF8 50%, #A5B4FC 70%, #C7D2FE 100%)'
                }}
            />

            <div className="relative flex flex-col items-center gap-12 md:gap-16 mx-auto w-[90%] md:w-9/12 max-w-[1400px]">
                {/* Section Heading */}
                <div className="flex flex-col items-center text-center gap-6 w-full">
                    <h2 className="font-season-mix text-3xl md:text-[42px] text-tx leading-[1.2] flex items-center gap-3 flex-wrap justify-center">
                        What Can You{" "}
                        <PointerHighlight
                            rectangleClassName="border-orange-400"
                            pointerClassName="text-orange-400"
                            containerClassName="inline-block"
                        >
                            <span className="relative z-10" style={{ color: '#F97316' }}>Learn?</span>
                        </PointerHighlight>
                    </h2>
                </div>

                {/* Tabs Container */}
                <div className="flex flex-col gap-8 w-full">
                    {/* Main Tabs */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {tabs.map((tab, i) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(i)}
                                className={`px-6 py-3 rounded-full font-matter font-medium text-base md:text-lg transition-all duration-300 cursor-pointer ${activeTab === i
                                    ? 'bg-sr-indigo-50 text-sr-indigo-900 shadow-[inset_0_0_12px_rgba(199,210,254,0.8)]'
                                    : 'bg-white/50 text-tx-tertiary hover:text-tx-secondary hover:bg-white/80'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content (Showcase Box) */}
                    <div className="bg-white border border-st-secondary rounded-[32px] md:rounded-[48px] w-full min-h-[550px] overflow-hidden shadow-sm">
                        {/* Box Header */}
                        <div className="flex justify-between items-center px-8 md:px-12 py-6 md:py-8 border-b border-st-secondary">
                            <h3 className="font-matter text-xl md:text-[22px] text-tx-secondary">
                                {activeTab === 0 ? 'Popular School Subjects' : `Explore ${tabs[activeTab]}`}
                            </h3>
                            <div className="flex items-center gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                                <span className="font-matter font-medium text-xs md:text-sm uppercase tracking-wider text-tx-secondary">
                                    Live
                                </span>
                            </div>
                        </div>

                        {/* Box Body */}
                        <div className="p-6 md:p-10">
                            {activeTab === 0 ? (
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                                    {samvaadMotifs.map((motif, i) => (
                                        <a
                                            key={i}
                                            href="#find-tutor"
                                            className="group"
                                            style={{
                                                position: 'relative',
                                                borderRadius: '20px',
                                                overflow: 'hidden',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'space-between',
                                                aspectRatio: '3/4',
                                                border: '1px solid #e5e7eb',
                                                background: '#0a0a0a',
                                                transition: 'transform 0.5s cubic-bezier(0.23,1,0.32,1), box-shadow 0.5s ease',
                                            }}
                                            onMouseEnter={e => {
                                                (e.currentTarget as HTMLElement).style.transform = 'translateY(-8px)';
                                                (e.currentTarget as HTMLElement).style.boxShadow = '0 32px 64px rgba(0,0,0,0.22)';
                                            }}
                                            onMouseLeave={e => {
                                                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                                                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                                            }}
                                        >
                                            {/* Image */}
                                            <img
                                                src={motif.img}
                                                alt={motif.type}
                                                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease', filter: 'brightness(0.55)' }}
                                                className="group-hover:scale-105"
                                            />
                                            {/* Top: index number */}
                                            <div style={{ position: 'relative', zIndex: 1, padding: '20px 20px 0' }}>
                                                <span style={{ fontFamily: 'Season Mix, sans-serif', fontSize: '13px', fontWeight: 400, color: 'rgba(255,255,255,0.35)', letterSpacing: '2px' }}>{motif.num}</span>
                                            </div>
                                            {/* Bottom: content */}
                                            <div style={{ position: 'relative', zIndex: 1, padding: '0 20px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                                <div style={{ width: '32px', height: '1px', background: 'rgba(255,255,255,0.3)' }} />
                                                <span style={{ fontFamily: 'Season Mix, sans-serif', fontWeight: 600, fontSize: '24px', color: '#fff', lineHeight: 1.15, letterSpacing: '-0.5px' }}>{motif.type}</span>
                                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                    <span style={{ fontFamily: 'Matter, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.5px' }}>{motif.tutors} tutors available</span>
                                                    <span style={{
                                                        fontFamily: 'Matter, sans-serif', fontSize: '11px', fontWeight: 600,
                                                        color: '#0a0a0a', background: '#fff',
                                                        padding: '5px 12px', borderRadius: '999px',
                                                        opacity: 0, transition: 'opacity 0.3s ease',
                                                        whiteSpace: 'nowrap',
                                                    }} className="group-hover:opacity-100">Explore →</span>
                                                </div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            ) : (
                                /* Placeholder for other tabs */
                                <div className="flex flex-col items-center justify-center h-[300px] text-center gap-4">
                                    <div className="px-4 py-2 bg-sr-indigo-50 text-sr-indigo-600 rounded-lg font-matter font-medium">
                                        Coming Soon
                                    </div>
                                    <p className="font-matter text-tx-tertiary max-w-sm">
                                        Interactive showcasing for {tabs[activeTab]} is being optimized for your experience.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
