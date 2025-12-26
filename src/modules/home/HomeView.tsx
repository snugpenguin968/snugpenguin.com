import React from "react";

type HomeViewProps = {
    header: React.ReactNode;
    hero: React.ReactNode;
    projects: React.ReactNode;
    footer: React.ReactNode;
};

export const HomeView = ({ header, hero, projects, footer }: HomeViewProps) => {
    return (
        <div className="min-h-screen font-sans">
            {header}
            <main>
                {hero}
                {projects}
            </main>
            {footer}
        </div>
    );
};
