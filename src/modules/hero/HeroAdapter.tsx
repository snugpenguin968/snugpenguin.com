import { useHeroModel } from "./HeroModel";
import { HeroView } from "./HeroView";

export const HeroAdapter = () => {
    const model = useHeroModel();
    return <HeroView {...model} />;
};
