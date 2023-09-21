<template>
    <Teleport to='body'>
        <div
            v-if="modalStore.modal.isVisible"
            class="bg-gray-800/50 h-full w-full fixed top-0 z-50"
        >
            <div id="appModal" class="bg-white w-4/5 p-6 my-0 mx-auto relative top-1/4 rounded-lg animate__animated animate__fadeInDown md:w-2/3 xl:w-1/3 lg:px-12 lg:py-11">
                <div class="flex flex-row justify-between items-center mb-16">
                    <h3 class="font-black text-2xl lg:text-4xl">{{ modalStore.modal.title }}</h3>
                    <ph-x :size="24" @click="modalStore.close" class="cursor-pointer" />
                </div>
                <component :is="modalStore.modal.component"></component>
            </div>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
    import { useAppModalStore } from '@/stores/AppModalStore'
    import { PhX } from '@phosphor-icons/vue'

    const modalStore = useAppModalStore()

</script>