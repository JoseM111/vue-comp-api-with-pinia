<script lang="ts" setup>
import Navbar from '@/components/Navbar.vue';
</script>

<template>
  <!-- SECTION -->
  <div class="section">
    <!-- CONTAINER -->
    <div class="container">
      <!-- navbar -->
      <Navbar />

      <!-- router-view -->
      <RouterView />
    </div>´
  </div>
</template>

<style>
@import "highlight.js/styles/atom-one-dark.css";

ul {
  list-style: revert !important;
  margin: 10px 0 !important;
}

pre {
  margin: 10px 0 !important;
}

p {
  margin: 10px 0 !important;
}
</style>
