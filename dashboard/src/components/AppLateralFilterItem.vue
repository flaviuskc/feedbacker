<template>
    <div 
        class="flex flex-row justify-between items-center rounded py-1 px-2 cursor-pointer hover:bg-gray-100"
        :class="{ 'bg-gray-100 font-medium': isActive === label }"
    >
        <div class="flex flex-row gap-2 items-center">
            <div
                class="rounded-full h-1 w-1"
                :class="{
                    'bg-blue-600': label === 'all',
                    'bg-red-600': label === 'issue',
                    'bg-yellow-400': label === 'idea',
                    'bg-gray-500': label === 'other'
                }"
            ></div>
            <span>{{ labelFormat }}</span>
        </div>
        <span>{{ amount }}</span>
    </div>
</template>
<script setup lang="ts">
    import { computed } from 'vue'

    const props = defineProps<{
        label: string
        amount?: number
        isActive: string
    }>()

    const labelFormat = computed(()=> {
        return props.label.charAt(0).toUpperCase() + props.label.slice(1)
    })

</script>