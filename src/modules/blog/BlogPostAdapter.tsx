import { useBlogPostModel } from "./BlogModel";
import { BlogPostView } from "./BlogPostView";
import { notFound } from "next/navigation";

export const BlogPostAdapter = ({ slug }: { slug: string }) => {
    const model = useBlogPostModel(slug);

    if (!model) {
        notFound();
    }

    return <BlogPostView {...model} />;
};
