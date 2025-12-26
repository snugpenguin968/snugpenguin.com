import { useFooterModel } from "./FooterModel";
import { FooterView } from "./FooterView";

export const FooterAdapter = () => {
    const model = useFooterModel();
    return <FooterView {...model} />;
};
