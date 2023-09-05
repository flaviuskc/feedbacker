<template>
    <div class="bg-gray-100 flex flex-col items-center gap-2 p-8 md:p-16 lg:p-24">
        <h1 class="font-black text-3xl md:text-4xl lg:text-5xl">{{ title }}</h1>
        <h2 class="text-lg text-center md:text-xl lg:text-2xl">{{ subtitle }}</h2>
    </div>
</template>

<script setup lang="ts">
    defineProps<{
        title: String,
        subtitle?: String
    }>()
</script>