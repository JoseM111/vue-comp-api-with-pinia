<!-- @TimeLine -->
<script setup lang="ts">
import { ref } from 'vue';

// as const: makes the array read only
const periods: readonly [string, string, string] = [
    'Today',
    'This Week',
    'This Month',
] as const;

type PeriodType = typeof periods[number];

const selectedPeriod = ref<PeriodType>('Today');

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
    </nav>
</template>

<style scoped></style>
