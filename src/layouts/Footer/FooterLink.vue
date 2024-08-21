<script setup>
  // Menu Data
  const menus = [
    {
      path: "/",
      name: "Home"
    },
    {
      path: "/about-us",
      name: "About Us"
    },
    {
      path: "/services",
      name: "Services"
    },
    {
      path: "/portfolio",
      name: "Portfolio"
    },
    {
      path: "/contact-me",
      name: "Contact Me"
    }
  ];
</script>

<template>
    <ul class="link-footer">
      <li v-for="(data, index) in menus" :key="index">
        <router-link :to="data.path">{{ data.name }}</router-link>
      </li>
    </ul>
</template>
