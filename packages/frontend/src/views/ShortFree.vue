<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
    <Toast />
    <div class="bg-white shadow-lg rounded-lg p-10 max-w-xl w-full">
      <h1 class="text-3xl font-bold text-center text-gray-800 mb-6">魔王 - 短网址生成</h1>
      <p class="text-gray-600 text-center mb-8">快速生成短网址，方便分享与管理</p>
      <form @submit.prevent="generateShortUrl" class="space-y-6">
        <div>
          <label for="longUrl" class="block text-gray-700 text-lg">请输入长网址：</label>
          <input type="url" id="longUrl" v-model="longUrl" required
            class="mt-2 block w-full p-4 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            placeholder="https://example.com" />
        </div>
        <button type="submit"
          :disabled="isLoading"
          class="w-full py-3 bg-blue-700 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition duration-200 flex items-center justify-center">
          <span v-if="isLoading" class="loader mr-2"></span>
          <span v-if="!isLoading">生成短网址</span>
          <span v-if="isLoading">加载中...</span>
        </button>
      </form>
      <div v-if="shortUrl" class="mt-8 text-center">
        <p class="text-gray-700 text-lg">生成的短网址：</p>
        <div>
          <a :href="shortUrl" class="text-blue-600 font-semibold text-lg" target="_blank">{{ localUrl }}/{{ shortUrl }}</a>
        </div>
        <button @click="copyToClipboard"
          class="mt-2 py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-400 transition duration-200">
          复制短网址
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useToast } from 'primevue/usetoast';
import { createFreeCreate } from '@/api/link';
import { ref } from 'vue';

const toast = useToast();

const longUrl = ref('');
const shortUrl = ref('');
const localUrl = window.location.origin;
const isLoading = ref(false);

const generateShortUrl = async () => {
  isLoading.value = true;
  try {
    const data = { originalUrl: longUrl.value };
    const res = await createFreeCreate(data);
    if (res.status === 200) {
      shortUrl.value = res.data.shortUrl;
      toast.add({ severity: 'success', summary: '消息', detail: '生成短网址成功', life: 3000 });
    } else {
      toast.add({ severity: 'error', summary: '消息', detail: '生成短网址失败', life: 3000 });
    }
  } catch (error) {
    toast.add({ severity: 'error', summary: '消息', detail: '生成短网址失败', life: 3000 });
  } finally {
    isLoading.value = false;
  }
};

const copyToClipboard = () => {
  navigator.clipboard.writeText(shortUrl.value).then(() => {
    toast.add({ severity: 'success', summary: '消息', detail: '复制到粘贴板成功', life: 3000 });
  }).catch(err => {
    toast.add({ severity: 'error', summary: '消息', detail: '复制到粘贴板失败', life: 3000 });
  });
};
</script>

<style scoped>
.loader {
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-top: 2px solid white;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
