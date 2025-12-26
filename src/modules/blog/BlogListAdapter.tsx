import { useBlogListModel } from "./BlogModel";
import { BlogListView } from "./BlogListView";

export const BlogListAdapter = () => {
    const model = useBlogListModel();
    return <BlogListView {...model} />;
};
