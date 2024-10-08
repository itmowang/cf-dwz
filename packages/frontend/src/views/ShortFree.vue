<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
    <div class="bg-white shadow-lg rounded-lg p-10 max-w-xl w-full">
      <h1 class="text-3xl font-bold text-center text-gray-800 mb-6">短网址生成器</h1>
      <p class="text-gray-600 text-center mb-8">快速生成短网址，方便分享与管理</p>
      <form @submit.prevent="generateShortUrl" class="space-y-6">
        <div>
          <label for="longUrl" class="block text-gray-700 text-lg">请输入长网址：</label>
          <input type="url" id="longUrl" v-model="longUrl" required
            class="mt-2 block w-full p-4 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            placeholder="https://example.com" />
        </div>
        <button type="submit"
          class="w-full py-3 bg-blue-700 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition duration-200">
          生成短网址
        </button>
      </form>
      <div v-if="shortUrl" class="mt-8 text-center">
        <p class="text-gray-700 text-lg">生成的短网址：</p>
        <a :href="shortUrl" class="text-blue-600 font-semibold text-lg" target="_blank">{{ shortUrl }}</a>
        <button @click="copyToClipboard"
          class="mt-2 py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-400 transition duration-200">
          复制短网址
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { createFreeCreate } from '@/api/link';
import { ref } from 'vue';

const longUrl = ref('');
const shortUrl = ref('');

const generateShortUrl = async (e) => {
  console.log(e);
  
  e.preventDefault();
  try {
    const data = {
      originalUrl: longUrl.value,
    };
    const res = await createFreeCreate(data);
    shortUrl.value = res.data.shortUrl;
  } catch (error) {
    console.error('生成短网址失败：', error);
  }
};

const copyToClipboard = () => {
  navigator.clipboard.writeText(shortUrl.value).then(() => {
    alert('短网址已复制到剪贴板！');
  }).catch(err => {
    console.error('复制失败:', err);
  });
};
</script>

<style scoped>
/* 可根据需要添加自定义样式 */
</style>
