import axios from 'axios'
import { defineStore } from 'pinia'

interface IUser{
    name: string,
    email: string | null,
    password: string | null,
    token: string | null
}

export const useUserStore = defineStore('user-store', () => {
    type UserLogin = Omit<IUser, 'name'>
    const userLogin: UserLogin = {
        email: null,
        password: null,
        token: null
    }

    function getUserLogged() {
        axios.get('users/me')
        .then((response) => {
            console.log('resposta função getUserLogged: ', response)
            return response.data
        })
        .catch(error => {
            console.log(error)
        })
    }

    return { userLogin, getUserLogged }
})