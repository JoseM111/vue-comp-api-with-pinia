<!-- @PostWriter -->
<script lang="ts" setup>
import { TimeLinePostType } from '@/dummy_data/posts';
import { marked } from 'marked';
import { onMounted, ref /*watch*/, watchEffect } from 'vue';
import highlightjs from 'highlight.js';

const props = defineProps<{
  post: TimeLinePostType;
}>();

const { post } = props;
const title = ref<string>(post.title);

const contentMarkdown = ref<string>(post.markdown);
// will be call to access the dom node: div
const contentEditable = ref<HTMLDivElement>();
// property used to interpolate our markup
const htmlInterpolation = ref<string>();

watchEffect(() => {
  // using mark: a html parser package
  // marked.parse cannot be computed because it is asynchronous
  marked.parse(
    contentMarkdown.value,
    {
      gfm: true,
      breaks: true,
      // will be called when syntax highlighting in markdown
      highlight: (code) => {
        return highlightjs.highlightAuto(code).value;
      },
    },
    (err, parsedResult) => {
      htmlInterpolation.value = parsedResult;
    },
  );
});

/*
* watch will be called the very first time the component mounts
* & the callback will also be called everytime contentMarkdown changes
* --------------------------------------------------------------------
watch(
 contentMarkdown,
 (newContentMarkdown) => {
 // using mark: a html parser package
 // marked.parse cannot be computed because it is asynchronous
 marked.parse(newContentMarkdown, (err, parsedResult) => {
 htmlInterpolation.value = parsedResult;
 });
 },
 { immediate: true },
 );
* */

// lifecycle-hooks: must use before other functions
onMounted(() => {
  // Helps with bugs when typing in text in the contentEditable
  if (!contentEditable.value) {
    throw Error('ContentEditable DOM node is not defined...');
  }

  contentEditable.value.innerText = contentMarkdown.value;
});
//onMounted(() => {
//  console.log(
//    'on_mount_contentEditable:\n',
//    contentEditable.value?.innerText,
//  );
//});

// functions
function handleInput() {
  if (!contentEditable.value) {
    throw Error('ContentEditable DOM node is not defined...');
  }

  contentMarkdown.value = contentEditable.value.innerText;
}
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

  <div class="columns">
    <div class="column">
      <!--
        The contenteditable global attribute  is an enumerated attribute
        indicating if the element should be editable by the user. If so,
        the browser modifies its widget to allow editing. The attribute
        must take one of the following values:
        true or an empty string, which indicates that the element is editable.
        false, which indicates that the element is not editable.
        If the attribute is given without a value, like
        <label contenteditable>Example Label</label>, its value is treated
        as an empty string.
        (adds a reactive reference to the dom-node)
       -->
      <div
        contenteditable
        ref="contentEditable"
        @input="handleInput"
      />
    </div>

    <div class="column">
      <div v-html="htmlInterpolation" />
    </div>
  </div>
</template>

<style lang="scss"></style>
