<template>
    <div>
        <h3 class="text-lg mb-4">Filters</h3>
        <div class="flex flex-col gap-2 text-sm">
            <div v-for="(filter, index) in props.filters" :key="index">
                <AppLateralFilterItem
                    :label="filter.label"
                    :amount="filterAmount(filter.label)"
                    :is-active="isActive"
                    @click="activeFilter(filter.label)"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { onMounted, ref } from 'vue'
    import AppLateralFilterItem from './AppLateralFilterItem.vue'

    const props = defineProps<{
        filters: {
            label: string
        }[],
        feedbacks: {
            apiKey: string
            createdAt: number
            device: string
            fingerprint: string
            id: number
            page: string
            text: string
            type: string
        }[]
    }>()

    const emit = defineEmits<{
        (e: 'filterFeedbackList', filter:string):void
    }>()

    const filterAmount = (filter:string) => {
        switch (filter) {
            case 'idea':
                return props.feedbacks.filter(feedback => feedback.type.toLowerCase() === 'idea').length
            case 'issue':
                return props.feedbacks.filter(feedback => feedback.type.toLowerCase() === 'issue').length
            case 'other':
                return props.feedbacks.filter(feedback => feedback.type.toLowerCase() === 'other').length
            default:
                return props.feedbacks.length
        }
    }

    let isActive = ref('all')

    function activeFilter(label:string) {
        isActive.value = label
        emit('filterFeedbackList', label)
    }

</script>