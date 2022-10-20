<!-- @Navbar -->
<script lang="ts" setup>
import { useModal } from '@/composables/modal';
import { onMounted, ref } from 'vue';

const modal = useModal();
const isMounted = ref<boolean>(false);

// lifecycle hooks
onMounted(() => {
  isMounted.value = true;
});
</script>

<template>
  <div class="navbar">
    <div class="navbar-end">
      <!-- button -->
      <div class="buttons">
        <!-- button -->
        <button class="button" @click="modal.showModal()">
          Sign Up
        </button>
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

  <!-- vues-teleport-component -->
  <div id="modal" />
  <Teleport to="#modal" v-if="isMounted">
    <p>Test content to be rendered</p>
  </Teleport>
</template>
