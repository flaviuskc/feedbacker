import axios from '@/utils/axios'
import { defineStore } from 'pinia'

interface IUser{
    name: string
    email: string
    token: string
    apiKey: string
}

export const useUserStore = defineStore('user-store', () => {
    let userLogin: IUser = {
        name: '',
        email: '',
        token: '',
        apiKey: ''
    }

    function getUser() {
        axios.get('users/me')
        .then((response) => {
            console.log('resposta função getUser: ', response)
            userLogin.name = response.data.name
            userLogin.email = response.data.email
            userLogin.apiKey = response.data.apiKey
        })
        .catch(error => {
            console.log('error no getUser: ', error)
        })
    }

    return { userLogin, getUser }
})