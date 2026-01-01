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
    beli: FooterLink;
    linkedin: FooterLink;
    copyright: string;
    techStack: string;
    credit: {
        label: string;
        url: string;
    };
};

export const FooterView = ({ contactTitle, github, email, beli, linkedin, copyright, techStack, credit }: FooterViewProps) => {
    return (
        <footer className="py-10 px-5 relative overflow-hidden text-text-white" id="contact">
            {/* Ambient Light Gradient at Bottom */}
            <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-[#004C8C]/50 to-transparent pointer-events-none z-0"></div>

            <div className="max-w-6xl mx-auto flex flex-col gap-10 relative z-10">
                <div>
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
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                        <div>
                            <span className="text-sm opacity-70 mb-1 block">{linkedin.label}</span>
                            <a href={linkedin.url} target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:underline">
                                {linkedin.username}
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

                    <div className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-md overflow-hidden flex-shrink-0">
                            <img src="/images/branding/beli.jpg" alt="Beli" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <span className="text-sm opacity-70 mb-1 block">{beli.label}</span>
                            <span className="text-lg font-medium">{beli.username}</span>
                        </div>
                    </div>
                </div>

                <div className="w-full h-px bg-white/20 my-10"></div>

                <div className="text-xs opacity-60 flex flex-col gap-1">
                    <p>{techStack}</p>
                    <p>{copyright}</p>
                    <a href={credit.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors block mt-1">
                        {credit.label}
                    </a>
                </div>
            </div>

            <div className="absolute bottom-0 right-0 w-[200px] md:w-[600px] z-0 pointer-events-none opacity-50">
                <img src="/images/hero/bottom.png" alt="Bottom Iceberg" className="w-full h-auto object-contain object-bottom" />
            </div>
        </footer>
    );
};
