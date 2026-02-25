export default function FooterNew() {
  return (
    <footer className="bottom-0 z-10 relative md:sticky bg-white mx-auto p-10 md:px-16 pt-24 md:pt-24 border-[#e6e6e6] border-t w-screen h-full md:h-fit overflow-hidden pointer-events-auto">
      <div className="z-100 relative mx-auto pb-40 max-w-width-mx">
        <div className="flex lg:flex-row flex-col justify-start md:justify-between items-start gap-16 md:gap-24 lg:gap-[200px] w-full">
          <div className="flex flex-col gap-6 md:gap-6">
            <div className="flex flex-col gap-[12px]">
              <a className="flex items-center" href="/">
                <img
                  src="https://assets.sarvam.ai/assets/svgs/sarvam-wordmark-black.svg"
                  alt="Sarvam AI"
                  className="w-[202px] h-[32px]"
                />
              </a>
              <p className="font-matter font-medium text-[#666] text-[14px] leading-[12px]">
                AI for India starts here
              </p>
            </div>
            <div className="flex gap-[12px]">
              <div className="flex justify-center items-center bg-[#fafafa] rounded-[16px] w-[64px] h-[64px] overflow-hidden">
                <img
                  src="https://assets.sarvam.ai/tr:f-auto/assets/misc/sec-iso.png"
                  alt="ISO Certified"
                  className="w-[40px] h-[40px] object-contain"
                />
              </div>
              <div className="flex justify-center items-center bg-[#fafafa] rounded-[16px] w-[64px] h-[64px] overflow-hidden">
                <img
                  src="https://assets.sarvam.ai/tr:f-auto/assets/misc/sec-soc2.png"
                  alt="SOC 2 Type II"
                  className="w-[40px] h-[40px] object-contain"
                />
              </div>
            </div>
          </div>
          <div className="justify-center gap-12 md:gap-8 lg:gap-16 grid grid-cols-2 md:grid-cols-4 w-full">
            <div className="flex flex-col gap-[24px] w-fit">
              <h3 className="w-fit font-matter font-semibold text-[#3d3d3d] text-[12px] uppercase leading-normal">
                Products
              </h3>
              <ul className="flex flex-col gap-3 w-fit font-matter">
                <li className="w-fit">
                  <a
                    href="/products/conversational-agents"
                    className="block w-fit text-tx-tertiary hover:text-sr-indigo-800 text-base leading-normal transition-colors"
                  >
                    Sarvam Samvaad
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-[24px] w-fit">
              <h3 className="w-fit font-matter font-semibold text-[#3d3d3d] text-[12px] uppercase leading-normal">
                API
              </h3>
              <ul className="flex flex-col gap-3 w-fit font-matter">
                <li className="w-fit">
                  <a
                    href="/apis/text-to-speech"
                    className="block w-fit text-tx-tertiary hover:text-sr-indigo-800 text-base leading-normal transition-colors"
                  >
                    Text to Speech
                  </a>
                </li>
                <li className="w-fit">
                  <a
                    href="/apis/speech-to-text"
                    className="block w-fit text-tx-tertiary hover:text-sr-indigo-800 text-base leading-normal transition-colors"
                  >
                    Speech to Text
                  </a>
                </li>
                <li className="w-fit">
                  <a
                    href="/api-pricing"
                    className="block w-fit text-tx-tertiary hover:text-sr-indigo-800 text-base leading-normal transition-colors"
                  >
                    API Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-[24px] w-fit">
              <h3 className="w-fit font-matter font-semibold text-[#3d3d3d] text-[12px] uppercase leading-normal">
                Company
              </h3>
              <ul className="flex flex-col gap-3 w-fit font-matter">
                <li className="w-fit">
                  <a
                    href="/about-us"
                    className="block w-fit text-tx-tertiary hover:text-sr-indigo-800 text-base leading-normal transition-colors"
                  >
                    About us
                  </a>
                </li>
                <li className="w-fit">
                  <a
                    href="/blogs"
                    className="block w-fit text-tx-tertiary hover:text-sr-indigo-800 text-base leading-normal transition-colors"
                  >
                    Blogs
                  </a>
                </li>
                <li className="w-fit">
                  <a
                    href="/community"
                    className="block w-fit text-tx-tertiary hover:text-sr-indigo-800 text-base leading-normal transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Discord
                  </a>
                </li>
                <li className="w-fit">
                  <a
                    href="https://careers.kula.ai/sarvam-ai"
                    className="block w-fit text-tx-tertiary hover:text-sr-indigo-800 text-base leading-normal transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Careers
                  </a>
                </li>
                <li className="w-fit">
                  <a
                    href="/terms-of-use"
                    className="block w-fit text-tx-tertiary hover:text-sr-indigo-800 text-base leading-normal transition-colors"
                  >
                    Terms of service
                  </a>
                </li>
                <li className="w-fit">
                  <a
                    href="/privacy-policy"
                    className="block w-fit text-tx-tertiary hover:text-sr-indigo-800 text-base leading-normal transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-[24px] w-fit">
              <h3 className="w-fit font-matter font-semibold text-[#3d3d3d] text-[12px] uppercase leading-normal">
                Socials
              </h3>
              <ul className="flex flex-col gap-3 w-fit font-matter">
                <li className="w-fit">
                  <a
                    href="https://www.linkedin.com/company/sarvam-ai"
                    className="block w-fit text-tx-tertiary hover:text-sr-indigo-800 text-base leading-normal transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="w-fit">
                  <a
                    href="https://x.com/sarvamai"
                    className="block w-fit text-tx-tertiary hover:text-sr-indigo-800 text-base leading-normal transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    X
                  </a>
                </li>
                <li className="w-fit">
                  <a
                    href="https://youtube.com/@sarvamai"
                    className="block w-fit text-tx-tertiary hover:text-sr-indigo-800 text-base leading-normal transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-0 left-1/2 z-10 md:absolute relative flex md:flex-row flex-col justify-between items-center gap-3 mx-auto md:p-16 2xl:px-0 py-4 w-full max-w-width-mx font-matter text-[#666] text-[12px] text-center leading-[1.5] -translate-x-1/2">
        <span>Copyright Sarvam AI 2026</span>
        <span>All rights reserved, Bengaluru- 560038</span>
      </div>
      <div className="absolute inset-0 flex flex-col justify-end items-center mx-auto w-full max-w-width-mx h-full">
        <div
          className="relative mx-auto -mb-20 w-full max-w-[1200px] scale-x-[200%] md:scale-x-[100%] scale-y-[300%] md:scale-y-[90%]"
          style={{ transformOrigin: 'center bottom', opacity: 1, transform: 'scale(1.5)' }}
        >
          <svg
            width="2292"
            height="833"
            viewBox="0 0 2292 833"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <g clipPath="url(#clip0_5226_125)">
              <g filter="url(#filter0_f_5226_125)">
                <path
                  d="M1113.5 40C502.673 39.9999 40 793 40 793H2252C2252 793 1724.33 40 1113.5 40Z"
                  fill="url(#paint0_radial_5226_125)"
                ></path>
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_5226_125"
                x="-10"
                y="-10"
                width="2312"
                height="853"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_5226_125"></feGaussianBlur>
              </filter>
              <radialGradient
                id="paint0_radial_5226_125"
                cx="0"
                cy="0"
                r="1"
                gradientTransform="matrix(0 -1256.51 2148.88 -11.8434 1146 1272)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.327754" stopColor="#F9730C"></stop>
                <stop offset="0.423421" stopColor="#FFA336"></stop>
                <stop offset="0.536751" stopColor="#F0D5BA"></stop>
                <stop offset="0.635122" stopColor="#CBDBFF"></stop>
                <stop offset="1" stopColor="#FAFAFA" stopOpacity="0"></stop>
              </radialGradient>
              <clipPath id="clip0_5226_125">
                <rect width="2292" height="833" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </footer>
  );
}
