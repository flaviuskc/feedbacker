<template>
    <form @submit.prevent="handleSubmit">
        <div class="flex flex-col gap-4">
            <div class="flex flex-col">
                <label for="name" class="font-semibold mb-2">Name</label>
                <input
                    type="text"
                    class="border px-4 py-2 rounded-md"
                    :class="{ 'border-red-500' : errorUsername }"
                    name="name"
                    id="name"
                    placeholder="Your name here"
                    v-model="username"
                >
                <caption
                    v-if="errorUsername"
                    class="text-red-500 text-xs mt-1 self-start"
                >
                    Name field is required
                </caption>
            </div>
            <div class="flex flex-col">
                <label for="email" class="font-semibold mb-2">Email</label>
                <input 
                    type="email"
                    class="border px-4 py-2 rounded-md"
                    :class="{ 'border-red-500' : errorEmail }"
                    name="email"
                    id="email"
                    placeholder="Your email here"
                    v-model="email"
                >
                <caption
                    v-if="errorEmail"
                    class="text-red-500 text-xs mt-1 self-start"
                >
                    Email field is required
                </caption>
            </div>
            <div class="flex flex-col">
                <label for="password" class="font-semibold mb-2">Password</label>
                <input 
                    type="password"
                    class="border px-4 py-2 rounded-md"
                    :class="{ 'border-red-500' : errorPassword }"
                    name="password"
                    id="password"
                    placeholder="Your password here"
                    v-model="password"
                >
                <caption
                    v-if="errorPassword"
                    class="text-red-500 text-xs mt-1 self-start"
                >
                    {{ errorPasswordMessage }}
                </caption>
            </div>
        </div>
        <button 
            class="rounded-full bg-pink-550 text-white font-bold py-2 px-6 text-lg mt-9"
            :class="{ 'opacity-50 cursor-not-allowed flex flex-row gap-2 items-center': loading }"
            :disabled="loading"
        >
            <ph-arrow-clockwise  
                v-if="loading"
                :size="24"
                :color="'#FFFFFF'"
                class="animate-spin"
            />
            Create account
        </button>
    </form>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import axios from 'axios'
    import { useRouter } from 'vue-router'
    import { useAppModalStore } from '@/stores/AppModalStore'
    import { useUserStore } from '@/stores/UserStore'
    import { PhArrowClockwise } from '@phosphor-icons/vue'

    const router = useRouter()
    const appModalStore = useAppModalStore()
    const userStore = useUserStore()

    const username = ref('')
    const errorUsername = ref(false)
    const email = ref('')
    const errorEmail = ref(false)
    const password = ref('')
    const errorPassword = ref(false)
    const loading = ref(false)
    let errorPasswordMessage = ''

    const handleSubmit = () => {
        loading.value = true
        !email.value ? errorEmail.value = true : errorEmail.value = false
        !password.value ? errorPassword.value = true : errorPassword.value = false
        !username.value ? errorUsername.value = true : errorUsername.value = false

        if(!email.value || !password.value || !username.value){
            errorPasswordMessage = 'Password field is required'
            loading.value = false
            return
        }

        if(password.value.length < 6){
            errorPassword.value = true
            errorPasswordMessage = 'Your password must have 6 or more digits'
            loading.value = false
            return
        }

        function login(email:string, password:string) {
            axios.post('auth/login', {
                email: email,
                password: password
            })
            .then(response => {
                loading.value = false
                userStore.userLogin.email = email
                userStore.userLogin.password = password
                userStore.userLogin.token = response.data.token
                appModalStore.close()
                setTimeout(() => {
                    router.push({ name: 'Feedbacks' })
                }, 500)
            })
        }

        axios.post('auth/register', {
            name: username.value,
            email: email.value,
            password: password.value
        })
        .then((response) => {
            login(response.data.email, response.data.password)
        })
        .catch(error => {
            console.log('erro na criação: ', error)
        })

    }
</script>