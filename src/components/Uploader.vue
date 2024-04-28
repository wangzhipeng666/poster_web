<template>
  <div class="file-upload">
    <button @click="triggerUpload">
      <span v-if="fileStatus === 'loading'">正在上传</span>
      <span v-else-if="fileStatus === 'success'">上传成功</span>
      <span v-else-if="fileStatus === 'error'">上传失败</span>
      <span v-else>点击上传</span>
    </button>
    <input
      ref="fileInput"
      type="file"
      style="display: none"
      @change="handleFileChange"
    />
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref, defineProps } from "vue";
type UploadStaus = "ready" | "loading" | "success" | "error";

const props = defineProps({
  action: {
    type: String,
    required: true,
  },
});

const fileInput = ref<null | HTMLInputElement>(null);
const fileStatus = ref<UploadStaus>("ready");
const triggerUpload = () => {
  if (fileInput.value) {
    fileInput.value.click();
  }
};
const handleFileChange = (e: event) => {
  const target = e.target as HTMLInputElement;
  const files = target.files;
  console.log("files", files);
  if (files) {
    const uploadedFile = files[0];
    const formData = new FormData();
    formData.append(uploadedFile.name, uploadedFile);
    fileStatus.value = "loading";
    axios
      .post(props.action, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        fileStatus.value = "success";
      })
      .catch(() => {
        fileStatus.value = "error";
      });
  }
};
</script>

<style lang="scss" scoped></style>
