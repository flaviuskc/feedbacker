<template>
    <AppInnerHeaderVue 
        :title="'Feedbacks'"
        :subtitle="'Details of all feedbacks received'"
    />
    <div class="flex justify-center py-6">
        <div class="flex flex-col justify-between gap-8 w-4/5 md:flex-row md:gap-16">
            <div v-if="feedbackStore.loadingFilters">
                Waiting...
            </div>
            <AppLateralFilter 
                v-else 
                class="md:w-1/4"
                :filters="feedbackStore.filters"
                :feedbacks="feedbackStore.feedbacks"
                @filter-feedback-list="filterList($event)"
            />
            <div v-if="feedbackStore.loadingFeedbacks">
                Waiting feedbacks...
            </div>
            <FeedbackList 
                v-else
                class="md:w-3/4"
                :feedbacks="feedbackStore.feedbacks"
                :filter-name="filterName"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import AppInnerHeaderVue from '@/components/AppInnerHeader.vue'
    import AppLateralFilter from '@/components/AppLateralFilter.vue'
    import FeedbackList from '@/components/FeedbackList.vue'
    import { useFeedbackStore } from '@/stores/FeedbackStore'

    const feedbackStore = useFeedbackStore()
    feedbackStore.getFilters()
    feedbackStore.getFeedbacks()

    let filterName = ref('all')

    const filterList = (filter:string) => {
        console.log('chegou na função: ', filter)
        filterName.value = filter
    }

</script>