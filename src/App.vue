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
    </div>
  </div>
</template>
