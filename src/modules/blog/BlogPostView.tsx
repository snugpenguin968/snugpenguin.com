import React from "react";
import Link from "next/link";
import Markdown from "react-markdown";
import { ContentBlock } from "./BlogData";

type BlogPostViewProps = {
    title: string;
    date: string;
    tags: string[];
    content: ContentBlock[];
};

const renderBlock = (block: ContentBlock, index: number) => {
    switch (block.type) {
        case "paragraph":
            return (
                <div key={index} className="mb-6 font-inter text-lg leading-relaxed text-white/80">
                    <Markdown
                        components={{
                            a: ({ node, ...props }) => (
                                <a
                                    {...props}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline hover:text-white transition-colors"
                                />
                            ),
                            p: ({ node, ...props }) => <p {...props} className="mb-0" />,
                        }}
                    >
                        {block.content}
                    </Markdown>
                </div>
            );
        case "heading":
            const HeadingTag = `h${block.level}` as React.ElementType;
            const sizes = {
                1: "text-4xl md:text-5xl mt-12 mb-6",
                2: "text-3xl md:text-4xl mt-10 mb-5",
                3: "text-2xl md:text-3xl mt-8 mb-4",
            };
            return <HeadingTag key={index} className={`font-goldman text-white ${sizes[block.level]}`}>{block.content}</HeadingTag>;
        case "image":
            return (
                <figure key={index} className="my-10">
                    <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10">
                        {/* Placeholder for actual image component */}
                        <div className="aspect-video flex items-center justify-center text-white/30 bg-black/20">
                            Image: {block.src}
                        </div>
                    </div>
                    {block.caption && <figcaption className="text-center text-sm text-white/50 mt-3 font-mono">{block.caption}</figcaption>}
                </figure>
            );
        case "code":
            return (
                <div key={index} className="my-8 rounded-xl overflow-hidden border border-white/10 bg-[#0a192f]">
                    <div className="px-4 py-2 bg-white/5 border-b border-white/5 text-xs font-mono text-white/50">
                        {block.language}
                    </div>
                    <pre className="p-6 overflow-x-auto">
                        <code className="font-mono text-sm text-ice-light">{block.content}</code>
                    </pre>
                </div>
            );
        default:
            return null;
    }
};

export const BlogPostView = ({ title, date, tags, content }: BlogPostViewProps) => {
    return (
        <article className="min-h-screen pt-32 pb-20 px-5 md:px-10"
            style={{
                background: "linear-gradient(to bottom, #0066B2 0%, #2746AE 50%, #0B1324 100%)"
            }}
        >
            <div className="max-w-3xl mx-auto">
                <Link href="/blog" className="inline-flex items-center text-sm text-white/50 hover:text-white mb-10 transition-colors">
                    ← Back to Blog
                </Link>

                <header className="mb-16 text-center">
                    <div className="flex justify-center gap-3 mb-6">
                        {tags.map((tag, index) => (
                            <span key={index} className="text-xs font-mono px-3 py-1 rounded-full border border-white/20 text-white/50 uppercase tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="font-goldman text-5xl md:text-7xl mb-6 text-white leading-tight">
                        {title}
                    </h1>
                    <time className="font-mono text-ice-light opacity-70 block">// {date}</time>
                </header>

                <div className="prose prose-invert max-w-none">
                    {content.map((block, index) => renderBlock(block, index))}
                </div>
            </div>
        </article>
    );
};
