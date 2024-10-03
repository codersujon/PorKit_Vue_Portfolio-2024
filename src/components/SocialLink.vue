<script setup>
    defineProps({
        link: String,
        icon: String,
        type: String
    });
</script>
<template>
     <li><a :href="link"><i :class="`fa-${type} fa-${icon}`"></i></a></li>
</template>
<!-- comment-dots -->