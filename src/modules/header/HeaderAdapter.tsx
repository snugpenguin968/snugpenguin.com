import { useHeaderModel } from "./HeaderModel";
import { HeaderView } from "./HeaderView";

export const HeaderAdapter = () => {
    const model = useHeaderModel();
    return <HeaderView {...model} />;
};
