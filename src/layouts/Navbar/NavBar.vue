<script setup>
import NavLogo from "@/layouts/Navbar/NavLogo.vue";
</script>

<template>
  <!-- start navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
    <div class="container">

      <!-- nav logo-->
      <NavLogo label="CoderSujon" imgSrc="../../../src/assets/images/icon/Logo-PortKit.png" link="/"/>

      <button class="navbar-toggler" id="js-nav-trigger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle">
        <span></span>
      </button>
      <!-- .navbar-collapse -->
      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/">home</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
               data-bs-toggle="dropdown" aria-expanded="false">pages</a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="project-details.html">Project Details</a></li>
              <li>
                <router-link class="dropdown-item" to="/add-comment">Add comment</router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item"><a class="nav-link" href="index.html#about-me" data-value="about-me">about me</a></li>
          <li class="nav-item"><a class="nav-link" href="index.html#services" data-value="services">services</a></li>
          <li class="nav-item">
            <router-link class="nav-link" to="/portfolio">portfolio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact-me">contact me</router-link>
          </li>
        </ul>
      </div>
      <!-- .navbar-collapse -->
    </div>
  </nav>
  <!-- end navbar -->
</template>

<style>
  #navbarContent .router-link-exact-active{
      color: var(--secondary) !important;
  }
</style>

