import { reactive } from "vue";
import { type StoreValue, type ComponentSharedData } from "@/types";

function hasOwnProperty<T>(obj: T, k: PropertyKey) {
    if (obj == null) {
        return false;
    }

    return Object.prototype.hasOwnProperty.call(obj, k);
}

export const useStore = reactive({
    store: new Map<string, StoreValue>(),
    getComponent<T extends ComponentSharedData>(id: string) {
        if (!this.store.has(id)) {
            this.store.set(id, { shared: {} });
        }

        return this.store.get(id) as StoreValue<T>;
    },

    set(id: string | undefined, key: string, value: any) {
        if (id === undefined) return;

        const record = this.store.get(id);

        if (record !== undefined) {
            record.shared[key] = value;
        }
    },
    fillComponent(id: string, component: ComponentSharedData) {
        if (!this.store.has(id)) {
            this.store.set(id, { shared: component });
        }

        Object.keys(component).forEach((key) => {
            if (!hasOwnProperty(this.store.get(id)?.shared, key)) {
                this.store.get(id)!.shared[key] = component[key];
            }
        });
    },
});
