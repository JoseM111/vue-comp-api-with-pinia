<!-- @NewPost -->
<script lang="ts" setup>
import PostWriter from '@/components/PostWriter.vue';
import { TimeLinePostType } from '@/dummy_data/posts';
import { DateTime } from 'luxon';

// creating a new post property
const newPost: TimeLinePostType = {
  id: '-1',
  title: 'Title',
  created: DateTime.now(),
};
</script>

<template>
  <!-- post-writer-component -->
  <PostWriter :post="newPost" />
</template>
