<script setup>
    import Header from "@/layouts/Header/Header.vue";
    import AboutMe from "@/components/AboutMe.vue";
    import Services from "@/components/Services.vue";
    import Portfolio from "@/components/Portfolio.vue";
    import Testimonials from "@/components/Testimonials.vue";
    import Skills from "@/components/Skills.vue"
    import ContactMe from "@/components/ContactMe.vue";

</script>

<template>
  <!-- start header -->
  <Header />
  <!-- end header -->

  <!-- start what-do -->
  <Services />
  <!-- end what-do -->

  <!-- start about-me -->
  <AboutMe />
  <!-- end about-me -->

  <!-- start portfolio -->
  <Portfolio />
  <!-- end portfolio -->

  <!-- start testimonials -->
  <Testimonials />
  <!-- end testimonials -->

  <!-- start skils -->
  <Skills />
  <!-- end testimonials -->

  <!-- start contact me-->
  <ContactMe />
  <!-- end contact me-->
</template>


