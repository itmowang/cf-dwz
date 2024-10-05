<script setup>
import { ref } from 'vue';


const products = ref([]);

</script>

<template>
    <Card >
        <template #title>管理我的短网址</template>
        <template #content>

        </template>
    </Card>

    <div class="card mt-8">
        <DeferredContent @load="onDataLoad" role="region" aria-live="polite" aria-label="Content loaded after page scrolled down">
            <DataTable :value="products">
                <Column field="url" header="url"></Column>
                <Column field="name" header="备注"></Column>
                <Column field="category" header="当天访问次数"></Column>
                <Column field="quantity" header="本周访问次数"></Column>
            </DataTable>
        </DeferredContent>
    </div>
</template>
