import '@/scss/app.scss'
import 'animate.css'
import 'vue-toastification/dist/index.css'
import axios from '@/utils/axios'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Toast, { type PluginOptions, POSITION } from 'vue-toastification'
import App from './App.vue'
import router from './router'

const pinia = createPinia()
const app = createApp(App)

const toastOptions: PluginOptions = {
    icon: true,
    hideProgressBar: false,
    position: POSITION.BOTTOM_RIGHT,
    closeOnClick: false,
    timeout: 4000,
    pauseOnHover: false,
    draggable: false
}

app.use(router)
app.use(pinia)
app.use(Toast, toastOptions)
app.mount('#app')
