import React from "react";
import { ExperienceSegment } from "./ExperiencesTypes";
import { ExperienceCard } from "./ExperienceCard";
import { ExperienceTags } from "./ExperienceTags";

type ExperiencesViewProps = {
    title: string;
    segments: ExperienceSegment[];
};

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
                    {segments.map((segment) => {
                        if (segment.type === 'coursework') {
                            return (
                                <section key={segment.id} className="space-y-10">
                                    <div className="flex items-center gap-4">
                                        <h2 className="font-goldman text-3xl md:text-4xl text-white/80">
                                            {segment.title}
                                        </h2>
                                        <div className="h-px bg-white/10 flex-1" />
                                    </div>
                                    <ExperienceTags items={segment.courses} />
                                </section>
                            );
                        }

                        if (segment.type === 'skills') {
                            return (
                                <section key={segment.id} className="space-y-16">
                                    <div className="flex items-center gap-4">
                                        <h2 className="font-goldman text-3xl md:text-4xl text-white/80">
                                            {segment.title}
                                        </h2>
                                        <div className="h-px bg-white/10 flex-1" />
                                    </div>

                                    <div className="space-y-12">
                                        {segment.groups.map((group) => (
                                            <div key={group.category} className="space-y-6">
                                                <h3 className="font-goldman text-2xl text-white/60 pl-2 border-l-2 border-ice-light/30">
                                                    {group.category}
                                                </h3>
                                                <ExperienceTags items={group.skills} />
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            );
                        }

                        // Standard segment
                        return (
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
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
