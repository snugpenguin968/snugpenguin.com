import React from "react";

type HomeViewProps = {
    header: React.ReactNode;
    hero: React.ReactNode;
    footer: React.ReactNode;
};

export const HomeView = ({ header, hero, footer }: HomeViewProps) => {
    return (
        <div
            className="min-h-screen font-sans"
            style={{
                background: "linear-gradient(to bottom, #5B8FB3 0%, #A9C9DB 15%, #5E86B0 16%, #0066B2 40%, #1A2849 70%, #0B1324 100%)"
            }}
        >
            {header}
            <main>
                {hero}
            </main>
            {footer}
        </div>
    );
};
