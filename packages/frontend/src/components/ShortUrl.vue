<template>
    <div v-if="loading">
        <p>加载中，请稍候...</p>
    </div>
    <div v-else>
        <p>正在重定向到短网址...</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { toLink } from '@/api/link';

const loading = ref(true);
const router = useRouter();

// 获得路由信息拿到短网址的标识
const { params } = router.currentRoute.value;
const short = params.short;

onMounted(async() => {

    const res =await toLink(short)
    if (res.status == 200) {
        setTimeout(() => {
            loading.value = false;
            window.location.href = res.originalUrl;
        }, 2000);
    }

})


//   onMounted(() => {
//     // 模拟加载过程
//     setTimeout(() => {
//       loading.value = false;
//       // 进行 301 重定向
//       window.location.href = shortUrl; // 使用 window.location.href 进行重定向
//     }, 3000);
//   });
</script>

<style scoped>
/* 添加你需要的样式 */
</style>
