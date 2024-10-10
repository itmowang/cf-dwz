<template>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div v-if="loading" class="text-center">
        <div class="flex justify-center mb-4">
          <svg class="animate-spin h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0h-2a6 6 0 10-12 0h2z"></path>
          </svg>
        </div>
        <p class="text-white text-2xl font-semibold">加载中，请稍候...</p>
      </div>
  
      <div v-else class="text-center">
        <p class="text-white text-2xl font-semibold">正在重定向到短网址...</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { toLink } from '@/api/link';
  
  const loading = ref(true);
  const router = useRouter();
  const { params } = router.currentRoute.value;
  const short = params.short;
  
  onMounted(async () => {
    const res = await toLink(short);
    if (res.status == 200) {
      loading.value = false;
      setTimeout(() => {
        window.location.href = res.originalUrl;
      }, 2000);
    }
  });
  </script>
  
  <style scoped>
  /* 在此处可根据需要添加其他样式 */
  </style>
  