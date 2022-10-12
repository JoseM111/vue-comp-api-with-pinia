<!-- @TimeLine -->
<script setup lang="ts">
import {
    IPost,
    thisMonth,
    thisWeek,
    today,
} from '@/dummy_data/post';
import { DateTime } from 'luxon';
import { ref } from 'vue';

// as const: makes the array read only
const periods: readonly [string, string, string] = [
    'Today',
    'This Week',
    'This Month',
] as const;

type PeriodType = typeof periods[number];

const selectedPeriod = ref<PeriodType>('Today');

const postList = [today, thisWeek, thisMonth].map(
    (post) => ({
        ...post,
        created: DateTime.fromISO(post.created),
    }),
);

const selectPeriod = (period: PeriodType) => {
    selectedPeriod.value = period;
};
</script>

<template>
    <nav class="is-primary panel">
        <span class="panel-tabs">
            <a
                v-for="period of periods"
                :key="period"
                :class="{
                    'is-active': period === selectedPeriod,
                }"
                @click="selectPeriod(period)"
            >
                {{ period }}
            </a>
        </span>

        <!-- list of post -->
        <a
            v-for="post of postList"
            :key="post.id"
            class="panel-block"
        >
            <a>{{ post.title }}</a>
            <a>{{ post.created.toFormat('d MMM') }}</a>
        </a>
    </nav>
</template>

<style scoped></style>
