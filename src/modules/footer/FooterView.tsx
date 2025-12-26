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
    discord: FooterLink;
    linkedin: FooterLink;
    copyright: string;
    techStack: string;
    credit: {
        label: string;
        url: string;
    };
};

export const FooterView = ({ contactTitle, github, email, discord, linkedin, copyright, techStack, credit }: FooterViewProps) => {
    return (
        <footer className="py-10 px-5 relative overflow-hidden text-text-white" id="contact">
            {/* Ambient Light Gradient at Bottom */}
            <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-[#004C8C]/50 to-transparent pointer-events-none z-0"></div>

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
                    {/* Github */}
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

                    {/* LinkedIn */}
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

                    {/* Email */}
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

                    {/* Discord */}
                    <div className="flex items-center gap-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z" />
                        </svg>
                        <div>
                            <span className="text-sm opacity-70 mb-1 block">{discord.label}</span>
                            <a href={discord.url} target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:underline">
                                {discord.username}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-full h-px bg-white/20 my-10"></div>

                <div className="text-xs opacity-60 flex flex-col md:flex-row justify-between gap-4">
                    <div>
                        <p>{techStack}</p>
                        <p>{copyright}</p>
                    </div>
                    <a href={credit.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        {credit.label}
                    </a>
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
