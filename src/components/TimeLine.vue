<!-- @TimeLine -->
<script setup lang="ts">
import TimeLineItem from '@/components/TimeLineItem.vue';
import { periods } from '@/stores/constants';
import { usePostStore } from '@/stores/postStore';

const postStore = usePostStore();

postStore.fetchPosts();
</script>

<template>
  <nav class="is-primary panel">
    <span class="panel-tabs">
      <a
        v-for="period of periods"
        :key="period"
        :class="{ 'is-active': period === postStore.selectedPeriod }"
        @click="postStore.setSelectedPeriod(period)"
      >
        {{ period }}
      </a>
    </span>

    <!-- LIST OF POST -->
    <TimeLineItem
      v-for="post of postStore.filteredPosts"
      :key="post.id"
      :post="post"
    />
  </nav>
</template>

<style scoped></style>
