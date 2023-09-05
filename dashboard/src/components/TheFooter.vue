<template>
    <footer class="flex justify-center bg-gray-100 py-11 absolute bottom-0 right-0 left-0">
        <span class="font-bold text-sm lg:text-lg">Feedbacker &copy; {{ currentYear }}</span>
    </footer>
</template>

<script setup lang="ts">
    const currentYear = new Date().getFullYear()
</script>