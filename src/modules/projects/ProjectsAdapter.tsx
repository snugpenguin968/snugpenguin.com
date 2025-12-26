import { useProjectsModel } from "./ProjectsModel";
import { ProjectsView } from "./ProjectsView";

export const ProjectsAdapter = () => {
    const model = useProjectsModel();
    return <ProjectsView {...model} />;
};
