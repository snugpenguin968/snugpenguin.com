import React from "react";

type AboutViewProps = {
    title: string;
    bio: string[];
    photoPlaceholder: string;
};

export const AboutView = ({ title, bio, photoPlaceholder }: AboutViewProps) => {
    return (
        <main className="min-h-screen pt-32 pb-20 px-5 md:px-10 max-w-4xl mx-auto">
            <h1 className="font-goldman text-5xl md:text-7xl mb-10 text-center md:text-left">
                {title.split("'").map((part, i, arr) => (
                    <React.Fragment key={i}>
                        {part}
                        {i < arr.length - 1 && "'"}
                    </React.Fragment>
                ))}
            </h1>

            <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="w-full md:w-1/3 aspect-square bg-white/10 rounded-2xl overflow-hidden relative border-2 border-white/20">
                    {/* Placeholder for John's photo */}
                    <div className="w-full h-full flex items-center justify-center text-white/30">
                        {photoPlaceholder}
                    </div>
                </div>

                <div className="w-full md:w-2/3 font-inter text-lg leading-relaxed text-text-muted space-y-6">
                    {bio.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </main>
    );
};
