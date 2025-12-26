import { HeaderAdapter } from "../header/HeaderAdapter";
import { HeroAdapter } from "../hero/HeroAdapter";
import { FooterAdapter } from "../footer/FooterAdapter";
import { HomeView } from "./HomeView";

export const HomeAdapter = () => {
    return (
        <HomeView
            header={<HeaderAdapter />}
            hero={<HeroAdapter />}
            projects={null} // Removed projects section
            footer={<FooterAdapter />}
        />
    );
};
