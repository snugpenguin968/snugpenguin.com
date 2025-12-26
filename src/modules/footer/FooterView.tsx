import React from "react";

type FooterLink = {
    label: string;
    username?: string;
    address?: string;
    url: string;
};

type FooterViewProps = {
    contactTitle: string;
    github: FooterLink;
    email: FooterLink;
    copyright: string;
    techStack: string;
};

export const FooterView = ({ contactTitle, github, email, copyright, techStack }: FooterViewProps) => {
    return (
        <footer className="py-10 px-5 relative overflow-hidden text-text-white" id="contact">
            <div className="max-w-6xl mx-auto flex flex-col gap-10 relative z-10">
                <div>
                    <p className="text-sm opacity-70 mb-1.5 block">// Contact</p>
                    <h2 className="font-goldman text-5xl md:text-6xl mb-5">
                        {contactTitle.split("\n").map((line, i) => (
                            <React.Fragment key={i}>
                                {line}
                                {i < contactTitle.split("\n").length - 1 && <br />}
                            </React.Fragment>
                        ))}
                    </h2>
                </div>

                <div className="w-full h-px bg-white/20 my-10"></div>

                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        <div>
                            <span className="text-sm opacity-70 mb-1 block">{github.label}</span>
                            <a href={github.url} target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:underline">
                                {github.username}
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        <div>
                            <span className="text-sm opacity-70 mb-1 block">{email.label}</span>
                            <a href={email.url} className="text-lg font-medium hover:underline">
                                {email.address}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-full h-px bg-white/20 my-10"></div>

                <div className="text-xs opacity-60">
                    <p>{techStack}</p>
                    <p>{copyright}</p>
                </div>
            </div>

            {/* Bottom Iceberg with Jagged Ring Effect */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[500px] z-0 pointer-events-none opacity-50">
                <div className="w-full h-full flex items-end justify-center pb-10 text-white/30 text-2xl font-bold bg-gradient-to-t from-white/10 to-transparent" style={{ clipPath: 'polygon(20% 100%, 40% 20%, 60% 80%, 80% 10%, 100% 100%)' }}>
                    Bottom Iceberg
                </div>
            </div>
        </footer>
    );
};
