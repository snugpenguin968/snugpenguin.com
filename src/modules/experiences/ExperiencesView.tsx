import React from "react";

type ExperienceItem = {
    id: string;
    year: string;
    title: string;
    description: string;
    tags: string[];
    image?: string;
    link?: string;
};

type ExperienceSegment = {
    id: string;
    title: string;
    items: ExperienceItem[];
};

type ExperiencesViewProps = {
    title: string;
    segments: ExperienceSegment[];
};

const ExperienceCard = ({ item }: { item: ExperienceItem }) => (
    <div className="group relative w-full bg-gradient-to-br from-[#0a192f] to-[#112240] border border-white/10 rounded-3xl overflow-hidden hover:border-white/30 transition-all duration-300 shadow-xl">
        <div className="flex flex-col md:flex-row h-full">
            {/* Left Content */}
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center relative z-10">
                <div className="font-mono text-sm text-ice-light mb-4 opacity-70">// {item.year}</div>

                <h3 className="font-goldman text-4xl md:text-5xl mb-6 text-white group-hover:text-ice-light transition-colors duration-300">
                    {item.title}
                </h3>

                <p className="text-white/60 leading-relaxed text-sm md:text-base max-w-xl mb-8">
                    {item.description}
                </p>

                <div className="flex flex-wrap gap-3">
                    {item.tags.map((tag, index) => (
                        <span key={index} className="text-[10px] md:text-xs font-mono px-3 py-1.5 rounded-full border border-white/20 text-white/50 uppercase tracking-wider hover:bg-white/5 transition-colors">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Right Image Placeholder */}
            {/* Right Image Placeholder */}
            <div className="w-full md:w-[40%] bg-black/20 relative flex items-center justify-center p-10">
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0a192f]/80 z-10 md:block hidden" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] to-transparent z-10 md:hidden block" />

                <div className="relative w-full bg-white/5 rounded-xl border border-white/10 flex items-center justify-center overflow-hidden transform rotate-[-5deg] group-hover:rotate-0 transition-transform duration-500 shadow-2xl">
                    {item.image ? (
                        <img src={item.image} alt={item.title} className="w-full h-auto object-cover" />
                    ) : (
                        <div className="h-48 flex items-center justify-center">
                            <span className="text-white/20">Image Placeholder</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
);

export const ExperiencesView = ({ title, segments }: ExperiencesViewProps) => {
    return (
        <div className="min-h-screen pt-32 pb-20 px-5 md:px-10"
            style={{
                background: "linear-gradient(to bottom, #0066B2 0%, #2746AE 50%, #0B1324 100%)"
            }}
        >
            <div className="max-w-7xl mx-auto">
                <h1 className="font-goldman text-6xl md:text-8xl mb-20 text-center text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
                    {title}
                </h1>

                <div className="space-y-32">
                    {segments.map((segment) => (
                        <section key={segment.id} className="space-y-10">
                            <div className="flex items-center gap-4">
                                <h2 className="font-goldman text-3xl md:text-4xl text-white/80">
                                    {segment.title}
                                </h2>
                                <div className="h-px bg-white/10 flex-1" />
                            </div>

                            <div className="grid grid-cols-1 gap-10">
                                {segment.items.map((item) => (
                                    <ExperienceCard key={item.id} item={item} />
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
};
