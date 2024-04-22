<template>
  <div class="content-container">
    <TemplateList :list="testData" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import { GlobalDataProps } from "../store/index";
import TemplateList from "@/components/TemplateList.vue";

const store = useStore<GlobalDataProps>();
const testData = computed(() => store.state.templates);
</script>

<style lang="scss" scoped></style>
