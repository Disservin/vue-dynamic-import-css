import { computed } from "vue";
import { useStore } from "../stores/store";
import { type ComponentSharedData } from "@/types";

function useInitializeComponent<T extends ComponentSharedData>(
    id: string,
    shared: T
) {
    const store = useStore;

    const getter = () => store.getComponent<T>(id);

    store.fillComponent(id, { ...shared, ...{ show: true } });

    return {
        bindings: computed(() => getter().shared),
    };
}

export function useBindings<T extends ComponentSharedData>(
    componentId: string,
    shared: T
) {
    const bindings = useInitializeComponent(componentId, shared).bindings;

    return { bindings };
}
