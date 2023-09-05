<template>
    <AppInnerHeaderVue 
        :title="'Feedbacks'"
        :subtitle="'Details of all feedbacks received'"
    />
    <div class="flex justify-center py-6">
        <div class="flex flex-col justify-between gap-8 w-4/5 md:flex-row md:gap-16">
            <AppLateralFilter class="md:w-1/4" :filters="filters"/>
            <FeedbackList class="md:w-3/4" />
        </div>
    </div>
</template>

<script setup lang="ts">
    import AppInnerHeaderVue from '@/components/AppInnerHeader.vue'
    import AppLateralFilter from '@/components/AppLateralFilter.vue'
    import FeedbackList from '@/components/FeedbackList.vue'
    import { onMounted } from 'vue'
    import { useUserStore } from '@/stores/UserStore'
    import { useFeedbackStore } from '@/stores/FeedbackStore'

    const feedbackStore = useFeedbackStore()
    let filters = [{filter:'oi'}, {filter:'tcha'}]

    onMounted(() => {
        feedbackStore.getFilters()
    })
</script>