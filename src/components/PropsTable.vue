<template>
  <div class="props-table">
    <div v-for="(value, key) in finalProps" :key="key" class="prop-item">
      <component v-if="value" :is="value.component" :value="value.value" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, PropType, defineProps } from "vue";
import { reduce } from "lodash";
import { PropsToForms, mapPropsToForms } from "../propsMap";
import { TextComponentProps } from "../defaultProps";

const props = defineProps({
  props: {
    type: Object as PropType<TextComponentProps>,
    required: true,
  },
});

const finalProps = computed(() => {
  return reduce(
    props.props,
    (result, value, key) => {
      const newKey = key as keyof TextComponentProps;
      const item = mapPropsToForms[newKey];
      if (item) {
        item.value = value;
        result[newKey] = item;
      }
      return result;
    },
    {} as PropsToForms
  );
});
</script>

<style lang="scss" scoped></style>
