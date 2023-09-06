import axios from 'axios'
import { useUserStore } from '../stores/UserStore'
import router from '../router'

const httpClient = axios.create({
    baseURL: 'http://localhost:3000/'
})

httpClient.interceptors.request.use(request => {
    const userStore = useUserStore()
    const token = userStore.userLogin.token
    if(token){
        request.headers.common.Authorization = `Bearer ${token}`
    }
    console.log('request', request)
    return request
})

httpClient.interceptors.response.use(
    response => response,
    error => {
        console.log('cai aqui', error)
        if(error.response.status === 401){
            router.push({ name: 'Home' })
        }
        return Promise.reject(error)
    }
)

export default httpClient