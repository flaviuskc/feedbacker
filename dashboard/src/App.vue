<template>
  <div>
    <TheNavbar :user-name="userName"/>
    <AppModal />
    <RouterView />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
  import { onBeforeMount, watch, ref } from 'vue'
  import { RouterView, useRoute, useRouter } from 'vue-router'
  import TheNavbar from '@/components/TheNavbar.vue'
  import TheFooter from './components/TheFooter.vue'
  import AppModal from './components/AppModal.vue'
  import { useAuthStore } from '@/stores/AuthStore'

  const route = useRoute()
  const router = useRouter()
  const authStore = useAuthStore()
  const userName = ref('')

  onBeforeMount(() => {
    const token = sessionStorage.getItem('token')
    if(token){ 
      authStore.userAuth.token = token
      authStore.getUserAuthenticated()
    }
  })

  watch(() => route.path, () => {
    if(route.meta.hasAuth){
      const token = sessionStorage.getItem('token')
      if(!token){
        router.push({ name: 'Home' })
        return
      }
    }
  }
  )
</script>