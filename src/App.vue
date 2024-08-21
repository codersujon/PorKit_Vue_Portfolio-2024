<script setup>
  import { RouterView } from 'vue-router'
  import FooterVue from "@/layouts/Footer/Footer.vue"
  import NavBar from "@/layouts/Navbar/NavBar.vue";
  import PreLoader from "@/components/PreLoader.vue";
  import ScrollUp from "@/components/ScrollUp.vue";


</script>

<template>

  <!-- preloader -->
  <PreLoader />
  <!-- preloader -->

  <!-- start navbar -->
  <NavBar />
  <!-- end navbar -->



  <!-- start change pages-->
    <div id="router-view">
        <router-view v-slot="{ Component, route }">
            <transition name="demo">
                <component :is="Component" :key="route.path"></component>
            </transition>
        </router-view>
    </div>
  <!-- end change pages-->



  <!-- start footer-->
  <FooterVue />
  <!-- end footer-->

  <!-- start scroll up -->
  <ScrollUp />
  <!-- end scroll up -->
</template>


<style lang="css">

  #router-view{
    overflow-x: hidden;
  }
  #router-view .demo-enter-active,
  #router-view .demo-leave-active{
    transition: 50s;
  }

  #router-view .demo-leave-to{
    opacity: 0;
  }

  #router-view .demo-enter-from{
    transform: rotate(45deg);
  }



</style>


