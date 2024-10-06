<script setup>
import { ref, reactive } from 'vue';
import { createLink } from '@/api/link';
import { useToast } from 'primevue/usetoast';

const state = reactive({
    url: '',
    shortUrl: ''
})

const toast = useToast();

const sc = async () => {
    if (!state.url) {
        toast.add({ severity: 'error', summary: "Error", detail: "请输入网址", life: 3000 });
    } else {
        // 给state.url进行一个http的普通校验,要求是否为url 只需要知道有http就行 或者https
        if (!state.url.match(/^(https?:\/\/)?([\w.-]+)(:\d+)?(\/[^\s]*)?$/i)) {
            toast.add({ severity: 'error', summary: 'Error', detail: "请输入正确的网址", life: 3000 });
        } else {
            const res = await createLink({
                originalUrl: state.url
            })

            if (res.status === 200) {
                state.shortUrl = window.location.origin +'/'+ res?.data?.shortUrl
                toast.add({ severity: 'success', summary: 'Success', detail: res?.message, life: 3000 });
            } else {
                toast.add({ severity: 'error', summary: 'Error', detail: res?.message, life: 3000 });
            }
        }

    }

}

</script>

<template>
    <Card>
        <template #title>
            创建短网址
        </template>
    </Card>
<div>
    <div class="card mt-8">
        <div class="card-body">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group mb-4">
                        <label for="">请输入网址</label>
                    </div>
                    <div class="form-group mb-4">

                        <InputText type="text" placeholder="请输入网址" class="w-full" v-model="state.url" />
                    </div>
                    <!-- 生成按钮 -->
                    <Button class="w-full" label="生成" @click="sc" />

                </div>
            </div>
        </div>
    </div>

    <!-- // 显示生成的短网址 -->
    <div class="card mt-8">
        <div class="card-body">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group mb-4">
                        <label for="">生成的短网址</label>
                    </div>
                    <div class="form-group mb-4 text-center">
                        <Button :label="state.shortUrl" link @click="toLink(state.shortUrl)" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
