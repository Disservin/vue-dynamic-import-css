<template>
    <component
        :is="getComponent()"
        :id="component.id"
        :settings="component.settings"
        :class="loading ? 'classA' : 'classB'"
    />
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from "vue";
import { useStore } from "../stores/store";
import type { ComponentProps } from "@/types";

const props = defineProps<{
    component: ComponentProps;
}>();

const getComponent = () => {
    return defineAsyncComponent(() => import(`../components/VFoo.vue`));
};

const loading = computed(() => {
    return useStore.store.get(props.component.id)?.shared?.show;
});
</script>

<style scoped></style>
