<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        label: 'Home',
        items: [{ label: '仪表盘', icon: 'pi pi-fw pi-home', to: '/' }]
    },
    {
        label: 'User',
        items: [{ label: '创建新的短网址', icon: 'pi pi-fw pi-id-card', to: '/uikit/create' },
        { label: '短网址管理', icon: 'pi pi-fw pi-id-card', to: '/uikit/url' },
        { label: '短网址访问记录', icon: 'pi pi-fw pi-id-card', to: '/uikit/logs' }
        ]
    }
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
