<script setup>
    defineProps({
        label: String,
        link: String
    });
</script>
<template>
    <li><a class="btn btn-link" :href="link">{{ label }} <i class="fa-solid fa-download"></i></a></li> 
</template>

