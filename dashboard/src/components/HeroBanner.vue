<template>
    <div class="bg-pink-550 flex justify-center pb-6 md:pb-0">
      <div class="flex flex-row items-center justify-center w-full md:w-4/5 md:justify-between">
        <div class="flex flex-col gap-8 items-start text-white w-3/4 md:w-2/4 pb-6">
            <div class="flex flex-col gap-2">
                <h1 class="text-3xl md:text-4xl lg:text-5xl">Have a feedback.<br/>
                    And make your clients happier!
                </h1>
                <p class="text-lg md:text-xl lg:text-2xl">With a simple widget on page, receive ideas, complaints and feedbacks</p>
            </div>
            <button 
              class="rounded-full bg-white text-pink-550 font-bold py-2 px-6 text-md lg:text-lg"
              @click="openCreateAccountModal"
            >
              Create a free account
            </button>
        </div>
        <img src="../assets/images/balloons.png" alt="balloons image on right side of texts" class="w-2/4 max-md:hidden">
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
    import { defineAsyncComponent, markRaw } from 'vue'
    import { useAppModalStore } from '@/stores/AppModalStore'

    const appModalStore = useAppModalStore()

    const openCreateAccountModal = ():void =>{
      appModalStore.open(
        { title: 'Create an account', isVisible: true },
        markRaw(defineAsyncComponent(() => import('./ModalContentCreateAccount.vue')))
      )
  }
  </script>@/stores/AppModalStore