<template>
  <div class="homepage-container">
    <a-layout :style="{ background: '#fff' }">
      <a-layout-header class="header">
        <div class="page-title">慕课乐高</div>
      </a-layout-header>
      <a-layout-content class="home-layout">
        <div class="content-container">
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer>
        © 慕课网（imooc.com）版权所有 | 津ICP备20000929号-2
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.page-title {
  color: #fff;
}
.content-container {
  background: #fff;
  padding: 0 24px 24px 30px;
  min-height: 70vh;
  max-width: 1200px;
  margin: 50px auto;
  width: 100%;
}
</style>
