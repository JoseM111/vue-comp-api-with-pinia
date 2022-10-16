<!-- @TimeLine -->
<script setup lang="ts">
import TimeLineItem from '@/components/TimeLineItem.vue';
import {
  thisMonth,
  thisWeek,
  TimeLinePostType,
  today,
} from '@/dummy_data/post';
import { usePostStore } from "@/stores/postStore";
import { DateTime } from 'luxon';
import { computed, ref } from 'vue';

const composablePostStore = usePostStore()
// as const: makes the array read only
const periods: readonly [string, string, string] = [
  'Today',
  'This Week',
  'This Month',
] as const;

type PeriodType = typeof periods[number];

const selectedPeriod = ref<PeriodType>('Today');

// everytime our selectedPeriod changes, computed will cause a re-render
const postList = computed<Array<TimeLinePostType>>(() =>
  [today, thisWeek, thisMonth]
    .map((post) => ({
      ...post,
      created: DateTime.fromISO(post.created),
    }))
    .filter((post) => {
      switch (selectedPeriod.value) {
        case 'Today':
          return post.created >= DateTime.now().minus({ day: 1 });
        case 'This Week':
          return post.created >= DateTime.now().minus({ week: 1 });
      }

      return post;
    }),
);

const selectPeriod = (period: PeriodType) => {
  selectedPeriod.value = period;
};
</script>

<template>
  {{ composablePostStore.getState().foo }}
  <button @click="composablePostStore.updateFoo('bar')">Button</button>
  
  <nav class="is-primary panel">
    <span class="panel-tabs">
      <a
        v-for="period of periods"
        :key="period"
        :class="{ 'is-active': period === selectedPeriod }"
        @click="selectPeriod(period)"
      >
        {{ period }}
      </a>
    </span>

    <!-- LIST OF POST -->
    <TimeLineItem
      v-for="post of postList"
      :key="post.id"
      :post="post"
    />
  </nav>
</template>

<style scoped></style>
