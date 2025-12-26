import React from "react";

type TagItem = {
    name: string;
    link?: string;
};

export const ExperienceTags = ({ items }: { items: TagItem[] }) => (
    <div className="flex flex-wrap gap-4">
        {items.map((item, index) => {
            const Content = (
                <div className="font-mono text-sm text-ice-light opacity-80 group-hover:opacity-100 transition-opacity">
                    {item.name}
                </div>
            );

            if (item.link) {
                return (
                    <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative bg-[#0a192f]/50 border border-white/10 hover:border-ice-light/50 rounded-xl px-6 py-4 transition-all duration-300 hover:bg-[#112240] hover:-translate-y-1 block cursor-pointer"
                    >
                        {Content}
                    </a>
                );
            }

            return (
                <div
                    key={index}
                    className="group relative bg-[#0a192f]/50 border border-white/10 hover:border-white/30 rounded-xl px-6 py-4 transition-all duration-300 hover:bg-[#112240] hover:-translate-y-1"
                >
                    {Content}
                </div>
            );
        })}
    </div>
);
