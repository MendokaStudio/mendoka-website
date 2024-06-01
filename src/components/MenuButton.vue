<template>
  <span
    class="absolute inset-0 -z-10 scale-75 rounded-lg bg-white/5 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"
  ></span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
  >
    <path stroke-linecap="round" stroke-linejoin="round" :d="svgPath" />
  </svg>
  <span class="self-baseline text-white">{{ title }}</span>
</template>

<script setup>
defineProps({
  title: {
    type: String,
  },
  svgPath: {
    type: String,
  },
});
</script>
