<!-- @PostWriter -->
<script lang="ts" setup>
import { TimeLinePostType } from '@/dummy_data/posts';
import { ref } from 'vue';

const props = defineProps<{
  post: TimeLinePostType;
}>();

const { post } = props;
const title = ref<string>(post.title);
</script>
<template>
  <!-- COLUMNS -->
  <div class="columns">
    <!-- COLUMN -->
    <div class="column">
      <!-- FIELD -->
      <div class="field">
        <!-- LABEL -->
        <div class="label">Post Title</div>
        <!-- INPUT (where we will write the title to our post) -->
        <input type="text" class="input" v-model="title" />
        {{ title }}
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
