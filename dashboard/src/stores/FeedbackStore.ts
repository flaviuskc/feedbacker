import axios from '@/utils/axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

interface IFeedback{
    apiKey: string
    createdAt: number
    device: string
    fingerprint: string
    id: number
    page: string
    text: string
    type: string
}

interface IFilter{
    label: string
    amount?: number
}

export const useFeedbackStore = defineStore('feedback-store', () => {
    let feedbacks: IFeedback[] = []
    let filters: IFilter[] = []
    let loadingFilters = ref(true)
    let loadingFeedbacks = ref(true)

    const getFilters = async () => {
        try {
            const response = await axios.get('feedbacks/summary')
            for (const key in response.data) {
                if (response.data.hasOwnProperty(key)) {
                    filters.push({
                        label: key.toLowerCase()
                    })
                }
            }
            loadingFilters.value = false
        } catch (error) {
            console.log('erro try catch filters: ', error)
        }
    }

    const getFeedbacks = async () => {
        try {
            const response = await axios.get('feedbacks')
            for (let i = 0; i < response.data.results.length; i++) {
                feedbacks.push(response.data.results[i])
            }
            loadingFeedbacks.value = false
        } catch (error) {
            console.log('erro try catch feedbacks: ', error)
        }
    }

    return { 
        feedbacks,
        loadingFilters,
        loadingFeedbacks,
        filters,
        getFilters,
        getFeedbacks
    }
})