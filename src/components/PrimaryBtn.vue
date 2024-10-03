<script setup>
    defineProps({
        label: String,
        link: String
    });
</script>
<template>
    <li><a class="btn btn-generic" :href="link">{{ label }}</a></li>
</template>

