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
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor" fillOpacity="0.2" />
                        <path d="M12 6C9.5 6 7.5 8 7.5 10.5C7.5 12.5 8.5 14 10 15L8 19H16L14 15C15.5 14 16.5 12.5 16.5 10.5C16.5 8 14.5 6 12 6Z" fill="currentColor" />
                    </svg>
                    <span>{logoText}</span>
                </Link>

                {/* Desktop Nav */}
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

                {/* Mobile Menu Toggle */}
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

            {/* Mobile Nav */}
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
