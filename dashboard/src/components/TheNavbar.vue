<template>
  <div class="bg-pink-550 flex justify-center">
    <div class="flex flex-row justify-between items-center py-10 w-4/5">
      <img src="../assets/images/logo.png" alt="feedbacker logo image" width="150">
      <ph-list :size="36" :color="'#FFFFFF'" class="md:hidden" @click="openMobileMenu" />
      <div v-if="showMenu" id="mobileMenu" class="bg-white p-4 rounded-md absolute right-11 top-20 animate__animated animate__fadeIn">
        <div class="flex flex-col gap-4">
          <span 
            class="text-pink-550 font-bold cursor-pointer"
            @click="openCreateAccountModal"
          >
            Create an account
          </span>
          <hr>
          <span 
            class="text-pink-550 font-bold cursor-pointer"
            @click="openSignInModal"
          >
            Sign in
          </span>
        </div>
      </div>
      <div class="flex flex-row gap-4 items-center max-md:hidden">
          <span 
            class="text-white font-bold cursor-pointer"
            @click="openCreateAccountModal"
          >
            Create an account
          </span>
        <button 
          class="rounded-full bg-white text-pink-550 font-bold py-2 px-6"
          @click="openSignInModal"
        >
          {{ labelButton }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useAppModalStore } from '@/stores/AppModalStore'
  import { useUserStore } from '@/stores/UserStore'
  import { markRaw, ref } from 'vue'
  import ModalContentSignIn from './ModalContentSignIn.vue'
  import ModalContentCreateAccount from './ModalContentCreateAccount.vue'
  import { PhList } from '@phosphor-icons/vue'
    
  const appModalStore = useAppModalStore()
  const userStore = useUserStore()

  // const props = defineProps<{
  //   userLogged: boolean
  // }>()

  const showMenu = ref(false)
  // const changeLabel = ref(props.userLogged)

  const labelButton = computed(() => {
    return userStore.userLogin.token ? userStore.userLogin.email + ' (sign out)' : 'Sign in'
  })

  const openMobileMenu = ():void => {
    if(showMenu.value === true){
      document.getElementById('mobileMenu')?.classList.add('animate__fadeOut')
      setTimeout(() => {
        showMenu.value = false
      }, 700)
    } else {
      showMenu.value = true
    }
  }

  const openCreateAccountModal = ():void =>{
    if(showMenu.value === true){
      showMenu.value = false
    }
    appModalStore.open(
      { title: 'Create an account', isVisible: true },
      markRaw(ModalContentCreateAccount)
    )
  }

  const openSignInModal = (): void => {
    if(showMenu.value === true){
      showMenu.value = false
    }
    appModalStore.open(
      { title: 'Sign in', isVisible: true },
      markRaw(ModalContentSignIn)
      )
  }
</script>