import axios from '@/utils/axios'
import { useRouter } from 'vue-router'
import { defineStore } from 'pinia'
import { useUserStore } from './UserStore'
import { useToast } from 'vue-toastification'


export const useAuthStore = defineStore('auth-store', () => {
    const userStore = useUserStore()
    const router = useRouter()
    const toast = useToast()

    function login(email:string, password:string) {
        axios.post('auth/login', {
            email: email,
            password: password
        })
        .then(response => {
            // loading.value = false
            userStore.userLogin.email = email
            userStore.userLogin.password = password
            userStore.userLogin.token = response.data.token
            // appModalStore.close()
            setTimeout(() => {
                router.push({ name: 'Feedbacks' })
            }, 500)
        })
        .catch(error => {
            console.log('erro: ', error)
            // loading.value = false
            if(error.response.status === 404){
                toast.error('Email not found')
            }
            if(error.response.status === 400){
                toast.error('It seems that we are having troubles to sign you in. Try again, please.')
            }
            if(error.response.status === 401){
                toast.error('Email or password incorrect')
            }
        })
    }

    return { login }
})