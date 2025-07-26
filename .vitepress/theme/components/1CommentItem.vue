<template>
  <div id="waline-comments"></div>
</template>

<script setup>
import { onMounted } from 'vue';
import { Waline } from '@waline/client';
import '@waline/client/style.css';

onMounted(() => {
  Waline({
    el: '#waline-comments',
    serverURL: 'https://waline.jieliu.xyz', // 注意：添加了 https:// 协议前缀
    path: window.location.pathname, // 根据页面路径区分评论
    // 其他配置项，详见 Waline 官方文档
  });
});
</script>

<style scoped>
[data-waline] {
  --waline-theme-color: var(--vp-c-brand);
  --waline-active-color: var(--vp-c-brand);
}

:deep(.wl-emoji-popup, .wl-gif-popup) {
  z-index: 99;
}
</style>

