<!-- @TimeLine -->
<script lang="ts" setup>
//import { PropType } from "vue"

// const props = withDefaults(defineProps<Props>(), {  })

// since Vue 3.2.20 and its propsDestructureTransform option, we
// can destructure and give a default value to a prop directly:
// const { ponyModel, isRunning = false } = defineProps<Props>()

//interface Props {
//	ITimeLineProps: any
//}
//
//const props = defineProps({
//	TimeLineProp: {
//		type: Object as PropType<Props>,
//		required: true
//	},
//})

// setup


</script>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

<template>
  <div class="TimeLineContainer">
    <h1>
      <span>------------------------------</span>
      @TimeLineComponent
      <span>------------------------------</span>
    </h1>
  </div>
</template>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

<style lang="scss">
.TimeLineContainer {
	background-color: #2f323a;
	margin-top: 5rem;
	padding: 0;
	width: 100%;
	border-radius: 15px;
	// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
	h1 {
		padding: 55px;
		font-family: Liberation Mono for Powerline, sans-serif;
		color: mediumpurple;
		font-size: 2.2rem;
		display: grid;
		place-items: center;
	}
}
</style>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
