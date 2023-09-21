import axios from '@/utils/axios'
import { defineStore } from 'pinia'

interface IUser{
    name: string | null
    email: string | null
    token: string | null
    apiKey: string | null
}

export const useAuthStore = defineStore('auth-store', () => {
    let userAuth: IUser = {
        name: null,
        email: null,
        token: null,
        apiKey: null
    }
    let isUserAuthenticated!: boolean | null

    async function login(email:string, password:string) {
        try {
            const response = await axios.post('auth/login', {
                email: email,
                password: password
            })
            userAuth.email = email
            userAuth.token = response.data.token
            sessionStorage.setItem('token', response.data.token)
            isUserAuthenticated = true
        } catch (error) {
            throw error
        }
    }

    async function registerUser(name:string, email:string, password:string) {
        try {
            const response = await axios.post('auth/register', {
                name: name,
                email: email,
                password: password
            })
            login(response.data.email, response.data.password)
        } catch (error) {
            console.log('erro na criação: ', error)
        }
    }

    function getUserAuthenticated() {
        axios.get('users/me')
        .then((response) => {
            userAuth.name = response.data.name
            userAuth.email = response.data.email
            userAuth.apiKey = response.data.apiKey
        })
        .catch(error => {
            console.log('error no getUser: ', error)
        })
    }

    return { login, getUserAuthenticated, registerUser, userAuth, isUserAuthenticated }
})