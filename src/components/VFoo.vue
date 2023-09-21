<template>
    <div class="hover-link">Foo</div>
</template>

<script setup lang="ts">
import { useBindings } from "../composables/Bindings";
import { type ComponentProps } from "@/types";

const props = defineProps<
    ComponentProps<{
        padding: number;
    }>
>();

const { bindings } = useBindings(props.id, props.settings);
</script>

<style scoped>
.hover-link {
    padding: v-bind("bindings.padding") px;
}
</style>
