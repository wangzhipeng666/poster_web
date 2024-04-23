<template>
  <div class="create-component-list">
    <div
      v-for="(item, index) in list"
      :key="index"
      class="component-item"
      @click="onItemClick(item)"
    >
      <l-text v-bind="item"></l-text>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import LText from "../components/LText.vue";

defineProps({
  list: {
    type: Array,
    required: true,
  },
});

const emits = defineEmits(["on-item-click"]);
const onItemClick = (data: any) => {
  emits("on-item-click", data);
};
</script>

<style lang="scss" scoped>
.component-item {
  width: 100px;
  margin: 0 auto;
  margin-bottom: 15px;
}
</style>
