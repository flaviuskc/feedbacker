<template>
    <div class="bg-transparent flex flex-row justify-between items-center rounded py-1 px-2 cursor-pointer hover:bg-gray-100">
        <div class="flex flex-row gap-2 items-center">
            <div class="rounded-full bg-blue-600 h-1 w-1"></div>
            <span>{{ filter }}</span>
        </div>
        <span>300</span>
    </div>
</template>
<script setup lang="ts">
    defineProps<{
        filter: object
    }>()
</script>