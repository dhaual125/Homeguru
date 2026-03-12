const testimonials = [
  {
    quote: "HomeGuru transformed my learning. The 1:1 attention helped me improve my grades significantly and how I approach study materials.",
    name: "Sarah Johnson",
    role: "Student, Grade 10",
    avatar: "https://i.pravatar.cc/56?img=47",
  },
  {
    quote: "I love this platform, especially the tutor matching! I use it to learn concepts ranging from Maths to Quantum Physics, and it makes learning so much easier and more effective.",
    name: "Mihir Wadekar",
    role: "Product Engineer, Web3",
    avatar: "https://i.pravatar.cc/56?img=12",
  },
  {
    quote: "I definitely plan to continue with HomeGuru this summer to offer my child an additional method of engagement with more complex topics.",
    name: "G. Shaw Jr.",
    role: "Assistant Professor, UNC",
    avatar: "https://i.pravatar.cc/56?img=33",
  },
  {
    quote: "The AI matchmaking found me the perfect coding tutor. I landed my first internship after just 2 months of 1:1 sessions.",
    name: "Zara Ahmed",
    role: "Software Intern",
    avatar: "https://i.pravatar.cc/56?img=25",
  },
  {
    quote: "As a working professional, HomeGuru's flexible slots and verified tutors made learning Spanish actually possible for me.",
    name: "Rohan Verma",
    role: "Marketing Manager",
    avatar: "https://i.pravatar.cc/56?img=8",
  },
  {
    quote: "Best investment I made for my child's education. The tutor genuinely cares about results, not just clocking hours.",
    name: "Priya Mehta",
    role: "Parent",
    avatar: "https://i.pravatar.cc/56?img=44",
  },
];

const doubled = [...testimonials, ...testimonials];

export default function TestimonialSection() {
  return (
    <section className="flex flex-col gap-10 md:gap-14 w-full">
      <h2 className="font-season-mix text-3xl md:text-[36px] text-center leading-[135%] text-tx">
        Real Stories
      </h2>

      <div
        className="w-full overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        }}
      >
        <div
          className="flex gap-6"
          style={{
            width: 'max-content',
            animation: 'testimonial-scroll 30s linear infinite',
          }}
        >
          {doubled.map((t, i) => (
            <div
              key={i}
              className="flex flex-col justify-between gap-10 shrink-0 p-8"
              style={{ width: '420px' }}
            >
              <p className="font-matter text-[#1a1a1a] text-[17px] leading-[1.75] text-center">
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover shrink-0"
                />
                <div>
                  <p className="font-matter font-medium text-[#1a1a1a] text-[15px] leading-snug">{t.name}</p>
                  <p className="font-matter text-[#999] text-[13px] mt-0.5">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes testimonial-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
