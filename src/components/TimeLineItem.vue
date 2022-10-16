<!-- @TimeLineItem -->
<script lang="ts" setup>
import { TimeLinePostType } from '@/dummy_data/post';

defineProps<{
  post: TimeLinePostType;
}>();

const itemsStyle = `panel-block is-flex
   is-flex-direction-column
    is-align-items-flex-start`;
</script>

<template>
  <a :class="itemsStyle">
    <a>{{ post.title }}</a>
    <a>{{ post.created.toFormat('d MMM') }}</a>
  </a>
</template>
