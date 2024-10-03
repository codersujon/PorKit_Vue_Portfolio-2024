<script setup>
  defineProps({
      imgSrc: String,
      label: String,
      link: String
  });
</script>

<template>
  <router-link class="navbar-brand" :to="link">
    <img :src="imgSrc" :alt="label">
  </router-link>
</template>
