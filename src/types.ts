export type ComponentSharedData<
    T extends Record<string, any> = Record<string, unknown>
> = T & {
    show?: boolean;
};

export type StoreValue<T extends ComponentSharedData = ComponentSharedData> = {
    shared: T;
};

export interface ComponentProps<
    T extends Record<string, any> = Record<string, any>
> {
    id: string;

    settings: Partial<ComponentSharedData<T>>;
}
