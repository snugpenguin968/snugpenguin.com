import { BlogListAdapter } from "@/modules/blog/BlogListAdapter";
import { HeaderAdapter } from "@/modules/header/HeaderAdapter";
import { FooterAdapter } from "@/modules/footer/FooterAdapter";

export default function BlogList() {
    return (
        <div className="min-h-screen font-sans">
            <HeaderAdapter />
            <BlogListAdapter />
            <FooterAdapter />
        </div>
    );
}
