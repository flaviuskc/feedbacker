<template>
  <div>
    <TheNavbar/>
    <AppModal @changeUser="changeUser($event)"/>
    <RouterView />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
  import { watch, ref } from 'vue'
  import { RouterView, useRoute, useRouter } from 'vue-router'
  // import './utils/axios'
  import TheNavbar from '@/components/TheNavbar.vue'
  import TheFooter from './components/TheFooter.vue'
  import AppModal from './components/AppModal.vue'
  import { useUserStore } from '@/stores/UserStore'

  const route = useRoute()
  const router = useRouter()
  const userStore = useUserStore()
  let updateUserLabelButton = ref(false)

  function changeUser(change: boolean) {
    console.log('chegou aqui', change)
    if(change){
      updateUserLabelButton.value = true
    }
    console.log('atualiza: ', updateUserLabelButton.value)
  }

  watch(() => route.path, () => {
  if(route.meta.hasAuth){
    const token = userStore.userLogin.token
    if(!token){
      router.push({ name: 'Home' })
      return
    }

    const user = userStore.getUserLogged
    // userStore.userLogin.
  }
})
</script>