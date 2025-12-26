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
            <section
                className="min-h-screen relative flex flex-col justify-center pt-32 pb-64"
            >
                <div className="max-w-[1400px] mx-auto w-full px-5 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10 items-center relative z-10">

                    {/* Left Column: Title */}
                    <div className="md:col-span-5 text-center md:text-left order-2 md:order-1 mt-10 md:mt-[-200px]">
                        <h1 className="font-goldman text-5xl md:text-8xl mb-4 text-white drop-shadow-lg leading-none whitespace-nowrap">
                            {title}
                        </h1>
                        <p className="text-sm md:text-lg text-white font-medium opacity-90 drop-shadow-md">
                            {subtitle}
                        </p>
                    </div>

                    {/* Center Column: Iceberg */}
                    <div className="md:col-span-7 flex flex-col items-center justify-center order-1 md:order-2 relative w-full">
                        {/* Main Iceberg & Penguins */}
                        <div className="relative w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[450px] md:h-[450px] mb-10 z-10 top-10 mx-auto">
                            <img src="/iceberg.png" alt="Iceberg" className="w-full h-full object-contain" />
                            {/* Layered Penguins */}
                            <img src="/penguins.png" alt="Penguins" className="absolute top-4 left-0 w-full h-full object-contain z-20 pointer-events-none" />
                        </div>

                        {/* Reflection */}
                        <div className="absolute top-[75%] w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[450px] md:h-[450px] flex items-center justify-center opacity-30 mask-image-gradient pointer-events-none -z-10 mx-auto">
                            <img src="/reflection.png" alt="Reflection" className="w-full h-full object-contain" />
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-70 text-white">
                    <span>{scrollText}</span>
                </div>
            </section>

            {/* About Section Integrated */}
            <section id="about" className="py-20 px-5 md:px-10 max-w-6xl mx-auto relative z-10">
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
