import RenderComponent from "./RenderComponent.vue";

import type { FunctionalComponent } from "vue";
import { type ComponentProps } from "@/types";

type FComponentProps = {
    structure?: ComponentProps[];
};

export const RenderResolver: FunctionalComponent<FComponentProps> = (props) => {
    return props.structure?.map((element) => {
        return <RenderComponent component={element} key={element.id} />;
    });
};

RenderResolver.props = {
    structure: {
        type: Object,
        required: false,
    },
};
