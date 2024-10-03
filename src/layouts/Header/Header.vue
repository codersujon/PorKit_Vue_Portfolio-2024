<script setup>
   import PrimaryBtn from '@/components/PrimaryBtn.vue';
   import DownloadLink from '@/components/DownloadLink.vue';
   import SocialLink from '@/components/SocialLink.vue';

   const greeting = "hello";
   const firstName = "MD SUJAN";
   const lastName = "AHMED";
   const profession = "Software Developer";
   const fm = "Follow Me";
</script>

<template>
    <header class="has-style-01">

    <!-- start shape -->
    <div class="shape">
      <img class="shape-01" src="@/assets/images/shape/shape-04.png" alt="shape">
      <img class="shape-02" src="@/assets/images/shape/shape-01.png" alt="shape">
      <img class="shape-10" src="@/assets/images/shape/shape-02.png" alt="shape">
      <img class="shape-07" src="@/assets/images/shape/shape-05.png" alt="shape">
      <img class="shape-03" src="@/assets/images/shape/shape-03.png" alt="shape">
    </div>
    <!-- end shape -->

    <!-- start container -->
    <div class="container">
      <!-- start row -->
      <div class="row align-items-center justify-content-between">

        <!-- start hero-content -->
        <div class="col-lg-6 col-md-6 col-12">
          <div class="hero-content">

            <!-- start info -->
            <h3 class="title-welcome">{{ greeting }}</h3>
            <h1 class="display-1">I'M {{ firstName }} <br> {{ lastName }} </h1>
            <h3>Professional {{ profession }}</h3>
            <!-- end info -->

            <!-- start link -->
            <ul class="link d-flex">
              <PrimaryBtn label="hire me" link="#"/> 
              <DownloadLink label="download cv" link="#"/>
            </ul>
            <!-- end link -->

          </div>
        </div>
        <!-- start hero-content -->

        <!-- start hero-thumb -->
        <div class="col-lg-5 col-md-6 col-12">
          <div class="hero-thumb">

            <!-- .skills -->
            <img class="skills" src="@/assets/images/header/skills.png" alt="skills">

            <!-- .experience -->
            <img class="experience" src="@/assets/images/header/experience.png" alt="experience">

            <!-- .play -->
            <a class="play pulse" data-fancybox href="https://www.youtube.com/embed/LkGmH0RLaos"><i class="fa-solid fa-play"></i></a>

            <!-- .thumb -->
            <img class="thumb text-right" src="@/assets/images/header/image-slider-empty.png" alt="thumb">

          </div>
        </div>
        <!-- end hero-thumb -->

      </div>
      <!-- end row -->
    </div>
    <!-- end container -->

    <!-- start social -->
    <ul class="social">
      <SocialLink link="comment.html" type="regular" icon="comment-dots"/>
      <li>{{ fm }}</li>
      <li>-</li>
      <SocialLink link="#" type="brands" icon="linkedin-in"/>
      <SocialLink link="#" type="brands" icon="dribbble"/>
      <SocialLink link="#" type="brands" icon="behance"/>
      <SocialLink link="#" type="brands" icon="facebook-f"/>
      <SocialLink link="#" type="brands" icon="instagram"/>
    </ul>
    <!-- end social -->

  </header>
</template>
