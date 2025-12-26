import { useExperiencesModel } from "./ExperiencesModel";
import { ExperiencesView } from "./ExperiencesView";

export const ExperiencesAdapter = () => {
    const model = useExperiencesModel();
    return <ExperiencesView {...model} />;
};
