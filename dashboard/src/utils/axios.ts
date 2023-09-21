import axios from 'axios'
import { useAuthStore } from '../stores/AuthStore'
import router from '../router'

const httpClient = axios.create({
    baseURL: 'http://localhost:3000/'
})

httpClient.interceptors.request.use(request => {
    const authStore = useAuthStore()
    const token = authStore.userAuth.token
    if(token){
        request.headers.Authorization = `Bearer ${token}`
    }
    return request
})

httpClient.interceptors.response.use(
    response => response,
    error => {
        if(error.response.status === 401){
            router.push({ name: 'Home' })
        }
        return Promise.reject(error)
    }
)

export default httpClient