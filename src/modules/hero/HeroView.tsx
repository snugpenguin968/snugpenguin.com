import React from "react";
import Link from "next/link";

type HeroViewProps = {
    title: string;
    subtitle: string;
    scrollText: string;
    about: {
        title: string;
        bio: string[];
        photoPlaceholder: string;
    };
    experiencesLink: {
        label: string;
        href: string;
    };
};

export const HeroView = ({ title, subtitle, scrollText, about, experiencesLink }: HeroViewProps) => {
    return (
        <>
            <section className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center pt-32 pb-20">
                <div className="absolute top-32 left-10 md:left-20 z-10 text-left">
                    <h1 className="font-goldman text-6xl md:text-8xl mb-2 uppercase tracking-widest bg-gradient-to-b from-white to-ice-light bg-clip-text text-transparent drop-shadow-lg">
                        {title.split(" ").map((word, i) => (
                            <React.Fragment key={i}>
                                {word}
                                {i < title.split(" ").length - 1 && <br />}
                            </React.Fragment>
                        ))}
                    </h1>
                    <p className="text-lg md:text-xl text-ice-light font-light">
                        {subtitle}
                    </p>
                </div>

                <div className="relative z-0 flex flex-col items-center mt-20 md:mt-0">
                    {/* Main Iceberg */}
                    <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-3xl flex items-center justify-center text-white/50 transform rotate-45 mb-4">
                        Iceberg Asset
                    </div>

                    {/* Reflection Placeholder */}
                    <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm border-2 border-white/10 rounded-3xl flex items-center justify-center text-white/20 transform rotate-45 scale-y-[-1] opacity-50 mask-image-gradient">
                        Reflection
                    </div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-70 text-white">
                    <span>{scrollText}</span>
                </div>
            </section>

            {/* About Section Integrated */}
            <section id="about" className="py-20 px-5 md:px-10 max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row gap-10 items-center">
                    <div className="w-full md:w-1/2 aspect-square bg-white/10 rounded-2xl overflow-hidden relative border-2 border-white/20">
                        <div className="w-full h-full flex items-center justify-center text-white/30">
                            {about.photoPlaceholder}
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 space-y-8">
                        <h2 className="font-goldman text-4xl md:text-6xl">{about.title}</h2>
                        <div className="font-inter text-lg leading-relaxed text-text-muted space-y-6">
                            {about.bio.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>

                        <Link href={experiencesLink.href} className="inline-block px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white font-goldman tracking-widest uppercase transition-all duration-300">
                            {experiencesLink.label}
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};
