import React from "react";

type Project = {
    year: string;
    title: string;
    description: string;
    tags: string[];
};

type ProjectsViewProps = {
    title: string;
    projects: Project[];
};

const ProjectCard = ({ year, title, description, tags }: Project) => (
    <div className="group relative border-t border-white/20 py-10 transition-all duration-300 hover:bg-white/5">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-5 md:gap-10">
            <div className="font-mono text-sm text-white/50">{year}</div>

            <div className="flex-1">
                <h3 className="font-goldman text-3xl md:text-4xl mb-3 group-hover:text-ice-light transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-white/70 leading-relaxed max-w-2xl mb-5">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <span key={index} className="text-xs font-mono px-2 py-1 rounded-full border border-white/10 text-white/50">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ice-light">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
            </div>
        </div>
    </div>
);

export const ProjectsView = ({ title, projects }: ProjectsViewProps) => {
    return (
        <section className="py-20 px-5" id="projects">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-goldman text-5xl md:text-7xl text-center mb-20 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
                    {title}
                </h2>

                <div className="flex flex-col">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};
