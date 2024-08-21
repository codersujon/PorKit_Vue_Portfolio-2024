<script setup>
  import FooterLink from "@/layouts/Footer/FooterLink.vue";
  import FooterDesignedBy from "@/layouts/Footer/FooterDesignedBy.vue";
  import FooterCopyright from "@/layouts/Footer/FooterCopyright.vue";
</script>

<template>
  <!-- start footer -->
  <footer class="has-style-01">
    <div class="shape">
      <img class="shape-03" src="@/assets/images/shape/shape-03.png" alt="shape">
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-7 col-12">

          <!-- Footer Menu Looping -->
          <FooterLink />

        </div>
        <div class="col-lg-4 col-md-5 col-12">

          <!-- Footer Designed By -->
          <FooterDesignedBy />

        </div>
      </div>
      <hr>
      <!-- Footer Copyright -->
      <FooterCopyright />

    </div>
  </footer>
  <!-- end footer -->

</template>

