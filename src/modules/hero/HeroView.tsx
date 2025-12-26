import React from "react";

type HeroViewProps = {
    title: string;
    subtitle: string;
    scrollText: string;
};

export const HeroView = ({ title, subtitle, scrollText }: HeroViewProps) => {
    return (
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
    );
};
