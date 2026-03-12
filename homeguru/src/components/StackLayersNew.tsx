"use client";
import { Timeline } from "@/components/ui/timeline";

const cell = { borderRadius: '12px', background: '#f3f4f6', border: '1px solid #e5e7eb' };

// Exact reference: row1(big-wide + small-square), row2(small-square + big-wide)
const ImageGrid = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
    <div style={{ display: 'flex', gap: '8px', height: '200px' }}>
      <div style={{ ...cell, flex: '3' }} />
      <div style={{ ...cell, flex: '2' }} />
    </div>
    <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
      <div style={{ ...cell, flex: '2', height: '160px' }} />
      <div style={{ ...cell, flex: '3', height: '260px' }} />
    </div>
  </div>
);

const Grid1 = ImageGrid;
const Grid2 = ImageGrid;
const Grid3 = ImageGrid;

const steps = [
  {
    title: "Step 1",
    content: (
      <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '1rem' }}>
        <h3 className="font-season-mix text-2xl md:text-3xl text-[#121212]">Register & Set Your Goals</h3>
        <p className="font-matter text-[#6d6d6d] text-sm md:text-base leading-relaxed max-w-lg">
          The student registers on the platform and fills in their learning goals — what they want to learn, their level, and schedule preferences.
        </p>
        <div className="flex flex-wrap gap-2">
          {["Quick Sign Up", "Learning Goals", "Personalised Profile"].map((tag) => (
            <span key={tag} className="font-matter text-xs font-medium px-3 py-1.5 rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm">{tag}</span>
          ))}
        </div>
        <Grid1 />
      </div>
    ),
  },
  {
    title: "Step 2",
    content: (
      <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '1rem' }}>
        <h3 className="font-season-mix text-2xl md:text-3xl text-[#121212]">Browse, Match & Schedule a Demo</h3>
        <p className="font-matter text-[#6d6d6d] text-sm md:text-base leading-relaxed max-w-lg">
          Browse tutors or choose AI matchmaking to find the right Guru. Send a demo request and schedule a free trial session.
        </p>
        <div className="flex flex-wrap gap-2">
          {["AI Matchmaking", "Free Demo", "Tutor Profiles"].map((tag) => (
            <span key={tag} className="font-matter text-xs font-medium px-3 py-1.5 rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm">{tag}</span>
          ))}
        </div>
        <Grid2 />
      </div>
    ),
  },
  {
    title: "Step 3",
    content: (
      <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '1rem' }}>
        <h3 className="font-season-mix text-2xl md:text-3xl text-[#121212]">Confirm & Start Learning</h3>
        <p className="font-matter text-[#6d6d6d] text-sm md:text-base leading-relaxed max-w-lg">
          After the demo, confirm your tutor, make the payment, and regular 1 on 1 classes begin. Learn at your pace, on your schedule.
        </p>
        <div className="flex flex-wrap gap-2">
          {["Secure Payment", "Regular Classes", "1 on 1 Sessions"].map((tag) => (
            <span key={tag} className="font-matter text-xs font-medium px-3 py-1.5 rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm">{tag}</span>
          ))}
        </div>
        <Grid3 />
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
      </div>
      <Timeline data={steps} />
    </div>
  );
}
