import React from "react";

type HomeViewProps = {
    header: React.ReactNode;
    hero: React.ReactNode;
    projects: React.ReactNode;
    footer: React.ReactNode;
};

export const HomeView = ({ header, hero, projects, footer }: HomeViewProps) => {
    return (
        <div
            className="min-h-screen font-sans"
            style={{
                // Sky: #5B8FB3 (Darker Sky) -> #A9C9DB (Darker Horizon)
                // Horizon at ~15%: sharp transition to #5E86B0 (Surface)
                // Ocean Depth: #0066B2 (Main) -> #1A2849 (Dark Mix) -> #0B1324 (Deepest)
                background: "linear-gradient(to bottom, #5B8FB3 0%, #A9C9DB 15%, #5E86B0 16%, #0066B2 40%, #1A2849 70%, #0B1324 100%)"
            }}
        >
            {header}
            <main>
                {hero}
                {projects}
            </main>
            {footer}
        </div>
    );
};
