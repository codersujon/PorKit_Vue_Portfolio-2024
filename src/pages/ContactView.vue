<script setup>
  import ContactMe from "@/components/ContactMe.vue";
</script>

<template>
    <!-- start header -->
    <header class="has-style-02">
      <div class="container">

        <div class="shape">
          <img class="shape-10" src="../assets/images/shape/shape-circle1.png" alt="shape">
          <img class="shape-03" src="../assets/images/shape/shape-03.png" alt="shape">
        </div>

        <div class="row">
          <div class="col-12">
            <div class="breadcrumb">
              <h2>Contact Me</h2>
              <ul class="d-flex">
                <li><a href="#">home</a></li>
                <li>/</li>
                <li>Contact Me</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </header>
    <!-- end header -->

    <!-- start contact me-->
    <ContactMe />
    <!-- end contact me-->
</template>

<style scoped>

</style>