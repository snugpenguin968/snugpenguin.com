import React from "react";
import Link from "next/link";

type HeroViewProps = {
    title: string;
    subtitle: string;
    scrollText: string;
    about: {
        title: string;
        bio: string[];
        photoSrc: string;
    };
    experiencesLink: {
        label: string;
        href: string;
    };
    blogLink: {
        label: string;
        href: string;
    };
};

export const HeroView = ({ title, subtitle, scrollText, about, experiencesLink, blogLink }: HeroViewProps) => {
    return (
        <>
            <section
                className="min-h-screen relative flex flex-col justify-center pt-32 pb-64"
            >
                <div className="max-w-[1400px] mx-auto w-full px-5 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10 items-center relative z-10">

                    <div className="md:col-span-5 text-center md:text-left order-2 md:order-1 mt-10 md:mt-[-200px]">
                        <h1 className="font-goldman text-5xl md:text-8xl mb-4 text-white drop-shadow-lg leading-none whitespace-nowrap">
                            {title}
                        </h1>
                        <p className="text-sm md:text-lg text-white font-medium opacity-90 drop-shadow-md">
                            {subtitle}
                        </p>
                    </div>

                    <div className="md:col-span-7 flex flex-col items-center justify-center order-1 md:order-2 relative w-full mt-20 md:mt-0">
                        <div className="relative w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[450px] md:h-[450px] mb-10 z-10 top-10 mx-auto">
                            <img src="/images/hero/iceberg.png" alt="Iceberg" className="w-full h-full object-contain" />
                            <img src="/images/hero/penguins.png" alt="Penguins" className="absolute top-4 left-0 w-full h-full object-contain z-20 pointer-events-none" />
                        </div>

                        <div className="absolute top-[75%] w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[450px] md:h-[450px] flex items-center justify-center opacity-30 mask-image-gradient pointer-events-none -z-10 mx-auto">
                            <img src="/images/hero/reflection.png" alt="Reflection" className="w-full h-full object-contain" />
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-70 text-white">
                    <span>{scrollText}</span>
                </div>
            </section>

            <section id="about" className="py-20 px-5 md:px-10 max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row gap-10 items-center">
                    <div className="w-full md:w-1/2 aspect-square bg-white/10 rounded-2xl overflow-hidden relative border-2 border-white/20">
                        <img src={about.photoSrc} alt={about.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full md:w-1/2 space-y-8">
                        <h2 className="font-goldman text-4xl md:text-6xl">{about.title}</h2>
                        <div className="font-inter text-lg leading-relaxed text-text-muted space-y-6">
                            {about.bio.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>

                        <div className="flex flex-col gap-4 items-start">
                            <Link href={experiencesLink.href} className="group flex items-center gap-2 font-goldman text-xl text-white/80 hover:text-white transition-colors">
                                <span>{experiencesLink.label}</span>
                                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <Link href={blogLink.href} className="group flex items-center gap-2 font-goldman text-xl text-white/80 hover:text-white transition-colors">
                                <span>{blogLink.label}</span>
                                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
