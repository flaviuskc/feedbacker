import axios from '@/utils/axios'
import { defineStore } from 'pinia'
import { useUserStore } from './UserStore'

interface IFeedback{
    description: string
    tag: string
    page?: string
    user?: string
    device?: string
}

interface IFilter{
    label: string
    quantity: number
}

export const useFeedbackStore = defineStore('feedback-store', () => {
    const userStore = useUserStore()
    let feedbacks!: IFeedback[]
    let filters!: IFilter[]

    function getFilters() {
        axios.get(`feedbacks/summary?token=Bearer ${userStore.userLogin.token}`)
        .then(response => {
            console.log('sucesso no get filters: ', response)
            filters = response.data
        })
        .catch(error => {
            console.log('erro no get filters: ', error)
        })
    }

    function getIssuesFeedback() {
        feedbacks.filter(feedback => {
            return feedback.tag === 'issues'
        })
    }

    function getIdeasFeedback() {
        feedbacks.filter(feedback => {
            return feedback.tag === 'ideas'
        })
    }

    function getOthersFeedback() {
        feedbacks.filter(feedback => {
            return feedback.tag === 'others'
        })
    }

    return { feedbacks, filters, getFilters, getIssuesFeedback, getIdeasFeedback, getOthersFeedback }
})