<script setup lang="ts">
import TimeLine from '@/components/TimeLine.vue';
</script>

<template>
  <!-- SECTION -->
  <div class="section"></div>

  <!-- CONTAINER -->
  <div class="container">
    <Suspense>
      <!-- default -->
      <template #default>
        <!-- timeline-component	-->
        <TimeLine />
      </template>

      <!-- fallback -->
      <template #fallback>
        <div>
          <span class="suspense">Loading...</span>
          <progress class="progress is-primary is-small" max="100" />
        </div>
      </template>
    </Suspense>
  </div>
</template>

<style lang="scss">
span.suspense {
  font-size: 3.5rem;
  color: dodgerblue;
  display: block;
  text-align: center;
  margin-top: 23rem;
}
</style>
