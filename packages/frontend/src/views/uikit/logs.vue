<script setup>
import { reactive } from 'vue';
import { dwzPage } from '@/api/link';
import { onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const state = reactive({
    dwz_logs_List: []
})


onMounted(async () => {
    const res = await dwzPage();
    if (res.status == 200) {
        state.dwz_logs_List = res.data.visits || [];
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

const shortLabel = (value) => {
    return location.origin +'/'+value;
}

</script>

<template>
    <Card>
        <template #title>短网址访问记录</template>
        <template #content>

        </template>
    </Card>

    <div class="card mt-8">
        <DeferredContent @load="onDataLoad" role="region" aria-live="polite"
            aria-label="Content loaded after page scrolled down">
            <DataTable :value="state.dwz_logs_List">
                <Column header="访问国家">
                    <template #body="slotProps">
                        <Button :label="slotProps.data.country" link />
                    </template>
                </Column>
                <Column header="url">
                    <template #body="slotProps">
                        <Button :label=" shortLabel(slotProps.data.link.shortUrl)" link
                            @click="toNewLink(`${slotProps.data.link.shortUrl}`)" />
                    </template>
                </Column>
                <Column header="目标网址">
                    <template #body="slotProps">
                        <Button :label="slotProps.data.link.originalUrl" link @click="toLink(slotProps.data.link.originalUrl)" />
                    </template>
                </Column>
                <Column header="访问设备">
                    <template #body="slotProps">
                        <Button label="PC" link />
                    </template>
                </Column>
                <Column header="访问来源">
                    <template #body="slotProps">
                        <Button label="未知" link />
                    </template>
                </Column>
            </DataTable>
        </DeferredContent>
    </div>
</template>
