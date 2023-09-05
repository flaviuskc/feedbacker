import { defineStore } from 'pinia'
import { type Component, ref } from 'vue'

interface IModal{
    component?: Component
    title?: string
    isVisible: boolean
}

export const useAppModalStore = defineStore('app-modal', () => {
    let modal = ref<IModal>({
        isVisible: false
    })

    function open(props:{title:string, isVisible: boolean}, component:Component) {
        modal.value.component = component
        modal.value.title = props.title
        modal.value.isVisible = props.isVisible
    }

    const close = (): void => {
        document.getElementById('appModal')?.classList.add('animate__fadeOutUp')
        setTimeout(() => {
            modal.value.isVisible = false
        }, 1000)
    }

    return { modal, open, close }

})