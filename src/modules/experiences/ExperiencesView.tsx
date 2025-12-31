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

type CourseItem = {
    name: string;
    link?: string;
};

type SkillItem = {
    name: string;
    link?: string;
};

type SkillGroup = {
    category: string;
    skills: SkillItem[];
};

type StandardExperienceSegment = {
    type: 'standard';
    id: string;
    title: string;
    items: ExperienceItem[];
};

type CourseworkSegment = {
    type: 'coursework';
    id: string;
    title: string;
    courses: CourseItem[];
};

type SkillsSegment = {
    type: 'skills';
    id: string;
    title: string;
    groups: SkillGroup[];
};

type ExperienceSegment = StandardExperienceSegment | CourseworkSegment | SkillsSegment;

type ExperiencesViewProps = {
    title: string;
    segments: ExperienceSegment[];
    renderCard: (item: ExperienceItem) => React.ReactNode;
    renderTags: (items: { name: string; link?: string }[]) => React.ReactNode;
};

export const ExperiencesView = ({ title, segments, renderCard, renderTags }: ExperiencesViewProps) => {
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
                                    {renderTags(segment.courses)}
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
                                                {renderTags(group.skills)}
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            );
                        }

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
                                        <React.Fragment key={item.id}>
                                            {renderCard(item)}
                                        </React.Fragment>
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
