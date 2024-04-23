<template>
  <component :is="tag" :style="styleProps" class="l-text-component">
    {{ text }}
  </component>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";
import { pick } from "lodash-es";

const props = defineProps({
  text: {
    type: String,
  },
  fontSize: {
    type: String,
  },
  tag: {
    type: String,
    default: "div",
  },
});

// 抽离并且获得 styleProps
const styleProps = computed(() => pick(props, ["fontSize"]));
</script>

<style lang="scss" scoped>
h2.l-text-component,
p.l-text-component {
  margin-bottom: 0;
}
button.l-text-component {
  padding: 5px 10px;
  cursor: pointer;
}
.l-text-component {
  box-sizing: border-box;
  white-space: pre-wrap;
}
</style>
