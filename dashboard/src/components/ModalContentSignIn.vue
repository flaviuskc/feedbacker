<template>
    <form @submit.prevent="handleSubmit">
        <div class="flex flex-col gap-4">
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
                    Password field is required
                </caption>
            </div>
        </div>
        <button 
            class="rounded-full bg-pink-550 text-white font-bold py-2 px-6 text-lg mt-9"
            :class="{ 'opacity-50 cursor-not-allowed flex flex-row gap-2 items-center': loading || isAuth }"
            :disabled="loading || isAuth"
            type="submit"
        >
            <ph-arrow-clockwise  
                v-if="loading"
                :size="24"
                :color="'#FFFFFF'"
                class="animate-spin"
            />
            <PhCheckCircle
                v-if="isAuth"
                :size="24"
                :color="'#FFFFFF'"
            />
            Sign in
        </button>    
    </form>
</template>

<script setup lang="ts">
    import { ref } from 'vue'    
    import { useRouter } from 'vue-router'
    import { useAuthStore } from '@/stores/AuthStore'
    import { useUserStore } from '@/stores/UserStore'
    import { PhArrowClockwise, PhCheckCircle } from '@phosphor-icons/vue'
    import { useAppModalStore } from '@/stores/AppModalStore'
    import { useToast } from 'vue-toastification'
    
    const authStore = useAuthStore()
    const userStore = useUserStore()
    const appModalStore = useAppModalStore()
    const toast = useToast()
    const router = useRouter()
    const email = ref('')
    const errorEmail = ref(false)
    const password = ref('')
    const errorPassword = ref(false)
    const loading = ref(false)
    const isAuth = ref(false)

    
    async function handleSubmit() {
        loading.value = true
        email.value === '' ? errorEmail.value = true : errorEmail.value = false
        password.value === '' ? errorPassword.value = true : errorPassword.value = false

        if(!email.value || !password.value){
            loading.value = false
            return
        }

        try {
            await authStore.login(email.value, password.value)
            authStore.getUserAuthenticated()
            loading.value = false
            isAuth.value = true
            setTimeout(() => {
                appModalStore.close()
                authStore.isUserAuthenticated = true
                router.push({ name: 'Feedbacks' })
            }, 500)
        } catch (error:any) {
            loading.value = false
            if(error.response.status === 404){
                toast.error('Email not found')
            }
            if(error.response.status === 400){
                toast.error('It seems that we are having troubles to sign you in. Try again, please.')
            }
            if(error.response.status === 401){
                toast.error('Email or password incorrect')
            }
        }

    }
</script>