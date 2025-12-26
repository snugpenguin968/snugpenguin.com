import Link from "next/link";
import React from "react";

type HeaderLink = {
    label: string;
    href: string;
};

type HeaderViewProps = {
    logoText: string;
    links: HeaderLink[];
};

export const HeaderView = ({ logoText, links }: HeaderViewProps) => {
    return (
        <header className="fixed top-0 left-0 w-full h-20 flex items-center justify-between px-10 z-50 bg-white/10 backdrop-blur-md border-b border-white/10 md:px-5">
            <div className="font-goldman text-2xl font-bold text-text-white flex items-center gap-2.5">
                {/* Placeholder for logo icon if needed */}
                <span>{logoText}</span>
            </div>
            <nav className="flex gap-8 md:gap-4">
                {links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        className="font-inter text-sm font-medium text-text-white opacity-80 hover:opacity-100 transition-opacity duration-200 uppercase tracking-widest md:text-xs"
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
        </header>
    );
};
