import React from "react";
import Link from "next/link";

type HeroViewProps = {
    title: string;
    subtitle: string;
    quote: string;
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

export const HeroView = ({ title, subtitle, quote, scrollText, about, experiencesLink }: HeroViewProps) => {
    return (
        <>
            <section className="min-h-screen relative overflow-hidden flex flex-col justify-center pt-32 pb-20">
                <div className="max-w-[1400px] mx-auto w-full px-5 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10 items-center relative z-10">

                    {/* Left Column: Title */}
                    <div className="md:col-span-4 text-left md:text-right order-2 md:order-1">
                        <h1 className="font-goldman text-5xl md:text-7xl mb-2 uppercase tracking-widest bg-gradient-to-b from-white to-ice-light bg-clip-text text-transparent drop-shadow-lg leading-tight">
                            {title}
                        </h1>
                        <p className="text-sm md:text-base text-ice-light font-light opacity-80">
                            {subtitle}
                        </p>
                    </div>

                    {/* Center Column: Iceberg */}
                    <div className="md:col-span-4 flex flex-col items-center justify-center order-1 md:order-2 relative">
                        {/* Main Iceberg */}
                        <div className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-3xl flex items-center justify-center text-white/50 transform rotate-45 mb-4 z-10 shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                            Iceberg Asset
                        </div>

                        {/* Reflection Placeholder */}
                        <div className="absolute top-[80%] w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm border-2 border-white/10 rounded-3xl flex items-center justify-center text-white/20 transform rotate-45 scale-y-[-1] opacity-30 mask-image-gradient pointer-events-none">
                            Reflection
                        </div>
                    </div>

                    {/* Right Column: Quote */}
                    <div className="md:col-span-4 text-left order-3">
                        <p className="text-sm md:text-lg text-white/60 font-medium italic max-w-xs leading-relaxed">
                            {quote}
                        </p>
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
