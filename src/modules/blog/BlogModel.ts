import { blogPosts, BlogPost } from "./BlogData";

export const useBlogListModel = () => {
    return {
        title: "Blog",
        posts: blogPosts.map(({ slug, title, date, summary, tags, coverImage }) => ({
            slug,
            title,
            date,
            summary,
            tags,
            coverImage,
        })),
    };
};

export const useBlogPostModel = (slug: string) => {
    const post = blogPosts.find((p) => p.slug === slug);
    return post || null;
};
