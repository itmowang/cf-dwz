<script setup>
    import ShortUrl from './components/ShortUrl.vue'
</script>

<template>
     <!-- <ShortFree v-if="!$route.meta.isShort" /> -->
     <!-- 判断是否为短网址访问进来 -->
     <router-view v-if="!$route.meta.isShort" />
     <ShortUrl v-else />
</template>

<style scoped></style>
