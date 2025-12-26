import { useAboutModel } from "./AboutModel";
import { AboutView } from "./AboutView";

export const AboutAdapter = () => {
    const model = useAboutModel();
    return <AboutView {...model} />;
};
