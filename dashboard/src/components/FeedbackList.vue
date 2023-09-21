<template>
    <div class="flex flex-col gap-6 items-start justify-start">
        <div
            v-for="(feedback,index) in feedbacks" :key="index" 
            class="flex flex-col gap-4 bg-gray-50 p-6 rounded w-full"
        >
            <div class="flex flex-row justify-between">
                <AppTag :label="feedback.type"/>
                <span class="text-sm text-gray-500">{{ feedback.createdAt }}</span>
            </div>
            <p class="font-medium mb-4">{{ feedback.text }}</p>
            <div 
                v-if="expand[index]" 
                class="animate__animated"
                :class="{ 
                    'animate__fadeIn': expand,
                    'animate__fadeOutUp': !expand
                }"
            >
                <div class="flex flex-row mb-4">
                    <div class="flex flex-col w-full">
                        <p class="text-xs text-gray-500 mb-1">PAGE</p>
                        <span class="font-medium text-xs">{{ feedback.page }}</span>
                    </div>
                    <div class="flex flex-col w-full">
                        <p class="text-xs text-gray-500 mb-1">USER</p>
                        <span class="font-medium text-xs">{{ feedback.id }}</span>
                    </div>
                </div>
                <div class="flex flex-row">
                    <div class="flex flex-col w-full">
                        <p class="text-xs text-gray-500 mb-1">DEVICE</p>
                        <span class="font-medium text-xs">{{ feedback.device }}</span>
                    </div>
                </div>
            </div>
            <ph-caret-down
                class="self-end cursor-pointer"
                :class="{ 'rotate-180': expand[index] }"
                :size="24"
                @click="expandContent(index)"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, watch } from 'vue'
    import { PhCaretDown } from '@phosphor-icons/vue'
    import AppTag from '@/components/AppTag.vue'

    const props = defineProps<{
        feedbacks: {
            apiKey: string
            createdAt: number
            device: string
            fingerprint: string
            id: number
            page: string
            text: string
            type: string
        }[],
        filterName: string
    }>()

    let expand = ref(Array(props.feedbacks.length).fill(false))
    let feedbacks = ref(props.feedbacks)
    console.log('valor de feedbacks: ', feedbacks.value)

    function expandContent(index:number) {
        expand.value[index] = !expand.value[index]
    }

    watch(() => props.filterName, () => {
        console.log('retorno função: ',
            feedbacks.value.filter(feedback => {
                feedback.type.toLowerCase() === props.filterName
            })    
        )
        feedbacks.value.filter(feedback => {
            feedback.type.toLowerCase() === props.filterName
        })
    })
</script>