<!-- @FormInput -->
<script lang="ts" setup>
import { ref } from 'vue';

const name = ref<string>('');
</script>
<template>
  <div class="field">
    <!-- LABEL-NAME -->
    <label :for="name" class="label">
      {{ name }}
    </label>
    
    <div class="control">
      <input type="text" class="input">
    </div>
  </div>
</template>

<style lang="scss"></style>
