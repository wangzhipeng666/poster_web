<template>
  <div class="editor-container">
    <a-layout>
      <a-layout-sider width="300" style="background: #fff">
        <div class="sidebar-container">
          组件列表
          <components-list
            :list="defaultTextTemplates"
            @onItemClick="addItem"
          />
        </div>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-layout-content class="preview-container">
          <p>画布区域</p>
          <div class="preview-list" id="canvas-area">
            <edit-wrapper
              v-for="component in components"
              :key="component.id"
              :id="component.id"
              @setActive="setActive"
              :active="component.id === (currentElement && currentElement.id)"
            >
              <component
                :is="componentMap[component.name]"
                v-bind="component.props"
              />
            </edit-wrapper>
          </div>
        </a-layout-content>
      </a-layout>
      <a-layout-sider
        width="300"
        style="background: #fff"
        class="settings-panel"
      >
        组件属性
        <props-table
          v-if="currentElement && currentElement.props"
          :props="currentElement.props"
          @change="handleChange"
        ></props-table>
        <pre>
          {{ currentElement && currentElement.props }}
        </pre>
      </a-layout-sider>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import { GlobalDataProps } from "../store/index";
import ComponentsList from "../components/ComponentsList.vue";
import EditWrapper from "../components/EditWrapper.vue";
import { ComponentData } from "../store/editor";
import { defaultTextTemplates } from "../defaultTemplates";
import PropsTable from "../components/PropsTable.vue";
// 引入组件
import LText from "../components/LText.vue";

interface ComponentMap {
  [key: string]: any;
}

const componentMap: ComponentMap = {
  "l-text": LText,
};

const store = useStore<GlobalDataProps>();
const components = computed(() => store.state.editor.components);
const currentElement = computed<ComponentData | null>(
  () => store.getters.getCurrentElement
);

const addItem = (props: any) => {
  store.commit("addComponent", props);
};
const setActive = (id: string) => {
  store.commit("setActive", id);
};
const handleChange = (e: any) => {
  console.log("event", e);
  store.commit("updateComponent", e);
};
</script>

<style lang="scss" scoped>
.editor-container .preview-container {
  padding: 24px;
  margin: 0;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.editor-container .preview-list {
  padding: 0;
  margin: 0;
  min-width: 375px;
  min-height: 200px;
  border: 1px solid #efefef;
  background: #fff;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  margin-top: 50px;
  max-height: 80vh;
}
</style>
