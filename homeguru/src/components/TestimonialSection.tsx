export default function TestimonialSection() {
  return (
    <section className="flex flex-col gap-10 md:gap-12">
      <h2 className="text-3xl md:text-[36px] text-center leading-[135%]" style={{fontFamily: 'Season Mix'}}>
        Real Stories
      </h2>

      <div className="flex flex-col gap-8 w-full">
        <div className="flex flex-col gap-16 bg-white p-6 md:p-16 border border-[#f0f0f0] rounded-[24px] md:rounded-[48px] w-full overflow-hidden">
          <div className="flex flex-col items-start gap-10 py-3 md:py-2">
            <img 
              src="https://assets.sarvam.ai/assets/companyLogos/tata-capital.svg" 
              alt="Tata Capital" 
              className="w-auto h-7 object-contain"
            />
            <p className="text-[#1a1a1a] text-xl md:text-xl leading-[160%]" style={{fontFamily: 'Matter'}}>
              HomeGuru transformed my learning experience. The 1:1 attention from my Guru helped me improve my grades significantly. The platform is easy to use and the Gurus are highly qualified.
            </p>
          </div>

          <div className="flex md:flex-row flex-col md:justify-between md:items-center gap-6">
            <div className="flex items-center gap-4">
              <img 
                src="https://assets.sarvam.ai/tr:f-auto/assets/prod-samvaad/logos/products/testimonial-profiel.png" 
                alt="Shallu Kaushik" 
                className="rounded-full w-12 h-12 object-cover"
              />
              <div className="flex flex-col gap-1">
                <p className="font-medium text-[16px] text-[#1a1a1a] leading-normal" style={{fontFamily: 'Matter'}}>
                  Sarah Johnson
                </p>
                <p className="text-[14px] text-[#999] leading-normal" style={{fontFamily: 'Matter'}}>
                  Student, Grade 10
                </p>
              </div>
            </div>
            <a href="#testimonials">
              <button className="relative inline-flex items-center justify-center cursor-pointer font-medium transition-all duration-500 overflow-hidden rounded-full hover:duration-700 active:scale-95 px-5 py-3 text-base bg-[#fafafa] text-black shadow-[inset_0_0_12px_rgba(0,0,0,0.09),0px_0px_1px_rgba(0,0,0,0.2)] group w-full md:w-auto" style={{fontFamily: 'Season Mix'}}>
                <span className="z-10 relative flex items-center gap-2">View more stories</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
