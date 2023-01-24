<template>

    <nav class="bg-sky-900">
        <ul class="flex list-disc space-x-4 list-inside">
            <li>
                <Link href="/" class="text-white hover:underline" :class="{'font-extrabold underline' : $page.component === 'Home'}">Peter</Link>
            </li>
        </ul>
    </nav>

</template>

<script setup>

</script>

<style scoped>

</style>
