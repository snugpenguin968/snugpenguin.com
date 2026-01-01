"use client";

import React, { useState } from "react";
import Link from "next/link";

type HeaderLink = {
    label: string;
    href: string;
};

type HeaderViewProps = {
    logoText: string;
    links: HeaderLink[];
};

export const HeaderView = ({ logoText, links }: HeaderViewProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header
            className={`fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl flex flex-col px-8 z-50 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] shadow-lg transition-all duration-300 ${isMenuOpen ? 'h-auto py-0' : 'h-16'}`}
        >
            <div className="w-full h-16 flex items-center justify-between shrink-0">
                <Link href="/" className="font-goldman text-xl font-bold text-text-white flex items-center gap-2.5 transition-opacity hover:opacity-80">
                    <img src="/images/branding/logo.png" alt="Snug Penguin" className="w-8 h-8 object-contain" />
                    <span>{logoText}</span>
                </Link>

                <nav className="hidden md:flex gap-8 lg:gap-10">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="font-inter text-xs font-medium text-text-white opacity-70 hover:opacity-100 transition-opacity duration-200 uppercase tracking-widest"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    )}
                </button>
            </div>

            {isMenuOpen && (
                <nav className="md:hidden flex flex-col gap-6 w-full items-center pb-6 animate-in fade-in slide-in-from-top-2">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="font-inter text-sm font-medium text-text-white opacity-90 hover:opacity-100 uppercase tracking-widest py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    );
};
