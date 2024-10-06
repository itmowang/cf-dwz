<script setup>
import { reactive } from 'vue';
import { getLinkList } from '@/api/link';
import { onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const state = reactive({
    dwz_List: []
})


onMounted(async () => {
    const res = await getLinkList();
    if (res.status == 200) {
        state.dwz_List = res.data;
    } else {
        toast.add({ severity: 'error', summary: "Error", detail: "查询网址异常", life: 3000 });
    }
})

const toLink = (url) => {
    window.open(url);
}

const toNewLink = (url) => {
    window.open(window.location.origin + '/' + url);
}

</script>

<template>
    <Card>
        <template #title>管理我的短网址</template>
        <template #content>

        </template>
    </Card>

    <div class="card mt-8">
        <DeferredContent @load="onDataLoad" role="region" aria-live="polite"
            aria-label="Content loaded after page scrolled down">
            <DataTable :value="state.dwz_List">
                <Column header="url">
                    <template #body="slotProps">
                        <Button :label="slotProps.data.shortUrl" link
                            @click="toNewLink(`${slotProps.data.shortUrl}`)" />
                    </template>
                </Column>
                <Column header="目标网址">
                    <template #body="slotProps">
                        <Button :label="slotProps.data.originalUrl" link @click="toLink(slotProps.data.originalUrl)" />
                    </template>
                </Column>
                <Column header="当天访问次数">
                    <template #body="slotProps">
                        <Button label="23" link />
                    </template>
                </Column>
                <Column header="本周访问次数">
                    <template #body="slotProps">
                        <Button label="23" link />
                    </template>
                </Column>
            </DataTable>
        </DeferredContent>
    </div>
</template>
