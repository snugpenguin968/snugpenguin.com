import { AboutAdapter } from "@/modules/about/AboutAdapter";
import { HeaderAdapter } from "@/modules/header/HeaderAdapter";
import { FooterAdapter } from "@/modules/footer/FooterAdapter";

export default function About() {
    return (
        <div className="min-h-screen font-sans">
            <HeaderAdapter />
            <AboutAdapter />
            <FooterAdapter />
        </div>
    );
}
