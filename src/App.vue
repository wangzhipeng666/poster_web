<template>
  <div class="app-container">
    <uploader action="http://123.57.138.48/api/upload/" />
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import Uploader from "./components/Uploader.vue";
</script>

<style lang="scss"></style>
