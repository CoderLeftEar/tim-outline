<script setup>
import { computed } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import { useRoute } from 'vue-router';

const route = useRoute()

const title = computed(() => {
  return route.query.title
})

const FIELD_NAMES = {
  label: 'title',
  value: 'key'
}
</script>

<template>
  <h1>Github Page</h1>
  <h1>{{ title }}</h1>
  <!-- <HelloWorld :field-names="FIELD_NAMES" /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
