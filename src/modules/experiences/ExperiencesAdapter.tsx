import { useExperiencesModel } from "./ExperiencesModel";
import { ExperiencesView } from "./ExperiencesView";
import { ExperienceCard } from "./ExperienceCard";
import { ExperienceTags } from "./ExperienceTags";

export const ExperiencesAdapter = () => {
    const model = useExperiencesModel();
    return (
        <ExperiencesView
            {...model}
            renderCard={(item) => <ExperienceCard item={item} />}
            renderTags={(items) => <ExperienceTags items={items} />}
        />
    );
};
