<template>
    <RenderResolver :structure="myjson" />
</template>

<script setup lang="ts">
import { RenderResolver } from "./composables/RenderResolver";

const myjson = JSON.parse(`[
    {
        "id": "0",
        "settings": {
            "padding": 5
        }
    }
]`);
</script>

<style scoped></style>
