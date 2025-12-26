import React from "react";
import Link from "next/link";

type BlogPostSummary = {
    slug: string;
    title: string;
    date: string;
    summary: string;
    tags: string[];
    coverImage?: string;
};

type BlogListViewProps = {
    title: string;
    posts: BlogPostSummary[];
};

const BlogCard = ({ post }: { post: BlogPostSummary }) => (
    <Link href={`/blog/${post.slug}`} className="group block">
        <div className="relative w-full bg-gradient-to-br from-[#0a192f] to-[#112240] border border-white/10 rounded-3xl overflow-hidden hover:border-white/30 transition-all duration-300 shadow-xl">
            <div className="p-8 md:p-10">
                <div className="flex justify-between items-start mb-4">
                    <div className="font-mono text-sm text-ice-light opacity-70">// {post.date}</div>
                    <div className="flex gap-2">
                        {post.tags.map((tag, index) => (
                            <span key={index} className="text-[10px] font-mono px-2 py-1 rounded-full border border-white/20 text-white/50 uppercase tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <h3 className="font-goldman text-3xl md:text-4xl mb-4 text-white group-hover:text-ice-light transition-colors duration-300">
                    {post.title}
                </h3>

                <p className="text-white/60 leading-relaxed text-sm md:text-base max-w-2xl">
                    {post.summary}
                </p>

                <div className="mt-6 flex items-center text-ice-light text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    Read Article <span className="ml-2">→</span>
                </div>
            </div>
        </div>
    </Link>
);

export const BlogListView = ({ title, posts }: BlogListViewProps) => {
    return (
        <div className="min-h-screen pt-32 pb-20 px-5 md:px-10">
            <div className="max-w-5xl mx-auto">
                <h1 className="font-goldman text-6xl md:text-8xl mb-20 text-center text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
                    {title}
                </h1>

                <div className="grid grid-cols-1 gap-8">
                    {posts.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </div>
            </div>
        </div>
    );
};
