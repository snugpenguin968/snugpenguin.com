import { BlogPostAdapter } from "@/modules/blog/BlogPostAdapter";
import { HeaderAdapter } from "@/modules/header/HeaderAdapter";
import { FooterAdapter } from "@/modules/footer/FooterAdapter";
import { blogPosts } from "@/modules/blog/BlogData";

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return (
        <div className="min-h-screen font-sans">
            <HeaderAdapter />
            <BlogPostAdapter slug={slug} />
            <FooterAdapter />
        </div>
    );
}
