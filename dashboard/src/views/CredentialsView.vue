<template>
    <AppInnerHeaderVue 
        :title="'Credentials'"
        :subtitle="'Easy guide to install and generate your credentials'"
    />
    <div class="flex justify-center py-6">
        <div class="flex flex-col justify-between gap-8 w-4/5">
            <h2 class="text-4xl font-black">Installation and configuration</h2>
            <div>
                <p class="text-lg mb-2">Here it is your API key</p>
                <div class="flex flex-row justify-between bg-gray-50 font-bold pl-7 pr-4 py-2 rounded w-1/2">
                    <span>{{ authStore.userAuth.apiKey }}</span>
                    <div class="flex flex-row gap-2">
                        <PhCopy :size="24" :color="'#A9A9A9'" class="cursor-pointer" />
                        <PhArrowsClockwise :size="24" :color="'#A9A9A9'" class="cursor-pointer"/>
                    </div>
                </div>
            </div>
            <div>
                <p class="text-lg mb-2">Insert the script below on your website to start receiving feedbacks</p>
                <div class="bg-gray-50 font-bold pl-7 pr-4 py-2 rounded w-1/2">API KEY</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import AppInnerHeaderVue from '@/components/AppInnerHeader.vue'
    import { useAuthStore } from '@/stores/AuthStore'
    import { PhCopy, PhArrowsClockwise } from '@phosphor-icons/vue'

    const authStore = useAuthStore()
</script>