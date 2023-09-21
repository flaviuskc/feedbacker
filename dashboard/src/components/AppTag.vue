<template>
    <div
        class="rounded-full text-xs text-white px-2 py-1"
        :class="{
            'bg-red-500': label === 'ISSUE',
            'bg-yellow-400 text-black': label === 'IDEA',
            'bg-gray-500': label === 'OTHER'
        }"    
    >
       {{ label }} 
    </div>
</template>

<script setup lang="ts">
    defineProps<{
        label: string
    }>()
</script>