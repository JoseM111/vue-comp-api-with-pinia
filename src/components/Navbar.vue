<!-- @Navbar -->
<script lang="ts" setup>
</script>

<template>
  <div class="navbar">
    <div class="navbar-end">
      <!-- button -->
      <div class="buttons">
        <!--
        RouterLink: prevents a full page refresh unlike the anchor
        tag <a>. It will only do a frontend refresh & dynamically
        update the page
        -->
        <RouterLink to="/posts/new" class="button">
          New Post
        </RouterLink>
      </div>
    </div>
  </div>
</template>
