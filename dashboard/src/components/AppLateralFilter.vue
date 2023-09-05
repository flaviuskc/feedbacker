<template>
    <div>
        <h3 class="text-lg mb-4">Filters</h3>
        <div class="flex flex-col gap-2 text-sm">
            <div v-for="(filter,index) in filters" :key="index">
                <AppLateralFilterItem :filter="filter"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import AppLateralFilterItem from './AppLateralFilterItem.vue'

    defineProps<{
        filters: any[]
    }>()
</script>