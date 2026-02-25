import { useState } from 'react';

const samvaadMotifs = [
    {
        src: "https://assets.sarvam.ai/assets/product-samvaad/products/samvaad-motif-01.svg",
        type: "Cart Recovery"
    },
    {
        src: "https://assets.sarvam.ai/assets/product-samvaad/products/samvaad-motif-02.svg",
        type: "Appointment Booking"
    },
    {
        src: "https://assets.sarvam.ai/assets/product-samvaad/products/samvaad-motif-03.svg",
        type: "Payment follow-ups"
    }
];

const tabs = [
    "Conversational Agents",
    "Text to Speech",
    "Speech to Text",
    "Vision",
    "Dubbing"
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
                    <h2 className="font-season-mix text-3xl md:text-[42px] text-tx leading-[1.2]">
                        See it in action
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
                                {activeTab === 0 ? 'Experience Samvaad' : `Experience ${tabs[activeTab]}`}
                            </h3>
                            <div className="flex items-center gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                                <span className="font-matter font-medium text-xs md:text-sm uppercase tracking-wider text-tx-secondary">
                                    Live
                                </span>
                            </div>
                        </div>

                        {/* Box Body */}
                        <div className="p-8 md:p-16">
                            {activeTab === 0 ? (
                                /* Samvaad Playground Layout */
                                <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 md:gap-12 w-full">
                                    {samvaadMotifs.map((motif, i) => (
                                        <div key={i} className="flex flex-col items-center gap-6 flex-1">
                                            <div className="relative group flex justify-center items-center w-full aspect-square max-w-[280px]">
                                                <img
                                                    src={motif.src}
                                                    alt={motif.type}
                                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                                />
                                                <button
                                                    className="absolute z-10 px-6 py-3 rounded-full font-matter font-medium text-white transition-all duration-300 transform group-hover:scale-110"
                                                    style={{
                                                        backdropFilter: 'blur(20px) saturate(1.2) brightness(1.05)',
                                                        background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 100%)',
                                                        border: '1px solid rgba(255,255,255,0.3)',
                                                        boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                                                    }}
                                                >
                                                    Start Speaking
                                                </button>
                                            </div>
                                            <span className="font-matter font-medium text-lg md:text-xl text-tx-secondary text-center">
                                                {motif.type}
                                            </span>
                                        </div>
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
