<template>
    <div class="flex flex-col gap-6 items-start justify-start">
        <div class="flex flex-col gap-4 bg-gray-50 p-6 rounded w-full">
            <div class="flex flex-row justify-between">
                <span>tag</span>
                <span>tempo</span>
            </div>
            <p>description</p>
            <ph-caret-down
                class="self-end cursor-pointer"
                :size="24"
            />
        </div>
        <div class="flex flex-col gap-4 bg-gray-50 p-6 rounded w-full">
            <div class="flex flex-row justify-between">
                <span>tag</span>
                <span>tempo</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { PhCaretDown } from '@phosphor-icons/vue'
</script>