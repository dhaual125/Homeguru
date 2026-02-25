export default function SecuritySection() {
  const badges = [
    { label: 'ISO:27001', icon: 'https://assets.sarvam.ai/tr:f-auto/assets/misc/sec-iso.png' },
    { label: 'AICPA SOC 2', icon: 'https://assets.sarvam.ai/tr:f-auto/assets/misc/sec-soc2.png' },
    { label: 'India Data Residency', icon: null }
  ];

  return (
    <section className="flex flex-col items-center gap-12 md:gap-16">
      <h2 className="font-season-mix text-3xl md:text-[36px] text-center leading-[135%] text-tx">
        Enterprise-grade security. Built in from day one.
      </h2>

      <div className="flex md:flex-row flex-wrap justify-center items-center gap-8 md:gap-20 mx-auto w-full">
        {badges.map((badge, i) => (
          <div key={i} className="flex flex-col items-center gap-4 w-[200px] md:w-[250px]">
            <div
              className="relative flex justify-center items-center rounded-full w-[200px] md:w-[250px] h-[200px] md:h-[250px] bg-sr-indigo-50/50 shadow-[0_0_80px_rgba(165,187,252,0.3),inset_0_0_20px_rgba(165,187,252,0.2)] hover:scale-105 transition-transform duration-300"
            >
              {badge.icon ? (
                <div className="flex flex-col items-center gap-2">
                  <img
                    src={badge.icon}
                    alt={badge.label}
                    className="w-16 md:w-20 h-auto object-contain mix-blend-multiply"
                  />
                  <p className="font-matter font-semibold text-tx text-[14px] md:text-[16px] text-center">{badge.label}</p>
                </div>
              ) : (
                <p className="font-matter font-semibold text-tx text-[16px] md:text-[18px] text-center px-4 leading-tight">{badge.label}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
