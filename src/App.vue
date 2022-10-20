<script lang="ts" setup>
import Navbar from '@/components/Navbar.vue';
import FormInput from '@/components/Form.vue';
import { useModal } from '@/composables/modal';
import { computed } from 'vue';

const modal = useModal();
const modalStyles = computed(() => {
  return {
    display: modal.show.value ? 'block' : 'none',
  };
});
</script>

<template>
  <!-- MODAL -->
  <div class="modal" style="color: white" :style="modalStyles">
    <div class="modal-background">
      <div class="modal-content">
        <div class="modal"></div>
      </div>
    </div>
    <!-- modal-button -->
    <button
      class="modal-close is-large"
      @click="modal.hideModal()"
    ></button>
  </div>

  <!-- SECTION -->
  <div class="section">
    <!-- CONTAINER -->
    <div class="container">
      <!-- form-input-component -->
      <FormInput />
      
      <!-- navbar-component -->
      <Navbar />

      <!-- router-view -->
      <RouterView />
    </div>
    ´
  </div>
</template>

<style>
@import 'highlight.js/styles/atom-one-dark.css';

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
