import { ExperiencesAdapter } from "@/modules/experiences/ExperiencesAdapter";
import { HeaderAdapter } from "@/modules/header/HeaderAdapter";
import { FooterAdapter } from "@/modules/footer/FooterAdapter";

export default function Experiences() {
    return (
        <div className="min-h-screen font-sans">
            <HeaderAdapter />
            <ExperiencesAdapter />
            <FooterAdapter />
        </div>
    );
}
