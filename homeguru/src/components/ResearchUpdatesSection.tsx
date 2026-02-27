export default function ResearchUpdatesSection() {
    const blogs = [
        {
            title: "Expanding to UAE",
            date: "March 15, 2025",
            category: "EXPANSION",
            link: "#",
            image: "https://assets.sarvam.ai/tr:f-auto/images/03117ysv/production/a781d0105845e4e9b69bf336b842cc8964f38929-1008x630.png?w=800"
        },
        {
            title: "Now in United Kingdom",
            date: "March 10, 2025",
            category: "EXPANSION",
            link: "#",
            image: "https://assets.sarvam.ai/tr:f-auto/images/03117ysv/production/fff4fe106a03242dec49bd27025e1b55a51de0b9-1800x1350.png?w=800"
        },
        {
            title: "Launching in United States",
            date: "March 5, 2025",
            category: "EXPANSION",
            link: "#",
            image: "https://assets.sarvam.ai/tr:f-auto/images/03117ysv/production/42d675e333219227dd0a6872d6405088722eb6e1-2400x1800.png?w=800"
        }
    ];

    return (
        <section className="flex flex-col items-center gap-14 md:gap-20 py-20 w-full">
            {/* Section Heading */}
            <div className="flex flex-col items-center text-center gap-6 w-full">
                <h2 className="font-season-mix text-3xl md:text-[42px] text-tx leading-[1.2]">
                    Learning Has No Borders.
                </h2>
            </div>

            {/* Blogs Grid */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full max-w-[1280px] mx-auto px-4 justify-center items-stretch">
                {blogs.map((blog) => (
                    <div key={blog.link} className="flex-1 min-w-0">
                        <a
                            href={blog.link}
                            className="group flex flex-col h-full gap-4 bg-white p-3 border border-sf-tertiary hover:border-sr-indigo-200 rounded-[32px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] overflow-hidden"
                        >
                            <div className="flex flex-col gap-4 p-4.5">
                                <div className="flex flex-col gap-2">
                                    <span className="font-matter font-medium text-tx-tertiary text-xs uppercase tracking-wide">
                                        {blog.category}
                                    </span>
                                    <h3 className="font-matter font-medium text-tx text-lg md:text-xl line-clamp-2 leading-snug">
                                        {blog.title}
                                    </h3>
                                </div>
                                <span className="font-matter font-normal text-tx-tertiary text-sm">
                                    {blog.date}
                                </span>
                            </div>
                            <div className="rounded-[20px] w-full aspect-video overflow-hidden">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </a>
                    </div>
                ))}
            </div>

            {/* View All Button */}
            <a href="#global">
                <button className="relative inline-flex items-center justify-center cursor-pointer font-season-mix font-medium transition-all duration-500 overflow-hidden rounded-full hover:duration-700 active:scale-95 active:duration-200 touch-manipulation px-8 py-4 text-lg bg-sf text-black shadow-[inset_0_0_12px_rgba(0,0,0,0.09),0px_0px_1px_rgba(0,0,0,0.2)] group">
                    <span className="absolute inset-0 opacity-0 rounded-full transition-opacity duration-700 bg-gradient-to-r from-[#A5BBFC] via-[#D5E2FF] to-[#FFA133] group-hover:opacity-100 group-active:opacity-100 shadow-[inset_0_0_12px_2px_rgba(255,255,255,1)]" aria-hidden="true" />
                    <span className="z-10 relative flex items-center gap-2 transition-all duration-500">
                        Explore All Regions
                    </span>
                </button>
            </a>
        </section>
    );
}
